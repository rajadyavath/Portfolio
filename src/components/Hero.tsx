"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, FileText, ChevronDown, Cpu, GraduationCap, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
}

export default function Hero({ onOpenTerminal, onOpenCommandPalette }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_DATA.personal.targetRoles || ["Software Engineering Intern 2026"];

  // Typing Effect for Role Ticker
  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const currentRole = roles[roleIndex] || roles[0];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Dynamic Interactive Particle Matrix Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth || 1200);
    let height = (canvas.height = window.innerHeight || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth || 1200;
      height = canvas.height = window.innerHeight || 800;
    };
    window.addEventListener("resize", handleResize);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    const particleCount = Math.min(Math.floor(width / 18), 70);

    const colors = ["#00F0FF", "#7000FF", "#3B82F6", "#10B981"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= (dx / dist) * 0.8;
          p.y -= (dy / dist) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist2 / 120)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background WebGL/Canvas Mesh */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />

      {/* Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/20 to-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* 1. Main Eyebrow Title Tag: PORTFOLIO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-300 mb-6 shadow-lg shadow-cyan-950/30"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="uppercase tracking-widest font-semibold">PORTFOLIO // RAJA DIYAVATH</span>
        </motion.div>

        {/* 2. Professional Photo & Intro Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-purple-950/30 max-w-3xl w-full mb-8 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            {/* User Photo Frame */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl p-[2px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-xl shadow-cyan-500/30 overflow-hidden">
                <img
                  src="/raja-photo.jpg"
                  alt="Raja Diyavath"
                  className="w-full h-full object-cover rounded-[14px] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold font-mono text-[10px] uppercase shadow-md flex items-center gap-1 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                Available 2026
              </span>
            </div>

            {/* Profile Intro Info */}
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  Automobile Engineering Graduate
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Hyderabad, India
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Raja Diyavath
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Automobile Systems graduate transitioning into software engineering. I build <strong className="text-cyan-300 font-semibold">Generative AI apps, FastAPI backends, LLM RAG pipelines</strong>, and <strong className="text-purple-300 font-semibold">VR tools</strong>. Open for SWE Intern & New Grad roles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Dynamic Typing Role Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-9 mb-6 font-mono text-sm sm:text-base text-cyan-300 flex items-center justify-center gap-2 bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-500/30"
        >
          <Cpu className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span>Seeking Target Role: <strong className="text-white font-bold">{displayText}</strong></span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
        </motion.div>

        {/* 4. Hero Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-5xl leading-[1.1] mb-6"
        >
          Building Reliable Software, <br className="hidden sm:inline" />
          <span className="gradient-text-cyan">AI Applications & Backends</span>
        </motion.h1>

        {/* 5. Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="px-6 py-3.5 rounded-2xl glass-panel glass-panel-hover text-sm sm:text-base font-semibold text-slate-200 flex items-center gap-2 border border-white/10 hover:border-cyan-400/40"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span>CLI Terminal</span>
          </button>

          <a
            href="#contact"
            className="p-3.5 rounded-2xl glass-panel glass-panel-hover text-slate-200 hover:text-cyan-400 border border-white/10"
            title="Download Resume & Contact"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>

        {/* 6. Metrics Showcase Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-4 rounded-2xl text-left border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1 tracking-tight flex items-baseline gap-1">
                <span className="gradient-text-cyan">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-100 mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-400 font-mono">{stat.suffix}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#story"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1.5 text-xs font-mono font-medium"
        >
          <span>SCROLL TO DISCOVER STORY</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>

      </div>
    </section>
  );
}
