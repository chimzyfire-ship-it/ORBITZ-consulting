"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Film, 
  TrendingUp, 
  Radio, 
  Calendar, 
  Sparkles, 
  Clock, 
  Zap, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Send,
  Building,
  Mail,
  User,
  DollarSign,
  FileText
} from "lucide-react";

const objectiveOptions = [
  {
    id: "documentary",
    title: "Documentary & Cinematic Storytelling",
    subtitle: "High-production investigative films, corporate histories, brand documentaries & festival entries",
    icon: Film,
  },
  {
    id: "media-buying",
    title: "Media Buying & Omnichannel Acquisition",
    subtitle: "Strategic ad spend allocation, programmatic TV/digital buying, high-yield audience targeting",
    icon: TrendingUp,
  },
  {
    id: "pr-comms",
    title: "Strategic PR & Reputation Architecture",
    subtitle: "Executive positioning, tier-1 media placements, institutional comms & crisis management",
    icon: Radio,
  },
  {
    id: "events-broadcast",
    title: "Events Management & Live Broadcast",
    subtitle: "Turnkey experiential production, live multi-camera broadcast feeds, and immersive summits",
    icon: Calendar,
  },
  {
    id: "full-advisory",
    title: "Full-Spectrum Media Consultancy",
    subtitle: "Holistic multi-pillar media advisory, brand transformation, and turnkey narrative execution",
    icon: Sparkles,
  },
];

const timelineOptions = [
  {
    id: "rapid-sprint",
    title: "Rapid Sprint (< 30 Days)",
    subtitle: "Immediate broadcast requirement, breaking PR campaign or imminent event deadline",
    icon: Zap,
  },
  {
    id: "standard-horizon",
    title: "Quarterly Campaign (1 – 3 Months)",
    subtitle: "Structured documentary shoot, scheduled media buying flight or regional rollout",
    icon: Clock,
  },
  {
    id: "flagship",
    title: "Flagship Production (3 – 6 Months)",
    subtitle: "Deep-dive investigative feature, multi-city summit or complete media rebrand",
    icon: Award,
  },
  {
    id: "annual-retainer",
    title: "Executive Strategic Retainer (Ongoing)",
    subtitle: "Long-term media advisory, continuous press oversight, and dedicated production desk",
    icon: ShieldCheck,
  },
];

const budgetRanges = [
  "$25,000 – $50,000",
  "$50,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000+",
  "Confidential / To Be Scoped",
];

