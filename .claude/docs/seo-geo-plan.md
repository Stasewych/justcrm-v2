# JustCRM — SEO/GEO план

> Робочий документ для технічної SEO/GEO-оптимізації маркетинг-сайту JustCRM.
> Автор сесії: дослідження + аудит проведено Claude; рішення узгоджені зі Stanislav.
> Створено: 2026-06-02.

## Контекст

- **Продукт:** JustCRM — українська **AI-CRM для юридичних фірм** (legal practice management). Компанія: Just Solution (ФОП Маринович С. С.). Застосунок: `crm.justsolution.org`.
- **Стек:** Next.js **16.2.4** (App Router) + React 19 + Tailwind v4. `next.config.ts`: `output: "export"` (повний **статичний експорт**, без рантайму/ISR/Edge), `images.unoptimized: true`, `experimental.viewTransition: true`. Хостинг — Vercel, з кореня домену. ⚠️ `AGENTS.md` попереджає: це нестандартний Next 16, звірятися з `node_modules/next/dist/docs/`.
- **Домен (canonical):** `https://justsolution.org`.
- **Ринок/мова:** Україна, **UA-only** (Google ~85–90% частки; без hreflang/EN).
- **Головний конкурент:** **JuristCRM** (juristcrm.com) — інкумбент №1, назва майже омографічна → бренд-ризик, треба захищати брендову видачу. Інші: Jusnote, KeyCRM/NetHunt/OneBox (generic). Міжнародні (Clio тощо) в укр. видачі відсутні.
- **Де-факто каталог-рейтинг ринку:** MIISOFT (miisoft.com.ua) — саме його цитують LLM на «найкраща CRM для юристів». JustCRM там **відсутній** (офсайт-задача для команди, поза кодом).

## Зафіксовані рішення

1. **Обсяг (код):** технічний шар лише на **29 наявних сторінках**. Нові сторінки (vs/alternative, Security, segment, кейси) — поза цим етапом.
2. **Мова:** UA-only.
3. **Title:** template `%s | JustCRM — юридична CRM`; у `title` кожної сторінки — лише варіативна частина (без бренду). Довший суфікс обрано свідомо — розводить із JuristCRM.
4. **OG-картинки:** статичні (динамічна генерація `next/og` не працює під `output:'export'`).
5. **robots:** дозволяємо всіх AI-ботів (хочемо AI-видимість).
6. **trailingSlash:** лишаємо `false` (Next-дефолт), canonical — без слешів, щоб не ламати наявні внутрішні посилання.
7. **Каталоги/контент/PR** — рекомендації команді, поза кодом.

---

## Фаза 0 — чек-лист — ✅ ВИКОНАНО (2026-06-02), перевірено на `next build`

- [x] `app/layout.tsx`: `metadataBase`, `title` (рядок, без template), дефолтні `description`/`openGraph`/`twitter`/`robots`/`icons`/`keywords`/`authors`, `viewport.themeColor`. Manifest-лінк додається автоконвенцією `app/manifest.ts`. (GSC-верифікацію не додавали — домен, найімовірніше, верифіковано через DNS.)
- [x] Per-page `metadata` на всіх 28 сторінках через хелпер `app/seo.ts → pageMeta()` (+ `app/blog/layout.tsx` для клієнтського блог-індексу). Описи блог-постів узяті з екскерптів масиву в `app/blog/page.tsx`.
- [x] `app/sitemap.ts` — усі роути + `lastModified` (дати блогу зашиті, синхронізувати при нових постах).
- [x] `app/robots.ts` — allow усім + явний список AI-ботів, `sitemap` + `host`.
- [x] `app/manifest.ts` — маніфест (name/short_name/icons/theme `#111827`/bg/lang `uk`).
- [x] Статична OG-картинка `app/opengraph-image.png` + `app/twitter-image.png` (1200×630, згенеровано Playwright). Per-section OG — пізніше.
- [x] `npm run build` — 35 статичних роутів; `out/` містить `sitemap.xml`, `robots.txt`, `manifest.webmanifest`; унікальні title, canonical, og:image (абсолютні URL) — усе підтверджено.

**Уроки реалізації (важливо для майбутніх змін):**
1. Під `output:"export"` метадата-роути (`sitemap`/`robots`/`manifest`) ОБОВ'ЯЗКОВО потребують `export const dynamic = "force-static";` — інакше білд падає.
2. `title.template` прибрано: суфікс бренду «запікається» у `pageMeta()`. Причина — проміжний `app/blog/layout.tsx` зі строковим title скидав template для дочірніх блог-постів (вони втрачали суфікс). Тепер кожен title повний.
3. Кореневий `title` має бути **рядком** (форма `{ default }` без `template` — помилка типів Next).

