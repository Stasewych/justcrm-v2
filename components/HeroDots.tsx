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

    const SPACING = 7;
    const HOVER_RANGE = 130;
    const R = 28, G = 28, B = 28;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduce = reduceMq.matches;

    // Geometry of the decorative arc — derived from size, constant between resizes.
    let cx = 0, cy = 0, arcRadius = 0, arcThickness = 0;

    // Offscreen canvas holding ONLY the static arc. Rebuilt on resize, blitted
    // every paint instead of recomputing ~20k cells × 2 sqrt per frame.
    const staticLayer = document.createElement("canvas");
    const sctx = staticLayer.getContext("2d");

    const buildStaticLayer = () => {
      if (!sctx) return;
      staticLayer.width = Math.max(1, Math.round(w * dpr));
      staticLayer.height = Math.max(1, Math.round(h * dpr));
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sctx.clearRect(0, 0, w, h);

      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = 0; y < h; y += SPACING) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const arcT = Math.max(0, 1 - Math.abs(dist - arcRadius) / arcThickness);
          if (arcT <= 0.01) continue;
          const arcAlpha = arcT * arcT * 0.35;
          const arcR = 0.6 + arcT * 1.6;
          sctx.beginPath();
          sctx.arc(x, y, Math.max(arcR, 0.5), 0, Math.PI * 2);
          sctx.fillStyle = `rgba(${R},${G},${B},${arcAlpha})`;
          sctx.fill();
        }
      }
    };

    // Blit the cached arc. The offscreen is at device px; the live ctx carries
    // a dpr transform, so draw into CSS-px space (0,0,w,h).
    const paintStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(staticLayer, 0, 0, w, h);
    };

    // Paint static arc, then within the HOVER_RANGE box around the cursor redraw
    // each cell with the EXACT original combined formula (single capped fill,
    // max radius) — pixel-identical to the old full-grid render, but only ~37×37
    // cells instead of ~20k. Outside the box the blitted arc already matches.
    const paintHover = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx < -500) { paintStatic(); return; }

      // Blit the clean arc, then ADD the hover bloom on top within the cursor
      // window — additive over the arc (no clearRect, which would punch a visible
      // #f4f4f4 rectangle in the texture). The arc dots come from the blit; here
      // we only draw the extra bloom, so the two compose to ~the original look.
      paintStatic();

      const startX = Math.max(SPACING / 2, Math.floor((mx - HOVER_RANGE) / SPACING) * SPACING + SPACING / 2);
      const endX = Math.min(w, mx + HOVER_RANGE);
      const startY = Math.max(0, Math.floor((my - HOVER_RANGE) / SPACING) * SPACING);
      const endY = Math.min(h, my + HOVER_RANGE);

      for (let x = startX; x < endX; x += SPACING) {
        for (let y = startY; y < endY; y += SPACING) {
          const mdx = x - mx;
          const mdy = y - my;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mT = Math.max(0, 1 - mDist / HOVER_RANGE);
          if (mT <= 0.01) continue;
          const mEase = mT * mT;

          const hoverAlpha = mEase * 0.55;
          const hoverR = mEase * 3;

          ctx.beginPath();
          ctx.arc(x, y, Math.max(hoverR, 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${hoverAlpha})`;
          ctx.fill();
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w * 0.5;
      cy = h * 0.78;
      arcRadius = w * 0.35;
      arcThickness = w * 0.25;
      buildStaticLayer();
      // Keep the visible arc correct even though there is no running loop.
      if (mouseRef.current.x < -500 || reduce) paintStatic();
      else paintHover();
    };

    // The bloom is a pure function of cursor position (no time term), so we never
    // run a continuous loop — we repaint exactly ONE frame per mousemove, with
    // rAF coalescing multiple moves in the same frame.
    let pending = false;
    const schedule = (fn: () => void) => {
      if (pending) return;
      pending = true;
      rafRef.current = requestAnimationFrame(() => { pending = false; fn(); });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (reduce) return;
      const rect = section.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      schedule(paintHover);
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      schedule(paintStatic);
    };

    const onReduceChange = () => {
      reduce = reduceMq.matches;
      if (reduce) { cancelAnimationFrame(rafRef.current); pending = false; paintStatic(); }
    };

    resize();

    // PRESERVE the existing ResizeObserver bitmap re-sync fix: the hero grows
    // after the big image/iframe decodes, and a plain window 'resize' never fires
    // for that — without this the canvas bitmap stays sized to the initial short
    // layout and gets CSS-stretched (the distorted dots on navigate-away-and-back).
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pause scheduled repaints while the hero is offscreen; repaint once on enter.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(rafRef.current);
          pending = false;
        } else if (mouseRef.current.x > -500 && !reduce) {
          paintHover();
        } else {
          paintStatic();
        }
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(section);

    window.addEventListener("resize", resize);
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    reduceMq.addEventListener("change", onReduceChange);

    return () => {
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      reduceMq.removeEventListener("change", onReduceChange);
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
