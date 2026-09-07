"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  tone?: "dark" | "light";
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  tone = "dark",
  className,
  strength = 18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 16, mass: 0.4 });

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap cursor-pointer select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#7C3AED] text-white hover:opacity-95 shadow-[0_4px_24px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_32px_rgba(37,99,235,0.6)] active:scale-[0.98]",
    outline:
      "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98] backdrop-blur-xl shadow-xs",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: sx, y: sy }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        onClick={onClick}
        className="inline-block"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block">
      {content}
    </button>
  );
}