**Залишилось (дія користувача, поза кодом):** засабмітити `https://justsolution.org/sitemap.xml` у Google Search Console після деплою.

### v16-нюанси, які треба врахувати (підтвердити локальними доками)
- `params`/`searchParams` тепер Promise (`await`).
- `viewport`/`themeColor` — окремий `export const viewport`, НЕ в об'єкті `metadata`.
- `generateSitemaps` `id` — Promise (нам, імовірно, не потрібен — <50k URL).
- `app/sitemap.ts`/`robots.ts`/`manifest.ts` емітяться у статику на білді — лише якщо без request-time API (тримати чистими/синхронними).

---

## Мапа: сторінка → основний ключ → title (варіативна частина) → опис

> Рендериться як `{title} | JustCRM — юридична CRM`. ⚠️ Обсяги ключів **не виміряні** — перед фіналом прогнати head-терміни через Google Keyword Planner (uk/Ukraine).

### Ядро

| Роут | Основний ключ | `title` (варіативна частина) | Опис (чернетка/кут) |
|---|---|---|---|
| `/` | CRM для юристів | *(title.default, повний)* `CRM для юристів та адвокатів \| JustCRM — юридична CRM` | AI-CRM, що веде юрфірму від першого контакту з клієнтом до рахунку: справи, клієнти, документи, білінг в одній системі. |
| `/product/cases` | управління справами | `Управління справами юриста` | Усі справи в одному місці — Kanban, таблиця, календар дедлайнів, контроль доступу й фінанси по справі. |
| `/product/clients` | клієнтська база адвоката | `Клієнтська база адвоката` | Картка клієнта з усією історією — справи, оплати, документи й листування в одному профілі. |
| `/product/billing` | білінг юридична фірма | `Білінг і тайм-трекінг для юристів` | Таймер на справу, мультивалютні інвойси, індивідуальні ставки — від хвилини роботи до оплаченого рахунку. |
| `/product/documents` | документообіг юрфірми | `Документообіг юридичної фірми` | Файли й листування прив'язані до справи, а не розкидані по папках — з правами доступу та шаблонами. |
| `/product/ai` | штучний інтелект для юристів | `AI-асистент для юристів` | База знань фірми (RAG), голосове введення українською і генерація документів за шаблоном — чернетку готує AI, рішення за юристом. |
| `/product/tasks` | задачі для юристів | `Задачі та доручення для юристів` | Розподіляйте доручення, контролюйте дедлайни справ і нагадування — без задач, загублених у месенджерах. |
| `/product/tables` | таблиці для юрфірми | `Таблиці та реєстри для юрфірми` | Гнучкі таблиці й реєстри для будь-яких даних фірми — сортування, фільтри й аналітика в CRM. |
| `/pricing` | CRM для юристів ціна | `Ціни на CRM для юристів` | Прозорі тарифи — 14 днів безкоштовно, повний функціонал Pro AI, без прихованих платежів. |
| `/team` | про команду | `Команда` | Команда Just Solution — інженери й юристи, що будують українську AI-CRM для юридичних фірм. |
| `/sales` | замовити демо | `Замовити демонстрацію` | Персональна демо-презентація JustCRM — покажемо, як налаштувати справи, білінг і AI під ваші процеси. |
| `/offer` | — (noindex-кандидат, поки index) | `Публічна оферта` | Умови публічної оферти JustCRM. |
| `/privacy` | — | `Політика конфіденційності` | Як JustCRM обробляє й захищає персональні дані. |
| `/terms` | — | `Правила користування` | Правила користування сервісом JustCRM. |

### Блог

| Slug | `title` (варіативна частина) |
|---|---|
| `/blog` (список) | `Блог для юристів` |
| legal-tech-ukraine-2026 | `LegalTech в Україні 2026: тренди` |
| ai-transforms-legal-practice | `Як AI змінює роботу юриста` |
| ai-document-generation | `AI-генерація юридичних документів` |
| rag-knowledge-base | `RAG-база знань для юрфірми` |
| voice-dictation-legal | `Голосова диктовка для юристів` |
| crm-vs-excel-legal | `CRM проти Excel для юриста` |
| excel-to-crm-migration | `Перехід з Excel на CRM` |
| billing-eats-lawyer-time | `Скільки часу юрист втрачає на білінг` |
| multicurrency-invoicing | `Мультивалютні рахунки для юрфірми` |
| kanban-case-management | `Kanban для ведення справ` |
| client-intake-funnel | `Воронка залучення клієнтів юристу` |
| data-security-law-firms | `Безпека даних юридичної фірми` |
| data-protection-legal-crm | `Захист персональних даних у CRM` |
| email-integration-legal-crm | `Інтеграція пошти з юридичною CRM` |

