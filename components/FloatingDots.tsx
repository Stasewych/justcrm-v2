"use client";

import { useEffect, useRef } from "react";

export default function FloatingDots({ count = 40, color = "0,0,0" }: { count?: number; color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cap DPR: retina is already 2; this guards 3x phones / 4K from paying ~9x
    // fill cost for a decorative background.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let running = false; // is the rAF loop currently armed?
    let visible = false; // is the canvas in (or near) the viewport?

    interface Dot {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
    }

    let dots: Dot[] = [];

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1.5 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: 0.06 + Math.random() * 0.12,
      }));
    };

    // One frame of paint; `advance` moves the dots (skipped for the static
    // reduced-motion / first paint).
    const paint = (advance: boolean) => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        if (advance) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < -10) d.x = w + 10;
          if (d.x > w + 10) d.x = -10;
          if (d.y < -10) d.y = h + 10;
          if (d.y > h + 10) d.y = -10;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${d.alpha})`;
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running) return; // load-bearing: a frame queued before stop() must bail
      paint(true);
      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced || !visible) return; // idempotent + gated
      running = true;
      rafRef.current = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };

    init();
    paint(false); // never blank, even before the observer fires

    // Pause/resume on visibility. rootMargin spins the loop up just before the
    // section scrolls into view, so the user never sees a frozen-then-jumping
    // canvas. At any scroll position only the in-view instance animates.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(canvas);

    // Release the loop when the tab is hidden; resume if still in view.
    const onTabVis = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    document.addEventListener("visibilitychange", onTabVis);

    const onResize = () => {
      init();
      if (!running) paint(false); // keep the canvas correct while paused
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onTabVis);
      window.removeEventListener("resize", onResize);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
