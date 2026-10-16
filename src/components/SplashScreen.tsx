"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

    // Auto dismiss after 5 seconds if not clicked
    const timer = setTimeout(() => {
      handleDismiss();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("orbitz_splash_shown", "true");
    }, 600);
  };

  if (!isVisible) return null;

  const firstWord = "ORBITZ".split("");
  const secondWord = "CONSULTING".split("");

  return (
    <aside
      className="brand-intro"
      style={{
        opacity: isFading ? 0 : 1,
        transform: isFading ? "translateY(-20px)" : "translateY(0)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      aria-label="Welcome to ORBITZ Consulting Ltd"
    >
      <div className="intro-canvas">
        <div className="intro-orbit" />
        <div className="intro-orbit orbit-two" />
        <img
          className="intro-photo intro-photo-one"
          src="/assets/director-studio.jpg"
          alt="Cinematic production set"
        />
        <img
          className="intro-photo intro-photo-two"
          src="/assets/cinema-rig.jpg"
          alt="Cinema rig with anamorphic lens"
        />
      </div>

      <div className="intro-top">
        <span>DOCUMENTARY / MEDIA BUYING / PR / LIVE EVENTS</span>
        <span>ORBITZ CONSULTING LTD // 2026</span>
      </div>

      <div className="intro-centre">
        <p className="intro-prelude">EST. MMXXIV • STRATEGIC MEDIA & PRODUCTION</p>
        <h1 className="intro-title">
          <span className="intro-word first-word">
            {firstWord.map((letter, i) => (
              <span key={i} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                {letter}
              </span>
            ))}
          </span>
          <span className="intro-word second-word">
            {secondWord.map((letter, i) => (
              <span key={i} style={{ animationDelay: `${0.5 + i * 0.06}s` }}>
                {letter}
              </span>
            ))}
          </span>
        </h1>
        <p className="intro-signoff">Where Cinematic Storytelling Meets Calculated Media Power.</p>
      </div>

      <div className="intro-bottom">
        <div className="brand" title="ORBITZ Consulting Ltd">
          <img
            src="/assets/logo.png"
            alt="ORBITZ Consulting Ltd Logo"
            className="brand-logo"
            style={{ width: "auto", height: "36px" }}
          />
        </div>
        <span className="hidden sm:inline">HIGH-IMPACT NARRATIVE ENGINEERING</span>
        <button type="button" onClick={handleDismiss} aria-label="Enter the studio">
          Enter the studio <span>↗</span>
        </button>
      </div>
    </aside>
  );
}
