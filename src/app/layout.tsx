import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raja Diyavath | AI Microservices & Software Systems Engineer",
  description:
    "Portfolio of Raja Diyavath — Software Engineering Intern & New Grad candidate specializing in Generative AI, LLM RAG pipelines, FastAPI backend services, and spatial computing.",
  keywords: [
    "Raja Diyavath",
    "Software Engineer Portfolio",
    "Generative AI Engineer",
    "LLM RAG Pipeline",
    "FastAPI Microservices",
    "Unity OpenXR",
    "Python Developer",
    "FAISS Vector Search",
    "New Grad SWE 2026",
  ],
  authors: [{ name: "Raja Diyavath", url: "https://github.com/rajadyavath" }],
  openGraph: {
    title: "Raja Diyavath | Software Engineer Portfolio",
    description: "Architecting Low-Latency AI Microservices, LLM RAG Pipelines & Scalable Software.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${firaCode.variable} font-sans bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
