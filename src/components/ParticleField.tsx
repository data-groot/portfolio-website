"use client";

import { useEffect, useRef } from "react";

// The site's single cursor-reactive element: a lightweight canvas particle
// field. Particles drift, link up when close, and scatter away from the
// cursor. Renders one static frame under prefers-reduced-motion and pauses
// entirely when the tab is hidden.
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      ember: boolean;
    };

    let raf = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(100, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        ember: Math.random() < 0.18,
      }));
    };

    const drawFrame = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      const linkDist = 100;
      const mouseDist = 150;

      for (const p of particles) {
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;

          // gentle repulsion from the cursor
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mouseDist * mouseDist && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = ((mouseDist - d) / mouseDist) * 0.6;
            p.x += (dx / d) * force;
            p.y += (dy / d) * force;
          }

          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.ember ? 1.8 : 1.2, 0, Math.PI * 2);
        ctx.fillStyle = p.ember
          ? "rgba(255, 92, 31, 0.65)"
          : "rgba(235, 231, 222, 0.3)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const alpha = (1 - Math.sqrt(d2) / linkDist) * 0.14;
            ctx.strokeStyle = `rgba(235, 231, 222, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // ember threads from the cursor to nearby particles
        const dxm = a.x - mouse.x;
        const dym = a.y - mouse.y;
        const dm2 = dxm * dxm + dym * dym;
        if (dm2 < mouseDist * mouseDist) {
          const alpha = (1 - Math.sqrt(dm2) / mouseDist) * 0.5;
          ctx.strokeStyle = `rgba(255, 92, 31, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      drawFrame(true);
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(loop);
      }
    };

    resize();

    if (reduced) {
      drawFrame(false);
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
      document.addEventListener("visibilitychange", onVisibility);
    }

    const onResize = () => {
      resize();
      if (reduced) drawFrame(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
