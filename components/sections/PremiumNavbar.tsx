"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Workflow", href: "#workflow" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export function PremiumNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
      const ecosystemEl = document.getElementById("theme-transition");
      if (ecosystemEl) {
        const rect = ecosystemEl.getBoundingClientRect();
        setPastHero(rect.top < 64);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !pastHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isLight
          ? scrolled || open
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
          : scrolled || open
            ? "border-b border-white/[0.08] bg-[#05070D]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "border-b border-white/[0.05] bg-[#05070D]/60 backdrop-blur-xl"
      )}
    >
      <nav className="mx-auto transition-all duration-500 max-w-[1400px]">
        <div className="flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 h-20">
          <button className="flex items-center gap-2 group">
            <Logo tone={isLight ? "light" : "dark"} />
          </button>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors duration-300 relative group font-sans font-medium",
                  isLight
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                  isLight ? "bg-slate-900" : "bg-white"
                )} />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className={cn(
                "transition-all duration-500 text-sm font-medium",
                isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-300 hover:text-white"
              )}
            >
              Log in
            </a>
            <a
              href="#chat"
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 rounded-xl transition-all duration-500 px-4 h-10 text-sm font-semibold",
                isLight 
                  ? "bg-violet-600 hover:bg-violet-700 text-white" 
                  : "bg-white hover:bg-slate-50 text-slate-900"
              )}
            >
              <Sparkles size={14} />
              Let&rsquo;s Build
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 items-center justify-center lg:hidden",
              isLight ? "text-[#1A1A2E]" : "text-white"
            )}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 top-[80px] z-40 flex flex-col justify-between px-6 pb-10 pt-8 lg:hidden",
              isLight ? "bg-white" : "bg-[#05070D]"
            )}
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "border-b py-5 text-2xl font-semibold tracking-tight",
                    isLight
                      ? "border-black/[0.06] text-[#1A1A2E]"
                      : "border-white/[0.08] text-white"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="#chat"
                className={cn(
                  "inline-flex items-center justify-center gap-1.5 rounded-xl transition-all duration-500 px-4 h-12 text-sm font-semibold w-full",
                  isLight 
                    ? "bg-violet-600 hover:bg-violet-700 text-white" 
                    : "bg-white hover:bg-slate-50 text-slate-900"
                )}
                onClick={() => setOpen(false)}
              >
                <Sparkles size={14} />
                Let&rsquo;s Build
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
