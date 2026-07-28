"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "Technology", href: "#technology" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers" },
];

export function PremiumNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-white/[0.08] bg-[#05070D]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-white/[0.05] bg-[#05070D]/60 backdrop-blur-xl"
      )}
    >
      <Container className="flex h-[64px] items-center justify-between">
        <Logo tone="dark" />

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="#final-cta" variant="primary" strength={10}>
            Let&rsquo;s Build
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[64px] z-40 flex flex-col justify-between bg-[#05070D] px-6 pb-10 pt-8 lg:hidden"
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
                  className="border-b border-white/[0.08] py-5 text-2xl font-semibold tracking-tight text-white"
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
              <MagneticButton
                href="#final-cta"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Let&rsquo;s Build
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
