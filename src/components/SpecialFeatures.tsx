"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Eye, Radio, Sparkles, Terminal, MessageSquare, ShieldCheck, Heart } from "lucide-react";

export default function SpecialFeatures({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [visitorCount, setVisitorCount] = useState(4892);
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    // Simulate real-time ping latency variance
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 12);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* FEATURE 1: Spotify Now Playing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Music className="w-4 h-4 text-emerald-400" />
                  <span>SPOTIFY // NOW PLAYING</span>
                </span>
                
                {/* Audio Equalizer animation bars */}
                <div className="flex items-end gap-1 h-4">
                  <span className="w-1 bg-emerald-400 animate-pulse h-3" />
                  <span className="w-1 bg-emerald-400 animate-pulse h-4" />
                  <span className="w-1 bg-emerald-400 animate-pulse h-2" />
                  <span className="w-1 bg-emerald-400 animate-pulse h-3.5" />
                </div>
              </div>

              <h4 className="font-display font-bold text-base text-white mb-1">
                Deep Focus Synthwave & Lofi Coding
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                Artist: Cyberpunk Systems // Focus Mode
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px] text-emerald-400">Coding Atmosphere</span>
              <span>100% Flow State</span>
            </div>
          </motion.div>

          {/* FEATURE 2: Live Latency & Visitor Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Radio className="w-4 h-4 text-cyan-400" />
                  <span>TELEMETRY & STATUS</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-mono mb-1">Total Profile Views</div>
                  <div className="font-display text-2xl font-bold text-white flex items-center gap-1">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    {visitorCount.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono mb-1">API Edge Latency</div>
                  <div className="font-display text-2xl font-bold text-white font-mono text-emerald-400">
                    {latency}ms
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Region: Hyderabad, IN</span>
              <span className="text-cyan-400">Vercel Edge Network</span>
            </div>
          </motion.div>

          {/* FEATURE 3: CLI Terminal Launcher Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group bg-gradient-to-br from-cyan-950/30 to-purple-950/20"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>DEVELOPER CLI MODE</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">
                Prefer Command-Line Interface?
              </h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Execute commands like <code className="text-cyan-300 font-mono">skills</code>, <code className="text-cyan-300 font-mono">projects</code>, or <code className="text-cyan-300 font-mono">sudo hire</code> directly in the interactive web shell.
              </p>
            </div>

            <button
              onClick={onOpenTerminal}
              className="mt-6 w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Interactive Shell</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
