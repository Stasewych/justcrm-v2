import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { blogPostGraph } from "@/app/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Скільки часу юрист втрачає на білінг",
  description: "До 10 годин на місяць кожен юрист витрачає на ручний білінг. У фірмі з 15 осіб це €90 000 на рік на адміністрування.",
  path: "/blog/billing-eats-lawyer-time",
  type: "article",
  publishedTime: "2026-05-10",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostGraph("billing-eats-lawyer-time")} />
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
                Білінг
              </span>
              <span className="font-mono text-[11px] text-black/30">10 травня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 6 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Білінг з&apos;їдає робочий час: як автоматизація обліку повертає юристам 240 годин на рік
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Юрист у середній фірмі витрачає понад 10 годин щомісяця на ручний облік часу,
              формування рахунків та звірку оплат. Для 15 осіб це еквівалент &euro;90 000 на рік
              втраченої продуктивності. Розбираємо, як автоматизація білінгу повертає ці години.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-billing.jpg`}
              alt="Автоматизація білінгу в юридичній CRM"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Скільки коштує ручний білінг: цифри, які лякають</h2>

            <p>
              За даними <strong>Clio&apos;s Legal Trends Report</strong>, юристи виставляють рахунки
              лише за <strong>31% робочого часу</strong>. Одна з головних причин — сам процес обліку
              забирає стільки зусиль, що частина виконаної роботи просто не фіксується.
            </p>

            <p>
              Середній юрист витрачає <strong>10-12 годин щомісяця</strong> на адміністрування білінгу:
              ручне заповнення таймшитів, створення інвойсів у Word або Excel, відстеження оплат,
              нагадування клієнтам про прострочені рахунки. Для фірми з 15 юристів це
              <strong> 150-180 годин на місяць</strong> — або майже одна повна ставка, яка йде
              виключно на паперову роботу.
            </p>

            <p>
              Якщо перевести у гроші за середньою ставкою &euro;50/год, фірма з 15 осіб
              втрачає <strong>до &euro;90 000 на рік</strong> лише на ручний білінг. І це без
              урахування упущених годин, які юрист забув зафіксувати.
            </p>

            <blockquote>
              <p>
                Дослідження показують, що <strong>до 30% білінгових годин втрачаються</strong> через
                затримку у фіксації — юрист заповнює таймшит наприкінці тижня і просто
                не пам&apos;ятає частину виконаних завдань. Для фірми з 15 юристів це ще
                &euro;40 000-60 000 на рік недоотриманого доходу.
              </p>
            </blockquote>

            <h2>Таймер проти календарного обліку: два підходи</h2>

            <p>
              Існує два основних методи фіксації часу, і кожен має свої переваги:
            </p>

            <ul>
              <li><strong>Таймер у реальному часі</strong> — юрист запускає таймер на початку завдання та зупиняє після завершення. Точність максимальна, але потрібна дисципліна: забув натиснути &quot;стоп&quot; — і 15-хвилинне завдання перетворюється на 3-годинне</li>
              <li><strong>Календарний метод</strong> — система аналізує події з календаря (зустрічі, дзвінки, консультації) та автоматично пропонує записи для таймшиту. Менш точний для тихої роботи, але ідеальний для юристів, які проводять багато зустрічей</li>
              <li><strong>Гібридний підхід</strong> — таймер для індивідуальної роботи плюс автоматичний імпорт з календаря для зустрічей. Саме такий підхід використовує більшість сучасних юридичних CRM</li>
            </ul>

            <p>
              <strong>Ключовий принцип</strong> — облік має відбуватися в момент виконання роботи,
              а не наприкінці дня. Кожна хвилина затримки між завданням і записом знижує
              точність і збільшує кількість &quot;забутих&quot; годин.
            </p>

            <h2>Автоматичне формування рахунків: від таймшиту до оплати</h2>

            <p>
              Ручне створення інвойсу — це 20-40 хвилин роботи: зібрати записи, згрупувати
              за типом, розрахувати суму з урахуванням індивідуальних ставок, оформити документ,
              надіслати клієнту. В автоматизованій системі цей процес займає <strong>2-3 хвилини</strong>.
            </p>

            <p>
              Що дає автоматизація формування рахунків:
            </p>

            <ul>
              <li><strong>Автоматичне групування</strong> — система збирає всі таймшити за обраний період, групує за справами та типами робіт</li>
              <li><strong>Індивідуальні ставки</strong> — кожен юрист може мати свою ставку, і система автоматично розраховує вартість на основі зафіксованого часу</li>
              <li><strong>Мультивалютність</strong> — для фірм із міжнародними клієнтами рахунки формуються у валюті клієнта з автоматичним перерахунком</li>
              <li><strong>Шаблони документів</strong> — інвойс генерується у фірмовому стилі з усіма реквізитами, готовий до відправки</li>
              <li><strong>Трекінг оплат</strong> — система відстежує статус кожного рахунку та нагадує про прострочені платежі</li>
            </ul>

            <p>
              Окрема перевага — <strong>прозорість для клієнта</strong>. Коли рахунок містить
              детальну розбивку кожного завдання з часом та описом, клієнту легше зрозуміти,
              за що він платить. Це зменшує кількість суперечок та прискорює оплату.
            </p>

            <h2>Аналітика білінгу: бачити, куди йде час</h2>

            <p>
              Автоматизований облік дає побічний, але надзвичайно цінний ефект — <strong>дані
              для прийняття рішень</strong>. Коли весь час фіксується коректно, керівник фірми
              бачить реальну картину:
            </p>

            <ul>
              <li><strong>Рентабельність справ</strong> — які категорії справ приносять найбільший дохід за годину, а які з&apos;їдають час без адекватної оплати</li>
              <li><strong>Навантаження на команду</strong> — хто перевантажений, хто має вільну ємність, де потрібно перерозподілити справи</li>
              <li><strong>Точність оцінок</strong> — чи збігаються початкові оцінки часу на справу з фактичними витратами</li>
              <li><strong>Тренди оплат</strong> — середній час від виставлення рахунку до оплати, відсоток простроченої дебіторської заборгованості</li>
            </ul>

            <p>
              Без автоматизації ці дані просто не існують або настільки неточні, що на них
              неможливо спиратися при прийнятті рішень.
            </p>

            <h2>Як JustCRM автоматизує білінг для юридичних фірм</h2>

            <p>
              JustCRM поєднує облік часу, білінг та CRM в одній системі. Юрист працює
              у картці справи — запускає таймер, фіксує завдання, додає нотатки — і всі
              записи автоматично потрапляють до таймшиту.
            </p>

            <p>
              Основні можливості білінгу в JustCRM:
            </p>

            <ul>
              <li><strong>Таймер в один клік</strong> — прямо у картці справи, без переходу в окрему систему</li>
              <li><strong>Індивідуальні ставки</strong> — окрема ставка для кожного юриста, автоматичний розрахунок вартості</li>
              <li><strong>Мультивалютні рахунки</strong> — підтримка гривні, євро, долара та інших валют</li>
              <li><strong>Генерація інвойсів</strong> — з таймшиту у готовий рахунок за кілька кліків</li>
              <li><strong>Контроль оплат</strong> — статуси рахунків, нагадування, дебіторська заборгованість</li>
            </ul>

            <p>
              Результат — юристи повертають <strong>до 240 годин на рік</strong>, які раніше
              витрачались на адміністрування білінгу, а фірма отримує точніші дані та
              швидші оплати від клієнтів.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі досліджень{" "}
                <a href="https://www.clio.com/resources/legal-trends/" target="_blank" rel="noopener noreferrer">Clio Legal Trends Report</a>,{" "}
                <a href="https://www.americanbar.org/groups/law_practice/publications/techreport/" target="_blank" rel="noopener noreferrer">ABA TechReport</a>{" "}
                та{" "}
                <a href="https://www.thomsonreuters.com/en/artificial-intelligence" target="_blank" rel="noopener noreferrer">Thomson Reuters AI Report</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові автоматизувати білінг у Вашій фірмі?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM — облік часу, інвойси та аналітика в одній системі для юристів.
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
