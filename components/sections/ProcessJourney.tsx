"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";

import { Code2, Compass, GitFork, Search, TrendingUp } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Understand",
    description: "We understand the problem, opportunity, and operating environment.",
    icon: Search,
  },
  {
    id: "02",
    title: "Design",
    description: "We design the product, system, and intelligence layer.",
    icon: Compass,
  },
  {
    id: "03",
    title: "Engineer",
    description: "We build scalable, production-ready technology.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Integrate",
    description: "We connect technology to the systems that already power the business.",
    icon: GitFork,
  },
  {
    id: "05",
    title: "Evolve",
    description: "We continuously improve, optimize, and scale.",
    icon: TrendingUp,
  },
];

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  const Icon = step.icon;
  return (
    <div className="group relative flex h-full w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#121B2D]/90 p-8 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(37,99,235,0.3)] hover:border-blue-500/40 sm:w-[360px] lg:w-[380px]">
      {/* Top colored accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED]" />

      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-blue-500/20 text-[#3B82F6] shadow-xs transition-colors group-hover:border-blue-500/40">
            <Icon size={18} strokeWidth={1.8} />
          </div>
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#3B82F6]">
            STEP {step.id}
          </span>
        </div>

        <div className="mt-7">
          <h3 className="text-2xl font-bold tracking-tight text-[#F8FAFC]">
            {step.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProcessJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-64%"]);

  return (
    <section id="process" className="relative bg-[#05070D] bg-grain py-28 lg:py-0 border-t border-white/[0.08]">
      <Container className="lg:pt-36">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
            HOW WE BUILD
          </div>
        </Reveal>
        <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
          Ideas are easy. Execution is{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            the difference
          </span>
          .
        </h2>
      </Container>

      {/* Desktop horizontal scroll timeline */}
      <div ref={ref} className="relative hidden lg:block lg:h-[260vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-16">
            {STEPS.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
            <div className="w-16 shrink-0" />
          </motion.div>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <Container className="mt-14 lg:hidden pb-16">
        <div className="relative space-y-8 border-l border-white/10 pl-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative rounded-2xl border border-white/10 bg-[#121B2D] p-6 shadow-md">
                <span className="absolute -left-[45px] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/20 text-[#3B82F6]">
                  <Icon size={14} strokeWidth={2} />
                </span>
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#3B82F6]">
                  STEP {step.id}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#F8FAFC]">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#CBD5E1]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
