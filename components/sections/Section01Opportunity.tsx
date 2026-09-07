import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { IntelligenceVisualization } from "@/components/visuals/IntelligenceVisualization";

export function Section01Opportunity() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-[#0B1220] py-32 lg:py-40 border-t border-white/[0.08] bg-grain">
      {/* Ambient Radial Illumination */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.12),_transparent_60%)]" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-12 lg:gap-14">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]" />
              THE OPPORTUNITY
            </div>
          </Reveal>

          <h2 className="mt-8 max-w-2xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
            The world is moving faster.{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Business systems
            </span>{" "}
            must move with it.
          </h2>

          <Reveal delay={0.15} className="mt-10 max-w-[650px] space-y-6 text-lg leading-relaxed text-[#CBD5E1] sm:text-xl sm:leading-relaxed">
            {/* Callout Quote Box */}
            <div className="rounded-r-2xl border-l-4 border-[#2563EB] border-y border-r border-white/10 bg-[#121B2D] p-7 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-blue-500/40">
              <p className="text-xl font-semibold leading-relaxed text-[#F8FAFC]">
                &ldquo;Artificial intelligence is changing how companies operate, create, and compete.&rdquo;
              </p>
              <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#3B82F6]">
                But intelligence alone is not enough.
              </p>
            </div>

            <p className="px-1 text-[#CBD5E1] font-normal leading-relaxed">
              The real advantage comes from turning intelligence into
              systems that work. Fortivex AI helps organizations move from
              possibility to practical execution with enterprise reliability.
            </p>
          </Reveal>
        </div>

        {/* Right Glass Visual Pedestal */}
        <div className="relative order-first h-[340px] sm:h-[440px] lg:order-none lg:col-span-5 lg:h-[540px]">
          <Reveal y={0} duration={1.2} className="h-full w-full">
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-[#121B2D]/80 p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.12),_transparent_70%)]" />
              <IntelligenceVisualization className="h-full w-full opacity-95" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
