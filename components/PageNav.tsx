"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "problem", label: "Проблема" },
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

const darkSections = new Set(["feat-cases", "feat-tasks", "feat-ai", "feat-docs"]);

export default function PageNav() {
  const [activeId, setActiveId] = useState("");
  const [pastHero, setPastHero] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInFooter(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
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
    <nav
      className={`hidden lg:flex flex-col gap-1 fixed left-[max(2rem,calc((100vw-1440px)/2+1rem))] top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
        pastHero && !inFooter ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        const isFirstNonFeat = item.id === "security";

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`text-[14px] pl-4 py-1.5 border-l-[3px] transition-all duration-300 ${
              isFirstNonFeat ? "mt-4" : ""
            } ${
              isActive
                ? `font-semibold border-current ${dark ? "text-white" : "text-black"}`
                : `border-transparent ${dark ? "text-white/40 hover:text-white/70" : "text-black/30 hover:text-black/60"}`
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
