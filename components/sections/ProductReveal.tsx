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
    <section className="relative overflow-hidden bg-[#0B1220] py-28 lg:py-36 border-t border-white/[0.08] bg-grain">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.12),_transparent_70%)]" />

      <Container className="relative z-10">
        <Reveal className="text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#94A3B8] font-bold">
            Fortivex Ecosystem — Flagship 01
          </span>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-white/15 bg-[#121B2D]/90 p-8 sm:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_rgba(37,99,235,0.15),_transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
                AI Education &amp; Career Transformation
              </span>

              <h3 className="mt-6 text-[48px] font-bold leading-[0.95] tracking-[-0.03em] text-[#F8FAFC] sm:text-[52px] md:text-[60px]">
                Empowers
                <br />
                <span className="text-gradient-brand">Academy</span>
              </h3>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
              A live, mentor-led AI education platform focused on helping
              people build practical AI capabilities and prepare for the
              future of work.
            </p>
          </div>

          <div className="relative z-10 mt-10 flex flex-wrap gap-2.5 border-t border-white/10 pt-8">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-[#F8FAFC] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:text-[#3B82F6]"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-10">
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
