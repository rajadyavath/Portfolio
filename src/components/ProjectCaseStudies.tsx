"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, ExternalLink, Github, Code2, Layers, Cpu, CheckCircle2, 
  AlertCircle, ChevronRight, Terminal, Copy, Check, Sparkles, Activity, Clock
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolioContent";

export default function ProjectCaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy>(PORTFOLIO_DATA.projects[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code' | 'challenges' | 'metrics'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ["All", "GenAI & LLMs", "XR / Spatial Computing", "Distributed Systems", "Machine Learning"];

  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROJECTS & CASE STUDIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured Projects & <br />
              <span className="gradient-text-cyan">System Architecture</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Grid & Selector layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Project List Selector sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {filteredProjects.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    setActiveProject(project);
                    setActiveTab('overview');
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? "glass-panel bg-gradient-to-r from-cyan-950/50 via-slate-900 to-indigo-950/40 border-cyan-500/60 shadow-xl shadow-cyan-950/50"
                      : "glass-panel border-white/10 hover:border-white/25 opacity-85 hover:opacity-100"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-purple-500" />
                  )}
                  
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300 font-bold mb-2">
                    <span>{project.category}</span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 line-clamp-2 mb-4 font-light">
                    {project.tagline}
                  </p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {project.timeline}
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400 font-bold">
                      Inspect System <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Case Study Detail Viewer (8 cols on lg) */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    CASE STUDY: {activeProject.category}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{activeProject.subtitle}</p>
                </div>

                {/* External links */}
                <div className="flex items-center gap-3">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {activeProject.liveDemoUrl && (
                    <a
                      href={activeProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Detail Navigation Tabs */}
              <div className="flex border-b border-white/10 my-6 overflow-x-auto no-scrollbar gap-2">
                {[
                  { id: 'overview', label: 'Problem & Overview', icon: FolderGit2 },
                  { id: 'architecture', label: 'Architecture', icon: Layers },
                  { id: 'code', label: 'Code Snippet', icon: Code2 },
                  { id: 'challenges', label: 'Engineering Challenges', icon: AlertCircle },
                  { id: 'metrics', label: 'Metrics & Lessons', icon: Activity },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                        isActive
                          ? "bg-white/10 text-cyan-400 border-b-2 border-cyan-400"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="min-h-[340px]">
                
                {/* TAB 1: OVERVIEW */}
                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-cyan-400" /> The Problem Statement
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-light glass-panel p-4 rounded-2xl border-white/5">
                        {activeProject.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-purple-400" /> Why I Engineered This
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-light glass-panel p-4 rounded-2xl border-white/5">
                        {activeProject.whyBuilt}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                        Tech Stack Employed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: ARCHITECTURE */}
                {activeTab === 'architecture' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                      System Design & Pipeline Components
                    </h4>
                    <div className="space-y-3">
                      {activeProject.architecture.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
                        >
                          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <div className="text-xs text-slate-300 leading-relaxed">
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: CODE HIGHLIGHT */}
                {activeTab === 'code' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="flex items-center justify-between bg-[#080d1a] px-4 py-2 rounded-t-xl border border-white/10 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        {activeProject.codeHighlight.filename}
                      </span>
                      <button
                        onClick={() => handleCopyCode(activeProject.codeHighlight.code)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] transition-colors"
                      >
                        {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode ? "Copied" : "Copy"}</span>
                      </button>
                    </div>

                    <pre className="p-4 bg-[#050814] rounded-b-xl border border-t-0 border-white/10 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[260px]">
                      <code>{activeProject.codeHighlight.code}</code>
                    </pre>

                    <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300">
                      <strong className="text-cyan-400">Code Rationale:</strong> {activeProject.codeHighlight.explanation}
                    </div>
                  </motion.div>
                )}

                {/* TAB 4: CHALLENGES */}
                {activeTab === 'challenges' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {activeProject.challenges.map((c, i) => (
                      <div key={i} className="p-4 rounded-2xl glass-panel border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          Challenge: {c.problem}
                        </div>
                        <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-light pl-6">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong>Engineering Solution:</strong> {c.solution}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* TAB 5: METRICS & LESSONS */}
                {activeTab === 'metrics' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                        Key Performance Metrics & Impact
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeProject.metrics.map((m, i) => (
                          <div key={i} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                        Lessons Learned
                      </h4>
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 font-light">
                        {activeProject.lessonsLearned.map((lesson, i) => (
                          <li key={i}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
