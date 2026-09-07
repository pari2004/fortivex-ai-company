"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function DashboardPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <Container className="max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-3 text-sm font-medium text-slate-500 mb-6">
            <span className="w-8 h-px bg-slate-300"></span>
            Platform Preview
          </span>
          <h2 className="text-3xl lg:text-5xl text-slate-900 mb-6 font-sans tracking-tight leading-tight">
            Your intelligence, one dashboard.
          </h2>
          <p className="text-lg text-slate-600">
            Agents, architecture, API monitoring and orchestration — all live, all in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto max-w-6xl [perspective:1000px]">
            <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-to-b from-violet-500/10 via-violet-500/5 to-transparent blur-3xl pointer-events-none"></div>
            <div className="relative h-[260px] sm:h-[380px] lg:h-[640px]">
              
              {/* Tabs */}
              <div className="flex flex-row items-center overflow-auto sm:overflow-visible max-w-full w-full justify-center gap-2 mb-6 relative z-20">
                <button className="relative px-4 py-2 rounded-full text-sm font-medium text-black">
                  <div className="absolute inset-0 rounded-full bg-violet-100"></div>
                  <span className="relative block">Dashboard</span>
                </button>
                <button className="relative px-4 py-2 rounded-full text-sm font-medium text-slate-500">
                  <span className="relative block">Agent Hub</span>
                </button>
                <button className="relative px-4 py-2 rounded-full text-sm font-medium text-slate-500">
                  <span className="relative block">Infrastructure</span>
                </button>
              </div>

              {/* Stacked Cards */}
              <div className="relative w-full h-full">
                {/* Top Card */}
                <div className="w-full h-full absolute top-0 left-0" style={{ zIndex: 0, opacity: 1, transform: "none" }}>
                  <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-violet-500/10 overflow-hidden flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
                      <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                      <span className="ml-4 text-xs font-mono text-slate-400">fortivex.ai/dashboard</span>
                    </div>
                    <div className="flex-1 bg-slate-100/50 flex items-center justify-center">
                       {/* Placeholder for dashboard image */}
                       <div className="text-slate-400 font-mono text-sm">Dashboard Interface</div>
                    </div>
                  </div>
                </div>

                {/* Second Card (Behind) */}
                <div className="w-full h-full absolute top-0 left-0" style={{ zIndex: -1, opacity: 0.9, transform: "scale(0.9) translateY(4%)" }}>
                  <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-violet-500/10 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
                      <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <div className="flex-1 bg-white"></div>
                  </div>
                </div>

                {/* Third Card (Behind) */}
                <div className="w-full h-full absolute top-0 left-0" style={{ zIndex: -2, opacity: 0.8, transform: "scale(0.8) translateY(8%)" }}>
                  <div className="w-full h-full rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-violet-500/10 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
                      <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <div className="flex-1 bg-white"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
