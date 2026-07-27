"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { AmbientField } from "@/components/ui/AmbientGlow";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-void bg-grain py-28"
    >
      <AmbientField variant="electric" />
      <CursorGlow />

      <Container className="relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-[11vw] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-50 sm:text-[58px] md:text-[68px]">
            <TextReveal lines={["Ready to build", "what comes next?"]} />
          </h2>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-400"
        >
          Whether you are transforming an existing business, building a new
          product, or exploring what AI can make possible, let&rsquo;s start
          with the right question.
        </Reveal>

        <Reveal
          delay={0.35}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="mailto:hello@fortivex.ai" variant="primary">
            Let&rsquo;s Build Together
            <ArrowRight size={15} strokeWidth={2.4} />
          </MagneticButton>
          <MagneticButton href="#what-we-do" variant="ghost" tone="dark">
            Explore Our Capabilities
          </MagneticButton>
        </Reveal>
      </Container>
    </section>
  );
}
