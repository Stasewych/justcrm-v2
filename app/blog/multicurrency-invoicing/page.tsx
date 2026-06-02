import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { blogPostGraph } from "@/app/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Мультивалютні рахунки для юрфірми",
  description: "Гривня, євро, долар — рахунки формуються у валюті клієнта з індивідуальною ставкою для кожного юриста.",
  path: "/blog/multicurrency-invoicing",
  type: "article",
  publishedTime: "2026-04-05",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostGraph("multicurrency-invoicing")} />
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
              <span className="font-mono text-[11px] text-black/30">5 квітня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 5 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Мультивалютний білінг: як українські юрфірми працюють з міжнародними клієнтами
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Коли Ваші клієнти — в Лондоні, Берліні та Дубаї, рахунок у гривнях створює
              тертя. Мультивалютний білінг усуває це тертя і скорочує терміни оплати
              в середньому на 40%. Розбираємось, як це працює на практиці.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-multicurrency.jpg`}
              alt="Мультивалютний білінг для юридичних фірм"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Проблема: міжнародні клієнти, локальна валюта</h2>

            <p>
              Українські юридичні фірми дедалі частіше працюють із закордонними клієнтами —
              міжнародні арбітражі, супровід M&amp;A угод, захист інтелектуальної власності
              у різних юрисдикціях. За статистикою, понад <strong>35% юрфірм</strong> у великих
              містах України вже мають хоча б одного іноземного клієнта.
            </p>

            <p>
              І тут виникає фундаментальна проблема: Ви працюєте у гривні, а клієнт
              звик отримувати рахунки у доларах, євро або фунтах. Рахунок у незнайомій
              валюті — це додатковий крок для клієнта: порахувати курс, зрозуміти суму,
              погодити оплату. Кожен такий крок збільшує час оплати.
            </p>

            <h2>Чому курс — це не просто цифра</h2>

            <p>
              Валютні коливання можуть суттєво впливати на Ваш дохід. Уявіть: Ви
              виставили рахунок на $5 000, коли курс був 41,2 грн/$. Клієнт оплатив
              через 14 днів, коли курс змінився до 40,5 грн/$. Різниця —
              <strong> 3 500 грн</strong>, які Ви фактично втратили.
            </p>

            <p>
              Для фірми з 10-15 міжнародних клієнтів такі втрати за рік можуть сягати
              <strong> десятків тисяч гривень</strong>. І це без урахування часу, який бухгалтер
              витрачає на ручний перерахунок кожного рахунку.
            </p>

            <blockquote>
              <p>
                За даними дослідження Actionstep, юридичні фірми, які перейшли на
                мультивалютний білінг, скоротили середній термін оплати рахунків
                на 35-40% — просто тому, що клієнт бачить звичну для себе суму.
              </p>
            </blockquote>

            <h2>Індивідуальні ставки: кожен юрист — свій тариф</h2>

            <p>
              У міжнародній практиці стандарт — коли кожен юрист має індивідуальну
              погодинну ставку, і ця ставка може відрізнятися для різних клієнтів.
              Старший партнер працює за $300/год для клієнта з Лондона і за €250/год
              для клієнта з Берліна. Молодший юрист — відповідно $150 і €120.
            </p>

            <p>
              Коли Ви ведете облік вручну або в Excel, це перетворюється на кошмар:
            </p>

            <ul>
              <li>Треба підтримувати окремі таблиці ставок для кожного клієнта</li>
              <li>При виставленні рахунку — вручну перевіряти, яка ставка для якого юриста</li>
              <li>Курсові різниці доводиться рахувати окремо</li>
              <li>Ризик помилки зростає з кожним новим міжнародним клієнтом</li>
            </ul>

            <p>
              У спеціалізованій CRM-системі це вирішується інакше: Ви один раз
              налаштовуєте ставку юриста у валюті клієнта, і система автоматично
              підставляє правильну суму при обліку часу та формуванні рахунку.
            </p>

            <h2>Шаблони рахунків: професійний вигляд у будь-якій валюті</h2>

            <p>
              Рахунок — це не просто документ для оплати. Це точка контакту з клієнтом,
              яка формує враження про Вашу фірму. Міжнародний клієнт очікує побачити:
            </p>

            <ul>
              <li><strong>Валюту та суму</strong> — у звичному для нього форматі ($1,250.00, а не 1 250,00 дол.)</li>
              <li><strong>Деталізацію</strong> — хто працював, скільки годин, за якою ставкою</li>
              <li><strong>Податкову інформацію</strong> — VAT, GST чи інші податки відповідно до юрисдикції клієнта</li>
              <li><strong>Реквізити для оплати</strong> — банківські дані у валюті рахунку</li>
              <li><strong>Мову документа</strong> — англійська для міжнародних клієнтів</li>
            </ul>

            <p>
              Створювати такий рахунок вручну щоразу — це мінімум 30-40 хвилин роботи.
              При 20 міжнародних рахунках на місяць — це <strong>10-13 годин</strong> чистого
              адміністрування, яке не приносить жодного доходу.
            </p>

            <h2>Як мультивалютний білінг працює на практиці</h2>

            <p>
              Сучасні системи білінгу для юридичних фірм автоматизують увесь ланцюжок:
            </p>

            <ul>
              <li><strong>Облік часу у валюті клієнта</strong> — юрист запускає таймер, система автоматично рахує вартість за ставкою, погодженою з конкретним клієнтом</li>
              <li><strong>Актуальний курс</strong> — при формуванні рахунку система підтягує курс на дату виставлення або фіксує курс, узгоджений з клієнтом</li>
              <li><strong>Автоматична конвертація</strong> — платіж у доларах автоматично відображається у гривневому обліку за курсом НБУ на дату отримання</li>
              <li><strong>Курсові різниці</strong> — система автоматично розраховує та відображає прибуток або збиток від коливань курсу</li>
              <li><strong>Звітність</strong> — фінансові звіти доступні як у валюті клієнта, так і в базовій валюті фірми</li>
            </ul>

            <p>
              Результат: бухгалтер замість ручного перерахунку контролює процес,
              а юристи зосереджуються на юридичній роботі.
            </p>

            <h2>Комплаєнс і податки: не забувайте про юрисдикції</h2>

            <p>
              Працюючи з міжнародними клієнтами, Ви стикаєтесь із різними
              податковими вимогами. ПДВ в Україні, VAT у Великій Британії,
              GST в Австралії — кожна юрисдикція має свої правила.
            </p>

            <p>
              Автоматизована система білінгу розраховує податки відповідно до
              юрисдикції клієнта та формує документи, які відповідають локальним
              вимогам. Це особливо важливо для фірм, які працюють із клієнтами
              з <strong>ЄС</strong>, де правила виставлення рахунків чітко регламентовані
              директивами.
            </p>

            <h2>Як це реалізовано в JustCRM</h2>

            <p>
              JustCRM підтримує мультивалютний білінг на рівні архітектури системи:
            </p>

            <ul>
              <li><strong>Будь-яка валюта</strong> — USD, EUR, GBP, PLN, CHF та інші. Валюта прив&apos;язується до клієнта і автоматично застосовується до всіх його справ</li>
              <li><strong>Індивідуальні ставки</strong> — для кожного юриста можна задати ставку в будь-якій валюті, з можливістю перевизначення для конкретного клієнта</li>
              <li><strong>Шаблони рахунків</strong> — професійні інвойси з правильним форматуванням валюти, деталізацією та реквізитами</li>
              <li><strong>Інтегрований таймер</strong> — облік часу автоматично конвертується у вартість за ставкою відповідної валюти</li>
              <li><strong>Звітність</strong> — фінансова аналітика у базовій валюті фірми з деталізацією по кожному клієнту та валюті</li>
            </ul>

            <p>
              Усе це працює разом із іншими модулями JustCRM — управлінням справами,
              контактами, документами та AI-помічником, який допомагає готувати
              документи мовою клієнта.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі матеріалів{" "}
                <a href="https://www.accuratelegalbilling.com/blog/streamlining-legal-billing-empowering-large-law-firms-and-international-law-firms" target="_blank" rel="noopener noreferrer">Accurate Legal Billing</a>,{" "}
                <a href="https://lawsyst.co.uk/multi-currency-billing-for-lawyers/" target="_blank" rel="noopener noreferrer">Lawsyst</a>{" "}
                та{" "}
                <a href="https://invoiceoffice.com/multi-currencies/" target="_blank" rel="noopener noreferrer">Invoice Office</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові працювати з міжнародними клієнтами ефективніше?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              JustCRM — мультивалютний білінг, облік часу та AI для юристів в одній системі.
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
