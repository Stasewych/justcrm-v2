# JustCRM — SEO/GEO: статус (що зроблено / що ні)

> Єдиний живий звіт по всій SEO/GEO-ініціативі. Оновлено: 2026-06-02.
> Деталі планів — `seo-geo-plan.md`; аудит Фази 2 — `seo-geo-phase2-audit.md`;
> off-site — `seo-geo-phase6-offsite.md`; правила копірайту — `ai-writing-tells-checklist.md`.

## Зведення по фазах

| Фаза | Що це | Статус | Деплой |
|---|---|---|---|
| 0 | Технічний шар (meta, sitemap, robots, manifest, OG) | ✅ Зроблено | `b712a1b` (live) |
| 1 | Structured data (JSON-LD) | ✅ Зроблено | `88c3c86` (live) |
| 2 | GEO on-page (extractability) | ✅ Зроблено | `1c920d3` (live) |
| 3 | Сторінка «Чому JustCRM» (`/why`, vs/alternative) | ✅ Зібрано, ⏳ **НЕ задеплоєно** | uncommitted |
| 4 | Core Web Vitals / швидкість | ❌ Не починали | — |
| 5 | Вимірювання (GSC/Bing/GA4/AI-моніторинг) | ❌ Не починали | — |
| 6 | Off-site entity-білдинг (виконує власник) | ❌ Не починали (контент готовий) | — |

---

## ✅ Зроблено

### Фаза 0 — технічний SEO (live)
- `app/layout.tsx`: `metadataBase`, дефолтні title/description/OG/twitter/robots/icons/keywords, `viewport.themeColor`.
- Унікальні `title`+`description`+canonical на всіх 29 сторінках через `app/seo.ts → pageMeta()`.
- `app/sitemap.ts`, `app/robots.ts` (allow AI-боти), `app/manifest.ts` — усе `force-static`.
- Статичні OG/Twitter-картинки (`app/opengraph-image.png`, `twitter-image.png`).

### Фаза 1 — structured data (live)
- `components/JsonLd.tsx` (нативний `<script type="application/ld+json">`, екранування).
- `app/structured-data.ts` — білдери: Organization, WebSite, SoftwareApplication (offers UAH 400–600, **без aggregateRating**), FAQPage, BlogPosting, BreadcrumbList, Person.
- Site-wide Organization+WebSite у layout; SoftwareApplication на `/`+продуктових+`/pricing`; FAQPage на `/`+`/pricing`; BlogPosting+Breadcrumb на 14 статтях; Person на `/team`.
- Консолідація даних у єдині джерела: `components/faqData.ts`, `app/blog/posts.ts`.

### Фаза 2 — GEO on-page (live)
- Entity-дефініція в hero головної + на `/pricing` («скільки коштує»).
- По одному питальному H2 на кожній із 7 продуктових сторінок.
- Прибрано нецитовані стати («40%», «95% потреб», «10 хв»); €90k → прозорий розрахунок.
- FAQ розширено 8 → **17** PAA-питань (`faqData.ts`).
- Person-schema 4 співзасновників на `/team`.
- `ai-writing-tells-checklist.md` — обов'язковий anti-AI-slop стандарт копірайту.

### Фаза 3 — сторінка «Чому JustCRM» (`/why`) — ЗІБРАНО, ще НЕ задеплоєно
- `app/why/page.tsx`: hero (велика світла типографіка) → **порівняльна таблиця** → editorial-блоки альтернатив → темний CTA.
- `components/WhyCompare.tsx` — **семантична таблиця для AI/скрейпінгу**: `<caption>`, `scope="col/row/colgroup"`, 16 пунктів у 4 групах (Локалізація / Юридична практика / AI / Ціна), **галочки і хрестики + прихований текст «Так/Ні»** у кожній клітинці, темна колонка JustCRM.
- Альтернативи (Clio · JuristCRM · JusNote · Notion/ClickUp/Excel): чесний тон, **кольорові логотипи** фірм (`public/images/vs-*.png`), JusNote/ClickUp збільшені.
- `whyGraph()` у structured-data: SoftwareApplication + FAQPage (4 vs-питання) + BreadcrumbList.
- Підключено в навігацію: Header («Чому ми»), Footer, `app/sitemap.ts` (`/why`).
- Джерела фактів — Obsidian `obsidian-stas` (`01 Ринок`, `02 Продукт`) + публічні ціни (Clio $39–139, JusNote від €29). Тон поважний, без приниження (за стратегією власника).
- **Видалено за вимогою:** анімація терезів у hero (`ScalesAnimation.tsx`) + блок «Excel чи CRM» (`ComparisonTable.tsx`) з головної.

---

## ❌ Не зроблено / у черзі

### Деплой і housekeeping
- **`/why` (Фаза 3) ще не задеплоєно** — uncommitted разом із doc-housekeeping (Фаза 6 rename, court-підтвердження). Перед деплоєм: `npm run build` + два логічні коміти.

### Hero сторінки `/why`
- Візуал у hero відсутній (терези прибрано як невдалі). Відкрите питання: інший якісний hero-візуал або без нього.

### Фаза 2 — свідомо відкладене (код)
- Per-product FAQ-блоки (на cases/billing/ai/pricing).
- Збагачення 14 блог-постів (answer-first лід + блок «Коротко/TL;DR»).
- Перелінковка-кластери продукт ↔ релевантні статті.

### Фаза 4 — Core Web Vitals
- Roboto → `next/font/google` (self-host); `width/height` на всіх `<img>`; `fetchPriority` на LCP-герой; зменшити INP від canvas-анімацій.

### Фаза 5 — вимірювання
- Засабмітити sitemap у Google Search Console; Bing + IndexNow; GA4 кастомний AI-канал; моніторинг AI-цитувань (укр.-промпти).

### Фаза 6 — off-site (виконує власник)
- Лістинги на MIISOFT + Shelfy (каталоги, які цитує AI; готовий контент у `seo-geo-phase6-offsite.md`); Wikidata; пітч у legal-пресу (ЮРЛІГА, thepage.ua, НААУ ВША).

---

## ⚑ Відкриті рішення / застереження
- **ClickUp на `/why`** — стара нотатка власника казала «не згадувати на сайті»; зараз поданий у складі «універсальних інструментів» (Notion · ClickUp · Excel). Лишити чи прибрати — за рішенням власника.
- **Court-registry інтеграція** (reyestr.court.gov.ua) — власник підтвердив: **фічі немає**. Не заявляємо; конкурентна діра під «облік судових справ».
- **Обсяги ключів не виміряні** — потрібен Google Keyword Planner (uk/UA) перед фіналізацією пріоритетів.
- **Notion-логотип** на `/why` — чорний «N» (бренд так і виглядає); решта лого кольорові.
