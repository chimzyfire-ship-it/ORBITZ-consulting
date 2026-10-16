import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Generate a unique inquiry ticket code
    const ticketId = `ORB-${Date.now().toString().slice(-4)}-${Math.floor(1000 + Math.random() * 9000)}`;

    const inquiryRecord = {
      ticketId,
      receivedAt: new Date().toISOString(),
      objective: data.objective,
      timeline: data.timeline,
      name: data.name,
      organization: data.organization,
      email: data.email,
      budget: data.budget || "Confidential",
      notes: data.notes || "",
      status: "DISPATCHED_TO_EXECUTIVE_PRODUCER",
    };

    // In production, this can send to email/Slack webhook/CRM.
    console.log("[ORBITZ CONSULTING INQUIRY RECEIVED]", inquiryRecord);

    return NextResponse.json({
      success: true,
      ticketId,
      message: "Inquiry successfully registered with ORBITZ Executive Desk.",
      inquiry: inquiryRecord,
    });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
