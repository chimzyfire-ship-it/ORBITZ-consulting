const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');

function loadTS(path) {
  const code = ts.transpileModule(fs.readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const mod = { exports: {} };
  new Function('require', 'module', 'exports', code)(require, mod, mod.exports);
  return mod.exports;
}
const { handleInquiry } = loadTS('src/lib/inquiry.ts');
const { submitInquiry } = loadTS('src/lib/submit-inquiry.ts');
const config = { apiKey: 'test-key', from: 'ORBITZ <desk@example.com>', to: 'owner@example.com' };
const inquiry = { source: 'inquiry', name: 'Test Client', email: 'client@example.com', organization: 'Test Studio', objective: 'Documentary', timeline: 'Next quarter', budget: 'Confidential', notes: 'Production brief' };
const contact = { source: 'contact', name: 'Test Client', email: 'client@example.com', objective: 'General Concierge', desk: 'Lagos', notes: 'Contact message' };
const request = (body, headers = {}) => new Request('https://orbitz-consulting.vercel.app/api/inquiry', { method: 'POST', headers, body: typeof body === 'string' ? body : JSON.stringify(body) });
const noSend = () => { throw new Error('Provider must not be called'); };

for (const payload of [inquiry, contact]) {
  test(`${payload.source} sends all fields to configured inbox with visitor Reply-To`, async () => {
    let sent;
    const response = await handleInquiry(request({ ...payload, to: 'attacker@example.com' }), config, async (url, options) => {
      assert.equal(url, 'https://api.resend.com/emails');
      assert.equal(options.headers.Authorization, 'Bearer test-key');
      sent = JSON.parse(options.body);
      return Response.json({ id: 'email-123' });
    });
    assert.equal(response.status, 200);
    const result = await response.json();
    assert.equal(result.success, true);
    assert.match(result.ticketId, /^ORB-[A-F0-9-]{36}$/);
    assert.deepEqual(sent.to, ['owner@example.com']);
    assert.equal(sent.reply_to, payload.email);
    for (const value of Object.values(payload).filter(value => value !== payload.source)) assert.ok(sent.text.includes(value));
    assert.ok(sent.subject.includes(result.ticketId));
    assert.equal(result.inquiry, undefined);
  });
}
for (const key of ['apiKey', 'from', 'to']) {
  test(`missing ${key} rejects submission without fake success`, async () => {
    const response = await handleInquiry(request(inquiry), { ...config, [key]: '' }, noSend);
    assert.equal(response.status, 503);
    assert.equal((await response.json()).success, false);
  });
}
for (const [name, body, status] of [
  ['invalid JSON', '{', 400], ['null payload', 'null', 400], ['array payload', [], 400],
  ['missing name', { ...inquiry, name: ' ' }, 400], ['invalid email', { ...inquiry, email: 'invalid' }, 400],
  ['missing organization', { ...inquiry, organization: '' }, 400], ['missing timeline', { ...inquiry, timeline: '' }, 400],
  ['empty contact message', { ...contact, notes: '' }, 400], ['non-string input', { ...inquiry, name: {} }, 400],
  ['oversized notes', { ...inquiry, notes: 'a'.repeat(6001) }, 400], ['oversized request', 'a'.repeat(20001), 413],
  ['header injection', { ...inquiry, objective: 'Hello\r\nBcc: attacker@example.com' }, 400],
]) {
  test(`rejects ${name}`, async () => assert.equal((await handleInquiry(request(body), config, noSend)).status, status));
}
test('rejects cross-origin submissions', async () => {
  assert.equal((await handleInquiry(request(inquiry, { origin: 'https://other.example' }), config, noSend)).status, 403);
});
for (const [name, send] of [
  ['provider rejection', async () => Response.json({ message: 'private provider error' }, { status: 422 })],
  ['missing provider acknowledgement', async () => Response.json({})],
  ['network timeout', async () => { throw new Error('timeout'); }],
]) {
  test(`${name} never returns success`, async () => {
    const response = await handleInquiry(request(inquiry), config, send);
    assert.equal(response.status, 502);
    const data = await response.json();
    assert.equal(data.success, false);
    assert.equal(data.ticketId, undefined);
    assert.ok(!data.error.includes('private provider error'));
  });
}
test('client submission only accepts confirmed success and preserves API errors', async (t) => {
  const mock = t.mock.method(globalThis, 'fetch', async () => Response.json({ success: true, ticketId: 'ORB-confirmed' }));
  assert.equal(await submitInquiry(inquiry), 'ORB-confirmed');
  mock.mock.mockImplementation(async () => Response.json({ success: false, error: 'Temporarily unavailable' }, { status: 503 }));
  await assert.rejects(submitInquiry(inquiry), /Temporarily unavailable/);
  mock.mock.mockImplementation(async () => Response.json({ success: true }));
  await assert.rejects(submitInquiry(inquiry), /could not be sent/);
  mock.mock.mockImplementation(async () => { throw new Error('Network unavailable'); });
  await assert.rejects(submitInquiry(inquiry), /Network unavailable/);
});
