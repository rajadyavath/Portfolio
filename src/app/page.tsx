"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProjectCaseStudies from "@/components/ProjectCaseStudies";
import EngineeringProcess from "@/components/EngineeringProcess";
import TechStackMatrix from "@/components/TechStackMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GithubStatsSection from "@/components/GithubStatsSection";
import SpecialFeatures from "@/components/SpecialFeatures";
import ContactSection from "@/components/ContactSection";
import CommandPalette from "@/components/CommandPalette";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 relative overflow-x-hidden">
      
      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* 1. Cinematic Hero Section */}
      <Hero
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* 2. Narrative Story Section */}
      <StorySection />

      {/* 3. Deep Project Case Studies */}
      <ProjectCaseStudies />

      {/* 4. Engineering Process & Principles */}
      <EngineeringProcess />

      {/* 5. Competency & Skill Matrix */}
      <TechStackMatrix />

      {/* 6. Career Experience & Education */}
      <ExperienceTimeline />

      {/* 7. Live GitHub & LeetCode Stats */}
      <GithubStatsSection />

      {/* 8. Spotify, Telemetry & CLI Mode */}
      <SpecialFeatures onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* 9. Contact & Recruitment Form */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Command Palette Modal (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Web Shell CLI Modal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </main>
  );
}
