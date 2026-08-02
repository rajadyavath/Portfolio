"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Target, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

export default function StorySection() {
  return (
    <section id="story" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>MY JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            From Automobile Telemetry to <br />
            <span className="gradient-text-cyan">Building AI & Software</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed"
          >
            I enjoy breaking down complex problems and turning ideas into clean, functional software. 
            Here is a look at my background and how I transitioned into software development.
          </motion.p>
        </div>

        {/* Narrative Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PORTFOLIO_DATA.storyNarrative.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
                    {item.stage}
                  </span>
                  {idx === 0 && <Cpu className="w-5 h-5 text-cyan-400" />}
                  {idx === 1 && <Code2 className="w-5 h-5 text-indigo-400" />}
                  {idx === 2 && <Target className="w-5 h-5 text-emerald-400" />}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300/90 leading-relaxed font-light">
                  {item.content}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Core Focus</span>
                <span className="text-white font-medium">
                  {idx === 0 ? "Systems Engineering" : idx === 1 ? "LLM RAG & FastAPI" : "Production Scale"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problems I Love Solving Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-900/50 to-purple-950/20 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                <span>WHAT PROBLEMS I LIKE SOLVING</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                High Throughput, Low Latency & Contextual Intelligence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I thrive at the intersection of model optimization and backend infrastructure. 
                Whether it is reducing vector retrieval latency with FAISS, designing real-time 
                event ingestion dashboards, or building hands-free XR voice assistants with Meta XR SDK and Wit.ai.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "LLM Fine-Tuning",
                "FAISS Dense Vector RAG",
                "FastAPI Microservices",
                "Unity OpenXR VR",
                "Event-Driven Pipelines",
                "Automotive Data Analytics"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
