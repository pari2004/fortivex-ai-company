"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/animations/Reveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Interactive3DGlobe } from "@/components/visuals/Interactive3DGlobe";

const REGIONS = [
  { region: "India", detail: "Headquarters" },
  { region: "North America", detail: "Client Engagements" },
  { region: "Europe", detail: "Client Engagements" },
  { region: "Latin America", detail: "Client Engagements" },
];

export function GlobalPresence() {
  return (
    <section id="company" className="relative overflow-hidden bg-[#05070D] py-32 lg:py-40 border-t border-white/[0.08] bg-grain">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(37,99,235,0.12),_transparent_70%)]" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[14px] uppercase tracking-[0.25em] text-[#3B82F6] font-semibold shadow-xs backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-pulse" />
              GLOBAL PRESENCE
            </div>
          </Reveal>

          <h2 className="mt-8 max-w-3xl text-[44px] font-extrabold leading-[1.08] tracking-[-0.038em] text-[#F8FAFC] sm:text-[60px] lg:text-[72px]">
            Connecting Enterprise{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Intelligence
            </span>{" "}
            Across Global Markets.
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-[650px] text-lg leading-relaxed text-[#CBD5E1] sm:text-xl sm:leading-relaxed font-normal">
            Fortivex AI partners with organizations worldwide to build scalable, intelligent systems that deliver measurable business impact.
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {REGIONS.map((r) => (
              <motion.div
                key={r.region}
                variants={revealItem}
                className="rounded-2xl border border-slate-900/[0.08] bg-white p-5 backdrop-blur-xl shadow-xs transition-all duration-300 hover:border-blue-600/30 hover:shadow-md"
              >
                <p className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                  {r.region}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#2563EB] font-bold">
                  {r.detail}
                </p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <div className="relative order-first h-[340px] sm:h-[440px] lg:order-none lg:col-span-5 lg:h-[540px]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-900/[0.08] bg-white/80 p-4 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)]">
            <Interactive3DGlobe className="h-full w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
