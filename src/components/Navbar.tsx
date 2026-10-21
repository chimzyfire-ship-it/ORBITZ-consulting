"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "./ArrowIcon";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap nav-shell">
        {/* Transparent brand artwork over a feathered studio glow */}
        <Link className="brand" href="/" aria-label="ORBITZ Consulting Ltd">
          <img
            className="brand-logo"
            src="/assets/logo.png"
            alt="ORBITZ Consulting Ltd"
            width={1277}
            height={1232}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/services"
            className={pathname === "/services" ? "gold font-medium" : ""}
          >
            The Practices
          </Link>
          <Link
            href="/work"
            className={pathname === "/work" ? "gold font-medium" : ""}
          >
            Selected Works
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "gold font-medium" : ""}
          >
            The Firm
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "gold font-medium" : ""}
          >
            Concierge
          </Link>
          <Link className="button small-button" href="/inquiry">
            Start Inquiry <span><ArrowIcon /></span>
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Link className="button small-button" href="/inquiry" style={{ padding: "8px 14px", minHeight: "36px", fontSize: "11px", gap: "8px" }}>
            Inquire <span><ArrowIcon style={{ width: "11px", height: "11px" }} /></span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            style={{
              background: "transparent",
              color: "#ffffff",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              cursor: "pointer",
              border: "none",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#ffffff",
                transition: "all 0.2s",
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#ffffff",
                opacity: mobileOpen ? 0 : 1,
                transition: "all 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#ffffff",
                transition: "all 0.2s",
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "#080a0c",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            padding: "24px 28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className="md:hidden"
        >
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "16px", color: pathname === "/services" ? "var(--gold)" : "#c0c2bf" }}
          >
            The Practices
          </Link>
          <Link
            href="/work"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "16px", color: pathname === "/work" ? "var(--gold)" : "#c0c2bf" }}
          >
            Selected Works
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "16px", color: pathname === "/about" ? "var(--gold)" : "#c0c2bf" }}
          >
            The Firm
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: "16px", color: pathname === "/contact" ? "var(--gold)" : "#c0c2bf" }}
          >
            Concierge & Press Desk
          </Link>
          <Link
            href="/inquiry"
            onClick={() => setMobileOpen(false)}
            className="button"
            style={{ justifyContent: "center", marginTop: "10px" }}
          >
            Start Inquiry <span><ArrowIcon /></span>
          </Link>
        </div>
      )}
    </header>
  );
}
