"use client";

import { useState } from "react";
import FloatingDots from "./FloatingDots";

const bp = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_BASE_PATH || "") : "";

const sections: { id: string; nav: string; image: string; title: string; titleLight: string; desc: React.ReactNode }[] = [
  {
    id: "cases",
    nav: "Справи",
    image: "/images/crm-hero.png",
    title: "Вся інформація по справі —",
    titleLight: " в одному місці",
    desc: <>Відкрийте <strong>картку справи</strong> — і всі документи, задачі, контакти, листування та оплати вже перед Вами. Переглядайте справи у форматі <strong>Kanban</strong>, списку або таблиці, залежно від того, як зручніше Вашій команді. Для кожної справи можна налаштувати <strong>контроль доступу</strong> до конфіденційних матеріалів і тут же відстежувати <strong>бюджет</strong>, виставлені рахунки та надходження.</>,
  },
  {
    id: "billing",
    nav: "Білінг & час",
    image: "/images/feat-billing.png",
    title: "Облік часу та виставлення рахунків",
    titleLight: " без зайвих кроків",
    desc: <>Під час роботи запустіть <strong>таймер</strong> на задачу або розподіліть години за день у <strong>календарному</strong> вигляді. Коли час зафіксовано, система сформує <strong>рахунок</strong> у кілька кліків — у гривнях, євро чи доларах, з <strong>індивідуальною ставкою</strong> для кожного юриста. Передоплата, постоплата, погодинна чи фіксована модель — Ви обираєте, а <strong>дебіторська заборгованість</strong> по кожній справі завжди під контролем.</>,
  },
  {
    id: "tasks",
    nav: "Задачі",
    image: "/images/feat-tasks.png",
    title: "Планування роботи",
    titleLight: " з контролем виконання",
    desc: <>Створіть задачу, прив'яжіть її до <strong>справи</strong> та призначте відповідального юриста. Встановіть <strong>дедлайн</strong> — система автоматично нагадає про наближення строку. Переглядайте задачі на <strong>Kanban-дошці</strong>, у списку, таблиці або <strong>календарі</strong> — чотири режими дають повну картину завантаженості команди.</>,
  },
  {
    id: "clients",
    nav: "Клієнти",
    image: "/images/feat-clients.png",
    title: "Повне досьє клієнта —",
    titleLight: " від першого звернення до завершення справи",
    desc: <>Для кожного клієнта — фізичної чи юридичної особи — система зберігає контакти, реквізити та зв'язки між пов'язаними особами. Нове звернення потрапляє у <strong>воронку лідів</strong> і крок за кроком рухається до підписання договору. З часом у <strong>досьє</strong> клієнта накопичується повна <strong>історія</strong>: справи, документи, інвойси, оплати. Знайти потрібний контакт можна за прізвищем, компанією, email, телефоном або ІПН.</>,
  },
  {
    id: "ai",
    nav: "AI",
    image: "/images/feat-ai.png",
    title: "Інструменти штучного інтелекту,",
    titleLight: " вбудовані у щоденну роботу",
    desc: <><strong>База знань</strong> фірми аналізує внутрішні документи, шаблони та матеріали справ і знаходить відповіді на запити юриста. Завантажте свій шаблон — <strong>майстер шаблонів</strong> розмітить плейсхолдери, щоб дані підставлялись автоматично. Продиктуйте опис виконаної роботи <strong>голосом</strong> — AI перетворить аудіо на структурований текст і за потреби переформулює його у професійний юридичний виклад. Фінальне рішення завжди за юристом.</>,
  },
  {
    id: "tables",
    nav: "Конструктор таблиць",
    image: "/images/feat-tables.png",
    title: "Власні реєстри та довідники",
    titleLight: " всередині CRM",
    desc: <>Коли стандартних модулів недостатньо, створіть власну таблицю — з текстовими полями, датами, випадаючими списками та зв'язками з контактами або справами. <strong>Реєстр</strong> довіреностей, журнал кореспонденції, трекер засідань — формат визначаєте Ви. Таблиця живе в контексті <strong>проєкту</strong> або окремо на рівні фірми, і всі дані залишаються всередині CRM.</>,
  },
  {
    id: "docs",
    nav: "Документи",
    image: "/images/feat-docs.png",
    title: "Зберігання та генерація документів",
    titleLight: " в єдиному просторі",
    desc: <>Завантажте файл у <strong>картку справи</strong> — він одразу доступний усім учасникам із відповідними правами. Якщо потрібен типовий документ, завантажте шаблон: <strong>AI</strong> розмітить плейсхолдери, і дані з бази підставляться автоматично. Для кожного файлу можна налаштувати <strong>спільний доступ</strong> із контролем прав перегляду та редагування — усе зберігається в <strong>ізольованому сховищі</strong> з шифруванням.</>,
  },
];

function AppWindow({ label, image }: { label: string; image?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center h-10 px-4 bg-[#f6f6f6] border-b border-black/5">
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
      {image ? (
        <img src={`${bp}${image}`} alt={`JustCRM — ${label}`} className="w-full h-auto" />
      ) : (
        <div className="aspect-[16/9] bg-[#fafafa] flex items-center justify-center">
          <span className="text-sm font-medium text-black/[0.06]">{label}</span>
        </div>
      )}
    </div>
  );
}

function Heading({ title, titleLight }: { title: string; titleLight: string }) {
  return (
    <h3 className="text-2xl lg:text-[32px] font-bold leading-[1.15] tracking-tight mb-3">
      {title}<span className="font-normal text-black/30">{titleLight}</span>
    </h3>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);
  const s = sections[active];
  const prev = () => setActive((active - 1 + sections.length) % sections.length);
  const next = () => setActive((active + 1) % sections.length);

  return (
    <section className="bg-white py-14 lg:py-20 relative overflow-hidden" id="features">
      <FloatingDots count={30} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <p className="text-center font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
          Можливості
        </p>
        <h2 className="text-center text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-12">
          Все для юридичної практики{" "}
          <span className="font-normal text-black/30">в одній системі</span>
        </h2>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-1 mb-10 overflow-x-auto pb-2 -mx-6 px-6">
          {sections.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => setActive(i)}
              className={`shrink-0 text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-[#1c1c1c] text-white shadow-lg shadow-black/10"
                  : "text-black/50 hover:text-black hover:bg-black/[0.04]"
              }`}
            >
              {sec.nav}
            </button>
          ))}
        </div>

        {/* Content */}
        <div key={s.id} className="animate-[fadeIn_0.4s_ease-out]">

          <Heading title={s.title} titleLight={s.titleLight} />
          <p className="text-[15px] leading-relaxed text-black/45 max-w-5xl mb-10 [&_strong]:text-black/70 [&_strong]:font-semibold">{s.desc}</p>
          {/* Banner with side arrows */}
          <div className="relative">
            <AppWindow label={s.nav} image={s.image} />

            {active > 0 && (
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#1c1c1c] shadow-lg shadow-black/20 flex items-center justify-center text-white/80 hover:bg-[#333] hover:scale-105 transition-all z-10"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {active < sections.length - 1 && (
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 rounded-full bg-[#1c1c1c] shadow-lg shadow-black/20 flex items-center justify-center text-white/80 hover:bg-[#333] hover:scale-105 transition-all z-10"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
