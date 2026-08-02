"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Command, Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioContent";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "story", "projects", "skills", "experience", "stats", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Projects", href: "#projects" },
    { label: "Approach", href: "#process" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Stats", href: "#stats" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Photo Avatar */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden shrink-0">
              <img
                src="/raja-photo.jpg"
                alt="Raja Diyavath"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white text-lg sm:text-xl group-hover:text-cyan-400 transition-colors leading-none mb-0.5">
                Raja Diyavath
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-mono flex items-center gap-1.5 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Automobile Engineer & Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden md:flex items-center gap-3">
            {/* Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-all group"
              title="Open Interactive CLI Terminal"
            >
              <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-all hover:border-white/20"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] text-slate-400">Ctrl+K</span>
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Contact Candidate
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#070b19]/98 backdrop-blur-2xl border-b border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </a>
              ))}

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200"
                >
                  <Command className="w-4 h-4 text-cyan-400" />
                  Command Palette
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400"
                >
                  <Terminal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
