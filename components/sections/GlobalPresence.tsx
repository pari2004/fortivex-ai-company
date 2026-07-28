"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Building2, Compass, MapPin, Sparkles, Navigation, ShieldCheck, Zap, Activity, Users, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";

const OFFICE_LOCATIONS = [
  {
    city: "Bengaluru",
    country: "India",
    isHeadquarters: true,
    tag: "Headquarters",
    detail: "Primary Command Hub",
    address: "Indiranagar 100ft Road, Bengaluru, Karnataka 560038, India",
    mapQuery: "Bengaluru,India",
    icon: Building2,
  },
  {
    city: "Dubai",
    country: "UAE",
    isHeadquarters: false,
    tag: "Regional Hub",
    detail: "Middle East Operations",
    address: "Dubai Internet City, Building 3, Dubai, United Arab Emirates",
    mapQuery: "Dubai,UAE",
    icon: Globe,
  },
];

/* PLACEHOLDER - icon+label under each stat */
const METRICS = [
  { label: "Global Reach", value: "2", unit: "Primary Hubs", icon: Globe, detail: "India & UAE Hubs" },
  { label: "Engineering HQ", value: "1", unit: "Bengaluru", icon: Building2, detail: "Primary Command Hub" },
  { label: "Operations", value: "24/7", unit: "Continuous", icon: ShieldCheck, detail: "Continuous Monitoring" },
];

const MARQUEE_ITEMS = [
  "BENGALURU HEADQUARTERS",
  "DUBAI REGIONAL HUB",
  "GLOBAL AI ARCHITECTURE",
  "CONTINUOUS SYSTEMS",
];

/* PLACEHOLDER - replace with real photo */
const COMPANY_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80";

function CounterNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const isNumeric = /^\d+/.test(value);
  const targetNum = isNumeric ? parseInt(value.match(/^\d+/)?.[0] || "0", 10) : 0;
  const suffix = isNumeric ? value.replace(/^\d+/, "") : value;

  useEffect(() => {
    if (isInView && isNumeric && targetNum > 0) {
      let start = 0;
      const duration = 1200;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = targetNum / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setDisplayValue(targetNum);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, isNumeric, targetNum]);

  if (!isNumeric) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function WordTextReveal({ lines }: { lines: string[] }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.04 } },
      }}
      className="inline-block"
    >
      {lines.map((line, lIdx) => (
        <span key={lIdx} className="block">
          {line.split(" ").map((word, wIdx) => {
            const isHighlight = word.toLowerCase().includes("bengaluru") || word.toLowerCase().includes("world");
            return (
              <motion.span
                key={wIdx}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
                className={`inline-block mr-[0.25em] ${
                  isHighlight
                    ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent font-extrabold"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.span>
  );
}

function WireGlobe() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      <circle cx="200" cy="200" r="160" fill="url(#globeGlow)" />

      <g stroke="#6366F1" strokeWidth={1.2} fill="none" opacity={0.45}>
        <circle cx="200" cy="200" r="160" strokeDasharray="4 4" />
        <motion.ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="60"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <motion.ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="100"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <ellipse cx="200" cy="200" rx="60" ry="160" />
        <line x1="40" y1="200" x2="360" y2="200" strokeDasharray="3 3" />
      </g>

      {/* Pulsing Pin Nodes */}
      <g>
        <circle cx="250" cy="200" r="8" fill="#6366F1" />
        <circle cx="250" cy="200" r="18" fill="#6366F1" opacity={0.3} className="animate-ping" style={{ transformOrigin: "250px 200px" }} />
        
        <circle cx="130" cy="140" r="5" fill="#8B5CF6" />
        <circle cx="280" cy="160" r="5" fill="#8B5CF6" />
        <circle cx="150" cy="240" r="5" fill="#A78BFA" />
      </g>
    </svg>
  );
}

export function GlobalPresence() {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section id="company" className="relative overflow-hidden bg-[#0A0A0F] py-12 md:py-16">
      {/* Subtle Header Gradient Mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-violet-600/10 to-transparent blur-3xl opacity-70" />
      </div>

      <Container className="relative z-10">
        {/* Section Anchor Header - Compact Padding */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-6 backdrop-blur-xl md:p-8">
          {/* Header Mesh & Grid */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          <div className="relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
                {/* Subtle Continuous Float Animation */}
                <motion.span
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <Navigation size={12} />
                </motion.span>
                <SectionLabel index="07" label="Global Perspective" tone="dark" className="text-indigo-400 font-bold" />
              </div>
            </Reveal>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[#F5F5F7] sm:text-4xl leading-tight">
              <WordTextReveal lines={["Built in Bengaluru.", "Designed for the world."]} />
            </h2>

            {/* PLACEHOLDER - 1-line description under heading */}
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[#A1A1AA]">
              Pioneering high-performance AI architectures and continuous software engineering from India&apos;s primary technology hub and regional offices.
            </p>
          </div>
        </div>

        {/* Decorative Infinite Marquee Ribbon Accent */}
        <div className="mt-6 flex overflow-hidden border-y border-white/5 py-3 select-none opacity-40">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0 items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#A1A1AA] whitespace-nowrap"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-indigo-400/60" />
              </span>
            ))}
          </motion.div>
        </div>

        {/* Alternating Split Layout - Metrics & Globe Visual */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Text & Stat Metric Counters */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-lg leading-relaxed text-[#A1A1AA]"
            >
              Fortivex AI operates out of Bengaluru, India and Dubai, UAE, partnering with enterprise organizations worldwide.
            </motion.p>

            {/* Stat Metric Counters Bar */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/5 py-5">
              {METRICS.map((m, idx) => {
                const StatIcon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <span className="font-mono text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent sm:text-3xl">
                      <CounterNumber value={m.value} />
                    </span>
                    <span className="mt-0.5 text-xs font-semibold text-[#F5F5F7]">{m.label}</span>
                    <div className="mt-1 flex items-center gap-1 font-mono text-[10px] uppercase text-indigo-300/80">
                      <StatIcon size={10} className="text-indigo-400 shrink-0" />
                      <span className="truncate">{m.detail}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: WireGlobe Hero Visual Container + PLACEHOLDER Image */}
          <div className="relative order-first lg:order-none lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)]"
            >
              {/* Cursor Follow Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: glowPos.opacity,
                  background: `radial-gradient(500px circle at ${glowPos.x}px ${glowPos.y}px, rgba(99,102,241,0.18), transparent 80%)`,
                }}
              />

              {/* PLACEHOLDER - replace with real photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 0.15, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 overflow-hidden opacity-15"
              >
                <img
                  src={COMPANY_IMAGE}
                  alt="Global Office Visual"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0F]/80 mix-blend-multiply" />
              </motion.div>

              <div className="relative h-full w-full opacity-90">
                <WireGlobe />
              </div>

              {/* Status Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-[#0A0A0F]/90 px-4 py-3 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  </span>
                  <div>
                    <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#F5F5F7]">Global Operations</span>
                    <span className="block text-[10px] text-[#A1A1AA]">Bengaluru & Dubai Hubs</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-indigo-400">
                  <Zap size={11} /> 24/7 Active
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Primary 2-Column Office Location Cards Section (India & Dubai Only) */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-indigo-400" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F5F5F7]">
              Our Offices
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFICE_LOCATIONS.map((loc, idx) => {
              const IconComponent = loc.icon;
              return (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-indigo-400 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10">
                          <IconComponent size={18} strokeWidth={1.8} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
                              {loc.city}, {loc.country}
                            </h4>
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                            </span>
                          </div>
                          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                            {loc.detail}
                          </p>
                        </div>
                      </div>

                      {loc.isHeadquarters ? (
                        <span className="rounded-full border border-indigo-500/50 bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 text-[10px] font-mono font-semibold text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] shrink-0">
                          {loc.tag}
                        </span>
                      ) : (
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-mono text-indigo-300 shrink-0">
                          {loc.tag}
                        </span>
                      )}
                    </div>

                    {/* PLACEHOLDER - add real address */}
                    <p className="mt-3 text-xs font-mono text-[#A1A1AA] leading-relaxed">
                      {loc.address}
                    </p>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                    <iframe
                      src={`https://maps.google.com/maps?q=${loc.mapQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="240"
                      style={{ border: 0, borderRadius: "16px" }}
                      loading="lazy"
                      title={`${loc.city} Office Location`}
                      className="opacity-90 grayscale contrast-125 invert-[0.9] hue-rotate-180 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}






