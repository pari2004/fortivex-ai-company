"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

export function CursorGlow({
  className,
  size = 520,
}: {
  className?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleLeave() {
    x.set(-9999);
    y.set(-9999);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("pointer-events-auto absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <motion.div
        className="pointer-events-none absolute rounded-full opacity-[0.14] blur-[90px]"
        style={{
          width: size,
          height: size,
          left: sx,
          top: sy,
          x: -size / 2,
          y: -size / 2,
          background:
            "radial-gradient(circle, var(--color-violet) 0%, var(--color-royal) 45%, transparent 72%)",
        }}
      />
    </div>
  );
}
