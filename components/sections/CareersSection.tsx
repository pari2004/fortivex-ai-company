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
    <section id="careers" className="relative overflow-hidden bg-navy-900 bg-grain py-28 lg:py-36">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="10" label="Careers" tone="dark" />
          </Reveal>

          <h2 className="mt-8 max-w-lg text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-50 sm:text-[44px] md:text-[50px]">
            <TextReveal lines={["Build the future", "with us."]} />
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-md text-lg leading-relaxed text-ink-300">
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
          <RevealGroup className="grid grid-cols-2 gap-3">
            {AREAS.map((area) => (
              <motion.div
                key={area}
                variants={revealItem}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-6 text-sm font-medium text-ink-200"
              >
                {area}
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal
            delay={0.15}
            className="mt-4 rounded-xl border border-dashed border-white/[0.12] px-5 py-8 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">
              Opportunities are taking shape.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
