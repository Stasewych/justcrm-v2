"use client";

import { useEffect, useRef } from "react";
import FloatingDots from "./FloatingDots";

const words = [
  "Ми", "поговорили", "з", "десятками",
  "юридичних", "фірм", "і", "зробили",
  "те,", "що", "було", "потрібно.",
  "Кожен", "модуль", "—", "це", "відповідь",
  "на", "конкретну", "проблему,",
  "яку", "ми", "чули", "від", "юристів.",
];

export default function ScrollRevealQuote() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wordEls = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;

      // Pin logic
      if (rect.top <= 0 && rect.bottom >= vh) {
        inner.style.position = "fixed";
        inner.style.top = "0";
        inner.style.left = "0";
        inner.style.right = "0";
      } else if (rect.bottom < vh) {
        inner.style.position = "absolute";
        inner.style.top = `${rect.height - vh}px`;
        inner.style.left = "0";
        inner.style.right = "0";
      } else {
        inner.style.position = "absolute";
        inner.style.top = "0";
        inner.style.left = "0";
        inner.style.right = "0";
      }

      // Word reveal
      const progress = scrollable > 0
        ? Math.max(0, Math.min(1, -rect.top / scrollable))
        : 0;

      const total = words.length;
      wordEls.current.forEach((el, i) => {
        if (!el) return;
        const start = i / total;
        const end = start + 1.8 / total;
        const wp = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        el.style.color = `rgba(28,28,28,${0.1 + wp * 0.9})`;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      className="relative bg-white bg-dot-grid"
      style={{ height: "250vh" }}
    >
      <FloatingDots count={40} />
      <div
        ref={innerRef}
        className="h-screen flex items-center justify-center"
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <div className="max-w-[1000px] mx-auto px-8 lg:px-16 text-center relative z-10">
          <p className="text-3xl sm:text-4xl lg:text-[52px] font-light leading-[1.35] tracking-tight">
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
