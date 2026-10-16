import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata = {
  title: "Selected Works & Case Studies | ORBITZ Consulting Ltd",
  description: "Explore benchmark documentary productions, programmatic media buying campaigns, high-stakes PR, and broadcast-grade live events executed by ORBITZ Consulting Ltd.",
};

const caseStudies = [
  {
    id: "unwritten-archive",
    title: "The Unwritten Archive: Sovereign Transition",
    category: "Documentary Production",
    client: "Global Institutional Heritage Trust",
    image: "/assets/cinema-rig.jpg",
    secondaryImage: "/assets/director-studio.jpg",
    tagline: "A 6-part cinema documentary chronicling modern economic sovereignty and industrial transformation.",
    metrics: [
      { label: "Festival Selections", val: "8 International" },
      { label: "Broadcast Deliverable", val: "4K DCI-P3 / Atmos" },
      { label: "Audience Reach", val: "14.2M Viewers" },
    ],
    details:
      "Filmed across five countries utilizing high-dynamic-range cinema cameras and anamorphic prime lenses. ORBITZ conducted extensive archival restoration and secured broadcast syndication agreements with international premium platforms.",
    specs: ["Shot on ARRI ALEXA 35", "Cooke Anamorphic Lenses", "ACES Color Pipeline", "Dolby Atmos 7.1.4"],
  },
  {
    id: "apex-broadcast",
    title: "Vanguard Global Economic Summit 2026",
    category: "Events & Live Broadcast",
    client: "Trans-Continental Trade Alliance",
    image: "/assets/sound-console.jpg",
    secondaryImage: "/assets/broadcast-camera.jpg",
    tagline: "Turnkey spatial staging, multi-camera live switching, and low-latency international hybrid broadcast.",
    metrics: [
      { label: "In-Person Delegates", val: "2,400 VIPs" },
      { label: "Global Streamers", val: "185,000+ Live" },
      { label: "Broadcast Uptime", val: "100.0% SLA" },
    ],
    details:
      "ORBITZ managed the complete sensory and technical environment: 10-camera HD-SDI live chain, redundant satellite uplinks, simultaneous multi-language translation feeds, and real-time digital stage graphics.",
    specs: ["10-Camera Live Rig", "Yamaha PM10 Digital Audio", "SMPTE Timecode Sync", "Redundant Ku-Band Uplink"],
  },
  {
    id: "omnipulse-buying",
    title: "OmniPulse Continental Scale Campaign",
    category: "Media Buying & Ad Ops",
    client: "Fintech Unicorn Expansion",
    image: "/assets/strategy-analytics.jpg",
    secondaryImage: "/assets/boardroom-presentation.jpg",
    tagline: "Cross-continent programmatic ad buying across Connected TV, high-impact digital billboards, and linear TV.",
    metrics: [
      { label: "Total Ad Impressions", val: "48.6 Million" },
      { label: "Target Account Lift", val: "+214%" },
      { label: "Cost-Per-Acquisition", val: "-38% Below Benchmark" },
    ],
    details:
      "Engineered an algorithmic programmatic buying framework that captured high-net-worth commercial segments across London, Lagos, Nairobi, and Dubai. Synchronized digital billboard takeovers with targeted CTV advertisements.",
    specs: ["CTV & Linear TV Inventory", "DOOH Timesquare & DIFC", "DSP Real-Time Bidding", "Multi-Touch Attribution"],
  },
  {
    id: "sovereign-pr",
    title: "Institutional Narrative & Crisis Shield",
    category: "Strategic PR & Comms",
    client: "Sovereign Infrastructure Fund",
    image: "/assets/executive-consultant.jpg",
    secondaryImage: "/assets/boardroom-presentation.jpg",
    tagline: "High-stakes reputation defense and proactive tier-1 press tour during a $1.2B cross-border acquisition.",
    metrics: [
      { label: "Tier-1 Placements", val: "32 Top Features" },
      { label: "Positive Sentiment Shift", val: "+42% Index" },
      { label: "Crisis Mitigation", val: "Zero Regulatory Fallout" },
    ],
    details:
      "ORBITZ embedded with the executive board to author decisive stakeholder communications, orchestrate exclusive broadcast appearances on Bloomberg and CNBC, and manage round-the-clock media inquiries.",
    specs: ["24/7 War Room Protocol", "Financial Press Syndication", "C-Suite Broadcast Prep", "Real-Time Social Listening"],
  },
];

export default function WorkPage() {
  return (
    <div style={{ background: "#080a0c", paddingBottom: "120px" }}>
      {/* Header */}
      <section className="wrap" style={{ paddingTop: "80px", paddingBottom: "60px", textAlign: "center" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          <span>// 03</span>SELECTED ARCHIVE
        </p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px, 5.5vw, 76px)", letterSpacing: "-.045em", marginBottom: "20px" }}>
          Case Studies & Broadcast Deployments
        </h1>
        <p style={{ maxWidth: "620px", margin: "0 auto", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7" }}>
          A curated inspection of high-profile commissions where ORBITZ engineered cinematic prestige, mass audience acquisition, and boardroom outcomes.
        </p>
      </section>

      {/* Case Studies */}
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "90px" }}>
        {caseStudies.map((study, idx) => (
          <article
            key={study.id}
            style={{
              borderTop: "1px solid var(--line)",
              paddingTop: "60px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Copy Side */}
            <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
              <p className="eyebrow">
                <span>// 0{idx + 1}</span>{study.category.toUpperCase()}
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.5vw, 44px)", marginBottom: "14px" }}>
                {study.title}
              </h2>
              <div style={{ font: "11px var(--mono)", color: "var(--gold-accent)", marginBottom: "20px" }}>
                CLIENT: {study.client.toUpperCase()}
              </div>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#f7f5ef", marginBottom: "16px" }}>
                {study.tagline}
              </p>
              <p style={{ fontSize: "14px", lineHeight: "1.8", color: "var(--muted)", marginBottom: "28px" }}>
                {study.details}
              </p>

              {/* Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
                {study.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div style={{ font: "18px var(--serif)", fontWeight: 700, color: "var(--gold)" }}>
                      {m.val}
                    </div>
                    <div style={{ font: "9px var(--mono)", color: "#888", letterSpacing: "1px", marginTop: "4px" }}>
                      {m.label.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              <Link className="button" href="/inquiry">
                Request Detailed Dossier <span><ArrowIcon /></span>
              </Link>
            </div>

            {/* Visual Side (Big & Borderless) */}
            <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
              <figure
                className="hero-photo"
                style={{
                  transform: idx % 2 === 0 ? "rotate(2deg)" : "rotate(-2deg)",
                  width: "100%",
                  maxWidth: "540px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={1000}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="portrait-caption">
                  <span>ORBITZ ARCHIVE // {study.category.toUpperCase()}</span>
                  <strong>{study.specs[0]}</strong>
                </div>
              </figure>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="wrap" style={{ paddingTop: "90px", textAlign: "center" }}>
        <div style={{ background: "#0d0f12", padding: "50px 30px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "16px" }}>
            Have a High-Stakes Project?
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "480px", margin: "0 auto 30px" }}>
            Review your production timeline with our managing partners.
          </p>
          <Link className="button gold" href="/inquiry">
            Start Interactive Inquiry <span><ArrowIcon /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}
