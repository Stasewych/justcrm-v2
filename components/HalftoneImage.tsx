"use client";

import { useEffect, useRef } from "react";

export default function HalftoneImage({ src }: { src?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<{ x: number; y: number; baseR: number; baseA: number }[]>([]);
  const rafRef = useRef<number>(0);

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

    const buildDots = (data: ImageData | null) => {
      const dots: typeof dotsRef.current = [];
      for (let y = SPACING / 2; y < H; y += SPACING) {
        for (let x = SPACING / 2; x < W; x += SPACING) {
          let val = 0.3;
          if (data) {
            const i = (Math.floor(y) * W + Math.floor(x)) * 4;
            const lum = (data.data[i] * 0.299 + data.data[i + 1] * 0.587 + data.data[i + 2] * 0.114) / 255;
            val = 1 - lum;
          }
          if (val > 0.08) {
            dots.push({ x, y, baseR: MAX_R * val, baseA: 0.6 + val * 0.4 });
          }
        }
      }
      dotsRef.current = dots;
    };

    const render = () => {
      ctx.fillStyle = "#1c1c1c";
      ctx.fillRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const dots = dotsRef.current;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mT = Math.max(0, 1 - dist / HOVER_RANGE);
        const mEase = mT * mT;

        const r = d.baseR + mEase * 2;
        const bright = Math.min(200 + mEase * 55, 255);
        const a = Math.min(d.baseA + mEase * 0.35, 1);
        const hue = `rgba(${bright},${bright},${bright + 5},${a})`;

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = hue;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      mouseRef.current.x = (e.clientX - rect.left) * scaleX;
      mouseRef.current.y = (e.clientY - rect.top) * scaleY;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    if (src) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const offscreen = document.createElement("canvas");
        offscreen.width = W;
        offscreen.height = H;
        const oc = offscreen.getContext("2d")!;
        oc.drawImage(img, 0, 0, W, H);
        buildDots(oc.getImageData(0, 0, W, H));
        render();
      };
      img.src = src;
    } else {
      buildDots(null);
      render();
    }

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
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
