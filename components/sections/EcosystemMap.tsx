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
import { Reveal } from "@/components/animations/Reveal";
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
    <section id="ecosystem" className="relative overflow-hidden bg-[#F8F9FB] py-32 lg:py-40 border-t border-black/[0.04]">
      {/* Ambient illuminated depth background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.06),_transparent_70%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#7C3AED] font-semibold shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
              OUR ECOSYSTEM
            </div>
          </Reveal>

          <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A2E] sm:text-[60px] lg:text-[72px]">
            One technology company.{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
              Multiple possibilities
            </span>
            .
          </h2>

          <Reveal delay={0.15} className="mt-4 max-w-[650px] text-lg leading-relaxed text-[#4A4A6A] sm:text-xl">
            An interconnected AI platform designed for enterprise transformation across products, platforms, and technology ventures.
          </Reveal>
        </div>

        {/* Desktop Network Matrix Graph */}
        <div className="relative mx-auto mt-24 hidden aspect-square max-w-[680px] lg:block">
          {/* Concentric orbit rings */}
          <div className="absolute inset-0 rounded-full border border-black/[0.06]" />
          <div className="absolute inset-[15%] rounded-full border border-black/[0.04]" />

          <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden>
            {NODES.map((n, i) => {
              const p = pos(n.angle);
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={p.left}
                  y2={p.top}
                  stroke="rgba(0, 0, 0, 0.08)"
                  strokeWidth={1.2}
                  strokeDasharray="4 6"
                />
              );
            })}
          </svg>

          {/* Central Anchor Node */}
          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-[#7C3AED]/30 bg-white text-center shadow-[0_0_50px_rgba(124,58,237,0.15)]">
            <motion.div
              className="absolute inset-0 rounded-full border border-[#7C3AED]/40"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Logo tone="light" wordmark={false} className="scale-125" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#1A1A2E]">
              Fortivex AI
            </span>
          </div>

          {/* Orbiting Platform Nodes */}
          {NODES.map((n, i) => {
            const p = pos(n.angle);
            const Icon = n.icon;
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                style={{ left: p.left, top: p.top }}
                className="absolute flex w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center group cursor-pointer"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#7C3AED]/10 group-hover:scale-105">
                  <Icon size={20} strokeWidth={1.8} className="text-[#6B7280] transition-colors group-hover:text-[#7C3AED]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4A4A6A] transition-colors group-hover:text-[#1A1A2E]">
                  {n.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Grid View */}
        <div className="mt-16 grid grid-cols-2 gap-3.5 lg:hidden">
          {NODES.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/10 text-[#7C3AED]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-semibold text-[#1A1A2E]">{n.label}</span>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7280] font-semibold">
            More is being built.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