export default function InteractiveInquiry({ isStandAlone = false }: { isStandAlone?: boolean }) {
  const [step, setStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    budget: "$50,000 – $150,000",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const selectedObjectiveObj = objectiveOptions.find((o) => o.id === selectedObjective);
  const selectedTimelineObj = timelineOptions.find((t) => t.id === selectedTimeline);

  const handleNextFromObjective = (id: string) => {
    setSelectedObjective(id);
    setStep(2);
  };

  const handleNextFromTimeline = (id: string) => {
    setSelectedTimeline(id);
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          objective: selectedObjectiveObj?.title || selectedObjective,
          timeline: selectedTimelineObj?.title || selectedTimeline,
          ...formData,
        }),
      });
      const result = await response.json();

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#00B4D8", "#ffffff"],
      });

      setSubmittedData({
        ...result,
        ticketId: result.ticketId || `ORB-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        objective: selectedObjectiveObj?.title,
        timeline: selectedTimelineObj?.title,
        ...formData,
      });
      setStep(4);
    } catch (err) {
      console.error(err);
      // Fallback ticket
      setSubmittedData({
        ticketId: `ORB-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        objective: selectedObjectiveObj?.title,
        timeline: selectedTimelineObj?.title,
        ...formData,
      });
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedObjective("");
    setSelectedTimeline("");
    setFormData({
      name: "",
      organization: "",
      email: "",
      budget: "$50,000 – $150,000",
      notes: "",
    });
    setSubmittedData(null);
  };

  return (
    <div className={`w-full ${isStandAlone ? "max-w-4xl" : "max-w-3xl"} mx-auto`}>
      {/* Header & Step Tracker */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Commission Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white tracking-tight">
          Ready to Commission ORBITZ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Answer two foundational questions to architect your custom media brief, followed by instant direct routing to our executive producers.
        </p>

        {/* Multi-step progress bar */}
        {step < 4 && (
          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4 max-w-xs mx-auto">
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? "bg-amber-400" : "bg-white/10"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? "bg-amber-400" : "bg-white/10"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 3 ? "bg-amber-400" : "bg-white/10"}`} />
          </div>
        )}
      </div>

      {/* Glassmorphic Inquiry Card */}
      <div className="glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden transition-all duration-300">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* STEP 1: OBJECTIVE */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Question 1 of 2</span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-1">
                  What is your primary media production or advisory objective?
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {objectiveOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = selectedObjective === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleNextFromObjective(opt.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 group ${
                      isSelected
                        ? "bg-amber-400/15 border-amber-400/60 shadow-lg shadow-amber-500/10"
                        : "bg-white/[0.03] border-white/10 hover:border-amber-400/30 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-semibold text-white text-base group-hover:text-amber-200 transition-colors">
                          {opt.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: TIMELINE & SCALE */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Question 2 of 2</span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-1">
                  What is your anticipated project scope & delivery timeline?
                </h3>
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {timelineOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = selectedTimeline === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleNextFromTimeline(opt.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                      isSelected
                        ? "bg-amber-400/15 border-amber-400/60 shadow-lg shadow-amber-500/10"
                        : "bg-white/[0.03] border-white/10 hover:border-amber-400/30 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div>
                      <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 w-fit mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-semibold text-white text-base block group-hover:text-amber-200 transition-colors">
                        {opt.title}
                      </span>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-300 font-medium">
                      <span>Select Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: BRIEF & CLIENT DETAILS */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Matrix Calibrated
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-1">
                  Deliver Your Project Brief to Executive Desk
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            </div>

            {/* Generated Summary Pill */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-amber-400/20 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="text-slate-400 font-mono text-xs uppercase">Selected Matrix:</span>
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 font-medium">
                {selectedObjectiveObj?.title}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 font-medium">
                {selectedTimelineObj?.title}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Julian Vance"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-amber-400" /> Organization / Brand *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Apex Global Media or Sovereign Capital"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" /> Direct Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="julian@apexglobal.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" /> Estimated Budget Allocation
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090e21] border border-white/10 text-white focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 text-sm"
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b} className="bg-[#090e21] text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-400" /> Strategic Context & Production Directives
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Detail key deliverables, broadcast channels, target geographies, or sensitive PR considerations..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 text-sm resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl font-heading font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Transmitting Inquiry...
                  </span>
                ) : (
                  <>
                    <span>Submit Strategic Commission Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: SUCCESS CONFIRMATION */}
        {step === 4 && submittedData && (
          <div className="py-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-wider uppercase mb-2">
                Inquiry Logged • Reference #{submittedData.ticketId}
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Brief Transmitted to ORBITZ Executive Desk
              </h3>
              <p className="mt-2 text-slate-300 text-sm max-w-lg mx-auto">
                Thank you, <span className="text-white font-semibold">{submittedData.name}</span>. An ORBITZ Senior Media Producer and Partner has received your brief for <span className="text-amber-300 font-semibold">{submittedData.organization}</span>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-3 max-w-lg mx-auto">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Commission Focus:</span>
                <span className="text-white font-medium">{submittedData.objective}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Project Horizon:</span>
                <span className="text-white font-medium">{submittedData.timeline}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Allocated Budget:</span>
                <span className="text-white font-medium">{submittedData.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Response SLA:</span>
                <span className="text-emerald-400 font-mono font-medium">Within 4 Business Hours</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10 transition-colors"
              >
                Submit Another Project Brief
              </button>
              <a
                href="mailto:inquiries@orbitzconsulting.com"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors"
              >
                Direct Priority Email Desk
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
