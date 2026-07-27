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
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 whitespace-nowrap";

  const variants: Record<string, string> = {
    primary:
      "bg-[image:var(--gradient-brand)] text-white shadow-[0_8px_30px_-8px_rgba(124,77,255,0.55)] hover:shadow-[0_10px_40px_-6px_rgba(124,77,255,0.7)]",
    outline:
      tone === "dark"
        ? "border border-ink-400/30 text-ink-50 hover:border-ink-50/60"
        : "border border-ink-900/20 text-ink-900 hover:border-ink-900/50",
    ghost:
      tone === "dark"
        ? "text-ink-50/90 hover:text-white"
        : "text-ink-800 hover:text-ink-900",
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
