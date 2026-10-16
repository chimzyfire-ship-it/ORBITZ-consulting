"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Film, Megaphone, Radio, Calendar, Sparkles } from "lucide-react";
import WhiteLogoBadge from "./WhiteLogoBadge";

const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Selected Works", href: "/work" },
  { name: "About the Firm", href: "/about" },
  { name: "Concierge", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050811]/85 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo strictly resting on a crisp white container */}
        <div className="flex items-center gap-3">
          <WhiteLogoBadge size="sm" showText={true} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-amber-400/15 text-amber-300 border border-amber-400/30 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button (Inquiry) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/inquiry"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs lg:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/inquiry"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-400 text-slate-950"
          >
            Inquire
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Glassmorphic) */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#070c1a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-amber-400/10 text-amber-300 border border-amber-400/20"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/inquiry"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-xl shadow-amber-500/25"
              >
                <span>Launch Interactive Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
