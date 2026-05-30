"use client";

import { useEffect, useRef, useState } from "react";

const tools = [
  {
    title: "Календар юриста",
    desc: "Засідання, зустрічі з клієнтами та внутрішні дедлайни — все в одному календарі з фільтрацією по юристах та справах.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="24" height="22" rx="3" />
        <path d="M4 13h24" />
        <path d="M10 3v5M22 3v5" strokeLinecap="round" />
        <rect x="8" y="17" width="4" height="3" rx="0.5" fill="currentColor" fillOpacity="0.15" stroke="none" />
        <rect x="14" y="17" width="4" height="3" rx="0.5" fill="currentColor" fillOpacity="0.1" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Пошта в контексті справи",
    desc: "Gmail та Outlook синхронізуються з CRM. Вхідний лист автоматично потрапляє до відповідної справи — без ручного сортування.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7" width="26" height="18" rx="3" />
        <path d="M3 10l13 8 13-8" />
      </svg>
    ),
  },
  {
    title: "Зведена панель фірми",
    desc: "Скільки справ активно, хто перевантажений, де прострочені рахунки — ключові показники на одному екрані без побудови звітів.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="16" width="5" height="10" rx="1" fill="currentColor" fillOpacity="0.1" />
        <rect x="13" y="10" width="5" height="16" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="22" y="6" width="5" height="20" rx="1" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    title: "Міграція з інших систем",
    desc: "Перенесіть контакти, справи та документи з Excel або CSV за один крок. Типовий онбординг для фірми до 10 людей — 2-3 дні.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4v18M10 16l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 26h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Розрахунки у будь-якій валюті",
    desc: "Гривня, євро, долар — рахунки та акти формуються у валюті клієнта. Оплата для ФОП та юридичних осіб.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <text x="16" y="21" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700" stroke="none">₴</text>
      </svg>
    ),
  },
  {
    title: "Миттєвий пошук",
    desc: "Одне поле для всього: введіть прізвище, номер справи, назву документа або ІПН — результати з'являються під час набору.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="14" r="9" />
        <path d="M21 21l7 7" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Сповіщення та нагадування",
    desc: "Система попередить про наближення дедлайну, прострочений рахунок або нову задачу від колеги. Нічого не загубиться.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4a9 9 0 00-9 9c0 5 2.5 7 2.5 11h13c0-4 2.5-6 2.5-11a9 9 0 00-9-9z" fill="currentColor" fillOpacity="0.08" />
        <path d="M16 4a9 9 0 00-9 9c0 5 2.5 7 2.5 11h13c0-4 2.5-6 2.5-11a9 9 0 00-9-9z" />
        <path d="M12 26h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Файли у хмарі",
    desc: "Підключіть Google Drive або OneDrive для роботи з документами, які вже існують. Або зберігайте файли у вбудованому захищеному сховищі.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 24a6 6 0 01-.5-12A8 8 0 0124 14a5 5 0 01-1 10H8z" fill="currentColor" fillOpacity="0.08" />
        <path d="M8 24a6 6 0 01-.5-12A8 8 0 0124 14a5 5 0 01-1 10H8z" />
      </svg>
    ),
  },
];

export default function MoreTools() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#fafafa] bg-dot-grid" id="more-tools">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="mb-12">
          <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
            Інструменти
          </p>
          <h2 className="text-3xl lg:text-[38px] font-bold leading-[1.15] tracking-tight">
            І багато іншого
            <span className="font-normal text-black/30"> для щоденної практики</span>
          </h2>
          <p className="mt-4 text-base text-black/40 max-w-2xl leading-relaxed">
            Окрім основних модулів, JustCRM включає набір інструментів, які спрощують рутинні операції юридичної фірми.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16"
        >
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-2xl bg-black/[0.04] flex items-center justify-center mb-5 text-black/50">
                <div className="w-7 h-7">{tool.icon}</div>
              </div>
              <h3 className="text-[16px] font-semibold text-black mb-2.5">
                {tool.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-black/40">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
