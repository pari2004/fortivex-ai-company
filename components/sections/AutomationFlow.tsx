"use client";

import { useEffect, useState } from "react";
import {
  FileSearch,
  Sparkles,
  GitBranch,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
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
    <section className="relative overflow-hidden bg-white py-28 lg:py-36 border-t border-black/[0.04]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.08] blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#7C3AED] font-semibold shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
            THE AI OPERATING LAYER
          </div>
        </Reveal>

        <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A2E] sm:text-[60px] lg:text-[72px]">
          From manual friction to{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
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
                      "flex h-full w-full flex-col items-start gap-4 p-6 text-left transition-all duration-500",
                      isActive
                        ? "light-card-active"
                        : "light-card hover:bg-white hover:border-[#7C3AED]/30"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 border",
                        isActive
                          ? "border-[#7C3AED]/50 bg-[#7C3AED]/10 text-[#7C3AED] shadow-[0_0_16px_rgba(124,58,237,0.2)]"
                          : "border-black/[0.08] bg-[#F8F9FB] text-[#6B7280]"
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
                          isActive ? "text-[#7C3AED]" : "text-[#6B7280]"
                        )}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-bold leading-snug tracking-tight",
                          isActive ? "text-[#1A1A2E]" : "text-[#4A4A6A]"
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
              className="rounded-full border border-black/[0.08] bg-[#F8F9FB] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#4A4A6A] shadow-sm transition-all duration-300 hover:border-[#7C3AED]/30 hover:text-[#1A1A2E]"
            >
              {cap}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
