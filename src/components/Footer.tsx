"use client";

import React from "react";
import { ArrowUp, Terminal, Command, Sparkles, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

export default function Footer({
  onOpenCommandPalette,
  onOpenTerminal,
}: {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#02050e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#050914] rounded-[11px] flex items-center justify-center font-display font-bold text-white text-sm">
                RD
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                Raja Diyavath
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Software Engineering Intern & New Grad Candidate 2026
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ctrl+K Palette</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI Mode</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <div>
            &copy; {new Date().getFullYear()} Raja Diyavath. Engineered with Next.js, React 18, TailwindCSS & Framer Motion.
          </div>
          <div className="flex items-center gap-1">
            <span>Targeting Top Engineering Teams</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
