import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ORBITZ Consulting Ltd | Media Productions, Buying, PR & Events Management",
  description: "ORBITZ Consulting Ltd is an elite media consultancy and creative production house bridging cinematic documentary production, programmatic media buying, high-stakes PR, and broadcast-grade events.",
  keywords: [
    "ORBITZ Consulting Ltd",
    "Media Productions",
    "Documentary Production",
    "Media Buying",
    "Public Relations",
    "Events Management",
    "Broadcast Production",
    "Media Strategy"
  ],
  authors: [{ name: "ORBITZ Consulting Ltd" }],
  openGraph: {
    title: "ORBITZ Consulting Ltd — Elite Media Productions & Strategic Advisory",
    description: "Cinematic documentary production, omnichannel media buying, strategic PR, and world-class live events management.",
    siteName: "ORBITZ Consulting Ltd",
    images: [
      {
        url: "/assets/logo.png",
        width: 1277,
        height: 1232,
        alt: "ORBITZ Consulting Ltd Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
    <html lang="en" className="dark">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased bg-[#050811] text-slate-100 min-h-screen selection:bg-amber-400 selection:text-slate-950 flex flex-col font-sans`}
      >
        <SplashScreen />
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
