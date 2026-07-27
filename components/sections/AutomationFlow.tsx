"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileSearch,
  Sparkles,
  GitBranch,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

const STAGES = [
  { label: "Unstructured Information", icon: FileSearch },
  { label: "AI Understanding", icon: Sparkles },
  { label: "Intelligent Decision", icon: GitBranch },
  { label: "Automated Action", icon: Zap },
  { label: "Measurable Outcome", icon: TrendingUp },
];

const CAPABILITIES = [
  "Automated Document Processing",
  "Intent Extraction",
  "Smart Approval Workflows",
  "Cross-System Automation",
  "AI Agent Orchestration",
  "Decision Support",
  "Workflow Intelligence",
];

export function AutomationFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STAGES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-950 bg-grain py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-royal/10 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <SectionLabel index="03" label="The AI Operating Layer" tone="dark" />
        </Reveal>

        <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-50 sm:text-[46px] md:text-[54px]">
          <TextReveal lines={["From manual friction", "to intelligent flow."]} />
        </h2>

        {/* flow */}
        <Reveal delay={0.15} className="mt-20">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
            {STAGES.map((stage, i) => {
              const isActive = i === active;
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="flex flex-1 items-stretch lg:flex-row">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex w-full flex-col items-start gap-4 rounded-xl border p-6 text-left transition-all duration-500 lg:items-center lg:text-center",
                      isActive
                        ? "border-white/20 bg-white/[0.05]"
                        : "border-white/[0.06] bg-transparent"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500",
                        isActive
                          ? "bg-[image:var(--gradient-brand)] shadow-[0_0_24px_-4px_rgba(124,77,255,0.7)]"
                          : "bg-white/[0.06]"
                      )}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className={isActive ? "text-white" : "text-ink-400"}
                      />
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.2em]",
                        isActive ? "text-ink-200" : "text-ink-600"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "text-sm font-semibold leading-snug",
                        isActive ? "text-ink-50" : "text-ink-400"
                      )}
                    >
                      {stage.label}
                    </span>
                  </button>

                  {i < STAGES.length - 1 && (
                    <div className="relative mx-2 hidden w-10 shrink-0 items-center justify-center lg:flex">
                      <div className="h-px w-full bg-white/10" />
                      <motion.div
                        className="absolute h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_8px_2px_rgba(14,165,255,0.8)]"
                        animate={{ left: ["0%", "100%"] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.15,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* capability chips */}
        <Reveal delay={0.25} className="mt-16 flex flex-wrap gap-3">
          {CAPABILITIES.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-white/[0.1] bg-white/[0.02] px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-ink-300"
            >
              {cap}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
