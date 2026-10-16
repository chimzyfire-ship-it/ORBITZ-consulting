"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Film, 
  TrendingUp, 
  Radio, 
  Calendar, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Compass, 
  ChevronRight, 
  Tv, 
  MonitorPlay,
  Play
} from "lucide-react";
import WhiteLogoBadge from "@/components/WhiteLogoBadge";
import InteractiveInquiry from "@/components/InteractiveInquiry";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#050811] text-slate-100">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-mesh-cosmic">
        {/* Ambient background light spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-sky-500/10 to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Top Identity Tag with White Logo Pill */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl">
              <WhiteLogoBadge size="xs" showText={false} withLink={false} />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                ORBITZ Consulting Ltd • Elite Media & Production
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
                Where Cinematic Storytelling Meets{" "}
                <span className="text-gradient-gold">Calculated Media Power.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
                ORBITZ Consulting Ltd delivers broadcast-grade documentary productions, programmatic media buying campaigns, high-stakes PR, and world-class live events for visionary brands.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/inquiry"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base group"
              >
                <span>Launch Interactive Commission</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Explore Selected Works</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Floating Metric Badges */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-5xl">
              <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-amber-400/30 transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400 tracking-tight block">
                  $180M+
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1 block">
                  Programmatic Media Managed
                </span>
              </div>
              <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-amber-400/30 transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight block">
                  48+
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1 block">
                  Documentary & Film Commissions
                </span>
              </div>
              <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-amber-400/30 transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-sky-400 tracking-tight block">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1 block">
                  Live Broadcast Uptime SLA
                </span>
              </div>
              <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-amber-400/30 transition-all duration-300 group">
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-300 tracking-tight block">
                  Tier-1
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1 block">
                  Global Press Placements
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BIG ASSETS FEATURE SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#070c1b]/60">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Production Fleet & Operational Craft
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mt-2 tracking-tight">
                Crafted for Supreme Visual Authority
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 max-w-md">
              From cinema camera rigs and master sound consoles to executive strategic war-rooms, ORBITZ operates at highest broadcast caliber.
            </p>
          </div>

          {/* Large Card Grid Featuring User Assets */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: Cinema Rig Feature (Large 7 cols) */}
            <div className="md:col-span-7 glass-panel-glow rounded-3xl overflow-hidden group relative border border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src="/assets/cinema-rig.jpg"
                  alt="Cinema Rig Documentary Production"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/40 to-transparent" />
                
                {/* Floating pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-amber-300">
                  <Film className="w-3.5 h-3.5" />
                  <span>DCI 4K/8K CINEMA SUITE</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 relative z-10 -mt-12 bg-gradient-to-b from-transparent to-[#070d1e]">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                  Cinematic Documentary Production
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Broadcast-ready investigative films, human-interest narratives, and flagship corporate brand documentaries filmed on industry-standard large-format cinema sensors.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span>Color Grading: ACES / DCI-P3</span>
                  <span>•</span>
                  <span>Sound: Dolby Atmos Broadcast</span>
                </div>
              </div>
            </div>

            {/* Card 2: Live Sound Mixing Console (5 cols) */}
            <div className="md:col-span-5 glass-panel rounded-3xl overflow-hidden group relative border border-white/15 transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src="/assets/sound-console.jpg"
                  alt="Master Sound Console Events Audio"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/30 to-transparent" />
                
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-sky-400">
                  <Radio className="w-3.5 h-3.5" />
                  <span>BROADCAST AUDIO ENG</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 relative z-10 -mt-12 bg-gradient-to-b from-transparent to-[#070d1e]">
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                  Events & Live Broadcast Sound
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Turnkey audio-visual control for international conferences, hybrid galas, and real-time live broadcast streaming with zero latency tolerance.
                </p>
              </div>
            </div>

            {/* Card 3: Live Broadcast Cameraman (4 cols) */}
            <div className="md:col-span-4 glass-panel rounded-3xl overflow-hidden group relative border border-white/15 transition-all duration-500">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/assets/broadcast-camera.jpg"
                  alt="Live Camera Production Operator"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Production Ops</span>
                <h4 className="text-lg font-heading font-bold text-white mt-1">Multi-Camera Broadcasts</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Synchronized multi-angle camera crews equipped with wireless RF telemetry and crane telemetry for stadium-scale experiences.
                </p>
              </div>
            </div>

            {/* Card 4: Strategy & Growth Analytics (4 cols) */}
            <div className="md:col-span-4 glass-panel rounded-3xl overflow-hidden group relative border border-white/15 transition-all duration-500">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/assets/strategy-analytics.jpg"
                  alt="Media Buying Data Analytics"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Ad Intelligence</span>
                <h4 className="text-lg font-heading font-bold text-white mt-1">Programmatic Media Buying</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Omnichannel media allocation leveraging algorithmic DSP bidding, billboard takeovers, and cross-platform demographic acquisition.
                </p>
              </div>
            </div>

            {/* Card 5: Executive Advisory & Boardroom (4 cols) */}
            <div className="md:col-span-4 glass-panel rounded-3xl overflow-hidden group relative border border-white/15 transition-all duration-500">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/assets/boardroom-presentation.jpg"
                  alt="PR & Strategic Communications Boardroom"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Strategic PR</span>
                <h4 className="text-lg font-heading font-bold text-white mt-1">Institutional Reputation</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  High-stakes crisis communication, global tier-1 press tours, and C-suite narrative architecture across financial and tech sectors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRACTICE PILLARS (THE 4 CORE DISCIPLINES) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Complete Practice Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
              Four Pillars of Media Dominance
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              ORBITZ unites documentary filmmaking craftsmanship with ruthless commercial distribution and strategic narrative control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1 */}
            <div className="glass-panel-elevated rounded-3xl p-8 border border-white/10 hover:border-amber-400/40 transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  <Film className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400">01 / CINEMATIC</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                Documentary Production
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Full-spectrum narrative development from research and investigative journalism to 4K/8K filming, color grading, sound design, and festival syndication. We build emotional monuments for brands and causes.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Investigative Brand & Human Documentaries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Broadcast-Licensed Deliverables (Netflix/BBC/Prime specs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Archival Restoration & Visual Narrative Research</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link href="/services#documentary" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                  <span>Review Documentary Capabilities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-panel-elevated rounded-3xl p-8 border border-white/10 hover:border-amber-400/40 transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400">02 / ACQUISITION</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                Media Buying & Ad Ops
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                We turn ad budgets into measurable market capture. Utilizing proprietary algorithmic buying pipelines across Connected TV, linear broadcast, programmatic digital networks, and digital out-of-home (DOOH).
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cross-Continent Programmatic Media Placements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Prime Timesquare, DIFC & Canary Wharf Screen Takeovers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Real-Time Audience Sentiment & Conversion Telemetry</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link href="/services#media-buying" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                  <span>Explore Media Buying Framework</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-panel-elevated rounded-3xl p-8 border border-white/10 hover:border-amber-400/40 transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  <Radio className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400">03 / INFLUENCE</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                Strategic PR & Public Affairs
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Reputation is currency. ORBITZ shapes the narrative before the headlines do. We architect institutional statements, secure tier-1 financial and lifestyle press, and provide round-the-clock crisis defense.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tier-1 Global Media Relations (Bloomberg, FT, CNBC, Forbes)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24/7 Rapid Incident & Crisis Advisory Desk</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Executive Media Training & Keynote Ghostwriting</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link href="/services#pr-comms" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                  <span>Review PR Advisory Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-panel-elevated rounded-3xl p-8 border border-white/10 hover:border-amber-400/40 transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400">04 / EXPERIENTIAL</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                Events Management & Live Broadcast
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Transformational physical and hybrid productions. From ministerial international summits and corporate product launches to red-carpet galas with multi-camera live satellite broadcast streaming.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>End-to-End Experiential Staging & Spatial Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Multi-Camera Satellite & CDN Hybrid Streaming</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>VIP Protocol, Security & Delegate Experience Management</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link href="/services#events" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                  <span>Explore Event Production Logistics</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE ORBIT METHOD (4-STAGE DELIVERY ROADMAP) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060914] border-y border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              The ORBIT Delivery Framework
            </h2>
            <p className="text-sm text-slate-400">
              Rigorous, predictable, and engineered for high-visibility outcomes from day zero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-heading font-black text-amber-400/40">01</span>
              <h4 className="text-lg font-heading font-bold text-white">Narrative Discovery</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Audience segmentation, journalistic investigation, stakeholder alignment, and broadcast objective calibration.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-heading font-black text-amber-400/40">02</span>
              <h4 className="text-lg font-heading font-bold text-white">Production Architecture</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Scriptwriting, cinematography storyboarding, media buying algorithmic scheduling, and protocol blueprints.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-heading font-black text-amber-400/40">03</span>
              <h4 className="text-lg font-heading font-bold text-white">Broadcast Execution</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Cinema-grade filming on location, multi-camera live switching, digital ad network activation, and press outreach.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 relative">
              <span className="text-3xl font-heading font-black text-amber-400/40">04</span>
              <h4 className="text-lg font-heading font-bold text-white">Global Amplification</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Syndication, post-campaign conversion analysis, archive preservation, and long-term reputation consolidation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE INQUIRY SECTION (DIRECT ON HOMEPAGE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-mesh-cosmic" id="commission">
        <div className="max-w-7xl mx-auto">
          <InteractiveInquiry isStandAlone={false} />
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto glass-panel-glow rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="flex justify-center mb-4">
            <WhiteLogoBadge size="md" showText={true} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Ready to Shape the Global Conversation?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Partner with ORBITZ Consulting Ltd. Our production suites, media buying desks, and PR strategists are ready to deploy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inquiry"
              className="px-8 py-4 rounded-full font-heading font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-500/20 transition-all text-sm sm:text-base"
            >
              Start Your Inquiry Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-heading font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-sm sm:text-base"
            >
              Speak with a Managing Partner
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
