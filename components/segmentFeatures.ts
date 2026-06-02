/**
 * Per-segment hero visual + curated feature sections (Phase 3 enrichment).
 * Each segment shows a different subset of the product sub-features — the ones
 * that matter most to that audience — reusing the real product screenshots.
 * Kept separate from segments.ts so the long marketing copy and the
 * screenshot/feature wiring stay independently editable.
 *
 * Every section carries exactly 4 points to fill the 2-column grid evenly,
 * matching the product pages (which use 2 or 4 — never 3). Copy is tailored per
 * audience and follows ai-writing-tells-checklist.md.
 */
import type { SubFeature } from "./FeatureSections";

// Icon path set (reused from the product pages) so points keep familiar glyphs.
const I = {
  rows: "M3 7h18M3 12h18M3 17h18",
  timer: "M12 8v4l3 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  lock: "M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM8 11V7a4 4 0 0 1 8 0v4",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  currency: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  users: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  check: "M20 6L9 17l-5-5",
  shield: "M12 3l8 4v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7z",
  mic: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8",
  search: "M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
  bank: "M1 4h22v16H1zM1 10h22",
  chart: "M18 20V10M12 20V4M6 20v-6",
  template: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5",
};

export const SEGMENT_HERO: Record<string, { image: string; width: number; height: number }> = {
  soloyuryst: { image: "/images/hero-billing.webp", width: 2600, height: 1092 },
  advokat: { image: "/images/hero-cases.webp", width: 2600, height: 1092 },
  buro: { image: "/images/hero-tasks.webp", width: 2600, height: 1092 },
  notarius: { image: "/images/hero-clients.webp", width: 2600, height: 1092 },
};

