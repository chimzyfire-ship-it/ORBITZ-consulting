"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if session has already dismissed splash
    const hasSeen = sessionStorage.getItem("orbitz_splash_shown");
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    // Auto dismiss after 7 seconds to let the full animation play
    const timer = setTimeout(() => {
      handleDismiss();
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("orbitz_splash_shown", "true");
    }, 700);
  };

  if (!isVisible) return null;

  const firstWord = "ORBITZ".split("");
  const secondWord = "CONSULTING LTD".split("");

  return (
    <aside
      className="brand-intro"
      style={{
        opacity: isFading ? 0 : 1,
        transform: isFading ? "translateY(-20px)" : "translateY(0)",
        transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      aria-label="Welcome to ORBITZ Consulting Ltd"
    >
      {/* Background 3D Perspective Photos & Cosmic Blue/Gold Orbit Rings */}
      <div className="intro-canvas">
        <div className="intro-orbit" />
        <div className="intro-orbit orbit-two" />
        <img
          className="intro-photo intro-photo-one"
          src="/assets/pexels-rabiu-kabir-32275124.jpg"
          alt="Woman photographer with a camera in a studio"
        />
        <img
          className="intro-photo intro-photo-two"
          src="/assets/cinema-rig.jpg"
          alt="Cinema rig with anamorphic lens"
        />
      </div>

      {/* Top minimal bar (responsive, never overflows mobile) */}
      <div className="intro-top">
        <span className="hidden sm:inline" style={{ color: "var(--gold-accent)", letterSpacing: "2px" }}>
          MMXXIV • STRATEGIC MEDIA & CINEMATIC ADVISORY
        </span>
        <span className="sm:hidden" style={{ color: "var(--gold-accent)", letterSpacing: "1px", fontSize: "9px" }}>
          STRATEGIC MEDIA & ADVISORY
        </span>
        <span style={{ color: "#0ea5e9", letterSpacing: "1px", fontSize: "9px" }}>
          UK • UAE • US • AF
        </span>
      </div>

      {/* Center Stage: Exclusively the LOGO and the BRAND NAME */}
      <div className="intro-centre">
        {/* Transparent artwork with a soft ivory spotlight */}
        <div className="intro-logo-pedestal">
          <Image
            src="/assets/logo.png"
            alt="ORBITZ Consulting Ltd Logo"
            width={1277}
            height={1232}
            priority
            className="intro-logo-img"
          />
        </div>

        {/* Brand Name Typography */}
        <h1 className="intro-title">
          <span className="intro-word first-word">
            {firstWord.map((letter, i) => (
              <span key={i} style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                {letter}
              </span>
            ))}
          </span>
          <span className="intro-word second-word" style={{ marginTop: "6px" }}>
            {secondWord.map((letter, i) => (
              <span
                key={i}
                style={{
                  animationDelay: `${0.75 + i * 0.05}s`,
                  color: "var(--gold-accent)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Bottom Bar: Enter the studio interaction with vector ArrowIcon */}
      <div className="intro-bottom" style={{ justifyContent: "center" }}>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Enter the studio"
          style={{
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
          }}
        >
          Enter the studio <span><ArrowIcon /></span>
        </button>
      </div>
    </aside>
  );
}
