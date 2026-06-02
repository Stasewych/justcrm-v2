"use client";

import { useEffect, useRef, useState } from "react";
import FloatingDots from "./FloatingDots";

const words = [
  "Після", "спілкування", "з", "десятками",
  "юридичних", "фірм", "ми", "створили",
  "Just", "CRM", "—",
  "систему,", "де", "кожен", "модуль",
  "вирішує", "їх", "конкретні", "проблеми.",
];

export default function ScrollRevealQuote() {
  const outerRef = useRef<HTMLDivElement>(null);
  const wordEls = useRef<(HTMLSpanElement | null)[]>([]);
  // null = not yet measured (SSR / first paint). "desktop" = pinned scroll
  // reveal; "static" = mobile OR prefers-reduced-motion, fully revealed.
  const [mode, setMode] = useState<null | "desktop" | "static">(null);

  // Resolve viewport + reduced-motion AFTER mount (hydration-safe).
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const check = () =>
      setMode(window.innerWidth < 1024 || rm.matches ? "static" : "desktop");
    check();
    window.addEventListener("resize", check);
    rm.addEventListener("change", check);
    return () => {
      window.removeEventListener("resize", check);
      rm.removeEventListener("change", check);
    };
  }, []);

  // Static branch (mobile OR reduced-motion): fully revealed, no machinery.
  useEffect(() => {
    if (mode !== "static") return;
    wordEls.current.forEach((el) => {
      if (el) el.style.color = "rgba(28,28,28,1)";
    });
  }, [mode]);

  // Desktop branch: rAF-throttled, READ-progress-then-paint-colors handler.
  // No layout writes anywhere (pinning is native CSS sticky), so no forced
  // synchronous reflow / layout thrash on scroll.
  useEffect(() => {
    if (mode !== "desktop") return;
    const outer = outerRef.current;
    if (!outer) return;

    let rafId = 0;
    let ticking = false;
    const total = words.length;

    const paint = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;
      const progress =
        scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0;
      for (let i = 0; i < total; i++) {
        const el = wordEls.current[i];
        if (!el) continue;
        const start = i / total;
        const end = start + 1.8 / total;
        const wp = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        el.style.color = `rgba(28,28,28,${0.1 + wp * 0.9})`;
      }
    };

    const onScroll = () => {
      if (ticking) return; // coalesce: at most one paint per frame
      ticking = true;
      rafId = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    paint();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [mode]);

  const isStatic = mode === "static";

  return (
    <div
      ref={outerRef}
      className="relative bg-white bg-dot-grid"
      style={{ height: isStatic ? "auto" : "250vh" }}
    >
      <FloatingDots count={isStatic ? 18 : 40} />
      <div
        // CSS sticky replaces the old hand-rolled fixed/absolute pinning — the
        // browser pins it with zero per-scroll layout writes.
        className={
          isStatic
            ? "py-14 sm:py-20 flex items-center justify-center"
            : "sticky top-0 h-screen flex items-center justify-center"
        }
      >
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-16 text-center relative z-10">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-light leading-[1.35] tracking-tight">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => { wordEls.current[i] = el; }}
                className="inline-block mr-[0.3em]"
                style={{ color: "rgba(28,28,28,0.1)" }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
