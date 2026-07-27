import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientField } from "@/components/ui/AmbientGlow";

const AREAS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Agentic AI",
  "MLOps",
  "Applied Projects",
  "Career Transformation",
];

export function ProductReveal() {
  return (
    <section className="relative overflow-hidden bg-navy-950 bg-grain py-28 lg:py-36">
      <AmbientField variant="violet" />

      <Container className="relative z-10">
        <Reveal className="text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-500">
            Fortivex Ecosystem — Flagship 01
          </span>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-14"
        >
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-block rounded-full border border-white/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                AI Education &amp; Career Transformation
              </span>

              <h3 className="mt-6 text-[13vw] font-semibold leading-[0.95] tracking-[-0.03em] text-ink-50 sm:text-[52px] md:text-[60px]">
                Empowers
                <br />
                <span className="text-gradient-brand">Academy</span>
              </h3>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-ink-300">
              A live, mentor-led AI education platform focused on helping
              people build practical AI capabilities and prepare for the
              future of work.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5 border-t border-white/[0.08] pt-8">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/[0.1] px-3.5 py-1.5 text-xs font-medium text-ink-300"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <MagneticButton
              href="https://empowersacademy.com/"
              variant="primary"
            >
              Explore Empowers Academy
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
