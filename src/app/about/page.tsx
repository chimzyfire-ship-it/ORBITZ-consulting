import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Film, 
  Award, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Target,
  Compass,
  Cpu
} from "lucide-react";
import WhiteLogoBadge from "@/components/WhiteLogoBadge";

export const metadata = {
  title: "About the Firm & Leadership | ORBITZ Consulting Ltd",
  description: "Learn about the ethos, leadership, broadcast standards, and global advisory footprint of ORBITZ Consulting Ltd.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#050811] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-2">
          <span>Institutional Ethos</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          About ORBITZ Consulting Ltd
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          An elite media consultancy and creative production house bridging cinematic documentary artistry with high-impact strategic communications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-24">

        {/* Narrative & Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Our Founding Thesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              Every Frame is Strategy. <br />
              <span className="text-gradient-gold">Every Placement is Power.</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                In an era of relentless algorithmic saturation, noise is cheap. True cultural gravity and institutional influence require two elements that rarely exist under one roof: <strong>cinema-grade narrative craft</strong> and <strong>ruthless, programmatic media distribution</strong>.
              </p>
              <p>
                ORBITZ Consulting Ltd was founded to resolve this divide. We refuse to treat documentaries merely as marketing collateral, and we refuse to treat media buying as vanity reach. We build films that move human hearts and ad campaigns that capture tangible market share.
              </p>
              <p>
                From boardrooms in Mayfair and DIFC to production soundstages in Lagos and post-production suites in New York, ORBITZ operates as a trusted partner to sovereign funds, industry titans, and visionary leaders.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel-elevated rounded-3xl p-3 border border-white/15">
              <div className="relative h-80 sm:h-[480px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/executive-consultant.jpg"
                  alt="ORBITZ Consulting Managing Partner at Executive Desk"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block text-sm">Managing Partner & Head of Strategy</span>
                    <span className="text-amber-400">ORBITZ CONSULTING LTD</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400">GLOBAL OPERATIONS</span>
                    <span className="text-slate-200">UK • NGA • UAE • USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              The Principles That Govern Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20 w-fit">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Uncompromising Cinema</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We do not cut corners on glass, lighting, or sound. Every documentary is captured on large-format cinema cameras and mixed in multi-channel Atmos to ensure permanent prestige.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20 w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Algorithmic Precision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our media buying desks operate with surgical intelligence. Every dollar of ad spend is tracked through real-time telemetry, ensuring maximum conversion and zero waste.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Reputation Sanctuary</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Trust is fragile. We enforce absolute discretion, rigorous compliance, and 24/7 crisis monitoring to shield our clients from market volatility and PR exposure.
              </p>
            </div>
          </div>
        </section>

        {/* Technical & Broadcast Standards */}
        <section id="standards" className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-white/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Technical Specifications
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                Broadcast & Delivery Standards
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SMPTE & DCI-P3 CERTIFIED PIPELINES</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-amber-400">01 / RESOLUTION</span>
              <h4 className="font-heading font-semibold text-white">4K / 8K RAW Cinema</h4>
              <p className="text-xs text-slate-400">
                Large format cinema sensors (ARRI, RED, Sony Venice) captured in uncompressed RAW formats.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-amber-400">02 / COLOR</span>
              <h4 className="font-heading font-semibold text-white">ACES DCI-P3 & HDR10</h4>
              <p className="text-xs text-slate-400">
                Academy Color Encoding System workflow with calibrated OLED reference monitors.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-amber-400">03 / AUDIO</span>
              <h4 className="font-heading font-semibold text-white">Dolby Atmos & EBU R128</h4>
              <p className="text-xs text-slate-400">
                Spatial surround audio mixing compliant with international broadcast loudness regulations.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-amber-400">04 / BROADCAST</span>
              <h4 className="font-heading font-semibold text-white">Zero-Latency Ku-Band</h4>
              <p className="text-xs text-slate-400">
                Redundant satellite and low-latency WebRTC streams for global stadium and hybrid summit feeds.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto w-full mt-24 text-center p-8 sm:p-12 glass-panel-glow rounded-3xl border border-white/15 space-y-5">
        <WhiteLogoBadge size="sm" showText={true} />
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
          Begin Your Partnership with ORBITZ
        </h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Our senior partners and production directors are ready to discuss your strategic media objectives.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-heading font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/25"
        >
          <span>Initiate Commission Inquiry</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
