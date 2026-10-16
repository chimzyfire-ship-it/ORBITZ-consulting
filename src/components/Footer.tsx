"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Film, Globe } from "lucide-react";
import WhiteLogoBadge from "./WhiteLogoBadge";

export default function Footer() {
  return (
    <footer className="relative bg-[#04060d] border-t border-white/10 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info & Sacred White Logo Badge */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <WhiteLogoBadge size="md" showText={true} />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              ORBITZ Consulting Ltd is a premier media consultancy and broadcast production powerhouse. We engineer high-stakes narrative documentaries, programmatic media buying operations, global PR campaigns, and unforgettable immersive summits.
            </p>
            <div className="flex items-center gap-3 text-xs text-amber-300 font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE PRODUCTION DESK • ACCEPTING Q3/Q4 COMMISSIONS</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#documentary" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Documentary Production</span>
                </Link>
              </li>
              <li>
                <Link href="/services#media-buying" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Media Buying & Ad Ops</span>
                </Link>
              </li>
              <li>
                <Link href="/services#pr-comms" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>PR & Strategic Comms</span>
                </Link>
              </li>
              <li>
                <Link href="/services#events" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Events & Live Broadcast</span>
                </Link>
              </li>
              <li>
                <Link href="/services#advisory" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Executive Media Advisory</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
              Company & Works
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About ORBITZ
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-amber-400 transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-amber-400 transition-colors text-amber-300 font-medium flex items-center gap-1">
                  <span>Interactive Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Concierge & Press Desk
                </Link>
              </li>
              <li>
                <Link href="/about#standards" className="hover:text-amber-400 transition-colors">
                  Broadcast Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Operations */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
              Global Desks
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>London • Lagos • Dubai • New York</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>inquiries@orbitzconsulting.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Rapid Crisis & Broadcast Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 ORBITZ Consulting Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Broadcast-Grade 4K/8K Standards</span>
            <span>•</span>
            <span>Omnichannel Ad Intelligence</span>
            <span>•</span>
            <span>Global PR Bureau</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
