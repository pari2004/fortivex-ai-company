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
    <section className="relative overflow-hidden bg-[#0B1220] py-28 lg:py-36 border-t border-white/[0.08] bg-grain">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
            THE AI OPERATING LAYER
          </div>
        </Reveal>

        <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
          From manual friction to{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            intelligent flow
          </span>
          .
        </h2>

        {/* flow */}
        <Reveal delay={0.15} className="mt-20">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((stage, i) => {
              const isActive = i === active;
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="relative flex flex-col">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex h-full w-full flex-col items-start gap-4 rounded-2xl border p-6 text-left transition-all duration-500 backdrop-blur-xl",
                      isActive
                        ? "border-blue-500/50 bg-[#121B2D] shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 border",
                        isActive
                          ? "border-blue-500/50 bg-blue-500/20 text-[#3B82F6] shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                          : "border-white/10 bg-white/[0.04] text-[#94A3B8]"
                      )}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-[0.2em] font-bold",
                          isActive ? "text-[#3B82F6]" : "text-[#94A3B8]"
                        )}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-bold leading-snug tracking-tight",
                          isActive ? "text-[#F8FAFC]" : "text-[#CBD5E1]"
                        )}
                      >
                        {stage.label}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* capability chips */}
        <Reveal delay={0.25} className="mt-16 flex flex-wrap gap-2.5">
          {CAPABILITIES.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#CBD5E1] backdrop-blur-sm shadow-xs transition-all duration-300 hover:border-blue-500/40 hover:text-white"
            >
              {cap}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
