# JustCRM — SEO/GEO: статус (що зроблено / що ні)

> Єдиний живий звіт по всій SEO/GEO-ініціативі. Оновлено: 2026-06-02 (вечір).
> Деталі планів — `seo-geo-plan.md`; аудит Фази 2 — `seo-geo-phase2-audit.md`;
> off-site — `seo-geo-phase6-offsite.md`; правила копірайту — `ai-writing-tells-checklist.md`.

## Зведення по фазах

| Фаза | Що це | Статус | Деплой |
|---|---|---|---|
| 0 | Технічний шар (meta, sitemap, robots, manifest, OG) | ✅ Зроблено | `b712a1b` (live) |
| 1 | Structured data (JSON-LD) | ✅ Зроблено | `88c3c86` (live) |
| 2 | GEO on-page + «хвости» (FAQ/TL;DR/перелінковка) | ✅ Зроблено | `1c920d3`, `f606ee7` (live) |
| 3 | «Чому JustCRM» (`/why`) + segment-лендинги (`/for/*`) | ✅ Зроблено (`/why` ребаланс + 4 сегменти, переписані під юриста) | `c5108a1`…`983bfc0` live; останній сегмент-реворк — у пуші |
| 4 | Core Web Vitals / швидкість | ✅ Зроблено | `fb5cd1b` (live) |
| 5 | Вимірювання (GSC/Bing/GA4/AI-моніторинг) | 🟡 Частково (IndexNow зроблено в коді) | IndexNow — у пуші |
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

### Фаза 3 — сторінка «Чому JustCRM» (`/why`) — LIVE (ребаланс — uncommitted на момент деплою сегментів)
- `app/why/page.tsx`: hero (зображення терезів `scales.png` + хайрлайн) → **порівняльна таблиця** → editorial-блоки альтернатив → темний CTA.
- `components/WhyCompare.tsx` — **семантична таблиця для AI/скрейпінгу**: `<caption>`, `scope="col/row/colgroup"`, **галочки і хрестики + прихований текст «Так/Ні»**, темна колонка JustCRM.
- **Набір конкурентів (ребаланс за фідбеком власника):** колонки **JustCRM · Clio · Notion · ClickUp · Excel** (прибрано JuristCRM і JusNote; універсальні розбито на окремі колонки). 5 груп: Локалізація / Юридична практика / AI / **Гнучкість і зрілість** / Ціна. Таблиця **чесна в обидва боки** — конкуренти мають плюси, де реально сильніші (Clio: маturity/інтеграції/мобільний/портал; Notion/ClickUp: гнучкість/безкоштовний тариф/тайм-трекінг/RAG; Excel: укр./гривня), JustCRM має 5 чесних ✗ (no-code-простір, екосистема інтеграцій, мобільний застосунок, клієнтський портал, безкоштовний тариф).
- Факти звірені WebSearch: Notion/ClickUp **не** мають нативної укр. локалізації (лише браузер-переклад); Excel локалізований і продається в гривні (Microsoft Store uk-ua).
- Альтернативи — 4 окремі editorial-блоки (Clio, Notion, ClickUp, Excel) з кольоровими лого; тон поважний.
- `whyGraph()`: SoftwareApplication + FAQPage (Clio + Notion/ClickUp/Excel vs-питання) + BreadcrumbList.
- **Видалено за вимогою:** анімація терезів у hero (`ScalesAnimation.tsx`) + блок «Excel чи CRM» з головної; раніше — JuristCRM/JusNote з усього `/why`.

