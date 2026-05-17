"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingDots from "./FloatingDots";

const bp = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_BASE_PATH || "") : "";

const sections = [
  {
    id: "cases",
    nav: "Управління справами",
    href: "/product/cases",
    image: "/images/crm-hero.png",
    title: "Вся інформація по справі — в одному місці",
    desc: "Відкрийте картку справи — і всі документи, задачі, контакти, листування та оплати вже перед Вами. Переглядайте справи у форматі Kanban, списку або таблиці, залежно від того, як зручніше Вашій команді. Для кожної справи можна налаштувати контроль доступу до конфіденційних матеріалів і тут же відстежувати бюджет, виставлені рахунки та надходження.",
    icon: "M3 7h18M3 12h18M3 17h18",
  },
  {
    id: "billing",
    nav: "Білінг & час",
    href: "/product/billing",
    image: "/images/feat-billing.png",
    title: "Облік часу та виставлення рахунків без зайвих кроків",
    desc: "Під час роботи запустіть таймер на задачу або розподіліть години за день у календарному вигляді. Коли час зафіксовано, система сформує рахунок у кілька кліків — у гривнях, євро чи доларах, з індивідуальною ставкою для кожного юриста. Передоплата, постоплата, погодинна чи фіксована модель — Ви обираєте, а дебіторська заборгованість по кожній справі завжди під контролем.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "tasks",
    nav: "Задачі",
    href: "/product/tasks",
    image: "/images/feat-tasks.png",
    title: "Планування роботи з контролем виконання",
    desc: "Створіть задачу, прив'яжіть її до справи та призначте відповідального юриста. Встановіть дедлайн — система автоматично нагадає про наближення строку. Переглядайте задачі на Kanban-дошці, у списку, таблиці або календарі — чотири режими дають повну картину завантаженості команди.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    id: "clients",
    nav: "Клієнти",
    href: "/product/clients",
    image: "/images/feat-clients.png",
    title: "Повне досьє клієнта — від першого звернення до завершення справи",
    desc: "Для кожного клієнта — фізичної чи юридичної особи — система зберігає контакти, реквізити та зв'язки між пов'язаними особами. Нове звернення потрапляє у воронку лідів і крок за кроком рухається до підписання договору. З часом у досьє клієнта накопичується повна історія: справи, документи, інвойси, оплати. Знайти потрібний контакт можна за прізвищем, компанією, email, телефоном або ІПН.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    id: "ai",
    nav: "AI",
    href: "/product/ai",
    image: "/images/feat-ai.png",
    title: "Інструменти штучного інтелекту, вбудовані у щоденну роботу",
    desc: "База знань фірми аналізує внутрішні документи, шаблони та матеріали справ і знаходить відповіді на запити юриста. Завантажте свій шаблон — майстер шаблонів розмітить плейсхолдери, щоб дані підставлялись автоматично. Продиктуйте опис виконаної роботи голосом — AI перетворить аудіо на структурований текст і за потреби переформулює його у професійний юридичний виклад. Фінальне рішення завжди за юристом.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    id: "tables",
    nav: "Конструктор таблиць",
    href: "/product/tables",
    image: "/images/feat-tables.png",
    title: "Власні реєстри та довідники всередині CRM",
    desc: "Коли стандартних модулів недостатньо, створіть власну таблицю — з текстовими полями, датами, випадаючими списками та зв'язками з контактами або справами. Реєстр довіреностей, журнал кореспонденції, трекер засідань — формат визначаєте Ви. Таблиця живе в контексті проєкту або окремо на рівні фірми, і всі дані залишаються всередині CRM.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    id: "docs",
    nav: "Документи",
    href: "/product/documents",
    image: "/images/feat-docs.png",
    title: "Зберігання та генерація документів в єдиному просторі",
    desc: "Завантажте файл у картку справи — він одразу доступний усім учасникам із відповідними правами. Якщо потрібен типовий документ, завантажте шаблон: AI розмітить плейсхолдери, і дані з бази підставляться автоматично. Для кожного файлу можна налаштувати спільний доступ із контролем прав перегляду та редагування — усе зберігається в ізольованому сховищі з шифруванням.",
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

function AppWindow({ label, image }: { label: string; image: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center h-9 px-4 bg-[#f6f6f6] border-b border-black/5">
        <div className="flex items-center gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] font-medium text-black/25">JustCRM — {label}</span>
        </div>
        <div className="w-[52px]" />
      </div>
      <img src={`${bp}${image}`} alt={`JustCRM — ${label}`} className="w-full h-auto" />
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);
  const s = sections[active];

  return (
    <section className="bg-white py-14 lg:py-20 relative overflow-hidden" id="features">
      <FloatingDots count={30} />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">

        <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
          {s.nav}
        </p>
        <h2 className="text-2xl lg:text-[36px] font-bold leading-[1.15] tracking-tight mb-3">
          {s.title}
        </h2>
        <p className="text-[15px] text-black/45 leading-relaxed mb-10">
          {s.desc}
        </p>

        {/* Two-column: accordion left, screenshot right */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">

          {/* Left — accordion */}
          <div>
            <p className="font-mono text-[10px] font-medium text-black/25 uppercase tracking-widest mb-4">
              Переваги продукту
            </p>
            <div className="border-t border-black/8">
              {sections.map((sec, i) => (
                <button
                  key={sec.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-4 border-b border-black/8 transition-all ${
                    active === i ? "" : "hover:bg-black/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        active === i ? "text-black/70" : "text-black/25"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={sec.icon} />
                    </svg>
                    <span
                      className={`text-[15px] font-medium transition-colors ${
                        active === i ? "text-black" : "text-black/40"
                      }`}
                    >
                      {sec.nav}
                    </span>
                  </div>

                </button>
              ))}
            </div>
          </div>

          {/* Right — screenshot */}
          <div key={s.id} className="animate-[fadeIn_0.3s_ease-out]">
            <AppWindow label={s.nav} image={s.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
