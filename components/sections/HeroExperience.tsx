"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Receipt } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PARTNER_LOGOS = [
  "Google Cloud",
  "AWS",
  "Microsoft Azure",
  "TensorFlow",
  "OpenAI",
  "Hugging Face",
  "LangChain",
  "Supabase",
  "Vercel",
  "Docker",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroExperience() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col bg-white">
      {/* Background canvas substitute - simple grain/noise */}
      <div className="absolute inset-0 bg-grain" aria-hidden="true"></div>

      <Container className="relative z-10 flex-1 flex flex-col justify-center w-full mx-auto pt-28 lg:pt-32 text-center pb-20">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          className="mb-4 flex justify-center"
        >
          <span className="pearl-badge inline-flex items-center gap-2 text-xs font-semibold pl-4 pr-5 py-2 rounded-full">
            <Receipt size={13} strokeWidth={2} />
            Enterprise scale ready &middot; SOC2 Compliant
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: EASE }}
          className="relative mb-5 mx-auto max-w-4xl"
        >
          <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-sans leading-[1] tracking-tight text-slate-900">
            <span className="block font-bold">Build intelligent systems.</span>
            <span className="block font-bold">
              <span className="relative inline-block">
                <span className="inline-block animate-char-in whitespace-nowrap">Faster than ever.</span>
              </span>
            </span>
            <span className="block text-violet-600 font-bold">All in one platform.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <p className="text-base lg:text-lg text-slate-600 leading-normal max-w-xl mx-auto mb-6">
            Tell Fortivex AI what you need to orchestrate. We build the architecture, connect your data, and deploy autonomous agents in one seamless ecosystem.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="relative z-20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="gradient-button inline-flex items-center justify-center rounded-[11px] text-white font-sans font-bold px-6 py-3 text-sm w-full sm:w-auto gap-2 group">
              Start 7 days free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-all w-full sm:w-auto">
              <Play size={18} className="text-violet-600" />
              Watch Demo
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            No credit card required &middot; Enterprise grade security &middot; Built in minutes
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="flex items-center justify-center gap-3 mt-5"
        >
          <a href="#" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-violet-600 hover:border-violet-300 transition-all duration-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-violet-600 hover:border-violet-300 transition-all duration-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-violet-600 hover:border-violet-300 transition-all duration-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
          </a>
        </motion.div>
      </Container>

      {/* Infinite Marquee at the bottom of the section */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-8 lg:pb-10">
        <div
          className="relative w-full overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)" }}
        >
          <div
            className="flex w-max animate-marquee items-center gap-12 lg:gap-16 opacity-90 hover:opacity-100 transition-opacity duration-300"
            style={{ animationDirection: "reverse" }}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span className="text-base font-medium text-slate-900 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
