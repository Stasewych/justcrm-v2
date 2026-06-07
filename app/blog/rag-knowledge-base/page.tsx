import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { blogPostGraph } from "@/app/structured-data";
import TldrBox from "@/components/TldrBox";
import { BLOG_TLDR } from "@/components/blogTldr";
import RelatedPosts from "@/components/RelatedPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata = pageMeta({
  title: "RAG-база знань для юрфірми",
  description: "AI аналізує внутрішні документи, шаблони та матеріали справ і знаходить відповіді на запити юриста — база знань фірми на RAG-технології.",
  path: "/blog/rag-knowledge-base",
  type: "article",
  publishedTime: "2026-03-28",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostGraph("rag-knowledge-base")} />
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero */}
        <section className="pt-28 pb-10 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wide text-black/35 hover:text-black/60 transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Блог
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] font-medium uppercase tracking-wider bg-black/[0.04] px-2.5 py-1 rounded-full text-black/50">
                AI & Legal Tech
              </span>
              <span className="font-mono text-[11px] text-black/30">28 березня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 7 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              База знань юридичної фірми: як RAG-пошук знаходить відповіді у Ваших документах
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Юридична фірма щороку створює тисячі документів — договорів, меморандумів,
              правових висновків. Але коли потрібно знайти конкретний прецедент чи формулювання,
              пошук перетворюється на години ручної роботи. RAG-технологія змінює це назавжди.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-rag.jpg`}
              alt="База знань юридичної фірми та RAG-пошук"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <TldrBox points={BLOG_TLDR["rag-knowledge-base"]} />

            <h2>Проблема: знання є, але знайти їх неможливо</h2>

            <p>
              Кожна юридична фірма — це фабрика знань. За роки роботи накопичуються
              сотні договорів, тисячі правових висновків, десятки успішних позовних стратегій.
              Ці документи — головний актив фірми, цінніший за будь-яке обладнання.
            </p>

            <p>
              Але є парадокс: <strong>чим більше документів, тим складніше знайти потрібний</strong>.
              Класичний пошук за ключовими словами працює погано з юридичними текстами.
              Спробуйте знайти «прецедент щодо розірвання договору оренди через форс-мажор» —
              і пошук поверне сотні результатів, де згадується хоча б одне з цих слів,
              але жоден не буде тим, що Вам потрібно.
            </p>

            <p>
              За оцінками дослідників, юристи витрачають до <strong>30% робочого часу</strong> на
              пошук інформації, яка вже існує десь у внутрішніх системах фірми. При середній
              ставці €50/год та команді з 10 юристів — це понад <strong>€78 000 на рік</strong>,
              витрачених на те, щоб «знайти те, що ми вже знаємо».
            </p>

            <h2>Що таке RAG і чому це не просто «розумний пошук»</h2>

            <p>
              RAG (<strong>Retrieval-Augmented Generation</strong> — генерація з доповненням
              пошуком) — це архітектура штучного інтелекту, яка поєднує два компоненти:
              пошук релевантних фрагментів із Ваших документів та генерацію відповіді
              на основі знайденого.
            </p>

            <p>
              На відміну від звичайного ChatGPT, який відповідає на основі загальних знань
              із навчальних даних, <strong>RAG-система працює з конкретними документами
              Вашої фірми</strong>. Вона не вигадує — вона знаходить.
            </p>

            <p>
              Гарвардський журнал права і технологій (Harvard JOLT) зазначає, що юридичні задачі
              «особливо добре підходять для RAG завдяки наявності високоякісних баз
              даних — законів, судових рішень та нормативних актів». Більше того,
              рандомізоване дослідження показало, що RAG-інструменти досягають рівня
              галюцинацій, <strong>порівнянного з роботою без AI взагалі</strong> —
              на контрасті з базовим GPT-4, який галюцинував у 49% випадків
              на простих юридичних задачах.
            </p>

            <h2>Як RAG індексує документи: покрокова механіка</h2>

            <p>
              Щоб зрозуміти, чому RAG настільки точний, варто подивитися на його
              внутрішню роботу:
            </p>

            <ul>
              <li>
                <strong>Розбиття на фрагменти (chunking)</strong> — кожен документ
                ділиться на логічні частини: абзаци, розділи договору, пункти.
                Це дозволяє системі працювати не з цілим файлом на 200 сторінок,
                а з конкретним релевантним фрагментом
              </li>
              <li>
                <strong>Перетворення на вектори (embedding)</strong> — кожен фрагмент
                перетворюється на числове представлення, яке відображає його смисл.
                Фрази «розірвання контракту» та «припинення дії договору»
                будуть розташовані поруч у векторному просторі, попри різні слова
              </li>
              <li>
                <strong>Зберігання у векторній базі</strong> — усі вектори
                зберігаються в спеціалізованій базі даних, оптимізованій для
                швидкого семантичного пошуку
              </li>
              <li>
                <strong>Семантичний пошук</strong> — коли юрист ставить запитання,
                система перетворює його на вектор і знаходить найближчі за смислом
                фрагменти з бази — навіть якщо слова не збігаються
              </li>
              <li>
                <strong>Генерація відповіді</strong> — знайдені фрагменти
                подаються мовній моделі, яка формує чітку, структуровану відповідь
                із посиланнями на конкретні документи
              </li>
            </ul>

            <blockquote>
              <p>
                Уявіть: замість 45 хвилин пошуку по папках Ви ставите запитання —
                «які аргументи ми використовували у справах про порушення NDA з
                контрагентами з ЄС?» — і за 10 секунд отримуєте відповідь із
                посиланнями на три конкретні меморандуми.
              </p>
            </blockquote>

            <h2>Практичні сценарії для юридичної фірми</h2>

            <p>
              RAG-система в юридичному контексті — це не абстрактна технологія.
              Ось конкретні задачі, які вона вирішує щодня:
            </p>

            <p>
              <strong>Для юристів та адвокатів:</strong>
            </p>
            <ul>
              <li>Пошук прецедентів через природні запитання замість ручного перегляду баз даних</li>
              <li>Підготовка правових висновків із автоматичним цитуванням джерел</li>
              <li>Складання процесуальних документів на основі найкращих практик фірми</li>
            </ul>

            <p>
              <strong>Для параюристів та аналітиків:</strong>
            </p>
            <ul>
              <li>Перевірка контрактів та порівняння положень із базовими шаблонами</li>
              <li>Автоматизація due diligence у процесах M&A та літигації</li>
              <li>Резюмування справ та нормативних документів</li>
            </ul>

            <p>
              <strong>Для менеджменту та IT:</strong>
            </p>
            <ul>
              <li>Семантичний пошук по внутрішній базі знань замість keyword-пошуку</li>
              <li>Моніторинг регуляторних змін і автоматичне сповіщення про релевантні оновлення</li>
              <li>Інтелектуальний чатбот для первинного прийому та онбордингу клієнтів</li>
            </ul>

            <h2>Конфіденційність і безпека: головне питання</h2>

            <p>
              Будь-яка юридична фірма, яка розглядає AI-інструменти, одразу запитує:
              «А що з конфіденційністю наших документів?» Це правильне питання —
              і RAG-архітектура дає на нього чітку відповідь.
            </p>

            <p>
              На відміну від класичних AI-моделей, де Ваші дані можуть використовуватися
              для навчання, <strong>RAG-система працює з локальною або ізольованою базою</strong>.
              Ваші документи не надсилаються на зовнішні сервери для перенавчання моделі —
              вони зберігаються у векторній базі під Вашим контролем.
            </p>

            <p>
              Ключові вимоги до безпечного RAG-рішення:
            </p>

            <ul>
              <li><strong>Шифрування даних</strong> — як при передачі, так і при зберіганні (at rest та in transit)</li>
              <li><strong>Рольовий доступ</strong> — різні юристи бачать лише ті документи, до яких мають право доступу</li>
              <li><strong>Ізоляція даних</strong> — матеріали клієнта A не потрапляють у відповіді щодо клієнта B</li>
              <li><strong>Відповідність стандартам</strong> — GDPR, ISO 27001, SOC 2 — мінімальний набір для юридичного сектору</li>
              <li><strong>Аудит-логи</strong> — повна історія запитів і відповідей для контролю та відповідальності</li>
            </ul>

            <p>
              Як зазначають експерти, <strong>43% юристів</strong> називають точність AI-відповідей
              головним побоюванням, а <strong>37%</strong> — безпеку даних. RAG-архітектура
              адресує обидва ці ризики: точність забезпечується прив&apos;язкою до реальних документів,
              а безпека — ізоляцією та контролем доступу.
            </p>

            <h2>RAG-пошук у JustCRM: як це працює на практиці</h2>

            <p>
              У JustCRM ми інтегрували RAG-технологію безпосередньо у CRM-систему.
              Це означає, що Ваша база знань — це не окремий інструмент, а частина
              робочого середовища, де Ви вже ведете справи, контакти та документи.
            </p>

            <p>
              Як це виглядає:
            </p>

            <ul>
              <li>
                <strong>Автоматична індексація</strong> — кожен документ, завантажений у справу,
                автоматично розбивається на фрагменти, перетворюється на вектори та стає
                доступним для пошуку
              </li>
              <li>
                <strong>Контекстний AI-помічник</strong> — запитуйте прямо в картці справи:
                «Які умови розірвання в цьому договорі?» або «Знайди подібні справи
                за останні два роки» — і отримуйте відповідь з посиланнями на конкретні
                документи та сторінки
              </li>
              <li>
                <strong>Кросс-справний пошук</strong> — шукайте не лише в поточній справі,
                а по всій базі знань фірми, з урахуванням прав доступу
              </li>
              <li>
                <strong>Повна конфіденційність</strong> — дані не виходять за межі
                ізольованого середовища, кожен запит логується для аудиту
              </li>
            </ul>

            <p>
              RAG-пошук у JustCRM — це не майбутнє. Це інструмент, який дозволяє
              Вашій фірмі перетворити роки накопичених документів на конкурентну перевагу —
              вже сьогодні.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі досліджень{" "}
                <a href="https://jolt.law.harvard.edu/digest/retrieval-augmented-generation-rag-towards-a-promising-llm-architecture-for-legal-work" target="_blank" rel="noopener noreferrer">Harvard Journal of Law &amp; Technology</a>,{" "}
                <a href="https://www.datategy.net/2025/04/14/how-law-firms-use-rag-to-boost-legal-research/" target="_blank" rel="noopener noreferrer">Datategy</a>,{" "}
                <a href="https://lafleur.marketing/blog/why-should-lawyers-care-about-retrieval-augmented-generation-rag/" target="_blank" rel="noopener noreferrer">LaFleur Marketing</a>{" "}
                та{" "}
                <a href="https://nstarxinc.com/blog/the-next-frontier-of-rag-how-enterprise-knowledge-systems-will-evolve-2026-2030/" target="_blank" rel="noopener noreferrer">NStarX</a>.
              </em>
            </p>
          </div>
        </article>

        <RelatedPosts currentSlug="rag-knowledge-base" />

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові перетворити документи на базу знань?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM з RAG-пошуком — і знаходьте відповіді за секунди, а не години.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
              <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
