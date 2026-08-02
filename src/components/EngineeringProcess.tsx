"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, GitBranch, Layers, Workflow, Database, RefreshCw } from "lucide-react";

export default function EngineeringProcess() {
  const principles = [
    {
      icon: Cpu,
      title: "Low-Latency AI & RAG Pipelines",
      subtitle: "Dense Vector Search & Quantization",
      description: "Optimizing embedding models (LLaMA-2, Gemma-2B) and FAISS vector index structures to achieve sub-300ms retrieval and streaming inference for high concurrency."
    },
    {
      icon: Zap,
      title: "Asynchronous Python Backends",
      subtitle: "FastAPI & Event-Driven Signals",
      description: "Architecting non-blocking AsyncIO event loops for FastAPI microservices and real-time telemetry processing without request queue degradation."
    },
    {
      icon: Layers,
      title: "Modular Spatial Architecture",
      subtitle: "Meta XR SDK & OpenXR",
      description: "Decoupling 3D simulation scenes in Unity using ScriptableObjects, event channels, and Wit.ai voice command handlers for clean reusability."
    },
    {
      icon: Shield,
      title: "Clean Code & System Design",
      subtitle: "SOLID & Failure Mode Auditing",
      description: "Building production-grade applications with explicit error handling, unit testing, vector normalization, and vulnerability audits."
    }
  ];

  return (
    <section id="process" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#050917] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>ENGINEERING APPROACH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            How I Build <br />
            <span className="gradient-text-cyan">Reliable & Efficient Software</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            I focus on building maintainable codebases, designing clean microservice endpoints, 
            and keeping latency low across vector retrieval and stream processing pipelines.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all" />

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                  {p.subtitle}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
