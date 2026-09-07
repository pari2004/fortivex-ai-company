"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brain, Layers, RefreshCw, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { cn } from "@/lib/utils";

const CAPABILITIES = [
  {
    id: "01",
    title: "Intelligent Systems",
    subtitle: "AI Architecture & Cognitive Engines",
    description:
      "We design and build AI-powered systems that help organizations make better decisions and operate more intelligently.",
    icon: Brain,
    tags: ["Decision Models", "Predictive Systems", "Cognitive Architecture"],
  },
  {
    id: "02",
    title: "Business Automation",
    subtitle: "Workflow Orchestration & Agentic AI",
    description:
      "We transform repetitive operations into intelligent workflows that reduce friction and unlock human potential.",
    icon: Workflow,
    tags: ["Agentic Workflows", "Document Intelligence", "Process Automation"],
  },
  {
    id: "03",
    title: "Product Engineering",
    subtitle: "Full-Stack Enterprise Platforms",
    description:
      "We build scalable digital products, platforms, and applications from concept to production.",
    icon: Layers,
    tags: ["SaaS Architecture", "High-Throughput APIs", "Design Systems"],
  },
  {
    id: "04",
    title: "Digital Transformation",
    subtitle: "Modernization & Infrastructure Evolution",
    description:
      "We help organizations modernize technology stacks, connect systems, and prepare for the next generation of business.",
    icon: RefreshCw,
    tags: ["Cloud Infrastructure", "Legacy Modernization", "System Integration"],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function CapabilityExperience() {
  const [active, setActive] = useState(0);
  const Active = CAPABILITIES[active];

  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-[#05070D] py-32 lg:py-40 border-t border-white/[0.08] bg-grain"
    >
      {/* Restrained ambient illuminated lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(37,99,235,0.12),_transparent_60%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
              WHAT WE BUILD
            </div>
          </Reveal>

          <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
            We don't just use AI. We{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              build with it
            </span>
            .
          </h2>
        </div>

        {/* Capability Showcase Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          {/* Left Navigation Matrix */}
          <div className="flex flex-col gap-3.5 lg:col-span-6">
            {CAPABILITIES.map((cap, i) => {
              const isActive = i === active;
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                  className={cn(
                    "group relative flex w-full flex-col gap-3 rounded-2xl border p-6 text-left transition-all duration-300 cursor-pointer select-none",
                    isActive
                      ? "border-blue-500/40 bg-[#121B2D] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-xl border transition-colors",
                          isActive
                            ? "border-blue-500/40 bg-blue-500/20 text-[#3B82F6]"
                            : "border-white/10 bg-white/[0.04] text-[#94A3B8] group-hover:text-white"
                        )}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-semibold">
                        {cap.id}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className={cn(
                        "transition-all duration-300",
                        isActive
                          ? "translate-x-0 translate-y-0 opacity-100 text-[#3B82F6]"
                          : "-translate-x-1 translate-y-1 opacity-0 text-[#94A3B8]"
                      )}
                    />
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "text-xl font-semibold tracking-tight transition-colors sm:text-2xl",
                        isActive ? "text-[#F8FAFC]" : "text-[#CBD5E1] group-hover:text-white"
                      )}
                    >
                      {cap.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Editorial Focal Showcase Panel */}
          <div className="relative lg:col-span-6">
            <div className="relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121B2D]/90 p-8 sm:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              {/* Radial gradient background accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.15),_transparent_70%)]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={Active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="relative z-10 flex h-full flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-6">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-semibold">
                        Capability {Active.id} / 04
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#3B82F6] font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                        Active Capability
                      </span>
                    </div>

                    <div className="mt-8">
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#94A3B8] font-medium">
                        {Active.subtitle}
                      </span>
                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
                        {Active.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-[#CBD5E1] sm:text-lg sm:leading-relaxed">
                        {Active.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/10">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] mb-3 font-semibold">
                      Core Focus
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {Active.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs text-[#F8FAFC] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
