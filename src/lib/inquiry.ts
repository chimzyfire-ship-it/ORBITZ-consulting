import { randomUUID } from "node:crypto";

type EmailConfig = { apiKey?: string; from?: string; to?: string };
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function failure(error: string, status: number) {
  return Response.json({ success: false, error }, { status });
}

export async function handleInquiry(request: Request, config: EmailConfig, send: typeof fetch = fetch) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return failure("Please submit your enquiry from this website.", 403);
  }
  let data: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 20000) return failure("Your message is too long. Please shorten it and try again.", 413);
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return failure("Please complete the enquiry form.", 400);
    }
    data = parsed as Record<string, unknown>;
  } catch {
    return failure("We could not read your enquiry. Please try again.", 400);
  }

  const limits = {
    source: 20, name: 160, email: 254, organization: 240,
    objective: 240, timeline: 240, budget: 120, notes: 6000, desk: 100,
  };
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = data[key];
    if (value !== undefined && (typeof value !== "string" || value.length > limit)) {
      return failure(`Please check the ${key} field and try again.`, 400);
    }
    fields[key] = typeof value === "string" ? value.trim() : "";
    if (key !== "notes" && /[\r\n\u0000]/.test(fields[key])) {
      return failure(`Please check the ${key} field and try again.`, 400);
    }
  }

  const { source, name, email, organization, objective, timeline, budget, notes, desk } = fields;
  if (source !== "inquiry" && source !== "contact") return failure("Please use the website enquiry form.", 400);
  if (!name || !emailPattern.test(email) || !objective) {
    return failure("Please enter your name, a valid email address, and an enquiry subject.", 400);
  }
  if (source === "inquiry" && (!organization || !timeline)) {
    return failure("Please include your organization and project timeline.", 400);
  }
  if (source === "contact" && !notes) return failure("Please enter a message before sending.", 400);
  if (!config.apiKey?.trim() || !config.from?.trim() || !config.to || !emailPattern.test(config.to)) {
    return failure("Online enquiries are temporarily unavailable. Please try again later. Your message has not been sent.", 503);
  }

  const ticketId = `ORB-${randomUUID().toUpperCase()}`;
  const text = [
    `ORBITZ ${source === "inquiry" ? "Project Enquiry" : "Contact Message"}`,
    `Reference: ${ticketId}`, `Received: ${new Date().toISOString()}`, "",
    `Name: ${name}`, `Email: ${email}`, `Organization: ${organization || "Not provided"}`,
    `Objective: ${objective}`, `Timeline: ${timeline || "Not provided"}`,
    `Budget: ${budget || "Not provided"}`, `Preferred desk: ${desk || "Not specified"}`,
    "", "Message:", notes || "No additional notes.",
  ].join("\n");
  try {
    const response = await send("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: config.from, to: [config.to], reply_to: email, subject: `[${ticketId}] ${objective}`, text }),
      signal: AbortSignal.timeout(10000),
    });
    const result: unknown = await response.json();
    if (!response.ok || !result || typeof result !== "object" || !("id" in result) || typeof result.id !== "string" || !result.id) {
      return failure("Your message could not be sent. Please try again in a moment.", 502);
    }
    return Response.json({ success: true, ticketId });
  } catch {
    return failure("We could not confirm your message was sent. Please try again in a moment.", 502);
  }
}
