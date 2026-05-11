"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const sections = [
  {
    id: "cases",
    nav: "Справи",
    image: "/images/feat-cases.png",
    tag: "СПРАВИ",
    title: "Вся інформація по справі —",
    titleLight: " в одному місці",
    desc: "Документи, задачі, оплати, контакти та листування зібрані в картці справи. Три режими перегляду — Kanban, список або таблиця.",
    bg: "gray" as const,
    cards: [
      {
        title: "Kanban, список, таблиця",
        desc: "Оберіть зручний формат роботи зі справами для Вашої команди",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="2" y="4" width="8" height="24" rx="2" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <rect x="12" y="4" width="8" height="16" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <rect x="22" y="4" width="8" height="20" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        title: "Контроль доступу",
        desc: "Визначте, хто з юристів має доступ до конфіденційної інформації по справі",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="12" r="6" stroke={c} strokeWidth="1.5"/>
            <path d="M16 18c-6 0-10 3-10 6v2h20v-2c0-3-4-6-10-6z" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.5"/>
            <circle cx="24" cy="8" r="4" fill="currentColor" stroke={c} strokeWidth="1.5"/>
            <path d="M22.5 8h3M24 6.5v3" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Фінанси по справі",
        desc: "Бюджет, виставлені рахунки та оплати — в межах кожного проєкту",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="3" y="8" width="26" height="18" rx="3" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M3 14h26" stroke={c} strokeWidth="1.5"/>
            <rect x="6" y="18" width="8" height="4" rx="1" fill={c} fillOpacity="0.2"/>
          </svg>
        ),
      },
      {
        title: "Документи в контексті",
        desc: "Файли та листування прив'язані до справи, а не розкидані по папках",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M8 4h10l8 8v16a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M18 4v6a2 2 0 002 2h6" stroke={c} strokeWidth="1.5"/>
            <path d="M10 18h12M10 22h8" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "billing",
    nav: "Білінг",
    image: "/images/feat-billing.png",
    tag: "БІЛІНГ & КЕРУВАННЯ ЧАСОМ",
    title: "Облік часу та виставлення рахунків",
    titleLight: " без зайвих кроків",
    desc: "Фіксуйте витрачений час таймером або в календарному режимі. Формуйте рахунки в кілька кліків — передоплата, постоплата, погодинна або фіксована ставка.",
    bg: "white" as const,
    layout: "banner-first" as const,
    cards: [
      {
        title: "Таймер або календар",
        desc: "Запустіть таймер на задачу або розподіліть час за день у календарному вигляді",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="18" r="11" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M16 11v7l5 3" stroke={c} strokeWidth="2" strokeLinecap="round"/>
            <path d="M14 3h4" stroke={c} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Мультивалютні рахунки",
        desc: "Виставляйте інвойси в гривнях, євро або доларах за Вашим шаблоном",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="12" cy="18" r="9" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.5"/>
            <circle cx="20" cy="14" r="9" fill="currentColor" stroke={c} strokeWidth="1.5"/>
            <text x="20" y="18" textAnchor="middle" fill={c} fontSize="10" fontWeight="700">₴</text>
          </svg>
        ),
      },
      {
        title: "Індивідуальні ставки",
        desc: "Встановіть погодинну ставку для кожного юриста окремо по кожному проєкту",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <path d="M4 12h24" stroke={c} strokeWidth="1.5"/>
            <path d="M12 12v14M20 12v14" stroke={c} strokeWidth="1" opacity="0.3"/>
            <rect x="13" y="15" width="6" height="3" rx="0.5" fill={c} fillOpacity="0.3"/>
          </svg>
        ),
      },
      {
        title: "Контроль оплат",
        desc: "Відстежуйте дебіторську заборгованість та надходження по кожній справі",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 26L10 18L16 22L22 10L28 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="28" cy="6" r="2.5" fill={c}/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "tasks",
    nav: "Задачі",
    image: "/images/feat-tasks.png",
    tag: "УПРАВЛІННЯ ЗАДАЧАМИ ТА ПОДІЯМИ",
    title: "Планування роботи",
    titleLight: " з контролем виконання",
    desc: "Створюйте задачі, призначайте виконавців, встановлюйте дедлайни. Кожна задача прив'язана до справи та відображається у зручному форматі.",
    bg: "gray" as const,
    layout: "centered-grid" as const,
    cards: [
      {
        title: "Чотири режими перегляду",
        desc: "Kanban-дошка, список, таблиця або календар — на вибір команди",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="3" y="3" width="12" height="12" rx="2" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <rect x="17" y="3" width="12" height="8" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <rect x="3" y="17" width="12" height="8" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <rect x="17" y="13" width="12" height="12" rx="2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        title: "Прив'язка до справи",
        desc: "Кожна задача існує в контексті конкретного проєкту з відповідальним юристом",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="14" height="10" rx="2" stroke={c} strokeWidth="1.5"/>
            <rect x="14" y="18" width="14" height="10" rx="2" stroke={c} strokeWidth="1.5"/>
            <path d="M11 14v4a2 2 0 002 2h1" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
          </svg>
        ),
      },
      {
        title: "Дедлайни та нагадування",
        desc: "Автоматичні сповіщення про наближення строків виконання",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 4a10 10 0 00-10 10c0 5.5 3 7.5 3 11h14c0-3.5 3-5.5 3-11A10 10 0 0016 4z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M12 27h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Виконавці та статуси",
        desc: "Призначайте відповідальних, контролюйте етапи виконання задач",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="10" cy="10" r="5" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.5"/>
            <circle cx="22" cy="10" r="5" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <path d="M6 28v-2a6 6 0 0112 0v2" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <path d="M8 9l2 2 4-4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "clients",
    nav: "Клієнти",
    image: "/images/feat-clients.png",
    tag: "РОБОТА З КЛІЄНТАМИ",
    title: "Повне досьє клієнта —",
    titleLight: " від першого звернення до завершення справи",
    desc: "Впорядковуйте контактні дані клієнтів, відстежуйте історію взаємодії та ведіть воронку нових звернень — все в одній CRM для юристів.",
    bg: "white" as const,
    layout: "banner-top-split" as const,
    cards: [
      {
        title: "Фізичні та юридичні особи",
        desc: "Повний профіль із контактними даними, зв'язками та реквізитами",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="4" y="3" width="24" height="26" rx="3" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <circle cx="16" cy="12" r="4" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <path d="M10 23c0-3 2.5-5 6-5s6 2 6 5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Воронка лідів",
        desc: "Структурований процес ведення потенційного клієнта від звернення до підписання договору",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 4h24L20 16v8l-8 4V16L4 4z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        title: "Історія взаємодії",
        desc: "Всі справи, документи, інвойси та оплати клієнта зібрані в одному досьє",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M6 6v20" stroke={c} strokeWidth="1.5"/>
            <circle cx="6" cy="8" r="2.5" fill={c}/>
            <circle cx="6" cy="16" r="2.5" fill={c} fillOpacity="0.5"/>
            <circle cx="6" cy="24" r="2.5" fill={c} fillOpacity="0.25"/>
            <path d="M11 8h14M11 16h10M11 24h6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Пошук по базі",
        desc: "Знаходьте контакт за прізвищем, назвою компанії, email, телефоном або ІПН",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="3" y="6" width="26" height="8" rx="2" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <circle cx="8" cy="10" r="1.5" fill={c} fillOpacity="0.4"/>
            <path d="M20 22a5 5 0 100-4 5 5 0 000 4zM24 22l4 4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "ai",
    nav: "AI",
    image: "/images/feat-ai.png",
    tag: "AI-МОЖЛИВОСТІ",
    title: "Інструменти штучного інтелекту,",
    titleLight: " вбудовані у щоденну роботу",
    desc: "Генерація документів, голосове введення, покращення текстів та пошук по базі знань фірми. AI формує чернетку — юрист перевіряє та затверджує.",
    bg: "gray" as const,
    layout: "cards-before-banner" as const,
    cards: [
      {
        title: "База знань фірми",
        desc: "Пошук відповідей по внутрішніх документах, шаблонах та матеріалах справ за допомогою RAG",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="6" rx="2" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <rect x="4" y="13" width="24" height="6" rx="2" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <rect x="4" y="22" width="24" height="6" rx="2" fill={c} fillOpacity="0.06" stroke={c} strokeWidth="1.5"/>
            <circle cx="8" cy="7" r="1.5" fill={c}/>
            <circle cx="8" cy="16" r="1.5" fill={c} fillOpacity="0.7"/>
            <circle cx="8" cy="25" r="1.5" fill={c} fillOpacity="0.4"/>
          </svg>
        ),
      },
      {
        title: "Майстер шаблонів",
        desc: "Завантажте свій шаблон — AI розмітить плейсхолдери, щоб дані з бази підставлялись автоматично",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M6 4h14l6 6v18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1.5"/>
            <path d="M20 4v4a2 2 0 002 2h4" stroke={c} strokeWidth="1.5"/>
            <rect x="8" y="16" width="10" height="3" rx="1" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="1"/>
          </svg>
        ),
      },
      {
        title: "Голосове введення",
        desc: "Продиктуйте опис виконаної роботи — AI перетворить аудіо на структурований текст",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="12" y="3" width="8" height="14" rx="4" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <path d="M8 15a8 8 0 0016 0" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 23v5M12 28h8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Покращення тексту",
        desc: "AI переформулює нотатку у професійний юридичний виклад для звіту клієнту",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 24h10M4 18h6M4 12h8" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
            <path d="M18 8l-2 20" stroke={c} strokeWidth="1" opacity="0.15"/>
            <path d="M22 24h6M22 18h8M22 12h6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 4l2 2-2 2" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "tables",
    nav: "Таблиці",
    image: "/images/feat-tables.png",
    tag: "КОНСТРУКТОР ТАБЛИЦЬ",
    title: "Власні реєстри та довідники",
    titleLight: " всередині CRM",
    desc: "Створюйте таблиці під потреби Вашої практики — з полями, фільтрами та зв'язками. Без переходу в Notion або Google Sheets.",
    bg: "white" as const,
    layout: "underlined-cols" as const,
    cards: [
      {
        title: "Довільна структура",
        desc: "Текстові поля, дати, випадаючі списки, зв'язки з контактами та справами",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="3" y="3" width="26" height="26" rx="3" stroke={c} strokeWidth="1.5"/>
            <path d="M3 10h26M3 17h26M3 24h26" stroke={c} strokeWidth="1" opacity="0.2"/>
            <path d="M12 3v26M21 3v26" stroke={c} strokeWidth="1" opacity="0.2"/>
            <rect x="4" y="11" width="7" height="5" rx="1" fill={c} fillOpacity="0.2"/>
            <rect x="13" y="18" width="7" height="5" rx="1" fill={c} fillOpacity="0.15"/>
          </svg>
        ),
      },
      {
        title: "Реєстри і трекери",
        desc: "Реєстр довіреностей, журнал кореспонденції, трекер засідань — будь-який формат",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="24" rx="2" fill={c} fillOpacity="0.06" stroke={c} strokeWidth="1.5"/>
            <path d="M8 10h16M8 16h12M8 22h14" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="26" cy="10" r="1" fill={c}/>
            <circle cx="22" cy="16" r="1" fill={c} fillOpacity="0.6"/>
          </svg>
        ),
      },
      {
        title: "Прив'язка до справи",
        desc: "Таблиця може існувати в контексті проєкту або окремо на рівні фірми",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="3" y="14" width="12" height="14" rx="2" stroke={c} strokeWidth="1.5"/>
            <rect x="17" y="4" width="12" height="14" rx="2" stroke={c} strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="2" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1"/>
          </svg>
        ),
      },
      {
        title: "Все в одній системі",
        desc: "Дані залишаються в CRM — без розкиданих файлів та зовнішніх сервісів",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="20" height="20" rx="4" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <rect x="11" y="11" width="10" height="10" rx="2" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <circle cx="16" cy="16" r="2" fill={c}/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "docs",
    nav: "Документи",
    image: "/images/feat-docs.png",
    tag: "ДОКУМЕНТИ",
    title: "Зберігання та генерація документів",
    titleLight: " в єдиному просторі",
    desc: "Завантажуйте файли, створюйте документи з шаблонів, надавайте доступ команді. Кожен документ прив'язаний до справи або клієнта.",
    bg: "gray" as const,
    layout: "centered-list" as const,
    cards: [
      {
        title: "Файли в контексті справи",
        desc: "Кожен документ зберігається в картці проєкту та доступний учасникам з відповідними правами",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 8a2 2 0 012-2h6l3 3h11a2 2 0 012 2v15a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M10 16h12M10 20h8" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
          </svg>
        ),
      },
      {
        title: "Підготовка шаблонів з AI",
        desc: "Завантажте свій шаблон — AI розмітить плейсхолдери, щоб дані з бази підставлялись автоматично",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M8 4h10l6 6v18a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke={c} strokeWidth="1.5"/>
            <path d="M18 4v4a2 2 0 002 2h4" stroke={c} strokeWidth="1.5"/>
            <circle cx="22" cy="22" r="6" fill="currentColor" stroke={c} strokeWidth="1.5"/>
            <path d="M22 19v6M19 22h6" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        title: "Спільний доступ",
        desc: "Надавайте доступ до документів колегам із контролем прав перегляду та редагування",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="8" cy="16" r="4" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.5"/>
            <circle cx="24" cy="8" r="3" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <circle cx="24" cy="24" r="3" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M12 14l9-4M12 18l9 4" stroke={c} strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        title: "Захищене сховище",
        desc: "Ізольоване хмарне сховище для кожної організації з шифруванням даних",
        icon: (c: string) => (
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 3l11 5v8c0 7-4.5 12-11 15C9.5 28 5 23 5 16V8l11-5z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.5"/>
            <path d="M12 16l3 3 6-6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
    ],
  },
];

function AppWindow({ dark, label, image }: { dark: boolean; label: string; image?: string }) {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="w-full mx-auto">
      <div
        className={`rounded-xl overflow-hidden ${
          dark
            ? "bg-[#1c1c1c] border border-[#333] shadow-2xl shadow-white/[0.03]"
            : "bg-white border border-black/10 shadow-2xl shadow-black/10"
        }`}
      >
        {/* Title bar */}
        <div className={`flex items-center h-10 px-4 ${
          dark ? "bg-[#252525] border-b border-[#333]" : "bg-[#f6f6f6] border-b border-black/5"
        }`}>
          {/* Traffic lights */}
          <div className="flex items-center gap-[6px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          {/* Title */}
          <div className="flex-1 text-center">
            <span className={`text-[11px] font-medium ${
              dark ? "text-white/25" : "text-black/25"
            }`}>
              JustCRM — {label}
            </span>
          </div>
          <div className="w-[52px]" />
        </div>
        {/* Content area */}
        {image ? (
          <img src={`${bp}${image}`} alt={`JustCRM — ${label}`} className="w-full h-auto" />
        ) : (
        <div className={`aspect-[16/9] flex items-center justify-center ${
          dark ? "bg-[#141414]" : "bg-[#fafafa]"
        }`}>
          <span className={`text-sm font-medium ${
            dark ? "text-white/[0.06]" : "text-black/[0.06]"
          }`}>
            {label}
          </span>
        </div>
        )}
      </div>
    </div>
  );
}

export default function Features() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx >= 0 && entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3 }
    );
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="features" ref={containerRef}>
      {sections.map((s, i) => {
        const dark = false;
        const bgClass = s.bg === "gray" ? "bg-[#f4f4f4]" : "bg-white";
        const isVisible = visible.has(i);

        return (
          <section
            key={s.id}
            id={`feat-${s.id}`}
            ref={(el: HTMLElement | null) => { sectionRefs.current[i] = el as HTMLDivElement | null; }}
            className={`${bgClass} text-black min-h-screen flex items-center overflow-hidden`}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-24">

              {/* === DEFAULT LAYOUT: tag → title → desc → banner → cards === */}
              {(!("layout" in s) || !s.layout) && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <h2 className={`text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  {s.title}<span className={`font-normal ${dark ? "text-white/45" : "text-black/35"}`}>{s.titleLight}</span>
                </h2>
                <p className={`text-base leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                <div className={`mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
                <div className={`border-t ${dark ? "border-white/8" : "border-black/8"} transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {s.cards.map((card, ci) => (
                      <div
                        key={ci}
                        className={`py-6 px-5 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${ci > 0 ? `lg:border-l ${dark ? "border-white/8" : "border-black/8"}` : ""}`}
                        style={{ transitionDelay: isVisible ? `${600 + ci * 80}ms` : "0ms" }}
                      >
                        <h3 className={`text-[15px] font-semibold mb-2 ${dark ? "text-white" : "text-black"}`}>{card.title}</h3>
                        <p className={`text-[13px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>)}

              {/* === CENTERED-LIST: centered text → banner → vertical list rows === */}
              {s.layout === "centered-list" && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <h2 className={`text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  {s.title}<span className={`font-normal ${dark ? "text-white/40" : "text-black/30"}`}>{s.titleLight}</span>
                </h2>
                <p className={`text-base leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                <div className={`mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
                <div className={`border-t ${dark ? "border-white/8" : "border-black/8"} transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  {s.cards.map((card, ci) => (
                    <div
                      key={ci}
                      className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-10 py-5 border-b ${dark ? "border-white/8" : "border-black/8"} transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                      style={{ transitionDelay: isVisible ? `${600 + ci * 80}ms` : "0ms" }}
                    >
                      <h3 className={`text-[15px] font-semibold shrink-0 sm:w-72 ${dark ? "text-white" : "text-black"}`}>{card.title}</h3>
                      <p className={`text-[14px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </>)}

              {/* === UNDERLINED-COLS: tag → title → desc → banner → 4 cols with underlined titles === */}
              {s.layout === "underlined-cols" && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <h2 className={`text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  {s.title}<span className={`font-normal ${dark ? "text-white/45" : "text-black/35"}`}>{s.titleLight}</span>
                </h2>
                <p className={`text-base leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                <div className={`mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {s.cards.map((card, ci) => (
                    <div
                      key={ci}
                      className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      style={{ transitionDelay: isVisible ? `${500 + ci * 80}ms` : "0ms" }}
                    >
                      <h3 className={`text-[15px] font-semibold pb-3 mb-3 border-b-2 ${dark ? "text-white border-white/15" : "text-black border-black/15"}`}>{card.title}</h3>
                      <p className={`text-[13px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </>)}

              {/* === CARDS-BEFORE-BANNER: tag → title → desc → 2×2 cards → banner === */}
              {s.layout === "cards-before-banner" && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <h2 className={`text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  {s.title}<span className={`font-normal ${dark ? "text-white/45" : "text-black/35"}`}>{s.titleLight}</span>
                </h2>
                <p className={`text-base leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {s.cards.map((card, ci) => (
                    <div
                      key={ci}
                      className={`p-6 rounded-xl border transition-all duration-500 ${dark ? "border-white/8 bg-white/[0.02]" : "border-black/6 bg-black/[0.015]"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                      style={{ transitionDelay: isVisible ? `${300 + ci * 100}ms` : "0ms" }}
                    >
                      <h3 className={`text-[16px] font-semibold mb-2 ${dark ? "text-white" : "text-black"}`}>{card.title}</h3>
                      <p className={`text-[14px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                    </div>
                  ))}
                </div>
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
              </>)}

              {/* === BANNER-TOP-SPLIT: tag → banner → title+desc left, numbered list right === */}
              {s.layout === "banner-top-split" && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <div className={`mb-12 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
                  <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <h2 className={`text-3xl lg:text-[38px] font-bold leading-[1.12] tracking-tight mb-4`}>
                      {s.title}<span className={`font-normal ${dark ? "text-white/45" : "text-black/35"}`}>{s.titleLight}</span>
                    </h2>
                    <p className={`text-base leading-relaxed ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                  </div>
                  <div className={`space-y-0 transition-all duration-700 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    {s.cards.map((card, ci) => (
                      <div
                        key={ci}
                        className={`flex gap-5 py-5 border-b ${dark ? "border-white/8" : "border-black/8"} transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                        style={{ transitionDelay: isVisible ? `${500 + ci * 80}ms` : "0ms" }}
                      >
                        <span className={`font-mono text-[13px] font-medium mt-0.5 shrink-0 w-6 ${dark ? "text-white/20" : "text-black/20"}`}>
                          {String(ci + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className={`text-[15px] font-semibold mb-1 ${dark ? "text-white" : "text-black"}`}>{card.title}</h3>
                          <p className={`text-[13px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>)}

              {/* === CENTERED-GRID: centered text → banner → 2×2 grid with lines === */}
              {s.layout === "centered-grid" && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <h2 className={`text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  {s.title}<span className={`font-normal ${dark ? "text-white/45" : "text-black/35"}`}>{s.titleLight}</span>
                </h2>
                <p className={`text-base leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                <div className={`mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 border-t ${dark ? "border-white/8" : "border-black/8"} transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  {s.cards.map((card, ci) => (
                    <div
                      key={ci}
                      className={`py-6 px-6 transition-all duration-500 border-b ${dark ? "border-white/8" : "border-black/8"} ${ci % 2 === 1 ? `sm:border-l ${dark ? "border-white/8" : "border-black/8"}` : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      style={{ transitionDelay: isVisible ? `${600 + ci * 80}ms` : "0ms" }}
                    >
                      <h3 className={`text-[15px] font-semibold mb-2 ${dark ? "text-white" : "text-black"}`}>{card.title}</h3>
                      <p className={`text-[13px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </>)}

              {/* === BANNER-FIRST: tag → banner → title → desc → cards with dividers === */}
              {s.layout === "banner-first" && (<>
                <p className={`text-center font-mono text-[13px] font-semibold uppercase tracking-[0.1em] mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/60" : "text-black/50"}`}>{s.tag}</p>
                <div className={`mb-12 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"}`}>
                  <AppWindow dark={dark} label={s.nav} image={s.image} />
                </div>
                <h2 className={`text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  {s.title}<span className={`font-normal ${dark ? "text-white/45" : "text-black/35"}`}>{s.titleLight}</span>
                </h2>
                <p className={`text-base leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${dark ? "text-white/50" : "text-black/45"}`}>{s.desc}</p>
                <div className={`border-t ${dark ? "border-white/8" : "border-black/8"} transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {s.cards.map((card, ci) => (
                      <div
                        key={ci}
                        className={`py-6 px-5 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${ci > 0 ? `lg:border-l ${dark ? "border-white/8" : "border-black/8"}` : ""}`}
                        style={{ transitionDelay: isVisible ? `${600 + ci * 80}ms` : "0ms" }}
                      >
                        <h3 className={`text-[15px] font-semibold mb-2 ${dark ? "text-white" : "text-black"}`}>{card.title}</h3>
                        <p className={`text-[13px] leading-relaxed ${dark ? "text-white/45" : "text-black/40"}`}>{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>)}

            </div>
          </section>
        );
      })}
    </div>
  );
}
