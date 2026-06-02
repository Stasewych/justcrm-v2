"use client";

import { useEffect, useRef } from "react";

export default function HalftoneImage({ src }: { src?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = 600;
    const H = 800;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const SPACING = 5;
    const MAX_R = SPACING * 0.42;
    const HOVER_RANGE = 80;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Offscreen base layer: the full ~19k-dot halftone, rendered ONCE.
    const base = document.createElement("canvas");
    base.width = W * dpr;
    base.height = H * dpr;
    const bctx = base.getContext("2d");
    if (!bctx) return;
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    type Dot = { x: number; y: number; baseR: number; baseA: number };
    let dots: Dot[] = [];

    let inView = false;
    let ready = false;
    let disposed = false;
    let pending = false;

    const buildDots = (data: ImageData | null) => {
      const out: Dot[] = [];
      for (let y = SPACING / 2; y < H; y += SPACING) {
        for (let x = SPACING / 2; x < W; x += SPACING) {
          let val = 0.3;
          if (data) {
            const i = (Math.floor(y) * W + Math.floor(x)) * 4;
            const lum = (data.data[i] * 0.299 + data.data[i + 1] * 0.587 + data.data[i + 2] * 0.114) / 255;
            val = 1 - lum;
          }
          if (val > 0.08) {
            out.push({ x, y, baseR: MAX_R * val, baseA: 0.6 + val * 0.4 });
          }
        }
      }
      dots = out;
    };

    // Paint the base halftone into the offscreen canvas, ONCE.
    const renderBase = () => {
      bctx.fillStyle = "#1c1c1c";
      bctx.fillRect(0, 0, W, H);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        bctx.beginPath();
        bctx.arc(d.x, d.y, d.baseR, 0, Math.PI * 2);
        bctx.fillStyle = `rgba(200,200,205,${d.baseA})`;
        bctx.fill();
      }
    };

    // Blit base, then within the HOVER_RANGE box redraw the affected dots with
    // the exact original bloom formula. Pixel-identical to the old full redraw,
    // but only a few hundred dots instead of ~19k, and only on mousemove.
    const paint = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(base, 0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx < -999) return;

      // Erase the base inside the window so recomputed dots don't double-composite.
      const bx = Math.max(0, mx - HOVER_RANGE - SPACING);
      const by = Math.max(0, my - HOVER_RANGE - SPACING);
      const bw = Math.min(W, mx + HOVER_RANGE + SPACING) - bx;
      const bh = Math.min(H, my + HOVER_RANGE + SPACING) - by;
      ctx.fillStyle = "#1c1c1c";
      ctx.fillRect(bx, by, bw, bh);

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - mx;
        const dy = d.y - my;
        if (dx < -HOVER_RANGE - SPACING || dx > HOVER_RANGE + SPACING) continue;
        if (dy < -HOVER_RANGE - SPACING || dy > HOVER_RANGE + SPACING) continue;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mT = Math.max(0, 1 - dist / HOVER_RANGE);
        const mEase = mT * mT;
        const r = d.baseR + mEase * 2;
        const bright = Math.min(200 + mEase * 55, 255);
        const a = Math.min(d.baseA + mEase * 0.35, 1);
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bright},${bright},${bright + 5},${a})`;
        ctx.fill();
      }
    };

    // No time term in the bloom → repaint one coalesced frame per mousemove,
    // never a continuous loop.
    const schedule = () => {
      if (pending || !ready || reduced) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; paint(); });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (reduced || !inView) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (W / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (H / rect.height);
      schedule();
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      schedule();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (!inView) {
          mouseRef.current.x = -1000;
          mouseRef.current.y = -1000;
        } else if (ready) {
          paint(); // repaint cached base on re-enter — no loop
        }
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(canvas);

    const onReady = (data: ImageData | null) => {
      if (disposed) return;
      buildDots(data);
      renderBase();
      ready = true;
      paint(); // initial static paint — no rAF
      if (!reduced) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseleave", onMouseLeave);
      }
    };

    if (src) {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (disposed) return;
        const off = document.createElement("canvas");
        off.width = W;
        off.height = H;
        const oc = off.getContext("2d");
        if (!oc) { onReady(null); return; }
        oc.drawImage(img, 0, 0, W, H);
        let data: ImageData | null = null;
        try {
          data = oc.getImageData(0, 0, W, H);
        } catch {
          data = null; // tainted-canvas fallback → uniform dots
        }
        onReady(data);
      };
      img.onerror = () => { if (!disposed) onReady(null); };
      img.src = src;
    } else {
      onReady(null);
    }

    return () => {
      disposed = true;
      io.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto rounded-lg cursor-default"
      style={{ aspectRatio: "3/4" }}
    />
  );
}
