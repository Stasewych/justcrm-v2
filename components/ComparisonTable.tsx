/**
 * "JustCRM vs Excel / Google Sheets" comparison — a real HTML <table> so AI
 * answer engines and search can extract the rows directly (GEO/Phase 2).
 * Honest, concrete contrasts only — every JustCRM cell maps to a shipped
 * capability described elsewhere on the site.
 */
const ROWS: { task: string; sheets: string; justcrm: string }[] = [
  {
    task: "Справи й строки",
    sheets: "Рядки в таблиці, дедлайни доводиться пам'ятати вручну",
    justcrm: "Картка справи, Kanban і календар процесуальних строків з нагадуваннями",
  },
  {
    task: "Облік часу й рахунки",
    sheets: "Окремий файл для годин, рахунок збирається руками",
    justcrm: "Таймер на справу, рахунок із тайм-ентрі за хвилину, мультивалютність",
  },
  {
    task: "Документи",
    sheets: "Папки на диску й вкладення в пошті",
    justcrm: "Файли в картці справи + AI-шаблони з підстановкою даних",
  },
  {
    task: "Доступ і безпека",
    sheets: "Спільний доступ до файлу, без розмежування",
    justcrm: "Ролі (RBAC), приватні справи, 2FA, дані на AWS у ЄС",
  },
  {
    task: "AI",
    sheets: "Немає",
    justcrm: "RAG-пошук по базі знань, голосове введення, генерація документів",
  },
  {
    task: "Пошук клієнта",
    sheets: "Ctrl+F у межах одного файлу",
    justcrm: "Глобальний пошук по імені, ЄДРПОУ, телефону чи номеру справи",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16">
        <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
          Excel чи CRM
        </p>
        <h2 className="text-3xl lg:text-[38px] font-light leading-[1.2] tracking-tight mb-4">
          Що JustCRM робить інакше за{" "}
          <strong className="font-medium">таблиці</strong>
        </h2>
        <p className="text-black/45 text-[15px] leading-relaxed mb-10 max-w-2xl">
          Excel і Google Sheets зберігають дані, але не ведуть справу: строки,
          час, доступ і документи лишаються ручними. Ось різниця по головних
          задачах юридичної фірми.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-black/10">
                <th className="py-3 pr-4 font-mono text-[11px] font-medium uppercase tracking-wider text-black/40 w-[22%]">
                  Задача
                </th>
                <th className="py-3 px-4 font-mono text-[11px] font-medium uppercase tracking-wider text-black/40">
                  Excel / Google Sheets
                </th>
                <th className="py-3 pl-4 font-mono text-[11px] font-medium uppercase tracking-wider text-black/70">
                  JustCRM
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.task} className="border-b border-black/8 align-top">
                  <td className="py-4 pr-4 font-medium text-black/70">{r.task}</td>
                  <td className="py-4 px-4 text-black/45 leading-relaxed">{r.sheets}</td>
                  <td className="py-4 pl-4 text-black/70 leading-relaxed">{r.justcrm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
