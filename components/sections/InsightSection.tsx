"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight, Cpu, Code2, Layers, Bot, TrendingUp, Compass, Clock, BookOpen, Tag, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";

const CATEGORIES = [
  "Artificial Intelligence",
  "Engineering",
  "Product",
  "Automation",
  "Business",
  "Future of Work",
];

const CATEGORY_ICONS = [Cpu, Code2, Layers, Bot, TrendingUp, Compass];
const READ_TIMES = ["5 min read", "4 min read", "6 min read", "3 min read", "7 min read", "4 min read"];

/* PLACEHOLDER - replace with real photo */
const ARTICLE_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
];

/* PLACEHOLDER - 1-line excerpts */
const ARTICLE_EXCERPTS = [
  "Exploring distributed intelligence frameworks for high-throughput enterprise systems.",
  "Architecting resilient cloud-native infrastructures for continuous scale.",
  "Designing intuitive human-AI interfaces for next-generation products.",
  "Streamlining complex workflows with automated intelligent agents.",
  "Measuring strategic ROI and impact across modern technology initiatives.",
  "Navigating shifts in global engineering operations and hybrid workflows.",
];

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
            const isHighlight = word.toLowerCase().includes("systems") || word.toLowerCase().includes("building");
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

export function InsightSection() {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const featuredCategory = CATEGORIES[0];
  const supportingCategories = CATEGORIES.slice(1);

  return (
    <section id="insights" className="relative overflow-hidden bg-[#0A0A0F] py-12 md:py-16">
      {/* Subtle Header Gradient Mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-violet-600/10 to-transparent blur-3xl opacity-70" />
      </div>

      <Container className="relative z-10">
        {/* Section Anchor Header - Compact Padding */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-6 backdrop-blur-xl md:p-8">
          {/* Header Mesh & Grid */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
                  {/* Subtle Continuous Float Animation */}
                  <motion.span
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    <Tag size={12} />
                  </motion.span>
                  <SectionLabel index="09" label="Insights" tone="dark" className="text-indigo-400 font-bold" />
                </div>
              </Reveal>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-[#F5F5F7] sm:text-4xl leading-tight">
                <WordTextReveal lines={["Thoughts from the systems", "we are building."]} />
              </h2>
            </div>

            {/* Category Tag Chips - Drag/Scroll Filter Row */}
            <Reveal delay={0.1} className="flex max-w-full overflow-x-auto scrollbar-none gap-2 py-1 snap-x">
              {CATEGORIES.map((c, i) => (
                <motion.span
                  key={c}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 cursor-pointer snap-start rounded-full border px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider backdrop-blur-md transition-colors duration-200 ${
                    i === 0
                      ? "border-indigo-500/50 bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] font-semibold"
                      : "border-white/10 bg-white/[0.03] text-[#A1A1AA] hover:border-white/20 hover:bg-white/[0.06] hover:text-[#F5F5F7]"
                  }`}
                >
                  {c}
                </motion.span>
              ))}
            </Reveal>
          </div>
        </div>

        {/* Bento + Horizontal Article Carousel Layout - Compact Gaps */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
          {/* Left Column: Fixed Featured Hero Bento Card */}
          <div className="lg:col-span-5 flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.015 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F0F18] via-[#0A0A0F] to-[#0F0F18] p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 shadow-[0_0_35px_rgba(99,102,241,0.12)] min-h-[420px]"
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
                whileInView={{ opacity: 0.35, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="absolute inset-0 overflow-hidden opacity-35 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-45"
              >
                <img
                  src={ARTICLE_IMAGES[0]}
                  alt="Featured Article Visual"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-indigo-900/30" />
              </motion.div>

              {/* Card Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-indigo-400 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10">
                      <Cpu size={20} strokeWidth={1.8} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-[11px] font-mono text-violet-300">
                      <Sparkles size={11} className="text-violet-400" /> Featured Article
                    </span>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#A1A1AA] transition-all duration-300 group-hover:border-indigo-500/50 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-violet-600 group-hover:text-white">
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </span>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-indigo-400" /> {READ_TIMES[0]}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={12} className="text-violet-400" /> Architecture
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors sm:text-3xl leading-tight">
                    {featuredCategory}
                  </h3>

                  {/* PLACEHOLDER - 1-line excerpt */}
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA] line-clamp-2">
                    {ARTICLE_EXCERPTS[0]}
                  </p>
                </div>
              </div>

              {/* Card Footer - PLACEHOLDER author info */}
              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-[#A1A1AA]">
                {/* PLACEHOLDER - author avatar */}
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/20 text-indigo-300">
                    <User size={12} />
                  </div>
                  <span className="text-indigo-200">Fortivex Research Lab</span>
                </div>

                {/* PLACEHOLDER - Read more + ArrowRight */}
                <span className="flex items-center gap-1 font-semibold text-indigo-400 transition-colors group-hover:text-indigo-300">
                  Read more <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Horizontal Article Carousel Slider with Chevron Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Carousel Header Controls */}
            <div className="flex items-center justify-between pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA]">Article Collection</span>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous article"
                  onClick={() => scrollSlider("left")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5F5F7] backdrop-blur-md transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next article"
                  onClick={() => scrollSlider("right")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5F5F7] backdrop-blur-md transition-all hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Horizontal Drag/Scroll Slider - Compact Card Padding (p-5) */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-1 cursor-grab active:cursor-grabbing"
            >
              {supportingCategories.map((category, sIdx) => {
                const actualIdx = sIdx + 1;
                const Icon = CATEGORY_ICONS[actualIdx % CATEGORY_ICONS.length];

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: sIdx * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    className="group relative flex w-[280px] sm:w-[310px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]"
                  >
                    {/* PLACEHOLDER - replace with real photo */}
                    <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-white/10">
                      <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 0.7, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: sIdx * 0.05 }}
                        src={ARTICLE_IMAGES[actualIdx]}
                        alt={category}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
                      <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#A1A1AA] backdrop-blur-md group-hover:border-indigo-500/40 group-hover:text-white">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center gap-3 font-mono text-[11px] text-[#A1A1AA]">
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-indigo-400" /> {READ_TIMES[actualIdx]}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Icon size={11} className="text-violet-400" /> Topic
                        </span>
                      </div>

                      <h3 className="mt-2 text-lg font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
                        {category}
                      </h3>

                      {/* PLACEHOLDER - 1-line excerpt */}
                      <p className="mt-1.5 text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
                        {ARTICLE_EXCERPTS[actualIdx]}
                      </p>
                    </div>

                    {/* PLACEHOLDER - Read more + ArrowRight */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3 text-xs font-mono text-[#A1A1AA]">
                      <span className="text-[11px]">Research Paper</span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-indigo-400 transition-colors group-hover:text-indigo-300">
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Banner - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
          className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.01] py-8 text-center backdrop-blur-md transition-colors duration-300 hover:border-indigo-500/30"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-indigo-400">
            <Sparkles size={18} strokeWidth={1.5} />
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">
            The next idea is being built.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}






