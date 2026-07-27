"use client";

import { Cpu, Database, Network, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup, revealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";

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
      className="relative overflow-hidden bg-navy-900 bg-grain py-28 lg:py-36"
    >
      <Container>
        <Reveal>
          <SectionLabel index="06" label="Technology" tone="dark" />
        </Reveal>
        <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-50 sm:text-[46px] md:text-[54px]">
          <TextReveal lines={["The technology is only", "as powerful as the outcome."]} />
        </h2>

        <RevealGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                variants={revealItem}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
                  <Icon size={16} strokeWidth={1.8} className="text-electric" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-300">
                    {cat.label}
                  </span>
                </div>
                <ul className="px-5 py-4">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 border-b border-white/[0.04] py-2.5 text-sm text-ink-400 last:border-b-0"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-ink-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
