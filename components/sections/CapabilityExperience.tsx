"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brain, Layers, RefreshCw, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
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
      className="relative overflow-hidden bg-[#F8F9FB] py-32 lg:py-40 border-t border-black/[0.04]"
    >
      {/* Restrained ambient illuminated lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.08),_transparent_60%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#7C3AED] font-semibold shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
              WHAT WE BUILD
            </div>
          </Reveal>

          <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A2E] sm:text-[60px] lg:text-[72px]">
            We don't just use AI. We{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
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
                    "group relative flex w-full flex-col gap-3 p-6 text-left transition-all duration-300 cursor-pointer select-none",
                    isActive
                      ? "light-card-active"
                      : "light-card hover:bg-white"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-xl border transition-colors",
                          isActive
                            ? "border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED]"
                            : "border-black/[0.08] bg-[#F8F9FB] text-[#6B7280] group-hover:text-[#1A1A2E]"
                        )}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B7280] font-semibold">
                        {cap.id}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className={cn(
                        "transition-all duration-300",
                        isActive
                          ? "translate-x-0 translate-y-0 opacity-100 text-[#7C3AED]"
                          : "-translate-x-1 translate-y-1 opacity-0 text-[#94A3B8]"
                      )}
                    />
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "text-xl font-semibold tracking-tight transition-colors sm:text-2xl",
                        isActive ? "text-[#1A1A2E]" : "text-[#4A4A6A] group-hover:text-[#1A1A2E]"
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
            <div className="light-card relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden p-8 sm:p-12">
              {/* Radial gradient background accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(124,58,237,0.1),_transparent_70%)]" />

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
                    <div className="flex items-center justify-between border-b border-black/[0.06] pb-6">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B7280] font-semibold">
                        Capability {Active.id} / 04
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C3AED] font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                        Active Capability
                      </span>
                    </div>

                    <div className="mt-8">
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#6B7280] font-medium">
                        {Active.subtitle}
                      </span>
                      <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A2E] sm:text-4xl">
                        {Active.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-[#4A4A6A] sm:text-lg sm:leading-relaxed">
                        {Active.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-black/[0.06]">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B7280] mb-3 font-semibold">
                      Core Focus
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {Active.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-black/[0.08] bg-[#F8F9FB] px-3.5 py-1.5 text-xs text-[#1A1A2E] font-semibold"
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
