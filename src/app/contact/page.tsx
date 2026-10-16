"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Globe, 
  ShieldAlert, 
  MessageSquare 
} from "lucide-react";
import WhiteLogoBadge from "@/components/WhiteLogoBadge";
import confetti from "canvas-confetti";

const globalDesks = [
  {
    city: "London",
    role: "European Headquarters & Media Buying Desk",
    address: "Berkeley Square House, Mayfair, London W1J 6BD",
    tel: "+44 (0) 20 7946 0892",
    email: "london@orbitzconsulting.com",
    timezone: "GMT / BST",
  },
  {
    city: "Lagos",
    role: "Pan-African Production Hub & Soundstage",
    address: "Admiralty Way, Lekki Phase 1 / Victoria Island, Lagos",
    tel: "+234 1 892 4500",
    email: "lagos@orbitzconsulting.com",
    timezone: "WAT (UTC+1)",
  },
  {
    city: "Dubai",
    role: "Middle East Strategic Comms & Events Bureau",
    address: "Gate Precinct 4, DIFC, Dubai, United Arab Emirates",
    tel: "+971 4 362 7000",
    email: "dubai@orbitzconsulting.com",
    timezone: "GST (UTC+4)",
  },
  {
    city: "New York",
    role: "Post-Production & Financial PR Office",
    address: "One World Trade Center, Suite 8500, New York, NY 10007",
    tel: "+1 212 555 0198",
    email: "ny@orbitzconsulting.com",
    timezone: "EST / EDT",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Media Inquiry",
    desk: "London",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ["#D4AF37", "#ffffff", "#00B4D8"],
      });
    }, 600);
  };

  return (
    <div className="flex flex-col w-full bg-[#050811] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-2">
          <span>Global Production & Advisory Desks</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          Connect with ORBITZ Concierge
        </h1>
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
          Direct coordinates for our executive producers, media buying strategists, and crisis communications directors.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Message Box */}
        <div className="lg:col-span-7 glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Direct Inquiries</span>
              <h2 className="text-2xl font-heading font-bold text-white mt-1">Transmitting Direct Dispatch</h2>
            </div>
            <WhiteLogoBadge size="xs" showText={false} withLink={false} />
          </div>

          {sent ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Message Dispatched</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, {formData.name}. Your correspondence has been routed to the {formData.desk} Executive Desk. We will review and respond promptly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-mono hover:bg-white/20 transition-colors"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Elena Rostova"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@rostovagroup.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090e21] border border-white/10 text-white focus:outline-none focus:border-amber-400/60 text-sm"
                  >
                    <option value="Documentary Commission">Documentary Commission</option>
                    <option value="Media Buying Mandate">Media Buying Mandate</option>
                    <option value="PR & Crisis Advisory">PR & Crisis Advisory</option>
                    <option value="Event Production">Event Production</option>
                    <option value="Press & Speaking Request">Press & Speaking Request</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                    Preferred Bureau Desk
                  </label>
                  <select
                    value={formData.desk}
                    onChange={(e) => setFormData({ ...formData, desk: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090e21] border border-white/10 text-white focus:outline-none focus:border-amber-400/60 text-sm"
                  >
                    <option value="London">London (UK & Europe)</option>
                    <option value="Lagos">Lagos (West Africa & Pan-Africa)</option>
                    <option value="Dubai">Dubai (Middle East & GCC)</option>
                    <option value="New York">New York (North America)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1">
                  Message & Context *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key background details, project dates, or press timelines..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 font-heading font-bold text-sm hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Transmit to ORBITZ Executive Desk</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Global Desks & Crisis Alert */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Rapid Crisis Hotline Card */}
          <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
              <ShieldAlert className="w-4 h-4" />
              <span>Priority 24/7 Crisis Response</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-white">
              High-Stakes Breaking Event or PR Emergency?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For active hostile media exposure or immediate broadcast incident control, mark your message subject as &ldquo;URGENT CRISIS&rdquo; or contact our direct hotline.
            </p>
            <div className="text-xs font-mono text-amber-300 font-semibold pt-1">
              HOTLINE: +44 20 7946 0899 (ENTERPRISE ONLY)
            </div>
          </div>

          {/* Bureau Cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              International Desks
            </h3>

            {globalDesks.map((d) => (
              <div
                key={d.city}
                className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2 hover:border-amber-400/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-white text-base">{d.city}</span>
                  <span className="text-[11px] font-mono text-amber-400">{d.timezone}</span>
                </div>
                <p className="text-xs text-slate-400">{d.role}</p>
                <p className="text-xs text-slate-300 font-mono">{d.address}</p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5 font-mono">
                  <span>{d.tel}</span>
                  <span className="text-amber-300">{d.email}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
