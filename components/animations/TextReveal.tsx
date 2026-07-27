"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function TextReveal({
  lines,
  className,
  delay = 0,
  stagger = 0.06,
  once = true,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  let wordIndex = 0;

  return (
    <span className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden py-[0.08em]">
          {line.split(" ").map((word, wi) => {
            const i = wordIndex++;
            return (
              <span
                key={wi}
                className="mr-[0.28em] inline-block overflow-hidden last:mr-0"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once, amount: 0.6 }}
                  transition={{
                    duration: 0.9,
                    ease: EASE,
                    delay: delay + i * stagger,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
