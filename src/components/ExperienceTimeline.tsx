"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'achievements'>('work');

  return (
    <section id="experience" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#050815] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TIMELINE & CREDENTIALS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Professional Experience & <br />
              <span className="gradient-text-cyan">Academic Foundation</span>
            </h2>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 glass-panel p-1.5 rounded-2xl border border-white/10">
            {[
              { id: 'work', label: 'Work Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'achievements', label: 'Certifications & Honors', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* WORK EXPERIENCE TAB */}
        {activeTab === 'work' && (
          <div className="space-y-8">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-cyan-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  {/* Bullet Highlights */}
                  <div className="lg:col-span-8 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Engineering Responsibilities & Contributions
                    </h4>
                    {exp.description.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Metrics & Tech Stack */}
                  <div className="lg:col-span-4 space-y-4">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                        Quantified Impact Metrics
                      </h4>
                      <div className="space-y-2">
                        {exp.impactMetrics.map((m, mIdx) => (
                          <div key={mIdx} className="px-3 py-1.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" />
                            {m}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

        {/* EDUCATION TAB */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-xs text-cyan-400 font-semibold">
                    {edu.period}
                  </span>

                  <h3 className="font-display text-lg font-bold text-white mt-1 mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-xs text-slate-300 mb-3">{edu.institution}</p>
                  <p className="text-xs font-mono text-purple-400 mb-4">{edu.location}</p>

                  {edu.details && (
                    <ul className="space-y-1.5 text-xs text-slate-400 font-light">
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 font-mono text-sm font-extrabold text-cyan-300">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 uppercase">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{ach.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {ach.title}
                  </h3>

                  <div className="text-xs font-semibold text-cyan-400 mb-2">
                    {ach.organization}
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
