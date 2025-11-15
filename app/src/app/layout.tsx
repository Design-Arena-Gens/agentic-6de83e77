import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AccrueFlow™ v2.0 — Timeless Intelligence Platform",
  description:
    "AccrueFlow™ delivers frictionless, unbiased intelligence dossiers for design and engineering leadership with bank-grade security and zero human bias.",
  category: "finance",
  keywords: [
    "AccrueFlow",
    "intelligence dossiers",
    "digital private bank",
    "secure intake",
    "enterprise due diligence",
  ],
  openGraph: {
    title: "AccrueFlow™ v2.0 — Timeless Intelligence Platform",
    description:
      "The gold-standard digital private bank for frictionless, unbiased intelligence dossiers.",
    url: "https://agentic-6de83e77.vercel.app",
    siteName: "AccrueFlow™",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccrueFlow™ v2.0",
    description:
      "Digital private bank delivering frictionless, unbiased intelligence dossiers.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#03050d]`}
      >
        {children}
      </body>
    </html>
  );
}
