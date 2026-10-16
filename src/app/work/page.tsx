import Image from "next/image";
import Link from "next/link";
import { 
  Film, 
  TrendingUp, 
  Radio, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  Award, 
  BarChart3, 
  Eye, 
  Globe2 
} from "lucide-react";
import WhiteLogoBadge from "@/components/WhiteLogoBadge";

export const metadata = {
  title: "Selected Works & Production Case Studies | ORBITZ Consulting Ltd",
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
    <div className="flex flex-col w-full bg-[#050811] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-2">
          <span>Production Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          Selected Works & Benchmark Proof
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          Excellence is non-negotiable. Explore how ORBITZ Consulting Ltd executes high-stakes documentary productions, programmatic ad blitzes, live events, and media defense.
        </p>
      </div>

      {/* Case Studies Showcase */}
      <div className="max-w-7xl mx-auto w-full space-y-24">
        {caseStudies.map((cs, idx) => (
          <div
            key={cs.id}
            className="glass-panel-elevated rounded-3xl overflow-hidden border border-white/10 p-6 sm:p-10 space-y-8"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  {cs.category} • Client: {cs.client}
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mt-1">
                  {cs.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/inquiry"
                  className="px-5 py-2.5 rounded-full bg-amber-400 text-slate-950 font-heading font-bold text-xs sm:text-sm hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Commission Similar Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Grid: Big Primary + Supporting Asset */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 relative h-72 sm:h-[420px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm sm:text-base font-medium max-w-xl">
                    {cs.tagline}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 relative h-64 sm:h-[420px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={cs.secondaryImage}
                  alt={`${cs.title} Production Details`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-amber-300">
                  BEHIND THE SCENES
                </div>
              </div>
            </div>

            {/* Narrative & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                  Execution Brief & Strategic Impact
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {cs.details}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cs.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center"
                  >
                    <span className="text-xl sm:text-2xl font-heading font-extrabold text-amber-400">
                      {m.val}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto w-full mt-24 text-center p-8 sm:p-12 glass-panel-glow rounded-3xl border border-white/15 space-y-5">
        <WhiteLogoBadge size="sm" showText={true} />
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
          Have an Ambitious Production in Mind?
        </h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          From full feature documentary syndication to stadium-scale live broadcasts, our directors and producers are standing by.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-heading font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/25"
        >
          <span>Submit Project Inquiry</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
