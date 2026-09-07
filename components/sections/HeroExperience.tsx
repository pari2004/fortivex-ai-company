"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { AmbientField } from "@/components/ui/AmbientGlow";
import { HolographicAICore } from "@/components/visuals/HolographicAICore";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroExperience() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#05070D] bg-grain pt-20"
    >
      {/* Soft illuminated enterprise ambient light fields */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,_rgba(37,99,235,0.18),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,_rgba(34,211,238,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_75%,_rgba(124,58,237,0.15),_transparent_55%)]" />

      {/* Fine architectural light mesh grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <Container className="relative z-10 grid items-center gap-14 pt-28 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-36">
        {/* Left Column: Hero Editorial Hierarchy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6] animate-pulse" />
            Intelligence. Automated. Empowered.
          </motion.div>

          <h1 className="max-w-2xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
            Building what{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              comes next
            </span>
            .
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-8 max-w-[650px] text-lg leading-relaxed text-[#CBD5E1] sm:text-xl sm:leading-relaxed font-normal"
          >
            We engineer intelligent systems that transform how businesses
            operate, scale, and evolve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#what-we-do" variant="primary">
              Explore Our Capabilities
              <ArrowRight size={15} strokeWidth={2.4} />
            </MagneticButton>
            <MagneticButton href="#opportunity" variant="outline" tone="dark">
              Discover Fortivex
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: AI Holographic Core Canvas Pedestal */}
        <div className="relative order-first h-[360px] sm:h-[460px] lg:order-none lg:col-span-5 lg:h-[580px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#121B2D]/80 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.12),_transparent_70%)]" />
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <HolographicAICore className="h-full w-full" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2.5 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#94A3B8]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#94A3B8]" />
        </motion.span>
      </motion.div>
    </section>
  );
}
