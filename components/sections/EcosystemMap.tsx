"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Building2,
  GraduationCap,
  LayoutGrid,
  Sparkle,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Logo } from "@/components/ui/Logo";

const NODES = [
  { label: "AI Products", icon: Sparkle, angle: -90 },
  { label: "Enterprise Systems", icon: Building2, angle: -30 },
  { label: "Automation", icon: Workflow, angle: 30 },
  { label: "Digital Platforms", icon: LayoutGrid, angle: 90 },
  { label: "Education", icon: GraduationCap, angle: 150 },
  { label: "Future Ventures", icon: Boxes, angle: -150 },
];

const RADIUS = 40;

function pos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + RADIUS * Math.cos(rad)}%`,
    top: `${50 + RADIUS * Math.sin(rad)}%`,
  };
}

export function EcosystemMap() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-ink-50 py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="04" label="Our Ecosystem" tone="light" />
        </Reveal>

        <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-900 sm:text-[46px] md:text-[54px]">
          <TextReveal lines={["One technology company.", "Multiple possibilities."]} />
        </h2>

        <Reveal delay={0.15} className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
          Fortivex AI is building a growing ecosystem of intelligent
          products, platforms, and technology ventures.
        </Reveal>

        {/* desktop radial map */}
        <div className="relative mx-auto mt-20 hidden aspect-square max-w-[640px] lg:block">
          <svg className="absolute inset-0 h-full w-full" aria-hidden>
            {NODES.map((n, i) => {
              const p = pos(n.angle);
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={p.left}
                  y2={p.top}
                  stroke="var(--color-ink-300)"
                  strokeWidth={1}
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-ink-200 bg-white text-center shadow-[0_20px_60px_-20px_rgba(20,30,70,0.25)]">
            <Logo tone="light" wordmark={false} className="scale-125" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-800">
              Fortivex AI
            </span>
          </div>

          {NODES.map((n, i) => {
            const p = pos(n.angle);
            const Icon = n.icon;
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                style={{ left: p.left, top: p.top }}
                className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-200 bg-white shadow-[0_10px_30px_-12px_rgba(20,30,70,0.2)]">
                  <Icon size={20} strokeWidth={1.6} className="text-ink-700" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-700">
                  {n.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* mobile list */}
        <div className="mt-16 grid grid-cols-2 gap-3 lg:hidden">
          {NODES.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.label}
                className="flex flex-col items-start gap-3 rounded-xl border border-ink-200 bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100">
                  <Icon size={17} strokeWidth={1.7} className="text-ink-700" />
                </span>
                <span className="text-sm font-semibold text-ink-800">{n.label}</span>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
            More is being built.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
