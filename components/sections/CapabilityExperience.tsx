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
    description:
      "We design and build AI-powered systems that help organizations make better decisions and operate more intelligently.",
    icon: Brain,
  },
  {
    id: "02",
    title: "Business Automation",
    description:
      "We transform repetitive operations into intelligent workflows that reduce friction and unlock human potential.",
    icon: Workflow,
  },
  {
    id: "03",
    title: "Product Engineering",
    description:
      "We build scalable digital products, platforms, and applications from concept to production.",
    icon: Layers,
  },
  {
    id: "04",
    title: "Digital Transformation",
    description:
      "We help organizations modernize technology stacks, connect systems, and prepare for the next generation of business.",
    icon: RefreshCw,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function CapabilityExperience() {
  const [active, setActive] = useState(0);
  const Active = CAPABILITIES[active];

  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-navy-900 bg-grain py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-[background] duration-700"
        style={{
          background:
            "radial-gradient(600px circle at 80% 20%, rgba(124,77,255,0.14), transparent 60%)",
        }}
      />

      <Container className="relative z-10">
        <Reveal>
          <SectionLabel index="02" label="What We Do" tone="dark" />
        </Reveal>

        <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-50 sm:text-[46px] md:text-[54px]">
          <TextReveal lines={["We don't just use AI.", "We build with it."]} />
        </h2>

        <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            {CAPABILITIES.map((cap, i) => {
              const isActive = i === active;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-center justify-between border-t border-white/[0.08] py-6 text-left transition-colors last:border-b",
                    isActive ? "text-ink-50" : "text-ink-500"
                  )}
                >
                  <span className="flex items-center gap-6">
                    <span
                      className={cn(
                        "font-mono text-xs tracking-[0.2em]",
                        isActive ? "text-gradient-brand" : "text-ink-600"
                      )}
                    >
                      {cap.id}
                    </span>
                    <span
                      className={cn(
                        "text-2xl font-medium tracking-tight transition-transform duration-500 sm:text-3xl",
                        isActive && "translate-x-1"
                      )}
                    >
                      {cap.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className={cn(
                      "shrink-0 transition-all duration-500",
                      isActive
                        ? "translate-x-0 translate-y-0 opacity-100"
                        : "-translate-x-1 translate-y-1 opacity-0"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={Active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 flex flex-col justify-between p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-ink-500">
                      {Active.id} / 04
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-brand)]">
                      <Active.icon size={20} className="text-white" strokeWidth={1.8} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl">
                      {Active.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-300">
                      {Active.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                key={`glow-${Active.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet/25 blur-[100px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
