import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Enterprise Practices & Capabilities | ORBITZ Consulting Ltd",
  description: "Comprehensive media practices: documentary film production, programmatic media buying, strategic PR communications, and broadcast live events.",
};

export default function ServicesPage() {
  return (
    <div style={{ background: "#080a0c", paddingBottom: "120px" }}>
      {/* Top Header */}
      <section className="wrap" style={{ paddingTop: "80px", paddingBottom: "60px", textAlign: "center" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          <span>// 02</span>CORE PRACTICES
        </p>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px, 5.5vw, 76px)", letterSpacing: "-.045em", marginBottom: "20px" }}>
          Specialized Media Practices & Execution
        </h1>
        <p style={{ maxWidth: "620px", margin: "0 auto", fontSize: "16px", color: "var(--muted)", lineHeight: "1.7" }}>
          At ORBITZ Consulting Ltd, our multidisciplinary units bridge cinema camera fleets with quantitative media algorithms and high-stakes reputation control.
        </p>
      </section>

      {/* PRACTICE 01: DOCUMENTARY PRODUCTION */}
      <section className="wrap section" id="documentary" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <p className="eyebrow">
              <span>01 // FEATURE & EPISODIC</span>
              CINEMA DOCUMENTARY
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.8vw, 48px)" }}>
              Documentary & Cinematic Production
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.8" }}>
              We produce human-centered, investigative, and brand documentary masterpieces that command festival honors and mass audience devotion. From initial historical research and investigative journalism to 8K cinema filming and color grading, our productions are engineered to outlast the news cycle.
            </p>
            <div style={{ margin: "24px 0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", font: "12px var(--mono)", color: "#c0c2bf" }}>
              <div>↗ 8K DCI-P3 ACES WORKFLOW</div>
              <div>↗ DOLBY ATMOS 7.1.4 MASTERING</div>
              <div>↗ ARCHIVAL & INVESTIGATIVE RESEARCH</div>
              <div>↗ FESTIVAL & THEATRICAL PACKAGING</div>
            </div>
            <Link className="button" href="/inquiry">
              Commission Documentary <span>↗</span>
            </Link>
          </div>

          <figure className="hero-photo" style={{ transform: "rotate(1deg)", margin: "0 auto" }}>
            <Image
              src="/assets/director-studio.jpg"
              alt="Director on documentary film set"
              width={800}
              height={1000}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="portrait-caption">
              <span>DOCUMENTARY FLEET // 01</span>
              <strong>Uncompromising Directorial Vision.</strong>
            </div>
          </figure>
        </div>
      </section>

      {/* PRACTICE 02: MEDIA BUYING (CREAM SECTION) */}
      <section className="cream section" id="media-buying">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
            <figure className="community-frame" style={{ transform: "rotate(-2deg)", margin: "0 auto", width: "100%", maxWidth: "520px" }}>
              <Image
                src="/assets/strategy-analytics.jpg"
                alt="Programmatic media buying analytics dashboard"
                width={520}
                height={390}
                style={{ width: "100%", height: "auto" }}
              />
              <span>ORBITZ MEDIA DESK // PROGRAMMATIC AD ARBITRAGE</span>
            </figure>

            <div>
              <p className="eyebrow">
                <span>02 // ALGORITHMIC SCALE</span>
                PROGRAMMATIC MEDIA BUYING
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.8vw, 48px)" }}>
                Programmatic Media Buying & Ad Operations
              </h2>
              <p style={{ color: "#4a4d46", fontSize: "15px", lineHeight: "1.8" }}>
                Capital efficiency and guaranteed reach. We manage multi-million dollar ad allocations across Connected TV (CTV), programmatic real-time bidding DSPs, high-impact digital out-of-home (DOOH), and social video algorithms.
              </p>
              <div style={{ margin: "24px 0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", font: "12px var(--mono)", color: "#333" }}>
                <div>↗ DIRECT DSP BID ARBITRAGE</div>
                <div>↗ CTV & BROADCAST LINEAR SPEND</div>
                <div>↗ REAL-TIME ROAS ATTRIBUTION</div>
                <div>↗ OMNICHANNEL DOOH TAKEOVERS</div>
              </div>
              <Link className="button" href="/inquiry">
                Deploy Media Campaign <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE 03: STRATEGIC PR & COMMS */}
      <section className="wrap section" id="pr-comms" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <p className="eyebrow">
              <span>03 // GLOBAL REPUTATION</span>
              STRATEGIC PR & COMMS
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.8vw, 48px)" }}>
              Public Relations & Crisis Architecture
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.8" }}>
              When reputation is everything, ORBITZ commands the narrative. We place founders, ministers, and enterprise executives across Tier-1 media (Bloomberg, Financial Times, Reuters, Forbes) while neutralizing hostile media cycles through rapid-response war rooms.
            </p>
            <div style={{ margin: "24px 0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", font: "12px var(--mono)", color: "#c0c2bf" }}>
              <div>↗ TIER-1 GLOBAL PRESS PLACEMENT</div>
              <div>↗ 24/7 CRISIS WAR ROOM PROTOCOL</div>
              <div>↗ EXECUTIVE THOUGHT LEADERSHIP</div>
              <div>↗ REGULATORY & INVESTOR COMMS</div>
            </div>
            <Link className="button" href="/inquiry">
              Retain PR Counsel <span>↗</span>
            </Link>
          </div>

          <figure className="process-detail" style={{ margin: 0 }}>
            <Image
              src="/assets/boardroom-presentation.jpg"
              alt="Strategic boardroom presentation"
              width={700}
              height={450}
              style={{ width: "100%", height: "340px", objectFit: "cover" }}
            />
            <figcaption>PR WAR ROOM PROTOCOL // EXECUTIVE NARRATIVE DEFENSE</figcaption>
          </figure>
        </div>
      </section>

      {/* PRACTICE 04: LIVE BROADCAST & EVENTS */}
      <section className="wrap section" id="events" style={{ borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          <figure className="editorial-photo" style={{ transform: "rotate(-1deg)", margin: "0 auto" }}>
            <Image
              src="/assets/broadcast-camera.jpg"
              alt="Live broadcast camera rig"
              width={600}
              height={675}
            />
            <figcaption>
              <span>LIVE BROADCAST / 04</span>
              <b>Zero-Downtime Event Airwaves</b>
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">
              <span>04 // EXPERIENTIAL SUMMITS</span>
              LIVE BROADCAST & EVENTS
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.8vw, 48px)" }}>
              Live Broadcast & Experiential Summits
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.8" }}>
              We transform corporate conventions, presidential summits, and brand unveilings into high-fidelity broadcast spectacles. Turnkey multi-camera OB trucks, satellite uplinks, immersive LED staging, and flawless live streaming to millions globally.
            </p>
            <div style={{ margin: "24px 0 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", font: "12px var(--mono)", color: "#c0c2bf" }}>
              <div>↗ MULTI-CAMERA 4K OB TRUCKS</div>
              <div>↗ SATELLITE & ENCRYPTED UPLINKS</div>
              <div>↗ KEYNOTE AUDIO & SPATIAL STAGING</div>
              <div>↗ 99.999% BROADCAST UPTIME SLA</div>
            </div>
            <Link className="button gold" href="/inquiry">
              Book Event Broadcast <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="wrap" style={{ paddingTop: "60px", textAlign: "center" }}>
        <div style={{ background: "#0d0f12", padding: "50px 30px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "16px" }}>
            Ready to Commission ORBITZ?
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "480px", margin: "0 auto 30px" }}>
            Complete our 2-question intake protocol to reserve production capacity for your upcoming initiative.
          </p>
          <Link className="button gold" href="/inquiry">
            Start Interactive Inquiry <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
