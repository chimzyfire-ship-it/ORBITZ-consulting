import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080a0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Build your narrative. We command your broadcast. | ORBITZ Consulting Ltd",
  description: "ORBITZ Consulting Ltd creates, executes, and broadcasts cinematic documentary productions, programmatic media buying, strategic PR, and world-class live events.",
  keywords: [
    "ORBITZ Consulting Ltd",
    "Documentary Production",
    "Media Buying",
    "Public Relations",
    "Events Management",
    "Broadcast Productions"
  ],
  authors: [{ name: "ORBITZ Consulting Ltd" }],
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased bg-[#080a0c] text-[#f7f5ef] min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-sans), Arial, sans-serif" }}
      >
        <SplashScreen />
        <Navbar />
        <main id="main" className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
