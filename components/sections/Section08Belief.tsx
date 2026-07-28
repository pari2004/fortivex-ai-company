import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { AmbientField } from "@/components/ui/AmbientGlow";

export function Section08Belief() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#05070D] py-28 border-t border-white/[0.08] bg-grain">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.15),_transparent_60%)]" />

      <Container className="relative z-10 text-center">
        <Reveal className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
            THE BELIEF
          </div>
        </Reveal>

        <h2 className="mx-auto mt-8 max-w-5xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            The future
          </span>{" "}
          will not be built by people who wait for it.
        </h2>

        <Reveal
          delay={0.2}
          className="mx-auto mt-8 max-w-[650px] text-lg leading-relaxed text-[#CBD5E1] sm:text-xl sm:leading-relaxed font-normal"
        >
          It will be built by people who understand the opportunity,
          engineer the systems, and keep moving forward. Fortivex AI exists
          to build what comes next.
        </Reveal>
      </Container>
    </section>
  );
}
