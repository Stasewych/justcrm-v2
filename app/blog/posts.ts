/**
 * Canonical blog-post metadata — the single source of truth consumed by:
 *   - the blog index            (app/blog/page.tsx)
 *   - the sitemap               (app/sitemap.ts → lastModified)
 *   - BlogPosting JSON-LD       (app/structured-data.ts → datePublished, etc.)
 *
 * When adding a post, add ONE entry here. `date` is ISO (sitemap + schema);
 * `displayDate` is the human label shown on cards. Newest first.
 */
export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  /** ISO date — sitemap lastModified + schema datePublished. */
  date: string;
  /** Human label rendered on the card, e.g. "16 травня 2026". */
  displayDate: string;
  tag: string;
  readTime: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "ai-transforms-legal-practice",
    title: "Як AI змінює юридичну практику: статистика, інструменти та прогнози на 2026 рік",
    excerpt: "80% юристів вважають, що AI матиме трансформаційний вплив на їхню роботу протягом п'яти років. Розбираємо, що це означає для українських фірм.",
    image: "/images/blog-ai-legal.jpg",
    date: "2026-05-16",
    displayDate: "16 травня 2026",
    tag: "AI & Legal Tech",
    readTime: "8 хв",
  },
  {
    slug: "voice-dictation-legal",
    title: "Голосове введення для юристів: як диктовка замінює ручний облік часу",
    excerpt: "До 40% оплачуваних годин не потрапляють у рахунок, бо юрист фіксує час «на око» в кінці тижня. Голосове введення вирішує цю проблему.",
    image: "/images/blog-voice-dictation.jpg",
    date: "2026-05-12",
    displayDate: "12 травня 2026",
    tag: "Продуктивність",
    readTime: "5 хв",
  },
  {
    slug: "billing-eats-lawyer-time",
    title: "Білінг з'їдає робочий час: як автоматизація обліку повертає юристам 240 годин на рік",
    excerpt: "До 10 годин на місяць кожен юрист витрачає на ручний білінг. У фірмі з 15 осіб це €90 000 на рік на адміністрування.",
    image: "/images/blog-billing.jpg",
    date: "2026-05-10",
    displayDate: "10 травня 2026",
    tag: "Білінг",
    readTime: "6 хв",
  },
  {
    slug: "excel-to-crm-migration",
    title: "Міграція з Excel у CRM: покроковий план для юридичної фірми",
    excerpt: "Справи в Excel, листування в Gmail, документи в папках — п'ять місць замість одного. Як перейти на CRM без втрати даних.",
    image: "/images/blog-migration.jpg",
    date: "2026-05-08",
    displayDate: "8 травня 2026",
    tag: "Управління практикою",
    readTime: "7 хв",
  },
  {
    slug: "data-security-law-firms",
    title: "Адвокатська таємниця в хмарі: як юридичні CRM захищають конфіденційні дані",
    excerpt: "Шифрування, ізоляція даних, 2FA та мережева архітектура — що має бути під капотом CRM для юридичної фірми.",
    image: "/images/blog-data.jpg",
    date: "2026-05-03",
    displayDate: "3 травня 2026",
    tag: "Безпека",
    readTime: "7 хв",
  },
  {
    slug: "ai-document-generation",
    title: "Автоматизація документів з AI: від шаблону до готового договору за хвилини",
    excerpt: "Юристи витрачають до 60% робочого часу на документи. AI-генерація на основі шаблонів скорочує цей час у десятки разів — від NDA до довіреності.",
    image: "/images/blog-documents.jpg",
    date: "2026-05-01",
    displayDate: "1 травня 2026",
    tag: "AI & Legal Tech",
    readTime: "6 хв",
  },
  {
    slug: "crm-vs-excel-legal",
    title: "CRM замість Excel: чому юридичні фірми втрачають клієнтів через розрізнені інструменти",
    excerpt: "Справи в таблицях, фінанси в голові партнера — як централізація даних підвищує ефективність.",
    image: "/images/blog-crm.jpg",
    date: "2026-04-25",
    displayDate: "25 квітня 2026",
    tag: "Управління практикою",
    readTime: "5 хв",
  },
  {
    slug: "client-intake-funnel",
    title: "Воронка лідів для юридичної фірми: як не втрачати потенційних клієнтів",
    excerpt: "Від першого звернення до підписання договору — структурований процес ведення потенційного клієнта.",
    image: "/images/blog-intake.jpg",
    date: "2026-04-24",
    displayDate: "24 квітня 2026",
    tag: "Клієнти",
    readTime: "6 хв",
  },
  {
    slug: "data-protection-legal-crm",
    title: "Захист персональних даних у юридичній CRM: GDPR, адвокатська таємниця та шифрування",
    excerpt: "Як обрати CRM, що відповідає вимогам ст. 22 ЗУ «Про адвокатуру» та Регламенту GDPR.",
    image: "/images/blog-gdpr.jpg",
    date: "2026-04-18",
    displayDate: "18 квітня 2026",
    tag: "Безпека",
    readTime: "8 хв",
  },
  {
    slug: "kanban-case-management",
    title: "Kanban-дошка для юриста: як візуалізація справ підвищує контроль і продуктивність",
    excerpt: "Чотири режими перегляду справ — Kanban, список, таблиця, календар — і коли який обрати.",
    image: "/images/blog-kanban.jpg",
    date: "2026-04-12",
    displayDate: "12 квітня 2026",
    tag: "Управління практикою",
    readTime: "5 хв",
  },
  {
    slug: "multicurrency-invoicing",
    title: "Мультивалютний білінг: як українські юрфірми працюють з міжнародними клієнтами",
    excerpt: "Гривня, євро, долар — рахунки формуються у валюті клієнта з індивідуальною ставкою для кожного юриста.",
    image: "/images/blog-multicurrency.jpg",
    date: "2026-04-05",
    displayDate: "5 квітня 2026",
    tag: "Білінг",
    readTime: "5 хв",
  },
  {
    slug: "rag-knowledge-base",
    title: "База знань юридичної фірми: як RAG-пошук знаходить відповіді у Ваших документах",
    excerpt: "AI аналізує внутрішні документи, шаблони та матеріали справ і знаходить відповіді на запити юриста.",
    image: "/images/blog-rag.jpg",
    date: "2026-03-28",
    displayDate: "28 березня 2026",
    tag: "AI & Legal Tech",
    readTime: "7 хв",
  },
  {
    slug: "legal-tech-ukraine-2026",
    title: "Legal Tech в Україні 2026: стан ринку, гравці та можливості для юридичних фірм",
    excerpt: "48 000 адвокатів, зростаючий попит на автоматизацію та нові гравці — огляд українського ринку legal tech.",
    image: "/images/blog-ua-legaltech.jpg",
    date: "2026-03-20",
    displayDate: "20 березня 2026",
    tag: "Індустрія",
    readTime: "9 хв",
  },
  {
    slug: "email-integration-legal-crm",
    title: "Пошта в контексті справи: як інтеграція Gmail і Outlook з CRM економить час юриста",
    excerpt: "Вхідний лист автоматично потрапляє до відповідної справи — без ручного сортування по папках.",
    image: "/images/blog-email.jpg",
    date: "2026-03-12",
    displayDate: "12 березня 2026",
    tag: "Інтеграції",
    readTime: "5 хв",
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPostMeta> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p]),
);
