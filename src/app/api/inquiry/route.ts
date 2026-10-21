import { handleInquiry } from "@/lib/inquiry";

export const runtime = "nodejs";
export const maxDuration = 20;

export async function POST(request: Request) {
  return handleInquiry(request, {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.INQUIRY_FROM_EMAIL,
    to: process.env.INQUIRY_TO_EMAIL,
  });
}
