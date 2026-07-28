import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";

const CATEGORIES = [
  "Artificial Intelligence",
  "Engineering",
  "Product",
  "Automation",
  "Business",
  "Future of Work",
];

export function InsightSection() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#05070D] py-28 lg:py-36 border-t border-white/[0.08] bg-grain">
      <Container>
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
            INSIGHTS & PERSPECTIVES
          </div>
        </Reveal>

        <h2 className="mt-6 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
          Thoughts from the systems{" "}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
            we are building
          </span>
          .
        </h2>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#F8FAFC] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:text-[#3B82F6]"
            >
              {c}
            </span>
          ))}
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#121B2D]/80 backdrop-blur-md py-20 px-6 text-center shadow-lg transition-all duration-300 hover:border-blue-500/40"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/20 text-[#3B82F6] shadow-xs">
            <Sparkles size={20} strokeWidth={1.8} />
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-[#94A3B8] font-bold">
            The next idea is being built.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
