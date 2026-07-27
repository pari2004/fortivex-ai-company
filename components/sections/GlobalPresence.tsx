"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, revealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";

const REGIONS = [
  { region: "India", detail: "Headquarters" },
  { region: "North America", detail: "Client Engagements" },
  { region: "Europe", detail: "Client Engagements" },
  { region: "Latin America", detail: "Client Engagements" },
];

function WireGlobe() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full">
      <g stroke="var(--color-ink-300)" strokeWidth={1} fill="none" opacity={0.6}>
        <circle cx="200" cy="200" r="160" />
        <motion.ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="60"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <motion.ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="100"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <ellipse cx="200" cy="200" rx="60" ry="160" />
        <line x1="40" y1="200" x2="360" y2="200" />
      </g>
      <circle cx="176" cy="168" r="4" fill="var(--color-violet)" />
    </svg>
  );
}

export function GlobalPresence() {
  return (
    <section id="company" className="relative overflow-hidden bg-ink-50 py-28 lg:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="07" label="Global Perspective" tone="light" />
          </Reveal>

          <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-900 sm:text-[46px] md:text-[54px]">
            <TextReveal lines={["Built in Bengaluru.", "Designed for the world."]} />
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-lg text-lg leading-relaxed text-ink-600">
            Fortivex AI is based in Bengaluru, India and works with
            organizations across global markets.
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-4">
            {REGIONS.map((r) => (
              <motion.div key={r.region} variants={revealItem} className="bg-ink-50 p-5">
                <p className="text-sm font-semibold text-ink-900">{r.region}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">
                  {r.detail}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div className="relative order-first h-[240px] opacity-80 lg:order-none lg:col-span-5 lg:h-[400px]">
          <WireGlobe />
        </div>
      </Container>
    </section>
  );
}
