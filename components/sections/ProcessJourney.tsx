"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";

const STEPS = [
  {
    id: "01",
    title: "Understand",
    description: "We understand the problem, opportunity, and operating environment.",
  },
  {
    id: "02",
    title: "Design",
    description: "We design the product, system, and intelligence layer.",
  },
  {
    id: "03",
    title: "Engineer",
    description: "We build scalable, production-ready technology.",
  },
  {
    id: "04",
    title: "Integrate",
    description: "We connect technology to the systems that already power the business.",
  },
  {
    id: "05",
    title: "Evolve",
    description: "We continuously improve, optimize, and scale.",
  },
];

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="flex h-full w-[78vw] shrink-0 flex-col justify-between rounded-2xl border border-ink-200 bg-white p-8 sm:w-[360px] lg:w-[380px]">
      <span className="text-gradient-brand font-mono text-sm tracking-[0.2em]">
        {step.id}
      </span>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-ink-900">
          {step.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-ink-600">
          {step.description}
        </p>
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
    <section id="process" className="relative bg-ink-50 py-28 lg:py-0">
      <Container className="lg:pt-36">
        <Reveal>
          <SectionLabel index="05" label="How We Build" tone="light" />
        </Reveal>
        <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-900 sm:text-[46px] md:text-[54px]">
          <TextReveal lines={["Ideas are easy.", "Execution is the difference."]} />
        </h2>
      </Container>

      {/* desktop horizontal scroll */}
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

      {/* mobile vertical timeline */}
      <Container className="mt-14 lg:hidden">
        <div className="relative space-y-8 border-l border-ink-200 pl-8">
          {STEPS.map((step) => (
            <div key={step.id} className="relative">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-[image:var(--gradient-brand)]" />
              <span className="text-gradient-brand font-mono text-xs tracking-[0.2em]">
                {step.id}
              </span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
