import Image from "next/image";
import Link from "next/link";
import InteractiveInquiry from "@/components/InteractiveInquiry";
import ArrowIcon from "@/components/ArrowIcon";

export default function Home() {
  return (
    <>
      {/* HERO SECTION — EXACT IMMERSIVE LAYOUT FROM REFERENCE */}
      <section className="hero hero-immersive founder-hero" aria-label="Hero Introduction">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>ORBITZ CONSULTING LTD // EST. 2018</span>
            STRATEGIC MEDIA & CINEMATIC PRODUCTION
          </p>
          <h1>
            Where Cinematic Storytelling Meets <em>Calculated Media Power.</em>
          </h1>
          <p className="lead">
            ORBITZ Consulting Ltd engineers broadcast-grade documentary productions, programmatic media buying operations, global PR campaigns, and turnkey live event broadcasts for visionary institutions.
          </p>
          <div className="hero-action">
            <Link className="button gold" href="/inquiry">
              Commission Project <span><ArrowIcon /></span>
            </Link>
            <a className="hero-secondary" href="#practices">
              Explore Enterprise Practices <span>{"\u2193\uFE0E"}</span>
            </a>
          </div>
          <div className="hero-details">
            <span>DIRECTIVE // 04 PILLARS</span>
            <p>
              Global Production & Media Fleet // <span>UK • UAE • US • AF</span>
            </p>
          </div>
        </div>

        {/* HERO STAGE WITH 3D POLAROID OVERLAP */}
        <div className="hero-stage">
          <div className="portrait-aura" />
          <figure className="hero-photo">
            <Image
              src="/assets/pexels-rabiu-kabir-32275124.jpg"
              alt="Woman photographer looking through a camera in a warmly lit studio"
              width={3926}
              height={4908}
              priority
            />
          </figure>

          {/* Overlapping Polaroid Card */}
          <figure className="hero-contact">
            <Image
              src="/assets/cinema-rig.jpg"
              alt="Cinema Rig with Follow-Focus"
              width={205}
              height={154}
            />
            <figcaption>ORBITZ CINEMA RIG — ARRI ALEXA MINI LF 8K</figcaption>
          </figure>
          <span className="portrait-index">ORBITZ — 01</span>
        </div>
      </section>

      {/* SIGNAL BAND TICKER */}
      <div className="signal-band" aria-label="Key Services Ticker">
        <div className="wrap">
          <span>DOCUMENTARY FILMS (FESTIVAL & BROADCAST)</span>
          <span>PROGRAMMATIC MEDIA BUYING & AD OPS</span>
          <span>STRATEGIC PR & CRISIS ARCHITECTURE</span>
          <span>LIVE BROADCAST & EVENT EXPERIENCES</span>
          <Link href="/work">
            View Selected Works <span><ArrowIcon /></span>
          </Link>
        </div>
      </div>

      {/* SECTION 01: CREATOR STORY (EDITORIAL) */}
      <section className="wrap section creator-story" aria-label="The Firm Doctrine">
        <figure className="editorial-photo">
          <Image
            src="/assets/broadcast-camera.jpg"
            alt="Broadcast cameraman on set"
            width={600}
            height={675}
          />
          <figcaption>
            <span>LIVE BROADCAST / 02</span>
            <b>Uncompromising Visual Caliber</b>
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">
            <span>{"// 01"}</span>THE ORBITZ DOCTRINE
          </p>
          <h2>We Don&apos;t Just Produce Media. We Engineer Cultural Gravity.</h2>
          <p className="large-copy">
            From investigative documentary exposés to 9-figure programmatic media deployments, ORBITZ operates where artistry converges with quantitative scale.
          </p>
          <p className="muted">
            Traditional agencies create transient content. We build narrative ecosystems that seize global attention, withstand scrutiny, and produce tangible institutional value for sovereigns, corporations, and cultural leaders.
          </p>
          <Link className="button" href="/about">
            The Firm Philosophy <span><ArrowIcon /></span>
          </Link>
        </div>
      </section>

      {/* SECTION 02: CREAM PARTNERSHIP EDITORIAL */}
      <section className="cream partnership-editorial section" id="practices" aria-label="Executive Capabilities">
        <div className="wrap">
          <div className="section-heading horizontal">
            <div>
              <p className="eyebrow">
                <span>{"// 02"}</span>EXECUTIVE CAPABILITIES
              </p>
              <h2>Designed for Sovereign Brands and Global Leaders</h2>
            </div>
            <p>
              A high-touch operational alliance designed to handle the most demanding broadcast, buying, and public relations assignments.
            </p>
          </div>

          <div className="partnership-scene">
            <figure className="community-frame">
              <Image
                src="/assets/strategy-analytics.jpg"
                alt="Media buying growth analytics"
                width={480}
                height={360}
              />
              <span>ORBITZ MEDIA DESK // PROGRAMMATIC DISTRIBUTION</span>
            </figure>

            <div className="division">
              <div>
                <h3>Programmatic Media Buying</h3>
                <p>
                  Direct DSP routing, real-time programmatic optimization, high-impact out-of-home takeovers, and performance analytics delivering measurable ROAS.
                </p>
              </div>
              <div>
                <h3>Crisis & Strategic PR</h3>
                <p>
                  Rapid-response press war rooms, tier-1 financial and lifestyle publications, thought leadership placement, and narrative defense systems.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link className="text-link" href="/services">
              Review all enterprise practice areas <span>{"\u2192\uFE0E"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 03: STUDIO FULL BLEED SCENE */}
      <section className="studio-section" aria-label="Studio Sound Facilities">
        <div className="wrap studio-heading">
          <div>
            <h2>Master Broadcast & Audio Facilities</h2>
          </div>
          <p>
            State-of-the-art DCI-P3 mastering, Dolby Atmos spatial recording, and turnkey remote multi-camera satellite uplinks.
          </p>
        </div>

        <figure className="studio-scene">
          <Image
            src="/assets/sound-console.jpg"
            alt="Master sound console"
            width={1800}
            height={1200}
          />
          <div className="studio-frame" />
          <figcaption>
            <span className="studio-kicker">ORBITZ SOUND & BROADCAST LABS</span>
            <span className="studio-caption">
              Where Every Decibel and Frame <em>Demands Attention.</em>
            </span>
            <span className="studio-small">
              DOLBY ATMOS CERTIFIED • SATELLITE BROADCAST READY // ORBITZ 03
            </span>
          </figcaption>
        </figure>
      </section>

      {/* SECTION 04: PROCESS SECTION (ACCORDION) */}
      <section className="wrap section process-section" id="process" aria-label="The Orbit Method">
        <div>
          <p className="eyebrow">
            <span>{"// 04"}</span>THE ORBIT METHOD
          </p>
          <h2>The Architecture of Precision Execution</h2>
          <p className="muted">
            Every project follows a battle-tested protocol honed across hundreds of high-stakes hours on set, in war rooms, and on broadcast airwaves.
          </p>
          <figure className="process-detail process-team">
            <Image
              src="/assets/strategy-team-pexels-6803529.jpg"
              alt="Production team planning a project around a meeting table and whiteboard"
              width={1800}
              height={1200}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>PHASE 01-04 // STRATEGIC ALIGNMENT & BOARDROOM ROLLOUT</figcaption>
          </figure>
        </div>

        <div className="process-list">
          <details open>
            <summary>
              <span className="phase-number">PHASE 01</span>
              <span>Investigation & Narrative Architecture</span>
              <span className="phase-plus">+</span>
            </summary>
            <div>
              <h3>Discovery, Intelligence & Scripting</h3>
              <p>
                We dissect the target audience, analyze competitive media footprints, and construct a narrative blueprint that aligns with institutional goals.
              </p>
            </div>
          </details>

          <details>
            <summary>
              <span className="phase-number">PHASE 02</span>
              <span>Cinematic Capture & Production Fleet</span>
              <span className="phase-plus">+</span>
            </summary>
            <div>
              <h3>On-Location 8K Filming & Master Audio</h3>
              <p>
                Deployment of cinema camera packages, sound engineering units, and directorial crews across international locations.
              </p>
            </div>
          </details>

          <details>
            <summary>
              <span className="phase-number">PHASE 03</span>
              <span>Programmatic Deployment & Press Blitz</span>
              <span className="phase-plus">+</span>
            </summary>
            <div>
              <h3>Targeted Distribution & Global Wire Placements</h3>
              <p>
                Omnichannel ad spend pacing, real-time media buying arbitrage, and synchronized tier-1 press releases across global bureaus.
              </p>
            </div>
          </details>

          <details>
            <summary>
              <span className="phase-number">PHASE 04</span>
              <span>Attribution Telemetry & Long-Term Archival</span>
              <span className="phase-plus">+</span>
            </summary>
            <div>
              <h3>Audience Intelligence & Master Preservation</h3>
              <p>
                Comprehensive reach audits, brand sentiment analysis, and permanent master asset storage for ongoing campaign longevity.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 05: PARTNERSHIP OFFER / PRACTICE LEDGER */}
      <section className="partnership-offer section" aria-label="What We Offer">
        <div className="wrap offer-layout">
          <div>
            <p className="eyebrow">
              <span>{"// 05"}</span>WHAT WE OFFER
            </p>
            <h2>Turnkey Media Consultancy & Production</h2>
            <p>
              We partner with a select roster of clients each quarter to guarantee partner-level attention and flawless technical delivery.
            </p>
            <div className="channel-list">
              <span>CINEMA DOCUMENTARY</span>
              <span>PROGRAMMATIC AD OPS</span>
              <span>GLOBAL PR STRATEGY</span>
              <span>LIVE BROADCAST SUMMITS</span>
              <span>EXECUTIVE ADVISORY</span>
            </div>
            <Link className="button" href="/inquiry">
              Initiate Partnership <span><ArrowIcon /></span>
            </Link>
          </div>

          <div className="partnership-ledger">
            <article>
              <div className="ledger-number">01</div>
              <div>
                <h3>Documentary Production</h3>
                <p>
                  Full-scale narrative features, institutional profiles, and investigative docuseries designed for international distribution and acclaim.
                </p>
              </div>
            </article>

            <article>
              <div className="ledger-number">02</div>
              <div>
                <h3>Programmatic Media Buying</h3>
                <p>
                  Multi-million dollar ad spend optimization across global DSPs, connected TV, performance channels, and digital out-of-home.
                </p>
              </div>
            </article>

            <article>
              <div className="ledger-number">03</div>
              <div>
                <h3>Public Relations & Comms</h3>
                <p>
                  Tier-1 press access (Bloomberg, FT, Reuters, Forbes), executive speechwriting, and high-stakes reputation management.
                </p>
              </div>
            </article>

            <article>
              <div className="ledger-number">04</div>
              <div>
                <h3>Live Events & Broadcast</h3>
                <p>
                  Hybrid summit production, multi-camera live feeds, keynote audio/visual engineering, and turnkey VIP staging.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 06: APPLICATION INVITE & QUIZ PREVIEW */}
      <section className="application-invite" id="inquiry" aria-label="Project Application">
        <div className="wrap invite-grid">
          <div>
            <p className="eyebrow">
              <span>{"// 06"}</span>PROJECT INTAKE
            </p>
            <h2>Ready to Shape the Narrative?</h2>
            <p>
              Answer 2 quick questions to architect your custom media, documentary, or buying commission. Our senior team replies within 4 business hours.
            </p>
            <div className="invite-facts">
              <span>STRICT NDA INCLUDED</span>
              <span>PARTNER-LEVEL SCOPING</span>
              <span>24-HOUR QUOTE SLA</span>
            </div>
            <Link className="button gold" href="/inquiry">
              Full Screen Commission Brief <span><ArrowIcon /></span>
            </Link>
          </div>

          <div>
            <InteractiveInquiry isStandAlone={false} />
          </div>
        </div>
      </section>

      {/* SECTION 07: CLOSING PHOTO FINALE */}
      <section className="closing closing-creators" aria-label="Closing Overview">
        <div className="closing-backdrop">
          <Image
            src="/assets/executive-consultant.jpg"
            alt="Executive consulting desk"
            width={1672}
            height={941}
          />
        </div>
        <div className="wrap closing-inner">
          <div>
            <h2>ORBITZ Consulting Ltd</h2>
            <small>LONDON • DUBAI • NEW YORK • LAGOS // WORLDWIDE PRODUCTION FLEET</small>
          </div>
          <Link className="button" href="/inquiry">
            Commission Project <span><ArrowIcon /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
