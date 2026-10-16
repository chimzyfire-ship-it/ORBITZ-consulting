"use client";

import Image from "next/image";
import Link from "next/link";

interface WhiteLogoBadgeProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  withLink?: boolean;
  className?: string;
}

export default function WhiteLogoBadge({
  size = "md",
  showText = false,
  withLink = true,
  className = "",
}: WhiteLogoBadgeProps) {
  // Dimensions for the crisp white container
  const sizeMap = {
    xs: {
      box: "h-9 px-2.5 py-1 rounded-lg",
      imgH: 26,
      imgW: 26,
      text: "text-sm",
    },
    sm: {
      box: "h-11 px-3 py-1.5 rounded-xl",
      imgH: 32,
      imgW: 32,
      text: "text-base",
    },
    md: {
      box: "h-14 px-4 py-2 rounded-2xl",
      imgH: 42,
      imgW: 42,
      text: "text-lg",
    },
    lg: {
      box: "h-20 px-6 py-3 rounded-2xl",
      imgH: 62,
      imgW: 62,
      text: "text-xl",
    },
    xl: {
      box: "h-28 px-8 py-4 rounded-3xl",
      imgH: 90,
      imgW: 90,
      text: "text-2xl",
    },
  };

  const current = sizeMap[size];

  const content = (
    <div
      className={`inline-flex items-center gap-3 bg-white text-slate-900 border border-slate-200 shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${current.box} ${className}`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/assets/logo.png"
          alt="ORBITZ Consulting Ltd"
          width={current.imgW}
          height={current.imgH}
          priority
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col text-left pr-1">
          <span className="font-heading font-extrabold tracking-tight text-slate-950 leading-none text-base sm:text-lg">
            ORBITZ
          </span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-700 leading-tight">
            Consulting Ltd
          </span>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
