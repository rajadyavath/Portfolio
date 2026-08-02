"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Command, Search, FolderGit2, Compass, Briefcase, Cpu, 
  Terminal, FileText, Mail, X, ArrowRight, Sparkles, ExternalLink
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: "hero", title: "Scroll to Hero", icon: Compass, action: () => { window.location.href = "#hero"; onClose(); } },
    { id: "story", title: "Read Engineering Story", icon: Compass, action: () => { window.location.href = "#story"; onClose(); } },
    { id: "projects", title: "Inspect Project Case Studies", icon: FolderGit2, action: () => { window.location.href = "#projects"; onClose(); } },
    { id: "process", title: "System Design & Process", icon: Cpu, action: () => { window.location.href = "#process"; onClose(); } },
    { id: "skills", title: "View Technical Matrix", icon: Cpu, action: () => { window.location.href = "#skills"; onClose(); } },
    { id: "experience", title: "View Career History", icon: Briefcase, action: () => { window.location.href = "#experience"; onClose(); } },
    { id: "contact", title: "Contact Candidate", icon: Mail, action: () => { window.location.href = "#contact"; onClose(); } },
    { id: "cli", title: "Launch Interactive CLI Terminal", icon: Terminal, action: () => { onOpenTerminal(); onClose(); } },
    { id: "github", title: "Open GitHub Profile", icon: ExternalLink, action: () => { window.open(PORTFOLIO_DATA.personal.github, "_blank"); onClose(); } },
  ];

  const filteredActions = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-2xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-6 py-4 border-b border-white/10 gap-3">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search section (e.g. projects, skills, CLI, contact)..."
              className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-sans"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-3 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400 font-mono">
                No matching commands found.
              </div>
            ) : (
              filteredActions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-white/10 text-left text-xs font-medium text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Guide */}
          <div className="px-6 py-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Navigation: Click or press Enter</span>
            <span className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-white/10">ESC</span> to exit
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
