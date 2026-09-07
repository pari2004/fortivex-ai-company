import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { IntelligenceVisualization } from "@/components/visuals/IntelligenceVisualization";

export function Section01Opportunity() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-white py-32 lg:py-40 border-t border-black/[0.04]">
      {/* Ambient Radial Illumination */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(124,58,237,0.08),_transparent_60%)]" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/[0.06] px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#7C3AED] font-semibold shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
              THE OPPORTUNITY
            </div>
          </Reveal>

          <h2 className="mt-8 max-w-2xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A2E] sm:text-[60px] lg:text-[72px]">
            The world is moving faster.{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
              Business systems
            </span>{" "}
            must move with it.
          </h2>

          <Reveal delay={0.15} className="mt-10 max-w-[650px] space-y-6 text-lg leading-relaxed text-[#4A4A6A] sm:text-xl sm:leading-relaxed">
            {/* Callout Quote Box */}
            <div className="rounded-r-2xl border-l-4 border-[#7C3AED] border-y border-r border-black/[0.06] bg-[#F8F9FB] p-7 shadow-sm transition-all duration-300 hover:border-[#7C3AED]/40 hover:shadow-md">
              <p className="text-xl font-semibold leading-relaxed text-[#1A1A2E]">
                &ldquo;Artificial intelligence is changing how companies operate, create, and compete.&rdquo;
              </p>
              <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#7C3AED]">
                But intelligence alone is not enough.
              </p>
            </div>

            <p className="px-1 text-[#6B7280] font-normal leading-relaxed">
              The real advantage comes from turning intelligence into
              systems that work. Fortivex AI helps organizations move from
              possibility to practical execution with enterprise reliability.
            </p>
          </Reveal>
        </div>

        {/* Right Glass Visual Pedestal */}
        <div className="relative order-first h-[340px] sm:h-[440px] lg:order-none lg:col-span-5 lg:h-[540px]">
          <Reveal y={0} duration={1.2} className="h-full w-full">
            <div className="light-card relative h-full w-full overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.08),_transparent_100%)]" />
              <IntelligenceVisualization className="h-full w-full opacity-95" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
