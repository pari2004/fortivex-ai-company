"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Node = { x: number; y: number; r: number; delay: number };

const NODES: Node[] = [
  { x: 220, y: 90, r: 3.2, delay: 0.1 },
  { x: 340, y: 60, r: 2.2, delay: 0.3 },
  { x: 120, y: 160, r: 2.6, delay: 0.2 },
  { x: 260, y: 200, r: 4, delay: 0.15 },
  { x: 400, y: 180, r: 2.4, delay: 0.4 },
  { x: 90, y: 300, r: 3, delay: 0.25 },
  { x: 220, y: 330, r: 2.4, delay: 0.5 },
  { x: 360, y: 310, r: 3.4, delay: 0.35 },
  { x: 440, y: 260, r: 2, delay: 0.6 },
  { x: 150, y: 420, r: 2.6, delay: 0.45 },
  { x: 300, y: 440, r: 3.2, delay: 0.55 },
  { x: 420, y: 400, r: 2.2, delay: 0.7 },
  { x: 60, y: 220, r: 2, delay: 0.65 },
  { x: 380, y: 90, r: 1.8, delay: 0.8 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [2, 3],
  [2, 5],
  [3, 4],
  [3, 6],
  [4, 8],
  [5, 6],
  [5, 9],
  [6, 7],
  [6, 10],
  [7, 8],
  [7, 11],
  [9, 10],
  [10, 11],
  [2, 12],
  [5, 12],
  [1, 13],
  [4, 13],
];

const PULSES = [0, 4, 9, 14, 18];

export function IntelligenceVisualization({
  className,
}: {
  className?: string;
}) {
  const pulsePaths = useMemo(
    () => PULSES.map((i) => LINKS[i]).filter(Boolean),
    []
  );

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 500 500"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id="ivLine" x1="0" y1="0" x2="500" y2="500">
            <stop offset="0%" stopColor="#0EA5FF" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#2F5DFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="ivNode" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#B8E6FF" />
            <stop offset="45%" stopColor="#5CC9FF" />
            <stop offset="100%" stopColor="#7C4DFF" />
          </radialGradient>
        </defs>

        {/* connecting lattice */}
        {LINKS.map(([a, b], i) => {
          const na = NODES[a];
          const nb = NODES[b];
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#ivLine)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}

        {/* traveling signal pulses */}
        {pulsePaths.map(([a, b], i) => {
          const na = NODES[a];
          const nb = NODES[b];
          return (
            <motion.circle
              key={`pulse-${i}`}
              r={2.2}
              fill="#B8E6FF"
              initial={{ cx: na.x, cy: na.y, opacity: 0 }}
              animate={{
                cx: [na.x, nb.x, na.x],
                cy: [na.y, nb.y, na.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: 2 + i * 0.8,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* nodes */}
        {NODES.map((n, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r * 3.4}
              fill="url(#ivNode)"
              opacity={0.08}
              animate={{ opacity: [0.06, 0.14, 0.06] }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: n.delay,
              }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="url(#ivNode)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: n.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          </motion.g>
        ))}

        {/* dispersion pixels — echoes the logo's pixel-scatter motif */}
        {[
          [430, 70, 8],
          [455, 95, 6],
          [410, 110, 5],
          [468, 130, 7],
          [440, 150, 4],
          [478, 60, 5],
        ].map(([x, y, s], i) => (
          <motion.rect
            key={`px-${i}`}
            x={x}
            y={y}
            width={s}
            height={s}
            rx={1.5}
            fill={i % 2 === 0 ? "#7C4DFF" : "#0EA5FF"}
            initial={{ opacity: 0, y: y - 6 }}
            animate={{ opacity: [0.5, 0.9, 0.5], y: [y - 4, y + 4, y - 4] }}
            transition={{
              duration: 4 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
