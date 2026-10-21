export async function submitInquiry(payload: Record<string, string | undefined>): Promise<string> {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok || data?.success !== true || typeof data.ticketId !== "string" || !data.ticketId) {
    throw new Error(typeof data?.error === "string" ? data.error : "Your message could not be sent. Please try again.");
  }
  return data.ticketId;
}