### Фаза 4 — Core Web Vitals — ЗРОБЛЕНО, ще НЕ задеплоєно
- **Шрифти self-hosted:** Roboto + Roboto Mono через `next/font/google` (варіативні, субсети `latin`+`cyrillic`, `display:swap`, CSS-змінні). Прибрано `<link>` на `fonts.googleapis.com` з `layout.tsx`; `globals.css` тепер тягне `var(--font-roboto)`. Перевірено в `out/`: **0 звернень до Google**, 15 self-hosted woff2, preload.
- **LCP:** головний герой `crm-hero.webp` (InteractiveDemo) — `fetchPriority="high"` + `decoding="async"`; width/height вже були (2600×1436).
- **INP/головний потік:** DPR капнуто до 2 у `HeroDots`, `HalftoneImage` (у `FloatingDots` вже було). Усі три canvas-компоненти вже мали reduced-motion + IntersectionObserver-паузу офскрін + rAF-коалесинг — додаткова оптимізація не потрібна.
- **Заміряно (production-білд, Playwright):** LCP ~120–160 мс (localhost, без тротлінгу), **CLS = 0** на `/`, `/why`, `/pricing`, `/team`, `/product/cases`, блозі (0.0005).

---

## ❌ Не зроблено / у черзі

### Деплой і housekeeping
- Усе нижче (Фази 2-хвости, 3, 4) **задеплоєно** серією комітів `fb5cd1b → 983bfc0` + header/segment-реворк. Лишок: запушити останні коміти (header refactor, segment rename) + цей статус-док.

