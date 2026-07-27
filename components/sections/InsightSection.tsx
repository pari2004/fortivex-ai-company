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
    <section id="insights" className="relative overflow-hidden bg-ink-50 py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="09" label="Insights" tone="light" />
        </Reveal>

        <h2 className="mt-8 max-w-2xl text-[9vw] font-semibold leading-[1.03] tracking-[-0.025em] text-ink-900 sm:text-[46px] md:text-[54px]">
          <TextReveal lines={["Thoughts from the systems", "we are building."]} />
        </h2>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink-200 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink-500"
            >
              {c}
            </span>
          ))}
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-300 py-20 text-center"
        >
          <Sparkles size={22} strokeWidth={1.5} className="text-ink-400" />
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-ink-500">
            The next idea is being built.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
