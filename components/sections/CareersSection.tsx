"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BrainCircuit, Code2, Layers, Palette, Briefcase, Settings2, Sparkles, MapPin, Clock, Users, Filter, Zap, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* PLACEHOLDER - 1-line role summary per job */
const AREAS = [
  { name: "AI & Machine Learning", icon: BrainCircuit, tag: "Engineering", count: "Multiple Roles", summary: "Architect autonomous AI agents and deep learning models for high-throughput enterprise systems.", posted: "Posted 2d ago", image: "https://picsum.photos/id/1015/800/600" },
  { name: "Software Engineering", icon: Code2, tag: "Core Tech", count: "Multiple Roles", summary: "Build scalable, low-latency distributed systems and cloud-native infrastructure.", posted: "Posted 3d ago", image: "https://picsum.photos/id/1016/800/600" },
  { name: "Product", icon: Layers, tag: "Strategy", count: "Active Hiring", summary: "Drive product strategy and technical roadmap for next-gen AI platforms.", posted: "Posted 1d ago", image: "https://picsum.photos/id/1018/800/600" },
  { name: "Design", icon: Palette, tag: "UX/UI", count: "Active Hiring", summary: "Craft high-fidelity, intuitive interfaces for complex computational workflows.", posted: "Posted 4d ago", image: "https://picsum.photos/id/1021/800/600" },
  { name: "Business", icon: Briefcase, tag: "Growth", count: "Active Hiring", summary: "Expand global strategic partnerships and enterprise solution engagements.", posted: "Posted 5d ago", image: "https://picsum.photos/id/1024/800/600" },
  { name: "Operations", icon: Settings2, tag: "Systems", count: "Active Hiring", summary: "Optimize engineering operations, CI/CD pipelines, and infrastructure reliability.", posted: "Posted 2d ago", image: "https://picsum.photos/id/1031/800/600" },
];

const DEPARTMENT_TAGS = ["All Departments", "Engineering", "Core Tech", "Strategy", "UX/UI", "Growth", "Systems"];

/* PLACEHOLDER - replace with real photo */
const HERO_IMAGE = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80";

/* PLACEHOLDER - 2-3 perk chips */
const PERK_CHIPS = [
  { icon: Zap, label: "Competitive Equity" },
  { icon: Clock, label: "Flexible Hybrid Work" },
  { icon: Sparkles, label: "Annual Learning Stipend" },
];

