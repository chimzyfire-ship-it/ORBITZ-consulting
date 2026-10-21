# ORBITZ Consulting

## Enquiry email setup

Both forms use `/api/inquiry`. Configure these server-only variables in Vercel Production, then redeploy:

- `RESEND_API_KEY`: an API key authorized to send mail.
- `INQUIRY_FROM_EMAIL`: a sender address on a domain verified in Resend.
- `INQUIRY_TO_EMAIL`: the owner's destination inbox (to be supplied later).

See `.env.example` and [Resend's send-email documentation](https://resend.com/docs/api-reference/emails/send-email). The visitor's address is used as Reply-To. Recipients cannot be changed by form submissions.

Until all three values are configured, submissions return 503 and the form keeps the visitor's input with a clear error. No submissions are stored or queued. Success is shown only after the mail provider accepts the email. After configuration, submit an enquiry and verify receipt in the destination inbox.

Validation: `npm test`, `npx tsc --noEmit`, and `npm run build`.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
