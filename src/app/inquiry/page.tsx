import InteractiveInquiry from "@/components/InteractiveInquiry";
import Link from "next/link";

export const metadata = {
  title: "Interactive Project Commission & Inquiry | ORBITZ Consulting Ltd",
  description: "Architect your media production, media buying, PR, or event brief in 2 simple questions with ORBITZ Consulting Ltd.",
};

export default function InquiryPage() {
  return (
    <div style={{ background: "#080a0c", minHeight: "90vh", padding: "60px 0 100px" }}>
      <div className="wrap">
        
        {/* Editorial Top Eyebrow */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            <span>// 06</span>INTAKE PROTOCOL
          </p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(36px, 4.5vw, 64px)", letterSpacing: "-.045em", marginBottom: "16px" }}>
            Commission a Strategic Project
          </h1>
          <p style={{ maxWidth: "560px", margin: "0 auto", color: "var(--muted)", fontSize: "16px", lineHeight: "1.7" }}>
            Answer two foundational questions to configure your media production, buying flight, or strategic PR advisory with ORBITZ.
          </p>
        </div>

        {/* The Inquiry Widget */}
        <InteractiveInquiry isStandAlone={true} />

        {/* Monospace Trust Badges */}
        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            borderTop: "1px solid var(--line)",
            paddingTop: "32px",
          }}
        >
          <div>
            <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", color: "var(--gold-accent)", marginBottom: "6px" }}>
              CONFIDENTIALITY ASSURED
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
              All commissions are protected by mutual enterprise non-disclosure.
            </p>
          </div>

          <div>
            <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", color: "var(--gold-accent)", marginBottom: "6px" }}>
              PARTNER LEVEL REVIEW
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
              Briefs are assessed directly by a Managing Partner & Executive Producer.
            </p>
          </div>

          <div>
            <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", color: "var(--gold-accent)", marginBottom: "6px" }}>
              RAPID SCOPING SLA
            </div>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
              Detailed production schedule and formal proposal returned within 24 hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
