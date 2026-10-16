import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orbitz: {
          navy: "#0A1128",
          dark: "#050811",
          card: "rgba(12, 19, 39, 0.7)",
          cardHover: "rgba(18, 28, 56, 0.85)",
          gold: "#D4AF37",
          goldLight: "#F3E5AB",
          goldMuted: "#AA8C2C",
          cyan: "#00B4D8",
          cyanGlow: "#0077B6",
          slate: "#8D99AE",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(212, 175, 55, 0.25)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        orbit: "orbit 24s linear infinite",
        "orbit-reverse": "orbitReverse 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