> Описи блог-постів пишемо з першого абзацу кожної статті (читати під час реалізації), ~150–160 симв., ключ спереду.

### Розв'язані канібалізації
- documents (зберігання/документообіг) ↔ ai (генерація): cross-link, не дублювати H1-фразу.
- pricing (`ціна/безкоштовно`) ↔ sales (`демо/впровадження`): різні інтенти.
- home (`CRM для юристів`) ↔ cases (`управління справами`): home не бере «облік справ» у H1.

---

## Structured data (JSON-LD) — Фаза 1 (наступна)

Через `<script type="application/ld+json">` у серверних компонентах (+ `schema-dts`):
- **Organization** + **WebSite** — на весь сайт (layout). `Organization.sameAs` → соцмережі (розводить бренд від JuristCRM).
- **SoftwareApplication** — на `/` + `/product/*` + `/pricing`. ⚠️ **БЕЗ `aggregateRating`** поки нема реальних відгуків (фейк = manual action).
- **BlogPosting** + **Person**(автор) + **BreadcrumbList** — на 14 статтях.
- **FAQPage** — там, де реальний FAQ (для AI; rich-result зникає 7 трав. 2026, тож не заради зірочок).
- НЕ робимо: `SearchBox` (мертвий), `HowTo` (rich-result скасовано).

**Перевага:** у JuristCRM — нуль schema, у Jusnote — лише WebSite/Breadcrumb. Повна розмітка = ми єдині, кого видно як software-rich-result і чисто «зчитує» LLM.

---

## Наступні фази (стисло)

- **Фаза 1:** structured data + статичні OG по розділах.
- **Фаза 2 (GEO):** extractability контенту (answer-first, питальні H2, стат-факти з цитуванням, таблиці, FAQ-блоки з 20 PAA-питань), entity-білдинг (офсайт: MIISOFT/Shelfy/G2, Wikidata, listicles, legal-преса).
- **Фаза 3 (контент, поза поточним кодом):** vs/alternative, segment-лендинги, Security, кейси, власний рейтинг-листикл; автори+біо; перелінковка-кластери.
- **Фаза 4 (CWV):** Roboto → `next/font/google` (self-host), `width/height` на всіх `<img>`, `fetchPriority` на LCP-герой, зменшити INP від canvas-анімацій.
- **Фаза 5 (вимірювання):** GSC (sitemap, Pages, branded-фільтр, CWV), Bing + IndexNow (вручну, ключ-файл у `/public`), GA4 кастомний AI-канал, моніторинг AI-цитувань (Otterly/Profound) з укр.-промптами.

## Чесні застереження
- **llms.txt** — театр (Google не підтримує); опціонально/скіп.
- **Schema** — не ранкінг-фактор; робимо акуратно заради розуміння/AI, без очікувань стрибка.
- **FAQ/HowTo rich results** — вмирають; під них не плануємо.
- **`viewTransition`** — experimental, не production-ready; для INP не допомагає.
- **Масовий programmatic SEO** — ризик санкцій; нові сторінки будуємо руками.
- **G2/Capterra** — спершу перевірити прийом укр. продукту (хоча Gartner делістив РФ-, не укр-, продукти; G2 поглинув Capterra/GetApp/SoftwareAdvice 05.02.2026).
- **Бренд-ризик JustCRM↔JuristCRM** — захищати брендову видачу (sameAs, брендові беклінки).
- **Обсяги ключів не виміряні** — Keyword Planner (uk/UA) перед фіналізацією.

## Ключові джерела ресерчу
- Next.js 16 docs: static-exports, generate-metadata, sitemap, robots, manifest, opengraph-image, json-ld, fonts.
- Google: Core Web Vitals (LCP<2.5s, INP<200ms, CLS<0.1 — міф про 2.0s спростовано), search-gallery (rich-result статуси), creating-helpful-content.
- Princeton «GEO» (KDD 2024): цитування+статистика+цитати = +30–40% видимості, найбільше для не-#1.
- SERP/autocomplete (Google UA, черв. 2026): JuristCRM/MIISOFT/Shelfy домінують; вільні кластери — legal-білінг/час, legal-Kanban, укр. голосове диктування.
