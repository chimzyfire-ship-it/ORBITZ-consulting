import InteractiveInquiry from "@/components/InteractiveInquiry";
import WhiteLogoBadge from "@/components/WhiteLogoBadge";
import { ShieldCheck, Clock, Award, Sparkles } from "lucide-react";

export const metadata = {
  title: "Interactive Project Commission & Inquiry | ORBITZ Consulting Ltd",
  description: "Architect your media production, media buying, PR, or event brief in 2 simple questions with ORBITZ Consulting Ltd.",
};

export default function InquiryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-mesh-cosmic relative overflow-hidden">
      
      {/* Subtle Floating Ambient Badges in Background */}
      <div className="absolute top-16 left-8 sm:left-24 hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md animate-float text-xs font-mono text-amber-300 pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>SLA: 4-Hour Partner Response</span>
      </div>

      <div className="absolute bottom-24 right-8 sm:right-24 hidden lg:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md animate-float-reverse text-xs font-mono text-sky-400 pointer-events-none">
        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
        <span>Strict Non-Disclosure Guarantee</span>
      </div>

      <div className="max-w-5xl w-full mx-auto space-y-8 relative z-10">
        
        {/* Brand identity header with white logo island */}
        <div className="flex justify-center mb-2">
          <WhiteLogoBadge size="sm" showText={true} />
        </div>

        {/* The interactive inquiry machine */}
        <InteractiveInquiry isStandAlone={true} />

        {/* Confidence & Trust Badges */}
        <div className="pt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-xs font-mono text-amber-400 block">CONFIDENTIALITY</span>
            <p className="text-xs text-slate-400">All submissions protected by mutual enterprise non-disclosure.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-xs font-mono text-amber-400 block">EXECUTIVE REVIEW</span>
            <p className="text-xs text-slate-400">Reviewed directly by a Managing Partner & Senior Producer.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-xs font-mono text-amber-400 block">RAPID QUOTING</span>
            <p className="text-xs text-slate-400">Formal scope and technical budget returned within 24 hours.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