/* PLACEHOLDER - replace with real photo (Culture Gallery) */
const CULTURE_IMAGES = [
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80", title: "Collaborative Design Sessions" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80", title: "Engineering Sprint Reviews" },
  { url: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=800&auto=format&fit=crop&q=80", title: "Global AI Hackathons" },
  { url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80", title: "Team Milestone Celebrations" },
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
            const isHighlight = word.toLowerCase().includes("future") || word.toLowerCase().includes("us.");
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

export function CareersSection() {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });
  const [activeFilter, setActiveFilter] = useState("All Departments");

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
    <section id="careers" className="relative overflow-hidden bg-[#0A0A0F] py-12 md:py-16">
      {/* Subtle Header Gradient Mesh */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-violet-600/10 to-transparent blur-3xl opacity-70" />
      </div>

      <Container className="relative z-10">
        {/* Hero-Style Section Anchor Block - Compact Padding */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01] p-6 backdrop-blur-xl md:p-8 transition-all duration-300 hover:border-indigo-500/30"
        >
          {/* Cursor Follow Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: glowPos.opacity,
              background: `radial-gradient(550px circle at ${glowPos.x}px ${glowPos.y}px, rgba(99,102,241,0.14), transparent 80%)`,
            }}
          />

          {/* PLACEHOLDER - replace with real photo (Hero side visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 overflow-hidden opacity-15"
          >
            <img
              src={HERO_IMAGE}
              alt="Team Careers Visual"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A0A0F]/80 mix-blend-multiply" />
          </motion.div>

          {/* Header Mesh & Grid */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          </div>

          <div className="relative z-10 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-md">
                  {/* Subtle Continuous Float Animation */}
                  <motion.span
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    <Users size={12} />
                  </motion.span>
                  <SectionLabel index="10" label="Careers" tone="dark" className="text-indigo-400 font-bold" />
                </div>
              </Reveal>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-[#F5F5F7] sm:text-4xl leading-tight">
                <WordTextReveal lines={["Build the future", "with us."]} />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="mt-3 max-w-2xl text-base leading-relaxed text-[#A1A1AA]"
              >
                We are building intelligent products, systems, and technology
                businesses for an AI-powered world.
              </motion.p>

              {/* PLACEHOLDER - 2-3 perk chips near hero */}
              <div className="mt-5 flex flex-wrap gap-2">
                {PERK_CHIPS.map((perk) => {
                  const PerkIcon = perk.icon;
                  return (
                    <span
                      key={perk.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-mono text-indigo-300 backdrop-blur-md"
                    >
                      <PerkIcon size={12} className="text-indigo-400" />
                      {perk.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              >
                <MagneticButton href="#final-cta" variant="primary" tone="dark" className="shadow-[0_0_25px_rgba(99,102,241,0.3)]">
                  Explore Opportunities
                  <ArrowRight size={15} strokeWidth={2.4} />
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Department Filter Chip Carousel Row */}
        <div className="mt-8 flex items-center gap-3 overflow-x-auto scrollbar-none snap-x py-1 select-none">
          <div className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-[#A1A1AA] pr-2 border-r border-white/10">
            <Filter size={13} className="text-indigo-400" />
            <span>Filter:</span>
          </div>

          {DEPARTMENT_TAGS.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <motion.button
                key={tag}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(tag)}
                className={`shrink-0 snap-start rounded-full border px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider backdrop-blur-md transition-all duration-200 ${
                  isActive
                    ? "border-indigo-500/50 bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] font-semibold"
                    : "border-white/10 bg-white/[0.03] text-[#A1A1AA] hover:border-white/20 hover:bg-white/[0.06] hover:text-[#F5F5F7]"
                }`}
              >
                {tag}
              </motion.button>
            );
          })}
        </div>

        {/* Job Listing Glass Cards Bento Grid - Compact Padding (p-5) */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, idx) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]"
              >
                <div>
                  {/* PLACEHOLDER IMAGE - replace with real photo */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 overflow-hidden rounded-xl h-40 w-full border border-white/10"
                  >
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>

                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-indigo-400 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10">
                      <IconComponent size={18} strokeWidth={1.8} />
                    </div>

                    {/* PLACEHOLDER - posted X days ago tag */}
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-indigo-300/80">
                      {area.posted}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-indigo-300">
                      {area.tag}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-[#F5F5F7] group-hover:text-white transition-colors">
                      {area.name}
                    </h3>
                    {/* PLACEHOLDER - 1-line role summary */}
                    <p className="mt-1.5 text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
                      {area.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3.5 text-xs font-mono text-[#A1A1AA]">
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin size={12} className="text-indigo-400" /> Bengaluru / Hybrid
                  </span>

                  {/* Gradient CTA button "Apply Now" */}
                  <span className="flex items-center gap-1 rounded-full border border-indigo-500/40 bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 text-[10px] font-semibold text-white transition-shadow group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                    Apply Now <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Life at Company & Culture Sub-section (Replaces excess empty space) */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Life at Fortivex AI
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F7]">
                Engineered for autonomy & impact.
              </h3>
              {/* PLACEHOLDER - short culture/values blurb */}
              <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-[#A1A1AA]">
                We foster a culture of deep technical ownership, high-velocity iteration, and flat decision-making across our global engineering hubs.
              </p>
            </div>

            <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider shrink-0">
              Culture & Work Environment
            </span>
          </div>

          {/* Mini-Gallery Grid (3-4 images) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CULTURE_IMAGES.map((img, idx) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative h-36 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                {/* PLACEHOLDER - replace with real photo */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-[#0A0A0F]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-mono text-[10px] font-semibold text-[#F5F5F7] truncate">
                    {img.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Block - "Don't see your role? Get in touch" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.01] p-6 backdrop-blur-md transition-colors hover:border-indigo-500/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F5F5F7]">
                  Don&apos;t see your role? Get in touch.
                </h4>
                <p className="text-xs text-[#A1A1AA]">
                  We are always looking for exceptional engineers, researchers, and builders.
                </p>
              </div>
            </div>

            <MagneticButton href="#final-cta" variant="secondary" tone="dark" className="shrink-0 text-xs py-2.5 px-4">
              Spontaneous Application
              <ArrowRight size={13} />
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}






