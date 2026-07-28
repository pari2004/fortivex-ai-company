"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, revealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

const AREAS = [
  "AI & Machine Learning",
  "Software Engineering",
  "Product",
  "Design",
  "Business",
  "Operations",
];

export function CareersSection() {
  return (
    <section id="careers" className="relative overflow-hidden bg-[#0B1220] py-28 lg:py-36 border-t border-white/[0.08] bg-grain">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="10" label="Careers" tone="dark" />
          </Reveal>

          <h2 className="mt-8 max-w-lg text-[48px] font-bold leading-[1.02] tracking-[-0.038em] text-[#F8FAFC] sm:text-[56px] lg:text-[64px]">
            <TextReveal lines={["Build the future", "with us."]} />
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-md text-lg leading-relaxed text-[#CBD5E1]">
            We are building intelligent products, systems, and technology
            businesses for an AI-powered world.
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <MagneticButton href="#final-cta" variant="primary" tone="dark">
              Explore Opportunities
              <ArrowRight size={15} strokeWidth={2.4} />
            </MagneticButton>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pt-2">
          <RevealGroup className="grid grid-cols-2 gap-3.5">
            {AREAS.map((area) => (
              <motion.div
                key={area}
                variants={revealItem}
                className="rounded-xl border border-white/10 bg-[#121B2D] px-6 py-6 text-sm font-semibold text-[#F8FAFC] backdrop-blur-md shadow-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl flex items-center justify-between"
              >
                <span>{area}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal
            delay={0.15}
            className="mt-4 rounded-xl border border-white/10 bg-[#121B2D]/80 backdrop-blur-md px-5 py-8 text-center shadow-xs"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#94A3B8] font-bold">
              Opportunities are taking shape.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