export const SEGMENT_FEATURES: Record<string, SubFeature[]> = {
  // Соло-юрист: усе в одному вікні, час → рахунок, картка клієнта.
  soloyuryst: [
    {
      tag: "Справи",
      title: "Усі справи в одному вікні",
      desc: "Kanban для контролю етапів, таблиця для аналітики, список для швидкого перегляду й календар дедлайнів — перемикайтеся в один клік, без розкиданих файлів і таблиць.",
      screens: [
        { src: "/images/cases-overview-1.webp" },
        { src: "/images/cases-overview-2.webp" },
        { src: "/images/cases-overview-3.webp" },
        { src: "/images/cases-overview-4.webp" },
      ],
      points: [
        { title: "Kanban-дошка", desc: "Перетягуйте справи між етапами — видно прогрес по кожній.", icon: I.rows },
        { title: "Календар дедлайнів", desc: "Справи зі строками на місячній або тижневій сітці.", icon: I.calendar },
        { title: "Таблиця з фільтрами", desc: "Сортування й групування за будь-яким полем.", icon: I.chart },
        { title: "Картка справи", desc: "Документи, оплати й контакти зібрані в одному місці.", icon: I.doc },
      ],
    },
    {
      tag: "Облік часу",
      title: "Один таймер замість обліку «на око»",
      desc: "Таймер запускається в один клік, фіксує час у фоні й рахує вартість за вашою ставкою. Рахунок формується з годин за хвилину.",
      screens: [
        { src: "/images/billing-time-1.webp" },
        { src: "/images/billing-time-2.webp" },
        { src: "/images/billing-time-3.webp" },
        { src: "/images/billing-time-4.webp" },
      ],
      points: [
        { title: "Таймер у фоні", desc: "Запускайте з будь-якого екрана — час пишеться сам.", icon: I.timer },
        { title: "Прив'язка до справи", desc: "Кожен запис потрапляє в потрібну справу.", icon: I.check },
        { title: "AI-опис", desc: "Надиктуйте, що зробили — AI сформує опис у юридичному стилі.", icon: I.mic },
        { title: "Рахунок за хвилину", desc: "Години перетворюються на інвойс одним кліком.", icon: I.currency },
      ],
    },
    {
      tag: "Клієнти",
      title: "Картка клієнта з усією історією",
      desc: "Контакти, реквізити, справи, оплати й документи — в одному профілі, без переходів між системами.",
      screens: [
        { src: "/images/clients-profile-1.webp" },
        { src: "/images/clients-profile-2.webp" },
        { src: "/images/clients-profile-3.webp" },
      ],
      points: [
        { title: "Фіз- та юрособи", desc: "ІПН або ЄДРПОУ, реквізити, підписанти — структуровано.", icon: I.users },
        { title: "Історія в профілі", desc: "Справи й платежі клієнта — на одному екрані.", icon: I.rows },
        { title: "Документи клієнта", desc: "Файли й рахунки зберігаються в тому ж профілі.", icon: I.doc },
        { title: "Швидкий пошук", desc: "Знайдіть клієнта за будь-яким реквізитом.", icon: I.search },
      ],
    },
  ],

  // Адвокат: справи + строки, контроль доступу (таємниця), документи зі шаблонами.
  advokat: [
    {
      tag: "Справи та строки",
      title: "Справа з усім контекстом і контролем строків",
      desc: "Документи, засідання, листування й фінанси зібрані в картці справи. Дати засідань і дедлайни — у календарі з нагадуваннями.",
      screens: [
        { src: "/images/cases-overview-1.webp" },
        { src: "/images/cases-overview-2.webp" },
        { src: "/images/cases-overview-3.webp" },
        { src: "/images/cases-overview-4.webp" },
      ],
      points: [
        { title: "Картка справи", desc: "Усе по справі в одному місці, а не в Gmail і папках.", icon: I.doc },
        { title: "Календар строків", desc: "Засідання й дедлайни з нагадуваннями.", icon: I.calendar },
        { title: "Kanban за стадіями", desc: "Візуальний контроль етапів провадження.", icon: I.rows },
        { title: "Фінанси по справі", desc: "Бюджет, рахунки й оплати в межах справи.", icon: I.currency },
      ],
    },
    {
      tag: "Доступ і таємниця",
      title: "Хто бачить конфіденційну інформацію по справі",
      desc: "Кожна справа може мати обмежений доступ. Дані зберігаються на AWS у ЄС із шифруванням та ізоляцією між фірмами — з урахуванням вимог ст. 22 ЗУ «Про адвокатуру».",
      screens: [
        { src: "/images/cases-access-1.webp" },
        { src: "/images/cases-access-2.webp" },
      ],
      points: [
        { title: "Приватна справа", desc: "Видима лише призначеним юристам — решта не бачить навіть назви.", icon: I.lock },
        { title: "Доступ по ролях", desc: "Права аж до рівня окремого файлу.", icon: I.users },
        { title: "Шифрування й ізоляція", desc: "TLS, шифроване сховище, окремий простір фірми.", icon: I.shield },
        { title: "Аудит дій", desc: "Журнал, хто й коли відкривав справу та файли.", icon: I.check },
      ],
    },
    {
      tag: "Документи",
      title: "Договір чи позов зі свого шаблону",
      desc: "Завантажте Word-шаблон — AI розмітить поля для підстановки. Один клік, і документ заповнений даними клієнта й справи. Підпис лишається за юристом.",
      screens: [
        { src: "/images/docs-templates-1.webp" },
        { src: "/images/docs-templates-2.webp" },
        { src: "/images/docs-templates-3.webp" },
      ],
      points: [
        { title: "Авто-розмітка полів", desc: "AI знаходить «ПІБ», «дата», «сума» й підставляє з CRM.", icon: I.template },
        { title: "Бібліотека шаблонів", desc: "Договори, позови, акти — за категорією та типом справи.", icon: I.doc },
        { title: "Експорт у Word/PDF", desc: "Готовий документ — для редагування або подачі.", icon: I.check },
        { title: "Юрист підтверджує", desc: "AI готує чернетку — формулювання й підпис за юристом.", icon: I.shield },
      ],
    },
  ],

  // Бюро/фірма: команда й задачі, ролі/доступ, ставки й бюджети.
  buro: [
    {
      tag: "Команда й задачі",
      title: "Видно, хто над чим працює",
      desc: "Kanban, список, таблиця або календар — команда планує тиждень так, як зручно. Доручення з дедлайнами й нагадуваннями замість загублених у месенджерах задач.",
      screens: [
        { src: "/images/tasks-views-1.webp" },
        { src: "/images/tasks-views-2.webp" },
        { src: "/images/tasks-views-3.webp" },
        { src: "/images/tasks-views-4.webp" },
      ],
      points: [
        { title: "Kanban-дошка", desc: "Нова → В роботі → На перевірці → Виконано.", icon: I.rows },
        { title: "Календар тижня", desc: "Видно завантаження команди, задачі пересуваються мишею.", icon: I.calendar },
        { title: "Доручення з дедлайном", desc: "Призначте виконавця й строк — із нагадуваннями.", icon: I.check },
        { title: "Хто відповідальний", desc: "Кінець питанню «а хто цим займається?».", icon: I.users },
      ],
    },
    {
      tag: "Ролі та доступ",
      title: "Розмежуйте доступ до справ у команді",
      desc: "Доступ налаштовується по ролях аж до рівня файлу. Приватну справу бачать лише призначені юристи, решта команди не бачить навіть її назви.",
      screens: [
        { src: "/images/cases-access-1.webp" },
        { src: "/images/cases-access-2.webp" },
      ],
      points: [
        { title: "Приватний доступ", desc: "Справа видима лише призначеним юристам.", icon: I.lock },
        { title: "Груповий доступ", desc: "Відкрийте справу департаменту або всій фірмі.", icon: I.users },
        { title: "Права до файлу", desc: "Хто бачить фінанси, документи й контакти.", icon: I.shield },
        { title: "Аудит-лог", desc: "Журнал дій: хто й коли відкривав справу та файли.", icon: I.check },
      ],
    },
    {
      tag: "Ставки та бюджети",
      title: "Контроль рентабельності кожної справи",
      desc: "Своя ставка для партнера, асоційованого юриста й помічника. Бюджети справ з відстеженням витрат і дебіторська заборгованість по фірмі.",
      screens: [
        { src: "/images/billing-rates-1.webp" },
        { src: "/images/billing-rates-2.webp" },
        { src: "/images/billing-rates-3.webp" },
      ],
      points: [
        { title: "Ставки по юристах", desc: "Окрема ставка для кожного й для конкретного клієнта.", icon: I.currency },
        { title: "Бюджет справи", desc: "Ліміт у гривнях або годинах із залишком у реальному часі.", icon: I.chart },
        { title: "Гібридний білінг", desc: "Почасовий, фіксований і retainer у межах однієї справи.", icon: I.rows },
        { title: "Дебіторка по фірмі", desc: "Хто скільки винен і як давно — по клієнту й справі.", icon: I.bank },
      ],
    },
  ],

  // Нотаріус: клієнти, документи, облік і рахунки.
  notarius: [
    {
      tag: "Клієнти",
      title: "Клієнти й історія звернень в одному місці",
      desc: "Картка фізичної чи юридичної особи з документами, зверненнями й оплатами. Швидкий пошук за будь-яким реквізитом.",
      screens: [
        { src: "/images/clients-profile-1.webp" },
        { src: "/images/clients-profile-2.webp" },
        { src: "/images/clients-profile-3.webp" },
      ],
      points: [
        { title: "Фіз- та юрособи", desc: "ІПН або ЄДРПОУ, реквізити, підписанти.", icon: I.users },
        { title: "Історія звернень", desc: "Документи й оплати клієнта — в його профілі.", icon: I.rows },
        { title: "Документи в профілі", desc: "Файли й рахунки поруч із контактом.", icon: I.doc },
        { title: "Швидкий пошук", desc: "Знайдіть клієнта за реквізитом за секунди.", icon: I.search },
      ],
    },
    {
      tag: "Документи",
      title: "Файли в контексті, а не в розкиданих папках",
      desc: "Документи зберігаються при клієнті чи справі. Шаблони з AI-підстановкою даних (ПІБ, дата, сума), перегляд Word і PDF прямо у браузері.",
      screens: [
        { src: "/images/docs-files-1.webp" },
        { src: "/images/docs-files-2.webp" },
        { src: "/images/docs-files-3.webp" },
      ],
      points: [
        { title: "Файли при клієнті", desc: "Завантажуйте перетягуванням або скан із телефона.", icon: I.doc },
        { title: "Шаблони з AI", desc: "Підстановка даних клієнта в готовий шаблон.", icon: I.template },
        { title: "Структура папок", desc: "Стандартні розділи плюс власні папки.", icon: I.rows },
        { title: "Перегляд у браузері", desc: "PDF і Word відкриваються одразу в CRM.", icon: I.check },
      ],
    },
    {
      tag: "Облік і рахунки",
      title: "Рахунки в гривні й контроль оплат",
      desc: "Формуйте рахунки з шаблона з реквізитами, виставляйте акти для ФОП і бачте надходження та заборгованість по клієнту.",
      screens: [
        { src: "/images/billing-invoices-1.webp" },
        { src: "/images/billing-invoices-2.webp" },
        { src: "/images/billing-invoices-3.webp" },
        { src: "/images/billing-invoices-4.webp" },
      ],
      points: [
        { title: "Шаблон рахунку", desc: "Логотип, реквізити й підпис — для всіх рахунків.", icon: I.template },
        { title: "Статуси оплати", desc: "Чернетка → Надіслано → Оплачено, з нагадуваннями.", icon: I.check },
        { title: "ФОП-акти", desc: "Рахунки й акти виконаних робіт у гривні.", icon: I.currency },
        { title: "Облік по клієнту", desc: "Надходження й заборгованість у розрізі клієнта.", icon: I.bank },
      ],
    },
  ],
};
