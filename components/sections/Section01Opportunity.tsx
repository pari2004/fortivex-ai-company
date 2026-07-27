import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { IntelligenceVisualization } from "@/components/visuals/IntelligenceVisualization";

export function Section01Opportunity() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-ink-50 py-28 lg:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="01" label="The Opportunity" tone="light" />
          </Reveal>

          <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-900 sm:text-[46px] md:text-[54px]">
            <TextReveal
              lines={["The world is moving faster.", "Business systems must move with it."]}
            />
          </h2>

          <Reveal delay={0.15} className="mt-10 max-w-lg space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Artificial intelligence is changing how companies operate,
              create, and compete.
            </p>
            <p>But intelligence alone is not enough.</p>
            <p>
              The real advantage comes from turning intelligence into
              systems that work. Fortivex AI helps organizations move from
              possibility to practical execution.
            </p>
          </Reveal>
        </div>

        <div className="relative order-first h-[260px] lg:order-none lg:col-span-5 lg:h-[440px]">
          <Reveal y={0} duration={1.3} className="absolute inset-0 opacity-90">
            <IntelligenceVisualization className="h-full w-full" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
