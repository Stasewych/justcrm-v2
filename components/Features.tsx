"use client";

import { useState } from "react";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

function CardStack({
  items,
}: {
  items: { label: string; image: string | null }[];
}) {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % items.length);
  const prev = () => setActive((a) => (a - 1 + items.length) % items.length);

  return (
    <div className="mt-8">
      {/* Stack with visible depth */}
      <div className="relative" style={{ marginBottom: `${(items.length - 1) * 24 + 16}px` }}>
        {items.map((item, i) => {
          const offset = i - active;
          const absOffset = Math.abs(offset);
          const isActive = i === active;
          const isBehind = offset > 0;
          const isGone = offset < 0;

          return (
            <div
              key={i}
              onClick={isBehind ? () => setActive(i) : undefined}
              className={`transition-all duration-500 ease-out ${isBehind ? "cursor-pointer" : ""}`}
              style={{
                position: isActive ? "relative" : "absolute",
                top: 0,
                left: isBehind ? `${offset * 12}px` : 0,
                right: isBehind ? `${-offset * 12}px` : 0,
                bottom: isActive ? undefined : 0,
                zIndex: items.length - absOffset,
                opacity: isGone ? 0 : 1,
                transform: isBehind
                  ? `translateY(${offset * 24}px)`
                  : isGone
                    ? "translateY(-30px) scale(0.95)"
                    : "none",
                pointerEvents: isGone ? "none" : "auto",
              }}
            >
              <div className={`rounded-lg border overflow-hidden transition-shadow ${isActive ? "border-black/10 bg-white shadow-xl shadow-black/8" : "border-black/8 bg-[#f8f8f8] shadow-md shadow-black/4"}`}>
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f6f6f6] border-b border-black/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <div className="flex-1 mx-12">
                    <div className="mx-auto max-w-xs h-5 rounded bg-white/80 border border-black/5 flex items-center justify-center">
                      <span className="text-[10px] text-black/25 font-medium">
                        app.justcrm.com
                      </span>
                    </div>
                  </div>
                </div>
                {item.image ? (
                  <img src={item.image} alt={item.label} className="w-full h-auto" />
                ) : (
                  <div className="aspect-[16/9] bg-[#fafafa] flex items-center justify-center">
                    <span className="text-sm text-black/15 font-medium">{item.label}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-50 w-8 h-8 rounded-full bg-white/90 border border-black/10 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        >
          <svg className="w-4 h-4 text-black/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-50 w-8 h-8 rounded-full bg-white/90 border border-black/10 shadow-md flex items-center justify-center hover:bg-white transition-colors"
        >
          <svg className="w-4 h-4 text-black/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      {/* Navigation with progress */}
      <div className="flex gap-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 text-left p-3 rounded-lg border-2 transition-all ${
              active === i
                ? "border-[#1c1c1c] bg-black/[0.03]"
                : "border-transparent hover:border-black/8 hover:bg-black/[0.01]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${active === i ? "bg-[#1c1c1c]" : "bg-black/15"}`} />
              <span className={`text-sm font-medium transition-colors ${active === i ? "text-black/80" : "text-black/30"}`}>
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const tabs = [
  {
    id: "cases",
    label: "Справи",
    title: "Керуйте справами, аналізуйте дані, контролюйте фінанси",
    desc: "Планування, білінг, документи, оплати — все, що стосується проєкту, доступне з одного централізованого місця.",
    cards: [
      { label: "Kanban по стадіях справ", image: `${bp}/images/feature-cases.png` },
      { label: "Конфлікт-чек по контактах", image: null },
      { label: "Фінансовий дашборд проєкту", image: null },
      { label: "Звіти по ефективності", image: null },
    ],
  },
  {
    id: "billing",
    label: "Білінг",
    title: "Від обліку часу до виставлення рахунку — за лічені секунди",
    desc: "Таймкіпер рахує час юристів, автоматично формує рахунки за вашими шаблонами і контролює оплати.",
    cards: [
      { label: "Таймкіпер з одним кліком", image: null },
      { label: "Автоматичні рахунки за шаблоном", image: null },
      { label: "Мультивалютність (₴, €, $)", image: null },
      { label: "Контроль витрат по проєктах", image: null },
    ],
  },
  {
    id: "tasks",
    label: "Задачі",
    title: "Плануйте роботу на основі завантаженості і пріоритетів",
    desc: "Kanban-дошка, календар, статуси виконання — все для ефективного планування роботи юристів.",
    cards: [
      { label: "Kanban або табличний вигляд", image: null },
      { label: "Синхронізація з Google Calendar", image: null },
      { label: "Нагадування і дедлайни", image: null },
      { label: "Статуси виконання задач", image: null },
    ],
  },
  {
    id: "ai",
    label: "AI",
    title: "AI працює з вашими документами, а не замість вас",
    desc: "Диктуйте голосом, шукайте по базі знань фірми, автоматизуйте шаблони — AI як інструмент, не заміна юриста.",
    cards: [
      { label: "Speech-to-text для обліку часу", image: null },
      { label: "RAG по knowledge base фірми", image: null },
      { label: "Автозаповнення шаблонів з бази даних", image: null },
      { label: "AI-чернетки з цитатами і джерелами", image: null },
    ],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-20 bg-surface" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
            Можливості
          </p>
          <h2 className="text-3xl lg:text-[40px] font-light tracking-tight">
            Полегшіть управління{" "}
            <strong className="font-medium">юридичною практикою</strong>
          </h2>
        </div>

        {/* Card */}
        <div
          className="border border-black/8 bg-white p-8 lg:p-10"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
          }}
        >
          {/* Tabs */}
          <div className="flex gap-1 mb-8 border-b border-black/8">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`font-mono text-[11px] font-medium uppercase tracking-wide px-4 pb-3 transition-colors relative ${
                  active === i
                    ? "text-black"
                    : "text-black/30 hover:text-black/50"
                }`}
              >
                {t.label}
                {active === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1c1c1c]" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-light tracking-tight max-w-2xl">
              {tab.title}
            </h3>
            <p className="mt-4 text-base text-black/45 max-w-2xl leading-relaxed">
              {tab.desc}
            </p>

            <CardStack items={tab.cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
