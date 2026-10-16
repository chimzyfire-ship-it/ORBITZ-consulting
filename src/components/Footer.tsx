import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap footer-top">
        <div>
          {/* Sacred White Background Logo Island */}
          <Link className="brand" href="/" aria-label="ORBITZ Consulting Ltd">
            <img
              className="brand-logo"
              src="/assets/logo.png"
              alt="ORBITZ Consulting Ltd"
              style={{ width: "auto", height: "50px", objectFit: "contain" }}
            />
          </Link>
          <p style={{ marginTop: "24px", maxWidth: "340px", fontSize: "14px", lineHeight: "1.7", color: "var(--muted)" }}>
            ORBITZ Consulting Ltd is an elite media consultancy and broadcast production powerhouse. We engineer high-stakes narrative documentaries, programmatic media buying operations, global PR campaigns, and unforgettable immersive summits.
          </p>
        </div>

        <div>
          <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", color: "var(--gold-accent)", marginBottom: "18px", textTransform: "uppercase" }}>
            The Practices
          </div>
          <div className="footer-links">
            <Link href="/services#documentary">Documentary Production</Link>
            <Link href="/services#media-buying">Media Buying & Ad Ops</Link>
            <Link href="/services#pr-comms">PR & Strategic Comms</Link>
            <Link href="/services#events">Live Broadcast & Summits</Link>
            <Link href="/services#advisory">Executive Advisory</Link>
            <Link href="/work">Selected Works</Link>
          </div>
        </div>

        <div>
          <div style={{ font: "10px var(--mono)", letterSpacing: "1.5px", color: "var(--gold-accent)", marginBottom: "18px", textTransform: "uppercase" }}>
            Operations & Desk
          </div>
          <div className="footer-links">
            <Link href="/about">The Firm Philosophy</Link>
            <Link href="/inquiry">Interactive Inquiry</Link>
            <Link href="/contact">Concierge Desk</Link>
            <Link href="/contact#london">London HQ</Link>
            <Link href="/contact#dubai">Dubai Studio</Link>
            <Link href="/contact#lagos">Lagos Desk</Link>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 ORBITZ CONSULTING LTD. ALL RIGHTS RESERVED.</span>
        <div>
          <Link href="/contact">TERMS</Link>
          <Link href="/contact">PRIVACY</Link>
          <Link href="/contact">NDA ASSURANCE</Link>
        </div>
        <span className="hidden sm:inline">STRICT ENTERPRISE CONFIDENTIALITY</span>
      </div>
    </footer>
  );
}
