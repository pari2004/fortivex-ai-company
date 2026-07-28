"use client";

import { useEffect, useRef } from "react";

export function Interactive3DGlobe({ className }: { className?: string }) {
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
    const globeRadius = Math.min(width, height) * 0.36;

    // Grid dots on sphere surface (Latitude & Longitude)
    const dotCount = 280;
    const sphereDots: {
      lat: number;
      lon: number;
      x: number;
      y: number;
      z: number;
    }[] = [];

    for (let i = 0; i < dotCount; i++) {
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2;
      sphereDots.push({ lat, lon, x: 0, y: 0, z: 0 });
    }

    // Key Location Pins (HQ: Bengaluru, North America, Europe, Latin America)
    const locations = [
      { name: "Bengaluru HQ", lat: 0.22, lon: 1.35, isHQ: true },
      { name: "North America", lat: 0.65, lon: -1.75, isHQ: false },
      { name: "Europe", lat: 0.85, lon: 0.15, isHQ: false },
      { name: "Latin America", lat: -0.25, lon: -1.05, isHQ: false },
    ];

    let rotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotY += 0.004;

      // 1. Globe Ambient Glass Atmosphere
      const atmosphereGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.2,
        centerX,
        centerY,
        globeRadius * 1.25
      );
      atmosphereGrad.addColorStop(0, "rgba(37, 99, 235, 0.12)");
      atmosphereGrad.addColorStop(0.5, "rgba(124, 58, 237, 0.08)");
      atmosphereGrad.addColorStop(0.85, "rgba(34, 211, 238, 0.03)");
      atmosphereGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = atmosphereGrad;
      ctx.fill();

      // 2. Glass Sphere Outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(15, 23, 42, 0.12)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3. Orbital Ring Ellipses
      ctx.lineWidth = 1;
      for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const rx = globeRadius * (1.1 + r * 0.12);
        const ry = globeRadius * (0.35 + r * 0.08);
        ctx.ellipse(
          centerX,
          centerY,
          rx,
          ry,
          rotY * 0.5 + (r * Math.PI) / 3,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 - r * 0.03})`;
        ctx.stroke();
      }

      // 4. Render Sphere Mesh Dots & Rotations
      const projectedDots: { px: number; py: number; z: number }[] = [];

      for (let i = 0; i < sphereDots.length; i++) {
        const d = sphereDots[i];
        const currentLon = d.lon + rotY;

        const x = globeRadius * Math.cos(d.lat) * Math.cos(currentLon);
        const y = globeRadius * Math.sin(d.lat);
        const z = globeRadius * Math.cos(d.lat) * Math.sin(currentLon);

        if (z > -20) {
          const px = centerX + x;
          const py = centerY + y;
          projectedDots.push({ px, py, z });

          const opacity = Math.max(0.1, (z + globeRadius) / (2 * globeRadius));
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(37, 99, 235, ${opacity * 0.65})`;
          ctx.fill();
        }
      }

      // 5. Render Location Markers & Connection Arcs
      const projectedLocs: {
        px: number;
        py: number;
        z: number;
        name: string;
        isHQ: boolean;
      }[] = [];

      for (let i = 0; i < locations.length; i++) {
        const loc = locations[i];
        const currentLon = loc.lon + rotY;

        const x = globeRadius * Math.cos(loc.lat) * Math.cos(currentLon);
        const y = globeRadius * Math.sin(loc.lat);
        const z = globeRadius * Math.cos(loc.lat) * Math.sin(currentLon);

        if (z > 0) {
          const px = centerX + x;
          const py = centerY + y;
          projectedLocs.push({ px, py, z, name: loc.name, isHQ: loc.isHQ });
        }
      }

      // Draw Arcs from HQ (Bengaluru) to other front-facing locations
      const hq = projectedLocs.find((l) => l.isHQ);
      if (hq) {
        for (let i = 0; i < projectedLocs.length; i++) {
          const target = projectedLocs[i];
          if (!target.isHQ) {
            const midX = (hq.px + target.px) / 2;
            const midY = (hq.py + target.py) / 2 - 40;

            ctx.beginPath();
            ctx.moveTo(hq.px, hq.py);
            ctx.quadraticCurveTo(midX, midY, target.px, target.py);
            ctx.strokeStyle = "rgba(124, 58, 237, 0.45)";
            ctx.lineWidth = 1.8;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Draw Location Marker Rings & Labels
      for (let i = 0; i < projectedLocs.length; i++) {
        const loc = projectedLocs[i];

        // Pulse Ring
        ctx.beginPath();
        ctx.arc(loc.px, loc.py, loc.isHQ ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = loc.isHQ ? "#7C3AED" : "#2563EB";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(loc.px, loc.py, loc.isHQ ? 16 : 11, 0, Math.PI * 2);
        ctx.strokeStyle = loc.isHQ ? "rgba(124, 58, 237, 0.5)" : "rgba(37, 99, 235, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Label
        ctx.font = "bold 18px Inter, monospace";
        ctx.fillStyle = "#0F172A";
        ctx.fillText(loc.name, loc.px + 14, loc.py + 5);
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
    </div>
  );
}
