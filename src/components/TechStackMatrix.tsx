"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Sparkles, Layers, Code2, Globe, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { key: "All", label: "All Skills" },
    { key: "aiGenAI", label: "Generative AI & LLMs" },
    { key: "backendFrameworks", label: "Backend & APIs" },
    { key: "programming", label: "Languages & DS/Algo" },
    { key: "xrGraphics", label: "Spatial & XR (Unity)" },
    { key: "databasesTools", label: "Databases & Tools" },
  ];

  const skillGroups = [
    {
      category: "aiGenAI",
      title: "Generative AI, LLMs & RAG Architecture",
      icon: Cpu,
      color: "from-cyan-500 to-blue-600",
      skills: PORTFOLIO_DATA.skills.aiGenAI
    },
    {
      category: "backendFrameworks",
      title: "Backend Microservices & Async APIs",
      icon: Terminal,
      color: "from-purple-500 to-indigo-600",
      skills: PORTFOLIO_DATA.skills.backendFrameworks
    },
    {
      category: "programming",
      title: "Programming & Data Structures",
      icon: Code2,
      color: "from-emerald-500 to-teal-600",
      skills: PORTFOLIO_DATA.skills.programming
    },
    {
      category: "xrGraphics",
      title: "Spatial Computing & VR Development",
      icon: Layers,
      color: "from-amber-500 to-orange-600",
      skills: PORTFOLIO_DATA.skills.xrGraphics
    },
    {
      category: "databasesTools",
      title: "Databases, Vector Indexes & DevOps",
      icon: Database,
      color: "from-blue-500 to-cyan-600",
      skills: PORTFOLIO_DATA.skills.databasesTools
    },
    {
      category: "frontend",
      title: "Modern Frontend Web Stack",
      icon: Globe,
      color: "from-pink-500 to-rose-600",
      skills: PORTFOLIO_DATA.skills.frontend
    }
  ];

  const filteredGroups = activeCategory === "All"
    ? skillGroups
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>SKILLS & TECHNOLOGIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Skills & Core <br />
              <span className="gradient-text-cyan">Tech Stack</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === c.key
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 opacity-70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Proficiency: Applied Production</span>
                  <span className="text-cyan-400 font-bold">100% Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
