"use client";

import { Fragment } from "react";

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

export default function PricingCompare() {
  return (
    <section className="py-20 bg-[#fafafa]" id="compare">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
            Порівняння тарифів
          </h2>
          <p className="text-sm text-black/40">
            Детальне порівняння функціоналу кожного плану
          </p>
        </div>

        <div className="overflow-x-auto">
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
