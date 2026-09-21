import Link from "next/link";
import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { aiCourseGraph } from "@/app/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";
import Button from "@/components/Button";
import BrowserFrame from "@/components/BrowserFrame";
import FaqAccordion from "@/components/FaqAccordion";
import HallucinationSpots from "@/components/HallucinationSpots";
import WorkshopVideo from "@/components/WorkshopVideo";
import AiCourseForm from "@/components/AiCourseForm";
import { aiCourseFaqs } from "@/components/aiCourseFaqs";

export const metadata = pageMeta({
  title: "Навчання зі штучного інтелекту для юристів",
  description:
    "Вчимо юристів і юридичні фірми працювати з AI без вигаданої судової практики: пошук практики, аналіз договорів, агенти й автоматизація звітів.",
  path: "/ai-kurs",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const NOTCH = "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)";

const LEVELS = [
  {
    n: "01",
    title: "Як AI працює",
    lead: "Механіка, без якої решта не тримається.",
    items: [
      "Контекстне вікно: чому довга розмова відповідає гірше за коротку",
      "Звідки беруться галюцинації і як їх ловити",
      "Що дати моделі, щоб відповідь була по суті",
      "Яку модель брати під яку задачу",
      "Які підписки потрібні, а за які не варто платити",
    ],
  },
  {
    n: "02",
    title: "Юридичні задачі",
    lead: "Те, що юрист робить руками щодня.",
    items: [
      "Пошук судової практики з перевіркою джерел",
      "Побудова правової позиції",
      "Аналіз договорів і документів",
      "Генерація документів за шаблоном",
      "Як витягти факти зі ста сторінок",
    ],
  },
  {
    n: "03",
    title: "Автоматизація і агенти",
    lead: "Для тих, хто хоче йти глибше за чат.",
    items: [
      "Скіли: описати свій спосіб роботи один раз, щоб не повторювати щоразу",
      "Агенти: як зібрати і запустити",
      "Робота у Visual Studio Code",
      "MCP: AI читає дані CRM і сам збирає звіт",
      "Для керівника: яка звітність по фірмі збирається без людини",
    ],
  },
];

const FORMATS = [
  {
    big: "4 год",
    title: "Воркшоп",
    meta: "Онлайн або очно · Рівень 01",
    result:
      "Команда виходить із набором промптів під свої задачі й умінням перевіряти джерела, які дає AI. Перші задачі перекладаються на AI того ж тижня.",
    dark: false,
  },
  {
    big: "3 рівні",
    title: "Повне навчання",
    meta: "Кілька зустрічей · Рівні 01–03",
    result:
      "Кожен юрист має власні скіли під свої процеси, а не чужі промпти зі скриншотів. Команда працює з AI щодня, а не згадує про нього перед дедлайном.",
    dark: true,
  },
  {
    big: "Очно",
    title: "Виїзд в офіс",
    meta: "Обсяг узгоджуємо",
    result:
      "Те саме, що повне навчання, плюс налаштування на ваших робочих місцях і ваших документах. Після виїзду команда працює в уже зібраному середовищі.",
    dark: false,
  },
];

const TRAINERS = [
  { name: "Тарас Зубачик", role: "Юрист і продакт-менеджер", photo: "/images/team-taras.webp" },
  { name: "Станіслав Маринович", role: "Проєктний менеджер AI-проєктів", photo: "/images/team-stanislav.webp" },
  { name: "Мар'ян Петльований", role: "AI/ML-інженер", photo: "/images/team-marian.webp" },
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
      <span className="w-2 h-2 rounded-sm bg-[#1c1c1c]" />
      {children}
    </p>
  );
}

export default function AiCoursePage() {
  return (
    <>
      <JsonLd data={aiCourseGraph()} />
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero — текст ліворуч, фото з проведеного навчання праворуч */}
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 bg-[#f4f4f4] border-b border-black/10 relative overflow-hidden">
          <FloatingDots count={22} />
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
              <div>
                <SectionTag>Навчання</SectionTag>
                <h1 className="text-[32px] sm:text-5xl lg:text-[56px] font-light leading-[1.08] tracking-[-0.02em]">
                  Навчання зі штучного інтелекту для{" "}
                  <strong className="font-semibold">юристів і юридичних фірм</strong>
                </h1>
                <p className="mt-5 sm:mt-7 text-base sm:text-lg text-black/50 max-w-xl leading-relaxed">
                  Вчимо працювати з AI так, щоб він не вигадував судову практику. Воркшоп
                  або повне навчання команди з виїздом в офіс.
                </p>
                <div className="mt-8 sm:mt-9">
                  <Button href="#zayavka">Залишити заявку</Button>
                </div>
              </div>

              <figure className="lg:justify-self-end w-full">
                {/* Eager + fetchPriority: це LCP-елемент правої колонки першого екрана. */}
                <img
                  src={`${bp}/images/ai-kurs-hero.webp`}
                  alt="Навчання зі штучного інтелекту для команди юридичної фірми EVERLEGAL, вересень 2026"
                  width={1800}
                  height={1200}
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <figcaption className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.15em] text-black/30">
                  Навчання для команди EVERLEGAL
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Реєстр місць, де AI вигадує */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <SectionTag>Проблема</SectionTag>
            <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-6 max-w-3xl">
              Шість місць, де AI{" "}
              <strong className="font-semibold">вигадує за юриста</strong>
            </h2>
            <p className="text-[15px] lg:text-base text-black/55 leading-relaxed max-w-2xl mb-12 lg:mb-14">
              Юрист просить AI підготувати правову позицію. У відповідь приходить готовий
              текст із посиланнями на рішення, яких не існує. Одного такого випадку досить,
              щоб закрити для себе тему. Але вигадує він не лише практику.
            </p>

            <HallucinationSpots />
          </div>
        </section>

        {/* Як проходить навчання — текст ліворуч, відео праворуч */}
        <section className="py-16 lg:py-24 bg-[#fafafa] bg-dot-grid relative overflow-hidden">
          <FloatingDots count={18} />
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
              <div>
                <SectionTag>Як проходить</SectionTag>
                <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-6">
                  Та сама модель,{" "}
                  <strong className="font-semibold">інша відповідь</strong>
                </h2>
                <div className="space-y-5 text-[15px] lg:text-base text-black/55 leading-relaxed max-w-xl">
                  <p>
                    AI перестає вигадувати, коли з ним працюють правильно. Треба зібрати
                    контекст, дати перевірені джерела замість його власної пам&apos;яті, і
                    працювати в агентній сесії, де він перевіряє сам себе.
                  </p>
                  <p>
                    Саме це і розбираємо, але не на абстрактних прикладах. Команда працює на
                    своїх ноутбуках і на задачах, які принесла з собою. До кінця зустрічі
                    кожен має щонайменше один процес, перекладений на AI.
                  </p>
                  <p>
                    Крім галюцинацій є звичайна рутина. Юрист бере гроші за думку, а половину
                    дня вичитує документи, шукає практику і переписує однакові листи. Цю
                    частину AI знімає, якщо вміти його попросити.
                  </p>
                </div>
              </div>

              <WorkshopVideo />
            </div>
          </div>
        </section>

        {/* Програма */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <SectionTag>Програма</SectionTag>
            <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-12 lg:mb-16 max-w-2xl">
              Три рівні <strong className="font-semibold">навчання</strong>
            </h2>

            <div className="border-t border-black/10">
              {LEVELS.map((lvl) => (
                <div
                  key={lvl.n}
                  className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-16 py-10 lg:py-14 border-b border-black/10"
                >
                  <div className="lg:sticky lg:top-8 lg:self-start">
                    <p className="text-[52px] lg:text-[76px] font-light leading-[0.9] tracking-[-0.03em] text-black/12 mb-4">
                      {lvl.n}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-light tracking-tight leading-tight mb-2">
                      {lvl.title}
                    </h3>
                    <p className="text-[13.5px] text-black/40 leading-relaxed">{lvl.lead}</p>
                  </div>
                  <ul className="space-y-4 lg:pt-3">
                    {lvl.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-4 text-[15px] text-black/60 leading-relaxed border-b border-black/6 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-black/15 shrink-0 mt-px font-mono text-[13px]">+</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Формати */}
        <section className="py-16 lg:py-24 bg-[#fafafa] bg-dot-grid relative overflow-hidden">
          <FloatingDots count={14} />
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <SectionTag>Формати</SectionTag>
            <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-12 lg:mb-14 max-w-2xl">
              Три формати <strong className="font-semibold">на вибір</strong>
            </h2>

            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {FORMATS.map((f) => (
                <div
                  key={f.title}
                  className={`border p-7 lg:p-8 flex flex-col ${
                    f.dark
                      ? "border-[#1c1c1c] bg-[#1c1c1c] text-white"
                      : "border-black/10 bg-white"
                  }`}
                >
                  <p
                    className={`text-[34px] lg:text-[40px] font-light leading-none tracking-[-0.02em] mb-6 ${
                      f.dark ? "text-white" : "text-black/85"
                    }`}
                  >
                    {f.big}
                  </p>
                  <h3
                    className={`text-lg font-semibold tracking-tight leading-snug mb-2 ${
                      f.dark ? "text-white" : ""
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`font-mono text-[10.5px] uppercase tracking-wide mb-5 ${
                      f.dark ? "text-white/35" : "text-black/30"
                    }`}
                  >
                    {f.meta}
                  </p>
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.15em] mb-2 ${
                      f.dark ? "text-white/30" : "text-black/25"
                    }`}
                  >
                    Результат
                  </p>
                  <p className={`text-[14px] leading-relaxed ${f.dark ? "text-white/65" : "text-black/55"}`}>
                    {f.result}
                  </p>
                </div>
              ))}
            </div>

            {/* Вартість — окремий виразний блок, а не примітка під картками */}
            <div className="mt-6 lg:mt-8 border border-black/10 bg-white p-7 lg:p-10">
              <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-14 items-start">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-black/30 mb-3">
                    Вартість
                  </p>
                  <p className="text-2xl lg:text-[32px] font-light leading-tight tracking-tight">
                    Рахуємо <strong className="font-semibold">під запит</strong>
                  </p>
                </div>
                <div className="lg:pt-1">
                  <p className="text-[15px] lg:text-base text-black/60 leading-relaxed mb-5">
                    Називаємо після короткої розмови. Вона залежить від трьох речей: скільки
                    людей у команді, який формат ви обрали і які задачі беремо в роботу.
                  </p>
                  <Button href="#zayavka" variant="outline">
                    Дізнатись вартість
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Хто веде */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <SectionTag>Хто веде</SectionTag>
            <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-12 lg:mb-14 max-w-2xl">
              Навчання проводить <strong className="font-semibold">команда JustCRM</strong>
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {TRAINERS.map((t) => (
                <div key={t.name}>
                  <div className="w-full aspect-[4/5] bg-[#f0f0ee] overflow-hidden mb-5">
                    <img
                      src={`${bp}${t.photo}`}
                      alt={t.name}
                      width={640}
                      height={800}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-lg lg:text-xl font-light tracking-tight mb-1.5">{t.name}</h3>
                  <p className="text-[14px] text-black/45 leading-relaxed">{t.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 lg:mt-16 border-t border-black/10 pt-9 lg:pt-10">
              <p className="text-xl lg:text-[28px] font-light leading-snug tracking-tight max-w-3xl">
                Ми розробили JustCRM, українську CRM для юристів з AI.{" "}
                <strong className="font-semibold">
                  Те, чого вчимо, робимо щодня самі.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Місток до CRM */}
        <section className="py-16 lg:py-24 bg-[#f4f4f4] relative overflow-hidden">
          <FloatingDots count={18} />
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <SectionTag>Наш продукт</SectionTag>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-5 max-w-2xl">
                На навчанні показуємо це{" "}
                <strong className="font-semibold">на власній системі</strong>
              </h2>
              <div className="space-y-4 text-[15px] lg:text-base text-black/55 leading-relaxed max-w-2xl">
                <p>
                  JustCRM це наша CRM для юридичних фірм. Справи, задачі, документи і білінг
                  в одній системі, українською і в гривні.
                </p>
                <p>
                  На навчанні показуємо, як підключити до неї агента через MCP. Далі він сам
                  читає дані системи і збирає звіт: що в роботі і де горять строки.
                </p>
              </div>
              <Link
                href="/product/ai"
                className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] font-medium uppercase tracking-wide text-black/50 hover:text-black transition-colors"
              >
                Детальніше про AI у JustCRM
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

          </div>

          {/* Ширший контейнер за текстовий блок: скрін має читатися, а не ілюструвати */}
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <div className="mx-auto max-w-[1320px]">
              <BrowserFrame>
                <img
                  src={`${bp}/images/ai-kurs-crm.webp`}
                  alt="JustCRM — задачі юридичної фірми на Kanban-дошці зі строками й пріоритетами"
                  width={1896}
                  height={1028}
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </BrowserFrame>
            </div>
          </div>
        </section>

        {/* Форма заявки */}
        <section id="zayavka" className="py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-8">
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <SectionTag>Заявка</SectionTag>
            <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-5">
              Залишити <strong className="font-semibold">заявку</strong>
            </h2>
            <p className="text-black/45 text-[15px] mb-10 max-w-xl leading-relaxed">
              Напишіть, чим займається компанія і що хочете автоматизувати. Передзвонимо і
              обговоримо формат.
            </p>
            <AiCourseForm />
          </div>
        </section>

        {/* FAQ */}
        <FaqAccordion faqs={aiCourseFaqs} heading="Часті запитання про навчання" />

        {/* Темний фінал */}
        <section className="py-20 lg:py-28 bg-[#1c1c1c] text-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl lg:text-[44px] font-light tracking-tight mb-5">
              Почніть із воркшопу
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed mb-10">
              Чотири години на задачах вашої команди. Після них ви вирішите, чи потрібне
              повне навчання.
            </p>
            <a
              href="#zayavka"
              className="inline-block font-mono text-[12px] font-medium uppercase tracking-wide bg-white text-[#1c1c1c] px-6 py-2.5 transition-colors hover:bg-white/90"
              style={{ clipPath: NOTCH }}
            >
              Залишити заявку
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
