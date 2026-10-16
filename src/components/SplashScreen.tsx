"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if session has already seen the splash screen in this visit
    const hasSeen = sessionStorage.getItem("orbitz_splash_shown");
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("orbitz_splash_shown", "true");
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("orbitz_splash_shown", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050811] text-white px-4 overflow-hidden select-none"
        >
          {/* Subtle Ambient Cosmic Glows */}
          <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Orbiting concentric subtle rings */}
          <div className="absolute w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full border border-white/[0.04] animate-orbit pointer-events-none" />
          <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full border border-amber-500/10 animate-orbit-reverse pointer-events-none" />

          {/* Central Logo Pedestal — STRICT WHITE BACKGROUND */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* The White Background Container strictly mandated */}
            <div className="relative p-6 sm:p-8 bg-white rounded-3xl shadow-2xl shadow-blue-950/60 border border-slate-200 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
              <div className="relative w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="ORBITZ Consulting Ltd"
                  width={180}
                  height={180}
                  priority
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Editorial Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white">
                ORBITZ <span className="text-gradient-gold">CONSULTING LTD</span>
              </h1>
              <p className="mt-2 text-xs sm:text-sm font-medium tracking-[0.25em] text-slate-400 uppercase">
                Documentary • Media Buying • PR • Events
              </p>
            </motion.div>
          </motion.div>

          {/* Minimalist Progress Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-56 sm:w-72 mt-8 flex flex-col items-center gap-2"
          >
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between w-full text-[11px] tracking-wider font-mono text-slate-400">
              <span>INITIALIZING ENGINE</span>
              <span className="text-amber-400 font-semibold">{progress}%</span>
            </div>
          </motion.div>

          {/* Quick Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-6 sm:bottom-8 text-xs font-mono tracking-widest text-slate-400 hover:text-white uppercase transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm"
          >
            Enter Studio →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
