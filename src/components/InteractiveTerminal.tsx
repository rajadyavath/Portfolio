"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "=== RAJA DIYAVATH INTERACTIVE CLI v1.0.0 ===",
    "Type 'help' to view available commands.",
    "System ready. Software Engineering Candidate Profile loaded.",
    ""
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    const newLogs = [...logs, `visitor@raja-diyavath:~$ ${cmd}`];

    switch (cmd) {
      case "help":
        newLogs.push(
          "Available CLI Commands:",
          "  bio       - Read professional background summary",
          "  skills    - List core programming languages and AI frameworks",
          "  projects  - Inspect top technical case studies",
          "  contact   - Display email, phone, and recruitment channels",
          "  sudo hire - Execute hiring pipeline authorization",
          "  clear     - Clear shell terminal output"
        );
        break;

      case "bio":
        newLogs.push(
          `Candidate: ${PORTFOLIO_DATA.personal.name}`,
          `Role: ${PORTFOLIO_DATA.personal.title}`,
          `Location: ${PORTFOLIO_DATA.personal.location}`,
          `Summary: ${PORTFOLIO_DATA.personal.bio}`
        );
        break;

      case "skills":
        newLogs.push(
          "Generative AI & LLMs: RAG, FAISS, PyTorch, LLaMA-2, Gemma-2B, Hugging Face, LangChain",
          "Backend: FastAPI, REST APIs, AsyncIO Python, Microservices",
          "XR / Spatial: Unity, Meta XR SDK, OpenXR, Wit.ai C#",
          "Languages: Python, Java, C#, C++, SQL, JavaScript"
        );
        break;

      case "projects":
        PORTFOLIO_DATA.projects.forEach((p, idx) => {
          newLogs.push(`[${idx + 1}] ${p.title} (${p.category}) -> ${p.tagline}`);
        });
        break;

      case "contact":
        newLogs.push(
          `Email: ${PORTFOLIO_DATA.personal.email}`,
          `Phone: ${PORTFOLIO_DATA.personal.phone}`,
          `GitHub: ${PORTFOLIO_DATA.personal.github}`,
          `LeetCode: ${PORTFOLIO_DATA.personal.leetcode}`
        );
        break;

      case "sudo hire":
      case "hire":
        newLogs.push(
          "🚀 [SUCCESS 200 OK] Hiring Candidate Authorized!",
          "Offer letter pipeline initialized.",
          "Redirecting recruiter to direct email channel..."
        );
        setTimeout(() => {
          window.location.href = "#contact";
          onClose();
        }, 1500);
        break;

      case "clear":
        setLogs([]);
        return;

      default:
        if (cmd !== "") {
          newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for available options.`);
        }
        break;
    }

    newLogs.push("");
    setLogs(newLogs);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col h-[520px]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[#070c1a] border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-cyan-400 font-bold flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                raja-diyavath@shell ~ zsh
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Console Output */}
          <div className="flex-1 p-6 overflow-y-auto font-mono text-xs text-slate-200 space-y-1.5 bg-[#030611]/90">
            {logs.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.startsWith("visitor@")
                    ? "text-cyan-400 font-bold"
                    : line.includes("Available CLI Commands")
                    ? "text-purple-400 font-bold"
                    : line.includes("SUCCESS")
                    ? "text-emerald-400 font-bold"
                    : "text-slate-300"
                }
              >
                {line}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Form Prompt */}
          <form onSubmit={handleCommand} className="flex items-center px-6 py-3 bg-[#070c1a] border-t border-white/10 gap-2">
            <span className="font-mono text-xs text-cyan-400 font-bold shrink-0">
              visitor@raja-diyavath:~$
            </span>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'bio', 'projects', 'skills', 'sudo hire'..."
              className="w-full bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none"
            />
            <button type="submit" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
