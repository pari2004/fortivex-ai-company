"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HolographicAICore({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * 2;
      height = canvas.height = canvas.offsetHeight * 2;
    };

    window.addEventListener("resize", handleResize);

    const centerX = width / 2;
    const centerY = height / 2;
    const particleCount = 120;
    const particles: {
      x: number;
      y: number;
      z: number;
      radius: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
      speed: number;
    }[] = [];

    const colors = ["#2563EB", "#3B82F6", "#7C3AED", "#22D3EE"];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 130 + Math.random() * 70;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({
        x,
        y,
        z,
        radius: 2 + Math.random() * 3,
        baseX: x,
        baseY: y,
        baseZ: z,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.005 + Math.random() * 0.008,
      });
    }

    let angleY = 0;
    let angleX = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Core Ambient Glowing Sphere
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        220
      );
      glowGrad.addColorStop(0, "rgba(37, 99, 235, 0.35)");
      glowGrad.addColorStop(0.4, "rgba(124, 58, 237, 0.2)");
      glowGrad.addColorStop(0.8, "rgba(34, 211, 238, 0.08)");
      glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, 220, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Outer Orbital Rings
      angleY += 0.006;
      angleX += 0.003;

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(37, 99, 235, 0.15)";

      for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const rx = 160 + r * 30;
        const ry = 60 + r * 15;
        ctx.ellipse(
          centerX,
          centerY,
          rx,
          ry,
          angleY + (r * Math.PI) / 3,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // 3D Particles Matrix Render
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected: {
        px: number;
        py: number;
        scale: number;
        color: string;
        radius: number;
      }[] = [];

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Rotation along Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotation along X
        let y1 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        const fov = 350;
        const scale = fov / (fov + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y1 * scale;

        projected.push({
          px,
          py,
          scale,
          color: p.color,
          radius: p.radius * scale,
        });
      }

      // Sort by Z for realistic depth layering
      projected.sort((a, b) => a.scale - b.scale);

      // Draw Connection Threads between close particles
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.25 * projected[i].scale;
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, p.scale * 0.9);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full object-contain" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-full border border-blue-500/40 bg-[#0B1220]/90 shadow-[0_0_40px_rgba(37,99,235,0.4)] backdrop-blur-2xl"
        >
          <span className="h-3 w-3 rounded-full bg-[#2563EB] shadow-[0_0_12px_#2563EB]" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#F8FAFC]">
            AI CORE
          </span>
        </motion.div>
      </div>
    </div>
  );
}
