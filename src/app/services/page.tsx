import Image from "next/image";
import Link from "next/link";
import { 
  Film, 
  TrendingUp, 
  Radio, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Monitor, 
  Award, 
  ShieldCheck, 
  Cpu
} from "lucide-react";
import WhiteLogoBadge from "@/components/WhiteLogoBadge";

export const metadata = {
  title: "Media Services & Capabilities | ORBITZ Consulting Ltd",
  description: "Comprehensive media practices: documentary film production, programmatic media buying, strategic PR communications, and broadcast live events.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#050811] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-2">
          <span>Enterprise Practice Areas</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          Specialized Media Practices & Execution
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          At ORBITZ Consulting Ltd, our multidisciplinary teams bridge world-class cinema equipment with precision media algorithms and high-stakes reputation control.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-24">

        {/* SERVICE 1: DOCUMENTARY PRODUCTION */}
        <section id="documentary" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <Film className="w-4 h-4" />
              <span>Practice Area 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Documentary & Cinematic Production
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We produce human-centered, investigative, and brand documentary masterpieces that command festival honors and mass audience devotion. From initial historical research and investigative journalism to 8K cinema filming and color grading, our productions are engineered to outlast the news cycle.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Feature & Docuseries Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Brand & Institutional Films</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Archival & Investigative Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>ACES / DCI-P3 Master Color Grading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dolby Atmos Spatial Sound Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Global Film Festival Submissions</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-heading font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Commission Documentary Film</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel-elevated rounded-3xl overflow-hidden border border-white/15 p-2">
              <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/director-studio.jpg"
                  alt="Director and Cinematographer on Documentary Set"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center">
                  <span>CINEMA FLEET: ARRI ALEXA 35 / RED V-RAPTOR</span>
                  <span className="text-amber-400">4K/8K RAW</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE 2: MEDIA BUYING */}
        <section id="media-buying" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-20">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="glass-panel-elevated rounded-3xl overflow-hidden border border-white/15 p-2">
              <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/strategy-analytics.jpg"
                  alt="Media Buying Analytics and Audience Intelligence"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center">
                  <span>DSP / SSP REAL-TIME BIDDING NETWORKS</span>
                  <span className="text-sky-400">ALGORITHMIC YIELD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              <span>Practice Area 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Media Buying & Programmatic Distribution
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We eliminate ad waste through algorithmic media investment. ORBITZ orchestrates high-volume media buys across Connected TV (CTV), satellite linear networks, premium digital inventory, and iconic digital out-of-home (DOOH) installations worldwide.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Connected TV & Linear Broadcast Buys</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>High-Impact Global DOOH Billboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Programmatic Audience Precision Targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Real-Time Attribution & Conversion Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Omnichannel Brand Retargeting Frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Direct Publisher Negotiations & Volume Rates</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-heading font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20"
              >
                <span>Deploy Media Buying Campaign</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICE 3: PR & STRATEGIC COMMUNICATIONS */}
        <section id="pr-comms" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <Radio className="w-4 h-4" />
              <span>Practice Area 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Public Relations & Strategic Communications
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              When market trust and corporate valuation are on the line, ORBITZ controls the narrative. We place executives in tier-1 media, craft bulletproof institutional announcements, and operate a 24/7 crisis war room to shield your reputation.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tier-1 Global Financial & Tech Press</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24/7 Crisis Communications & Risk Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>C-Suite Thought Leadership Positioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Regulatory & Stakeholder Comms Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Media Training & On-Camera Simulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Global Press Release Wire Syndication</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-heading font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Retain PR & Comms Advisory</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel-elevated rounded-3xl overflow-hidden border border-white/15 p-2">
              <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/boardroom-presentation.jpg"
                  alt="Strategic Communications Presentation in Boardroom"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center">
                  <span>PRESS ACCESS: BLOOMBERG / FT / REUTERS / CNBC</span>
                  <span className="text-amber-400">TIER-1 SYNDICATION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE 4: EVENTS MANAGEMENT & LIVE BROADCAST */}
        <section id="events" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-20">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="glass-panel-elevated rounded-3xl overflow-hidden border border-white/15 p-2">
              <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/broadcast-camera.jpg"
                  alt="Live Event Multi-Camera Broadcast Production"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center">
                  <span>SMPTE TIMECODE • ZERO DROP-FRAME LATENCY</span>
                  <span className="text-amber-400">10-CAMERA HYBRID</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>Practice Area 04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Events Management & Live Broadcast Engineering
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We produce world-class corporate summits, international galas, and live broadcast events where failure is not an option. From spatial acoustic design and stadium lighting to multi-camera satellite uplinks, our production crew manages every second with military precision.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Turnkey Physical & Hybrid Summit Staging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Multi-Camera Ultra-HD Live Broadcast Uplinks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Broadcast Audio & Digital Mixing Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>VIP Guest Protocol & Keynote Showrunning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Interactive Real-Time Delegate Streaming Portals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Post-Event Master Archive & Highlight Suites</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-heading font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Book Event Production Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto w-full mt-20 p-8 sm:p-12 glass-panel-glow rounded-3xl border border-white/10 text-center space-y-6">
        <WhiteLogoBadge size="sm" showText={true} />
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Require a Multi-Disciplinary Campaign?
        </h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto">
          Most client mandates combine our documentary filmmaking, media buying, and PR capabilities into a unified commercial engine.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-heading font-bold text-sm hover:bg-amber-300 transition-all shadow-xl shadow-amber-500/25"
        >
          <span>Configure Custom Multi-Practice Brief</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
