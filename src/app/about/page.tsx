import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata = {
  title: "About the Firm & Leadership | ORBITZ Consulting Ltd",
  description: "Learn about the ethos, leadership, broadcast standards, and global advisory footprint of ORBITZ Consulting Ltd.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#080a0c", paddingBottom: "120px" }}>
      {/* Header */}
      <section className="wrap" style={{ paddingTop: "80px", paddingBottom: "60px", textAlign: "center" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          <span>// 04</span>THE FIRM DOCTRINE
        </p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px, 5.5vw, 76px)", letterSpacing: "-.045em", marginBottom: "20px" }}>
          About ORBITZ Consulting Ltd
        </h1>
        <p style={{ maxWidth: "620px", margin: "0 auto", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7" }}>
          An elite media consultancy and creative production house bridging cinematic documentary artistry with high-impact strategic communications and quantitative media power.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="wrap section" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <p className="eyebrow">
              <span>01 // THE THESIS</span>
              NARRATIVE AS POWER
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.8vw, 48px)", marginBottom: "20px" }}>
              Every Frame is Strategy. <br />
              <em>Every Placement is Power.</em>
            </h2>
            <p style={{ color: "#f7f5ef", fontSize: "16px", lineHeight: "1.8", marginBottom: "18px" }}>
              In an era of relentless algorithmic saturation, noise is cheap. True cultural gravity and institutional influence require two elements that rarely exist under one roof: <b>cinema-grade narrative craft</b> and <b>ruthless, programmatic media distribution</b>.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.8", marginBottom: "28px" }}>
              ORBITZ Consulting Ltd was founded to resolve this divide. We refuse to treat documentaries merely as marketing collateral, and we refuse to treat media buying as vanity reach. We build films that move human hearts and ad campaigns that capture tangible market share.
            </p>
            <Link className="button" href="/services">
              Explore Enterprise Practices <span><ArrowIcon /></span>
            </Link>
          </div>

          <figure className="hero-photo" style={{ transform: "rotate(2deg)", margin: "0 auto", width: "100%", maxWidth: "520px" }}>
            <Image
              src="/assets/executive-consultant.jpg"
              alt="ORBITZ Consulting Managing Partner"
              width={800}
              height={1000}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="portrait-caption">
              <span>EXECUTIVE DESK // ORBITZ 04</span>
              <strong>Managing Partner & Strategy Directorate</strong>
            </div>
          </figure>
        </div>
      </section>

      {/* CREAM SECTION: OPERATING PRINCIPLES */}
      <section className="cream section">
        <div className="wrap">
          <div className="section-heading horizontal">
            <div>
              <p className="eyebrow">
                <span>// 02</span>OPERATING DOCTRINE
              </p>
              <h2>The Principles That Govern Our Craft</h2>
            </div>
            <p>
              Non-negotiable operational benchmarks upheld across every shoot, media buy, and crisis briefing.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "36px", marginTop: "40px" }}>
            <div style={{ borderTop: "1px solid #74776e", paddingTop: "24px" }}>
              <div style={{ font: "12px var(--mono)", color: "#888", marginBottom: "8px" }}>PRINCIPLE // 01</div>
              <h3 style={{ fontFamily: "var(--sans)", fontSize: "22px", marginBottom: "10px" }}>Zero Cheap Compromise</h3>
              <p style={{ fontSize: "14px", color: "#4a4d46", lineHeight: "1.8" }}>
                We do not shoot on convenience gear or accept superficial cuts. We use DCI 4K/8K cinema sensors, optical anamorphic glass, and certified Dolby mastering.
              </p>
            </div>

            <div style={{ borderTop: "1px solid #74776e", paddingTop: "24px" }}>
              <div style={{ font: "12px var(--mono)", color: "#888", marginBottom: "8px" }}>PRINCIPLE // 02</div>
              <h3 style={{ fontFamily: "var(--sans)", fontSize: "22px", marginBottom: "10px" }}>Quantitative Attribution</h3>
              <p style={{ fontSize: "14px", color: "#4a4d46", lineHeight: "1.8" }}>
                Every pound, dollar, and dirham spent on programmatic media buying must return transparent audience intelligence, verified impressions, and measurable commercial lift.
              </p>
            </div>

            <div style={{ borderTop: "1px solid #74776e", paddingTop: "24px" }}>
              <div style={{ font: "12px var(--mono)", color: "#888", marginBottom: "8px" }}>PRINCIPLE // 03</div>
              <h3 style={{ fontFamily: "var(--sans)", fontSize: "22px", marginBottom: "10px" }}>Discretion & Boardroom Trust</h3>
              <p style={{ fontSize: "14px", color: "#4a4d46", lineHeight: "1.8" }}>
                We operate under strict institutional NDA. When managing sensitive reputational matters or high-stakes acquisitions, discretion is our absolute currency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTPRINT */}
      <section className="wrap section" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          <figure className="process-detail" style={{ margin: 0 }}>
            <Image
              src="/assets/boardroom-presentation.jpg"
              alt="ORBITZ Strategic Boardroom"
              width={750}
              height={450}
              style={{ width: "100%", height: "360px", objectFit: "cover" }}
            />
            <figcaption>GLOBAL ADVISORY DESK // MAYFAIR • DIFC • VICTORIA ISLAND</figcaption>
          </figure>

          <div>
            <p className="eyebrow">
              <span>03 // GEOGRAPHY</span>
              CROSS-BORDER REACH
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(30px, 3.6vw, 46px)" }}>
              Operating Across Global Centers of Gravity
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.8", marginBottom: "24px" }}>
              From London Mayfair to Dubai DIFC, New York, and Lagos, our production fleet and media buying traders operate seamlessly across time zones to deliver uninterrupted broadcast excellence.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", font: "12px var(--mono)", color: "#c0c2bf", marginBottom: "32px" }}>
              <div>• LONDON MAYFAIR // HQ</div>
              <div>• DUBAI DIFC // EMIRATES DESK</div>
              <div>• LAGOS // PRODUCTION LABS</div>
              <div>• NEW YORK // SYNDICATION</div>
            </div>
            <Link className="button gold" href="/contact">
              Contact Concierge <span><ArrowIcon /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
