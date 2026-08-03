import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientField } from "@/components/ui/AmbientGlow";

type Product = {
  flagship: string;
  badge: string;
  name: string;
  nameAccent: string;
  description: string;
  areas: string[];
  href: string;
  cta: string;
};

const PRODUCTS: Product[] = [
  {
    flagship: "Fortivex Ecosystem — Flagship 01",
    badge: "AI Education & Career Transformation",
    name: "Empowers",
    nameAccent: "Academy",
    description:
      "A live, mentor-led AI education platform focused on helping people build practical AI capabilities and prepare for the future of work.",
    areas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "MLOps",
      "Applied Projects",
      "Career Transformation",
    ],
    href: "https://empowersacademy.com/",
    cta: "Explore Empowers Academy",
  },
  {
    flagship: "Fortivex Ecosystem — Flagship 02",
    badge: "Healthcare Education & Professional Development",
    name: "Medivex",
    nameAccent: "AI",
    description:
      "Specialized training in clinical research, medical coding, clinical SAS, biostatistics, and AI in healthcare — with guaranteed internships and placement support.",
    areas: [
      "Clinical Research",
      "Medical Coding",
      "Clinical SAS",
      "Biostatistics",
      "Bioinformatics",
      "AI in Healthcare",
      "Placement Support",
    ],
    href: "https://www.medivexai.com/",
    cta: "Explore Medivex AI",
  },
];

export function ProductReveal() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-28 lg:py-36 border-t border-white/[0.08] bg-grain">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.12),_transparent_70%)]" />

      <Container className="relative z-10 flex flex-col gap-16">
        {PRODUCTS.map((product, i) => (
          <div key={product.name} className="flex flex-col gap-10">
            <Reveal className="text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#94A3B8] font-bold">
                {product.flagship}
              </span>
            </Reveal>

            <Reveal
              delay={0.1}
              className="mx-auto max-w-4xl w-full rounded-[28px] border border-white/15 bg-[#121B2D]/90 p-8 sm:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_rgba(37,99,235,0.15),_transparent_60%)]" />

              <div className="relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
                    {product.badge}
                  </span>

                  <h3 className="mt-6 text-[48px] font-bold leading-[0.95] tracking-[-0.03em] text-[#F8FAFC] sm:text-[52px] md:text-[60px]">
                    {product.name}
                    <br />
                    <span className="text-gradient-brand">{product.nameAccent}</span>
                  </h3>
                </div>

                <p className="max-w-sm text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
                  {product.description}
                </p>
              </div>

              <div className="relative z-10 mt-10 flex flex-wrap gap-2.5 border-t border-white/10 pt-8">
                {product.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-[#F8FAFC] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:text-[#3B82F6]"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-10">
                <MagneticButton href={product.href} variant="primary">
                  {product.cta}
                  <ArrowUpRight size={15} strokeWidth={2.4} />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        ))}
      </Container>
    </section>
  );
}
