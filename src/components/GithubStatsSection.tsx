"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Code, Trophy, ExternalLink, Activity } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

export default function GithubStatsSection() {
  const [contributionMatrix, setContributionMatrix] = useState<number[][]>([]);

  // Generate matrix deterministically after client mount to prevent Hydration Mismatch
  useEffect(() => {
    const weeks = 40;
    const daysPerWeek = 7;
    const matrix: number[][] = [];

    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const seed = (w * 7 + d * 3) % 10;
        const intensity = seed > 4 ? (seed % 4) + 1 : 0;
        week.push(intensity);
      }
      matrix.push(week);
    }
    setContributionMatrix(matrix);
  }, []);

  const getIntensityColor = (intensity: number) => {
    switch (intensity) {
      case 1: return "bg-cyan-950 border border-cyan-800/40";
      case 2: return "bg-cyan-700/60 shadow-sm shadow-cyan-500/20";
      case 3: return "bg-cyan-500 shadow-md shadow-cyan-500/40";
      case 4: return "bg-emerald-400 shadow-lg shadow-emerald-400/50";
      default: return "bg-slate-900/80 border border-white/5";
    }
  };

  return (
    <section id="stats" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>CODING ACTIVITY & LEETCODE METRICS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Continuous Shipping & <br />
            <span className="gradient-text-cyan">Algorithmic Problem Solving</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Consistently writing code, optimizing algorithms, and pushing commits to GitHub.
          </p>
        </div>

        {/* Top Cards: GitHub & LeetCode Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* GitHub Activity Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    GitHub Activity Heatmap
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">@{PORTFOLIO_DATA.githubStats.username}</p>
                </div>
              </div>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Matrix Simulation Grid */}
            <div className="mb-6 overflow-x-auto pb-2 no-scrollbar min-h-[96px]">
              {contributionMatrix.length > 0 && (
                <div className="flex gap-1.5 min-w-[500px]">
                  {contributionMatrix.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((intensity, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-3 h-3 rounded-sm transition-all hover:scale-125 ${getIntensityColor(intensity)}`}
                          title={`Activity level: ${intensity}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-3 font-mono text-center">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xl font-bold text-cyan-400">{PORTFOLIO_DATA.githubStats.totalCommits}</div>
                <div className="text-[10px] text-slate-400 uppercase">Commits</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xl font-bold text-purple-400">{PORTFOLIO_DATA.githubStats.repositoriesCount}</div>
                <div className="text-[10px] text-slate-400 uppercase">Repos</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xl font-bold text-emerald-400">{PORTFOLIO_DATA.githubStats.contributionsThisYear}</div>
                <div className="text-[10px] text-slate-400 uppercase">This Year</div>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Algorithmic Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    LeetCode Problem Matrix
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">@{PORTFOLIO_DATA.leetcodeStats.username}</p>
                </div>
              </div>

              <a
                href={PORTFOLIO_DATA.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-amber-400 flex items-center gap-1 transition-colors"
              >
                <span>LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Total Problems Banner */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-purple-950/30 border border-amber-500/30 mb-6">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase">Total Problems Solved</div>
                <div className="font-display text-3xl font-extrabold text-white">{PORTFOLIO_DATA.leetcodeStats.problemsSolved}</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Trophy className="w-6 h-6" />
              </div>
            </div>

            {/* Categories breakdown */}
            <div className="grid grid-cols-2 gap-3">
              {PORTFOLIO_DATA.leetcodeStats.categories.map((cat, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">{cat.name}</span>
                  <span className="text-amber-400 font-bold">{cat.count}+</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
