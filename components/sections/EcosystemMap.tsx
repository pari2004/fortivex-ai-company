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
    <section id="ecosystem" className="relative overflow-hidden bg-[#05070D] py-32 lg:py-40 border-t border-white/[0.08] bg-grain">
      {/* Ambient illuminated depth background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.1),_transparent_70%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
              OUR ECOSYSTEM
            </div>
          </Reveal>

          <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
            One technology company.{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Multiple possibilities
            </span>
            .
          </h2>

          <Reveal delay={0.15} className="mt-4 max-w-[650px] text-lg leading-relaxed text-[#CBD5E1] sm:text-xl">
            An interconnected AI platform designed for enterprise transformation across products, platforms, and technology ventures.
          </Reveal>
        </div>

        {/* Desktop Network Matrix Graph */}
        <div className="relative mx-auto mt-24 hidden aspect-square max-w-[680px] lg:block">
          {/* Concentric orbit rings */}
          <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-[15%] rounded-full border border-white/[0.06]" />

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
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth={1.2}
                  strokeDasharray="4 6"
                />
              );
            })}
          </svg>

          {/* Central Anchor Node */}
          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0B1220] text-center shadow-[0_0_50px_rgba(37,99,235,0.25)]">
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500/40"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Logo tone="dark" wordmark={false} className="scale-125" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white">
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
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#121B2D]/90 backdrop-blur-xl shadow-lg transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 group-hover:scale-105">
                  <Icon size={20} strokeWidth={1.8} className="text-[#94A3B8] transition-colors group-hover:text-[#3B82F6]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#CBD5E1] transition-colors group-hover:text-white">
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
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-[#121B2D] p-5 backdrop-blur-md shadow-xs"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-blue-500/20 text-[#3B82F6]">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-semibold text-[#F8FAFC]">{n.label}</span>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#94A3B8] font-semibold">
            More is being built.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
