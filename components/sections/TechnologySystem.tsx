"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, revealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";

const CATEGORIES = [
  {
    label: "Artificial Intelligence",
    icon: Sparkles,
    items: ["Generative AI", "Agentic AI", "Machine Learning", "LLM Applications", "AI Automation"],
  },
  {
    label: "Engineering",
    icon: Cpu,
    items: ["Web Platforms", "Mobile Applications", "SaaS Systems", "API Architecture", "Cloud Infrastructure"],
  },
  {
    label: "Data",
    icon: Database,
    items: ["Data Engineering", "Analytics", "Business Intelligence", "Predictive Systems"],
  },
  {
    label: "Integration",
    icon: Network,
    items: ["Enterprise Systems", "APIs", "CRM", "ERP", "Communication Systems"],
  },
];

export function TechnologySystem() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0B1220] py-32 lg:py-40 border-t border-white/[0.08] bg-grain"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(37,99,235,0.1),_transparent_70%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
              TECHNOLOGY ARCHITECTURE
            </div>
          </Reveal>

          <h2 className="mt-6 max-w-4xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
            The technology is only as powerful as{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              the outcome
            </span>
            .
          </h2>
        </div>

        <RevealGroup className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                variants={revealItem}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121B2D]/90 p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-[#121B2D] shadow-md hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-blue-500/20 text-[#3B82F6] shadow-xs transition-colors group-hover:border-blue-500/40">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-[#F8FAFC] font-bold">
                    {cat.label}
                  </h3>

                  <ul className="mt-6 space-y-2.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-[#CBD5E1] transition-colors duration-200 group-hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
