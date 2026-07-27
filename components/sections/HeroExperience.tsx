"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { AmbientField } from "@/components/ui/AmbientGlow";
import { IntelligenceVisualization } from "@/components/visuals/IntelligenceVisualization";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroExperience() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 bg-grain"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,43,92,0.55),_transparent_60%)]" />
      <AmbientField variant="hero" />
      <CursorGlow />

      <Container className="relative z-10 grid items-center gap-16 pt-28 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_2px_rgba(14,165,255,0.7)]" />
            Intelligence. Automated. Empowered.
          </motion.div>

          <h1 className="max-w-2xl text-[13vw] font-semibold leading-[0.98] tracking-[-0.03em] text-ink-50 sm:text-[64px] md:text-[76px] lg:text-[84px]">
            <TextReveal lines={["Building what", "comes next."]} delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink-300 sm:text-xl"
          >
            We engineer intelligent systems that transform how businesses
            operate, scale, and evolve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
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

        <div className="relative order-first h-[280px] sm:h-[380px] lg:order-none lg:col-span-5 lg:h-[560px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="absolute inset-0"
          >
            <IntelligenceVisualization className="h-full w-full" />
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-ink-500" />
        </motion.span>
      </motion.div>
    </section>
  );
}
