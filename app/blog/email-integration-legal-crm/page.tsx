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
  title: "Інтеграція пошти з юридичною CRM",
  description: "Вхідний лист автоматично потрапляє до відповідної справи — без ручного сортування по папках.",
  path: "/blog/email-integration-legal-crm",
  type: "article",
  publishedTime: "2026-03-12",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostGraph("email-integration-legal-crm")} />
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
                Інтеграції
              </span>
              <span className="font-mono text-[11px] text-black/30">12 березня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 5 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Пошта в контексті справи: як інтеграція Gmail і Outlook з CRM економить час юриста
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Юристи витрачають до 30% робочого часу на пошук листів, пересилання вкладень
              і ручне копіювання інформації між поштою та системою обліку справ. Інтеграція
              електронної пошти з CRM усуває цей хаос — і повертає години продуктивної роботи.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-email.jpg`}
              alt="Інтеграція електронної пошти з юридичною CRM"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <TldrBox points={BLOG_TLDR["email-integration-legal-crm"]} />

            <h2>Хаос електронної пошти у юридичних фірмах</h2>

            <p>
              Електронна пошта залишається основним каналом комунікації для юридичних фірм —
              до <strong>90% ділового листування</strong> проходить саме через неї. Листи від клієнтів,
              протоколи судових засідань, узгодження договорів, запити від колег — усе це
              потрапляє в один потік, де справи змішуються з рекламою та внутрішніми повідомленнями.
            </p>

            <p>
              Типові наслідки для юриста без автоматизації:
            </p>

            <ul>
              <li><strong>Пошук листа</strong> — Ви витрачаєте 5-10 хвилин, щоб знайти потрібний лист серед сотень повідомлень, не пам&apos;ятаючи точну тему чи дату</li>
              <li><strong>Дублювання інформації</strong> — копіювання тексту листа до нотатки у справі, збереження вкладення окремо, ручне оновлення статусу</li>
              <li><strong>Втрачені листи</strong> — лист від клієнта потрапив до папки «Спам» або загубився між десятками непрочитаних повідомлень</li>
              <li><strong>Відсутність контексту</strong> — новий колега бере справу і не бачить історії листування, бо воно у чужій поштовій скриньці</li>
            </ul>

            <p>
              За даними досліджень, юристи витрачають у середньому <strong>2,5 години на день</strong> лише
              на роботу з електронною поштою. Значна частина цього часу — не читання по суті,
              а сортування, пошук і ручне перенесення інформації.
            </p>

            <h2>Чому контекст має значення</h2>

            <p>
              Справжня проблема — не у кількості листів, а у тому, що вони існують
              <strong> окремо від справи</strong>. Коли Ви відкриваєте картку справи у CRM, Ви очікуєте
              побачити повну картину: документи, задачі, строки, оплати. Але листування
              залишається у Gmail або Outlook — в іншому вікні, іншій системі, іншій логіці.
            </p>

            <p>
              Це створює «розрив контексту» — юрист змушений постійно перемикатися між
              інструментами, тримати в голові зв&apos;язки між листами і справами, і витрачати
              когнітивну енергію на те, що має робити система.
            </p>

            <blockquote>
              <p>
                Уявіть: клієнт надсилає лист з уточненнями до договору. Юрист читає його у Gmail,
                потім відкриває CRM, знаходить справу, створює нотатку, копіює текст, зберігає
                вкладення. Це п&apos;ять кроків замість нуля — якби лист автоматично прив&apos;язувався
                до справи.
              </p>
            </blockquote>

            <p>
              Ефективне управління поштою у юридичній фірмі — це не про «чистий інбокс».
              Це про побудову повного, пошукового, спільного запису по кожній справі, де
              листування є невід&apos;ємною частиною.
            </p>

            <h2>Як працює інтеграція пошти з CRM</h2>

            <p>
              Сучасні юридичні CRM пропонують два рівні інтеграції з електронною поштою:
            </p>

            <p>
              <strong>Рівень 1 — Ручне прив&apos;язування.</strong> Юрист отримує лист і натискає кнопку
              «Зберегти до справи» прямо у Gmail або Outlook. Лист з вкладеннями копіюється
              до відповідної картки справи у CRM. Це вже значно краще, ніж копіювання вручну,
              але потребує дисципліни.
            </p>

            <p>
              <strong>Рівень 2 — Автоматична синхронізація.</strong> CRM аналізує вхідні та вихідні листи
              за адресою відправника, доменом або ключовими словами і автоматично прив&apos;язує
              їх до правильної справи. Юрист не робить нічого — лист з&apos;являється у картці справи
              сам. Це підхід, який використовують PageLightPrime, Clio та Lawmatics.
            </p>

            <p>
              Що це дає на практиці:
            </p>

            <ul>
              <li><strong>Повна історія комунікації</strong> — уся переписка по справі доступна в одному місці, навіть якщо листувалися різні члени команди</li>
              <li><strong>Миттєвий пошук</strong> — замість копирсання у поштовій скриньці Ви шукаєте листи у контексті справи</li>
              <li><strong>Спільний доступ</strong> — колега, який підхоплює справу, бачить усю історію листування без прохання «перешли мені ту переписку»</li>
              <li><strong>Аудиторський слід</strong> — кожен лист зафіксований у хронології справи з точним часом і автором</li>
            </ul>

            <h2>Gmail vs Outlook: що обирають юридичні фірми</h2>

            <p>
              Обидва поштові сервіси домінують на ринку, але мають різні сильні сторони
              для юридичної практики:
            </p>

            <p>
              <strong>Microsoft Outlook (Microsoft 365)</strong> — традиційний вибір корпоративних
              юридичних фірм. Глибока інтеграція з екосистемою Microsoft (Word, SharePoint,
              Teams), розширені правила фільтрації, вбудоване шифрування для конфіденційної
              переписки. Більшість спеціалізованих юридичних рішень, як-от PageLightPrime,
              побудовані саме навколо Outlook.
            </p>

            <p>
              <strong>Gmail (Google Workspace)</strong> — популярний серед невеликих фірм і
              соло-практиків завдяки простоті, потужному пошуку та доступній ціні.
              Юридичні CRM, як-от NetHunt, вбудовуються прямо в інтерфейс Gmail,
              перетворюючи його на повноцінну систему управління справами.
            </p>

            <p>
              Ключове питання — не «який поштовий сервіс кращий», а «чи підтримує Ваша CRM
              обидва». Юридична фірма може працювати з Outlook, але клієнти надсилають листи
              з Gmail, Yahoo чи корпоративних серверів. CRM повинна прив&apos;язувати всю вхідну
              пошту незалежно від джерела.
            </p>

            <h2>Як JustCRM вирішує проблему пошти</h2>

            <p>
              JustCRM розроблений з розумінням того, що для українського юриста пошта — це
              не просто канал комунікації, а критична частина роботи по справі. Ось як ми
              підходимо до інтеграції:
            </p>

            <ul>
              <li><strong>Двостороння синхронізація</strong> — листи з Gmail та Outlook автоматично прив&apos;язуються до справ за адресою клієнта, і навпаки — Ви можете відправити лист клієнту прямо з картки справи</li>
              <li><strong>Контекст поруч</strong> — відкриваючи лист, Ви бачите картку справи, пов&apos;язані документи, останні задачі та строки — без перемикання між вкладками</li>
              <li><strong>Спільна скринька</strong> — уся команда бачить листування по справі, навіть якщо лист прийшов на особисту адресу конкретного юриста</li>
              <li><strong>Розумне сортування</strong> — система розпізнає, до якої справи належить лист, і пропонує прив&apos;язку автоматично</li>
              <li><strong>Вкладення у справі</strong> — файли з листів зберігаються у документах справи, а не губляться у папці «Завантаження»</li>
            </ul>

            <p>
              Результат: юрист відкриває справу і бачить <strong>повну картину</strong> — усі листи,
              документи, задачі та оплати в одному місці. Жодного перемикання між вкладками,
              жодного «перешли мені той лист».
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі матеріалів{" "}
                <a href="https://www.clio.com/blog/email-management-for-lawyers/" target="_blank" rel="noopener noreferrer">Clio</a>,{" "}
                <a href="https://www.pagelightprime.com/blogs/legal-email-management-software-law-firms-2026" target="_blank" rel="noopener noreferrer">PageLightPrime</a>,{" "}
                <a href="https://www.lawmatics.com/legal-crm" target="_blank" rel="noopener noreferrer">Lawmatics</a>{" "}
                та{" "}
                <a href="https://nethunt.com/blog/7-best-crm-for-law-firms-and-lawyers/" target="_blank" rel="noopener noreferrer">NetHunt</a>.
              </em>
            </p>
          </div>
        </article>

        <RelatedPosts currentSlug="email-integration-legal-crm" />

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові навести лад у поштовій скриньці?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM — пошта, справи та документи в одній системі.
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
