/**
 * "Чому JustCRM" full comparison — built to be read cleanly by humans, search
 * engines AND scrapers / AI answer engines:
 *   - semantic <table> with <caption>, <th scope="col">, <th scope="row">,
 *     and category group headers;
 *   - every yes/no cell carries real text ("Так" / "Ні") via an sr-only span
 *     next to the icon, so the meaning is in the DOM, not only in a glyph;
 *   - JustCRM is a quiet dark band, not a colour shout.
 *
 * Every cell is true; competitors keep their genuine strengths.
 * Server component — scrolls horizontally on narrow screens.
 */
type V = "yes" | "no" | string;

type Group = { group: string; rows: { c: string; v: V[] }[] };

// Column order: JustCRM, Clio, Notion, ClickUp, Excel.
// Honest both ways — competitors keep the rows where they are genuinely stronger
// (integrations, no-code flexibility, client portal, free tiers), JustCRM owns
// localisation, legal-specific work, Ukrainian AI and the Telegram Mini App.
// Mobile access is table-stakes on both sides now (JustCRM ships a responsive
// web app + a Telegram Mini App), so that row reads yes across the board.
const TABLE: Group[] = [
  {
    group: "Локалізація під Україну",
    rows: [
      { c: "Українська мова інтерфейсу", v: ["yes", "no", "no", "no", "yes"] },
      { c: "Ціни у гривнях", v: ["yes", "no", "no", "no", "yes"] },
      { c: "ФОП-рахунки і закриваючі документи", v: ["yes", "no", "no", "no", "no"] },
      { c: "Локальна підтримка українською", v: ["yes", "no", "no", "no", "no"] },
    ],
  },
  {
    group: "Юридична практика",
    rows: [
      { c: "Створено під юридичну практику", v: ["yes", "yes", "no", "no", "no"] },
      { c: "Облік справ зі строками", v: ["yes", "yes", "no", "no", "no"] },
      { c: "Картка справи: Kanban, таблиця, календар", v: ["yes", "yes", "yes", "yes", "no"] },
      { c: "Документи у контексті справи", v: ["yes", "yes", "yes", "yes", "no"] },
      { c: "Тайм-трекінг", v: ["yes", "yes", "no", "yes", "no"] },
      { c: "Інвойси та контроль оплат", v: ["yes", "yes", "no", "no", "no"] },
      { c: "Клієнтська база: фіз- та юрособи", v: ["yes", "yes", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "AI",
    rows: [
      { c: "Вбудований AI-асистент", v: ["yes", "yes", "yes", "yes", "no"] },
      { c: "AI працює українською", v: ["yes", "no", "no", "no", "no"] },
      { c: "Голосове введення українською", v: ["yes", "no", "no", "no", "no"] },
      { c: "RAG-пошук по базі знань", v: ["yes", "no", "yes", "yes", "no"] },
    ],
  },
  {
    group: "Гнучкість і зрілість",
    rows: [
      { c: "Вільне no-code налаштування простору", v: ["no", "no", "yes", "yes", "yes"] },
      { c: "Велика екосистема інтеграцій", v: ["no", "yes", "yes", "yes", "no"] },
      { c: "Мобільний застосунок", v: ["yes", "yes", "yes", "yes", "yes"] },
      { c: "Telegram Mini App", v: ["yes", "no", "no", "no", "no"] },
      { c: "Клієнтський портал", v: ["no", "yes", "no", "no", "no"] },
      { c: "Безкоштовний тариф", v: ["no", "no", "yes", "yes", "yes"] },
    ],
  },
  {
    group: "Ціна",
    rows: [
      { c: "Орієнтовна ціна за користувача", v: ["від 600 ₴", "$39–139", "$0–10", "$0–7", "у складі MS 365"] },
    ],
  },
];

const COLS = ["JustCRM", "Clio", "Notion", "ClickUp", "Excel"];

function Mark({ v, dark }: { v: V; dark?: boolean }) {
  if (v === "yes") {
    return (
      <>
        <svg
          className={`w-[18px] h-[18px] mx-auto ${dark ? "text-white" : "text-[#1c1c1c]"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="sr-only">Так</span>
      </>
    );
  }
  if (v === "no") {
    return (
      <>
        <svg
          className={`w-[15px] h-[15px] mx-auto ${dark ? "text-white/25" : "text-black/20"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
        <span className="sr-only">Ні</span>
      </>
    );
  }
  return (
    <span className={`block text-center text-[12.5px] tabular-nums ${dark ? "text-white font-semibold" : "text-black/55"}`}>
      {v}
    </span>
  );
}

export default function WhyCompare() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" id="compare">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8 lg:px-12">
        <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
          Детальне порівняння
        </p>
        <h2 className="text-2xl lg:text-[34px] font-light tracking-tight mb-10 max-w-xl">
          Повне порівняння можливостей
        </h2>

        <p className="lg:hidden text-center font-mono text-[10px] uppercase tracking-wide text-black/25 mb-2">
          ← гортайте порівняння →
        </p>

        <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] sm:min-w-[760px] border-collapse">
            <caption className="sr-only">
              Порівняння JustCRM з Clio, Notion, ClickUp та Excel за можливостями,
              локалізацією під Україну, AI, гнучкістю та ціною.
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-[34%] sm:w-[32%] text-left align-bottom pb-4 pr-4 sticky left-0 z-20 bg-white" />
                <th scope="col" className="w-[14%] align-bottom p-0">
                  <div className="bg-[#1c1c1c] rounded-t-xl px-3 pt-5 pb-4 text-center">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-white/45 mb-1">Це ми</span>
                    <span className="block text-[15px] font-semibold text-white tracking-tight">JustCRM</span>
                  </div>
                </th>
                {COLS.slice(1).map((label) => (
                  <th key={label} scope="col" className="w-[13.5%] align-bottom px-2 pb-4">
                    <span className="block font-mono text-[11px] uppercase tracking-wide text-black/40 text-center leading-tight">
                      {label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE.map((g) => (
                <Group key={g.group} g={g} />
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[12px] text-black/30 mt-5 leading-relaxed max-w-2xl">
          Ціни конкурентів — за їхніми публічними тарифами станом на 2026 рік, можуть
          змінюватися. Clio — $39–139 за користувача (у доларах); Notion і ClickUp мають
          безкоштовний тариф; Excel — у складі підписки Microsoft 365.
        </p>
      </div>
    </section>
  );
}

function Group({ g }: { g: Group }) {
  return (
    <>
      <tr>
        <th
          scope="colgroup"
          colSpan={6}
          className="text-left px-1 pt-8 pb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-black/35 sticky left-0 z-20 bg-white"
        >
          {g.group}
        </th>
      </tr>
      {g.rows.map((row) => (
        <tr key={row.c}>
          <th scope="row" className="font-normal text-left px-1 py-3.5 pr-3 text-[13px] sm:text-[14px] text-black/65 border-b border-black/[0.07] align-middle sticky left-0 z-10 bg-white [box-shadow:9px_0_10px_-8px_rgba(0,0,0,0.12)] sm:shadow-none">
            {row.c}
          </th>
          <td className="px-3 py-3.5 bg-[#1c1c1c] align-middle">
            <Mark v={row.v[0]} dark />
          </td>
          {row.v.slice(1).map((val, i) => (
            <td key={i} className="px-2 py-3.5 border-b border-black/[0.07] align-middle">
              <Mark v={val} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
