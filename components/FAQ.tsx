"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Наскільки безпечно зберігати дані клієнтів?",
    a: "Сервери на AWS у Європі. Шифрування з'єднань (TLS), паролі — bcrypt, файли — ізольоване сховище. Кожна фірма працює в окремому просторі, архітектурно ізольованому від інших. 2FA, RBAC, аудит-лог дій. Дані клієнтів не використовуються для навчання AI-моделей.",
  },
  {
    q: "Як перенести дані з Excel, Notion або іншої системи?",
    a: "Імпорт контактів, справ і документів через CSV/Excel з маппінгом полів. Якщо ведете справи в Notion чи Google Sheets — допоможемо з міграцією. Типовий онбординг для фірми до 10 людей — 2-3 дні.",
  },
  {
    q: "Скільки часу потрібно на впровадження?",
    a: "Реєстрація і базове налаштування — 15 хвилин. Повний онбординг з міграцією і навчанням — 2-3 дні. Інтерфейс українською, інтуїтивна навігація. Для команд від 5 осіб — персональний менеджер онбордингу.",
  },
  {
    q: "Чи можу оплачувати як ФОП і отримати рахунок у гривнях?",
    a: "Так. Оплата в гривнях, рахунки для ФОП та юридичних осіб, акти виконаних робіт. Місячна або річна оплата зі знижкою 20% за річну передплату.",
  },
  {
    q: "Де зберігаються дані і чи відповідає це вимогам адвокатської таємниці?",
    a: "Дані зберігаються на AWS у дата-центрі ЄС. Архітектура побудована з урахуванням вимог ст. 22 ЗУ «Про адвокатуру» — мережева ізоляція, шифрування at-rest та in-transit, розмежування доступу по ролях.",
  },
  {
    q: "Чи є мобільний додаток?",
    a: "Зараз JustCRM — веб-додаток, що працює у браузері на будь-якому пристрої. Мобільний додаток для iOS і Android у плані розробки на 2027 рік.",
  },
  {
    q: "Як працює AI і чи можна довіряти його результатам?",
    a: "AI генерує чернетки — юрист завжди перевіряє і підтверджує. Аналіз договорів з цитатами і джерелами, генерація документів на базі ваших шаблонів, пошук по внутрішній базі знань. Конфіденційні дані не передаються для навчання моделей.",
  },
  {
    q: "Що буде з даними, якщо я вирішу піти?",
    a: "Ваші дані належать вам. Експорт контактів, справ, документів і тайм-ентрі у CSV/PDF у будь-який момент. Після завершення підписки акаунт зберігається 90 днів. Жодних штучних бар'єрів для виходу.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-medium pr-8 group-hover:text-black/70 transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 text-black/30 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-black/45 leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 bg-surface" id="faq">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
            Питання
          </p>
          <h2 className="text-3xl lg:text-[40px] font-light tracking-tight">
            Що запитують юридичні компанії{" "}
            <strong className="font-medium">перед підключенням</strong>
          </h2>
          <p className="mt-4 text-black/40 text-sm">
            Не знайшли відповідь — напишіть нам.
          </p>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
