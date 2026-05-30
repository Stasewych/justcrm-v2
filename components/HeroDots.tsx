"use client";

import { useEffect, useRef } from "react";

export default function HeroDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.parentElement;
    if (!section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const SPACING = 7;
    const HOVER_RANGE = 130;
    const R = 28, G = 28, B = 28;

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const cx = w * 0.5;
      const cy = h * 0.78;
      const arcRadius = w * 0.35;
      const arcThickness = w * 0.25;

      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = 0; y < h; y += SPACING) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const distFromArc = Math.abs(dist - arcRadius);
          const arcT = Math.max(0, 1 - distFromArc / arcThickness);

          const mdx = x - mx;
          const mdy = y - my;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mT = Math.max(0, 1 - mDist / HOVER_RANGE);
          const mEase = mT * mT;

          const hasArc = arcT > 0.01;
          const hasHover = mEase > 0.01;

          if (!hasArc && !hasHover) continue;

          const arcAlpha = arcT * arcT * 0.35;
          const arcR = 0.6 + arcT * 1.6;

          const hoverAlpha = mEase * 0.55;
          const hoverR = mEase * 3;

          const finalAlpha = Math.min(arcAlpha + hoverAlpha, 0.85);
          const dotR = Math.max(arcR, hoverR, 0.5);

          ctx.beginPath();
          ctx.arc(x, y, dotR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${finalAlpha})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    resize();
    render();

    // The hero grows AFTER this canvas mounts: the big crm-hero.png is
    // `w-full h-auto` with no reserved height, so the section jumps taller once
    // it decodes, and the demo later swaps that <img> for an <iframe>. A plain
    // window-resize listener never fires for those, so the canvas bitmap stayed
    // sized to the initial (short) layout and got CSS-stretched over the taller
    // section — the distorted/misplaced dots the user saw after navigating away
    // and back. Observe the canvas box itself so every size change re-syncs the
    // bitmap, regardless of what caused it.
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener("resize", resize);
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
