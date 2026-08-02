"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, Check, Copy, Sparkles, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Let&apos;s Connect & <br />
                <span className="gradient-text-cyan">Work Together</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                Currently open for Software Engineering Intern and New Grad roles for 2026. 
                Feel free to reach out via email or send a message directly below.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-5">
              
              {/* Email Card */}
              <div className="glass-panel p-5 rounded-2xl border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 font-bold uppercase">Direct Email</div>
                    <div className="text-base sm:text-lg font-bold text-white">{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-sm flex items-center gap-1.5 font-mono transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl border border-white/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 font-bold uppercase">Location & Mobility</div>
                  <div className="text-base sm:text-lg font-bold text-white">{PORTFOLIO_DATA.personal.location} (Open to Relocation)</div>
                </div>
              </div>

            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase mb-3">Professional Profiles</div>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs font-mono"
                >
                  <Code className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Send an Interview Request
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Fill out the message details below or email directly to discuss roles.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will respond to your email promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Technical Recruiter / Engineering Lead"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Google / Microsoft / NVIDIA"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                      Message / Opportunity Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss role responsibilities, timeline, or interview process..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Interview Request</span>
                  </button>
                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
