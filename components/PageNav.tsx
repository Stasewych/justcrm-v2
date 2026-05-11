"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "feat-cases", label: "Справи" },
  { id: "feat-billing", label: "Білінг" },
  { id: "feat-tasks", label: "Задачі" },
  { id: "feat-clients", label: "Клієнти" },
  { id: "feat-ai", label: "AI" },
  { id: "feat-tables", label: "Таблиці" },
  { id: "feat-docs", label: "Документи" },
  { id: "more-tools", label: "Інструменти" },
  { id: "security", label: "Безпека" },
  { id: "pricing", label: "Тарифи" },
  { id: "faq", label: "FAQ" },
];

const darkSections = new Set<string>();

export default function PageNav() {
  const [activeId, setActiveId] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const features = document.getElementById("features");
    const footer = document.querySelector("footer");
    if (!features) return;

    const featsObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.01 }
    );
    featsObs.observe(features);

    let footerObs: IntersectionObserver | null = null;
    if (footer) {
      footerObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setShow(false);
        },
        { threshold: 0.05 }
      );
      footerObs.observe(footer);
    }

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(false);
      },
      { threshold: 0.3 }
    );
    const hero = document.getElementById("hero");
    if (hero) heroObs.observe(hero);

    return () => {
      featsObs.disconnect();
      footerObs?.disconnect();
      heroObs.disconnect();
    };
  }, []);

  useEffect(() => {
    const els = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const dark = darkSections.has(activeId);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <nav
        className={`flex items-center justify-center gap-1 px-4 h-11 transition-colors duration-500 ${
          dark
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
            : "bg-white/90 backdrop-blur-xl border-b border-black/5"
        }`}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`text-[12px] font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? dark
                    ? "bg-white/10 text-white"
                    : "bg-black/8 text-black"
                  : dark
                    ? "text-white/40 hover:text-white/70"
                    : "text-black/35 hover:text-black/60"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
