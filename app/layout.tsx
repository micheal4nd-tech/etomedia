import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Etomedia — Extraordinary Capability for Ordinary People",
  description:
    "AI-powered tools for parents, professionals, entrepreneurs, and faith leaders. Etomedia puts professional-level capability directly in your hands.",
  keywords:
    "AI tools, productivity, family, career, faith, Etomedia, Lumi Stories, SylphCV, Keruxly, LinguaKids",
  openGraph: {
    title: "Etomedia — Extraordinary Capability for Ordinary People",
    description:
      "AI-powered tools for parents, professionals, entrepreneurs, and faith leaders.",
    siteName: "Etomedia",
    type: "website",
    url: "https://etomedia.co.uk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-midnight antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
