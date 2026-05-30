"use client";

import { Fragment, useState } from "react";

type Cell = "check" | "cross" | string;

interface Row {
  label: string;
  classic: Cell;
  pro: Cell;
  enterprise: Cell;
}

interface Category {
  name: string;
  rows: Row[];
}

const data: Category[] = [
  {
    name: "Управління справами",
    rows: [
      { label: "Кількість справ", classic: "до 20", pro: "Необмежено", enterprise: "Необмежено" },
      { label: "Kanban-дошка", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Етапи справ", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Dashboard фірми", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Бюджети справ", classic: "cross", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "Контакти та ліди",
    rows: [
      { label: "Кількість контактів", classic: "до 50", pro: "Необмежено", enterprise: "Необмежено" },
      { label: "Фізичні та юридичні особи", classic: "check", pro: "check", enterprise: "check" },
      { label: "Воронка лідів", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Глобальний пошук", classic: "check", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "Задачі",
    rows: [
      { label: "Список задач", classic: "check", pro: "check", enterprise: "check" },
      { label: "Kanban, таблиця, календар", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Прив'язка до справ", classic: "cross", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "Білінг і час",
    rows: [
      { label: "Базовий інвойсинг", classic: "check", pro: "check", enterprise: "check" },
      { label: "Мультивалютність (UAH, EUR, USD)", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Таймер активності", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Білінг у календарному режимі", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Індивідуальні ставки", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Зміна платника в рахунку", classic: "cross", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "Документи",
    rows: [
      { label: "Сховище", classic: "1 GB", pro: "Необмежено", enterprise: "Необмежено" },
      { label: "Google Drive / OneDrive", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Автоматизація документів", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Кастомні таблиці", classic: "cross", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "AI-можливості",
    rows: [
      { label: "Голосове введення", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Покращення тексту з AI", classic: "cross", pro: "check", enterprise: "check" },
      { label: "RAG по базі знань фірми", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Майстер шаблонів з AI", classic: "cross", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "Комунікація",
    rows: [
      { label: "Email-інтеграція (Gmail / Outlook)", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Календар", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Сповіщення та нагадування", classic: "check", pro: "check", enterprise: "check" },
    ],
  },
  {
    name: "Безпека",
    rows: [
      { label: "Шифрування (TLS)", classic: "check", pro: "check", enterprise: "check" },
      { label: "Двофакторна автентифікація", classic: "check", pro: "check", enterprise: "check" },
      { label: "Ролі та дозволи (RBAC)", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Self-hosted (власний сервер)", classic: "cross", pro: "cross", enterprise: "check" },
    ],
  },
  {
    name: "Підтримка",
    rows: [
      { label: "Email-підтримка", classic: "check", pro: "check", enterprise: "check" },
      { label: "Телефон-підтримка", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Тренінги та онбординг", classic: "cross", pro: "check", enterprise: "check" },
      { label: "Персональний менеджер", classic: "cross", pro: "cross", enterprise: "check" },
      { label: "SLA підтримки", classic: "cross", pro: "cross", enterprise: "check" },
    ],
  },
  {
    name: "Enterprise",
    rows: [
      { label: "Кастомні модифікації CRM", classic: "cross", pro: "cross", enterprise: "check" },
      { label: "Розробка нових інструментів", classic: "cross", pro: "cross", enterprise: "check" },
      { label: "Знижки на об'єм (10+ юристів)", classic: "cross", pro: "cross", enterprise: "check" },
    ],
  },
];

function CellValue({ value, featured }: { value: Cell; featured?: boolean }) {
  if (value === "check") {
    return (
      <svg className="w-5 h-5 text-emerald-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  if (value === "cross") {
    return <span className="block text-center text-black/15">—</span>;
  }
  return <span className={`block text-center text-[13px] ${featured ? "font-medium text-black/70" : "text-black/45"}`}>{value}</span>;
}

type PlanKey = "classic" | "pro" | "enterprise";

const PLANS: { key: PlanKey; label: string; price: string; sub: string; featured?: boolean }[] = [
  { key: "classic", label: "Classic", price: "400 ₴", sub: "за користувача / міс" },
  { key: "pro", label: "Pro AI", price: "600 ₴", sub: "за користувача / міс", featured: true },
  { key: "enterprise", label: "Enterprise", price: "Індивідуально", sub: "" },
];

function MobileCompare() {
  const [plan, setPlan] = useState<PlanKey>("pro");
  const current = PLANS.find((p) => p.key === plan)!;
  return (
    <div>
      {/* Plan selector chips */}
      <div className="flex gap-2 mb-3">
        {PLANS.map((p) => (
          <button
            key={p.key}
            onClick={() => setPlan(p.key)}
            className={`flex-1 px-2 py-2.5 rounded-lg border text-[12px] font-medium transition-colors ${
              plan === p.key
                ? "bg-[#1c1c1c] text-white border-[#1c1c1c]"
                : "bg-white text-black/60 border-black/15"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="mb-6 px-3 py-3 rounded-lg bg-white border border-black/8">
        <div className="font-mono text-[10px] uppercase tracking-wide text-black/40">{current.label}</div>
        <div className="text-xl font-bold tracking-tight mt-0.5">{current.price}</div>
        {current.sub && <div className="text-[11px] text-black/40">{current.sub}</div>}
      </div>

      {/* Category list */}
      <div className="space-y-6">
        {data.map((cat) => (
          <div key={cat.name}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/35 mb-2">
              {cat.name}
            </p>
            <ul className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
              {cat.rows.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 py-3">
                  <span className="text-[13.5px] text-black/70 leading-tight">{row.label}</span>
                  <span className="shrink-0">
                    <CellValue value={row[plan]} featured={plan === "pro"} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingCompare({ transparent }: { transparent?: boolean }) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${transparent ? "" : "bg-[#fafafa] bg-cross-grid"}`} id="compare">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-8 lg:mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
            Порівняння тарифів
          </h2>
          <p className="text-sm text-black/40">
            Детальне порівняння функціоналу кожного плану
          </p>
        </div>

        {/* Mobile — per-plan view */}
        <div className="lg:hidden">
          <MobileCompare />
        </div>

        {/* Desktop — side-by-side comparison table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            {/* Plan headers — sticky */}
            <thead>
              <tr className="sticky top-0 z-10 bg-[#fafafa]">
                <th className="w-[40%] text-left p-4 border-b-2 border-black/10" />
                <th className="w-[20%] p-4 border-b-2 border-black/10 text-center">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-black/40 mb-1">Classic</div>
                  <div className="text-2xl font-bold tracking-tight">400 <span className="text-sm font-normal text-black/30">₴</span></div>
                  <div className="text-[11px] text-black/30">за користувача / міс</div>
                </th>
                <th className="w-[20%] p-4 border-b-2 border-black bg-black text-white text-center rounded-t-xl">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-1">Pro AI</div>
                  <div className="text-2xl font-bold tracking-tight">600 <span className="text-sm font-normal text-white/40">₴</span></div>
                  <div className="text-[11px] text-white/40">за користувача / міс</div>
                </th>
                <th className="w-[20%] p-4 border-b-2 border-black/10 text-center">
                  <div className="font-mono text-[11px] uppercase tracking-wide text-black/40 mb-1">Enterprise</div>
                  <div className="text-lg font-bold tracking-tight">Індивідуально</div>
                  <div className="text-[11px] text-black/30">&nbsp;</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((cat) => (
                <Fragment key={cat.name}>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 pt-6 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-black/35 bg-[#f0f0ee]"
                    >
                      {cat.name}
                    </td>
                  </tr>
                  {cat.rows.map((row) => (
                    <tr key={row.label} className="group hover:bg-black/[0.02] transition-colors">
                      <td className="px-4 py-3 text-[14px] font-medium text-black/60 border-b border-black/5">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 border-b border-black/5">
                        <CellValue value={row.classic} />
                      </td>
                      <td className="px-4 py-3 border-b border-black/5 bg-black/[0.015]">
                        <CellValue value={row.pro} featured />
                      </td>
                      <td className="px-4 py-3 border-b border-black/5">
                        <CellValue value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
