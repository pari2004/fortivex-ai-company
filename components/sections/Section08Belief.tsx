import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { AmbientField } from "@/components/ui/AmbientGlow";

export function Section08Belief() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-void py-28">
      <AmbientField variant="faint" />

      <Container className="relative z-10 text-center">
        <Reveal className="flex justify-center">
          <SectionLabel index="08" label="The Belief" tone="dark" />
        </Reveal>

        <h2 className="mx-auto mt-10 max-w-5xl text-[11vw] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-50 sm:text-[58px] md:text-[68px] lg:text-[76px]">
          <TextReveal
            lines={[
              "The future will not be built",
              "by people who wait for it.",
            ]}
            stagger={0.04}
          />
        </h2>

        <Reveal
          delay={0.2}
          className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-ink-400"
        >
          It will be built by people who understand the opportunity,
          engineer the systems, and keep moving forward. Fortivex AI exists
          to build what comes next.
        </Reveal>
      </Container>
    </section>
  );
}