### Фаза 3 — segment-лендинги — ЗРОБЛЕНО, LIVE (останній реворк — у пуші)
- 4 сторінки `/for/{advokat,firma,yuryst,notarius}` — рукописна копія під кожну аудиторію (не programmatic), спільний `SegmentPage.tsx` + дані `segments.ts`.
- **Перейменовано за фідбеком юриста (2026-06-02):** «Адвокатське бюро» → **«Юридична фірма»** (бюро юридично = один адвокат; команда = об'єднання/фірма — звірено); `soloyuryst`→`yuryst`, `buro`→`firma`. Копію переписано в реєстрі юриста-практика: провадження за інстанціями, процесуальні строки, досьє довірителів, гонорар (погодинна/фіксована/абонентська), акт наданих правових послуг, конфлікт інтересів. Нотаріус — чесно (не замінює держреєстри, лише організація практики).
- Кожна: hero з entity-дефініцією під сегмент → 4 value-блоки → картки «Що входить» (перелінковка на `/product/*`) → сегментний FAQ (→ FAQPage через `segmentGraph`) → темний CTA.
- Чесність: advokat — нема прямої інтеграції з реєстром судових рішень; notarius — нема доступу до державних нотаріальних реєстрів (це система організації практики).
- **Збагачено (за запитом власника):** hero кожного сегмента отримав продуктовий скриншот (`SEGMENT_HERO`: solo→billing, advokat→cases, buro→tasks, notarius→clients); **куровані фіче-секції з банерами** під аудиторію (`segmentFeatures.ts` — по 3 секції з реальних скриншотів продукту, різні для різних сегментів), рендеряться спільним `FeatureSections.tsx` (винесений із `FeaturePage`, щоб не дублювати). Лишено value-блоки «Чому саме вам» + «Що входить» (перелінковка).
- Підключено: Footer (група «Для кого» — 4 сегменти), `sitemap.ts` (4 маршрути). Копія — під `ai-writing-tells-checklist.md`. **Навігація:** «Для кого» і «Чому ми» **прибрано з хедера** (desktop+mobile) — лишились лише у футері (рішення власника).

### Фаза 2 «хвости» — ЗРОБЛЕНО, LIVE (`f606ee7`)
- **Per-product FAQ** на `/product/cases`, `/product/billing`, `/product/ai` — по 4 питальні Q&A під інтент-кластер сторінки (`components/productFaqs.ts` + `FaqAccordion.tsx`), кожна живить FAQPage JSON-LD (`productGraph` → `faqNode(path, pageFaqs)`). Cases чесно відповідає про відсутність інтеграції з реєстром судових рішень. (pricing уже має повний FAQ із Фази 1.)
- **Блог answer-first + TL;DR** на всіх 14 постах — `TldrBox.tsx` + `blogTldr.ts` (блок «Коротко» з 3 екстрактабельними тезами на пост). Ліди вже були answer-first. Цифри в TL;DR — лише атрибутовані (Thomson Reuters, ABA, €90k-розрахунок); без нових/невіднесених стат.
- **Перелінковка** (P2.7): `RelatedPosts.tsx` на 14 постах — авто-добір 3 статей за тегом (блог↔блог) + лінк «Продукт по темі» (блог→продукт, мапа тег→продукт). Зворотньо — `FeaturePage relatedPosts` на cases/billing/ai/clients/documents («Матеріали по темі», продукт→блог).
- Весь копірайт — під `ai-writing-tells-checklist.md`. Перевірено білдом: FAQPage #faq на 3 продуктових, «Коротко» на 14, «Читайте також» на 14, «Матеріали по темі» на 5.

### Фаза 4 — оцінено й свідомо пропущено
- **`width/height` на всіх 45 `<img>`** — заміряно CLS=0 на всіх ключових сторінках, бо дизайн уже резервує бокс через контейнери з фіксованим розміром + `object-cover/contain`. Масова правка не дала б приросту CWV. Опціонально: додати `width/height` на flow-лого (Header/Footer/marquee/awards) лише щоб закрити діагностику Lighthouse «image elements do not have explicit width and height» — не CWV-метрика.

### Фаза 5 — вимірювання
- ✅ **IndexNow (у коді):** ключ-файл `public/6f9598118335d2c728db97bf7dd69232.txt`, сабмітер `scripts/indexnow.mjs` (читає `out/sitemap.xml` → POST на `api.indexnow.org`, 34 URL), npm-скрипт `npm run indexnow`. Yandex свідомо не використовуємо (рф) — IndexNow б'є по спільному endpoint, окремих yandex-звернень нема. **Запуск:** після кожного прод-деплою `npm run build && npm run indexnow` (ключ-файл має бути вже live на проді, інакше 403). Bing-індекс живить ChatGPT Search + Copilot.
- ⬜ Засабмітити sitemap у Google Search Console + Bing Webmaster (дії власника, доступ до акаунтів).
- ⬜ GA4 кастомний AI-канал (Admin → Channel groups; домени chatgpt.com / perplexity.ai / gemini.google.com / copilot.microsoft.com) — відкладено за рішенням власника.
- ⬜ Моніторинг AI-цитувань (укр.-промпти).

### Фаза 6 — off-site (виконує власник)
- Лістинги на MIISOFT + Shelfy (каталоги, які цитує AI; готовий контент у `seo-geo-phase6-offsite.md`); Wikidata; пітч у legal-пресу (ЮРЛІГА, thepage.ua, НААУ ВША).

---

## ⚑ Відкриті рішення / застереження
- **ClickUp на `/why`** — тепер окрема колонка порівняння (поряд із Notion, Excel) із заслуженими плюсами. Власник схвалив набір Clio + Notion/ClickUp/Excel.
- **`/for/notarius`** — FAQ-пункт «Чи замінює JustCRM державні нотаріальні реєстри?» лишається (чесна відповідь «Ні»); диклеймер прибрано з ліда й meta за вимогою.
- **Старі слаги `/for/soloyuryst`, `/for/buro`** — перейменовані на `/for/yuryst`, `/for/firma`; після деплою старі дадуть 404 (зовнішніх посилань нема).
- **Court-registry інтеграція** (reyestr.court.gov.ua) — власник підтвердив: **фічі немає**. Не заявляємо; конкурентна діра під «облік судових справ».
- **Обсяги ключів не виміряні** — потрібен Google Keyword Planner (uk/UA) перед фіналізацією пріоритетів.
- **Notion-логотип** на `/why` — чорний «N» (бренд так і виглядає); решта лого кольорові.
