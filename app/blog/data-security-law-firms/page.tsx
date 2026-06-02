import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { blogPostGraph } from "@/app/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Безпека даних юридичної фірми",
  description: "Шифрування, ізоляція даних, 2FA та мережева архітектура — що має бути під капотом CRM для юридичної фірми.",
  path: "/blog/data-security-law-firms",
  type: "article",
  publishedTime: "2026-05-03",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostGraph("data-security-law-firms")} />
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
                Безпека
              </span>
              <span className="font-mono text-[11px] text-black/30">3 травня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 7 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Адвокатська таємниця в хмарі: як юридичні CRM захищають конфіденційні дані
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Адвокатська таємниця — не просто етичний обов&apos;язок, а юридична вимога.
              Перехід у хмару лякає багатьох юристів, але сучасні юридичні CRM забезпечують
              рівень захисту, який локальний сервер у більшості фірм просто не здатний надати.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-data.jpg`}
              alt="Захист конфіденційних даних у юридичній CRM"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Чому юристи бояться хмари — і чому даремно</h2>

            <p>
              За даними <strong>ABA TechReport 2025</strong>, лише <strong>60% юридичних фірм</strong> у
              США використовують хмарні технології для зберігання клієнтських даних. Головна
              причина стримування — страх за конфіденційність. Юристи звикли до фізичного
              контролю: сервер у кабінеті, папки у сейфі, документи під замком.
            </p>

            <p>
              Проте статистика кібербезпеки малює іншу картину. За даними <strong>IBM Security</strong>,
              середня вартість витоку даних у юридичній сфері становить <strong>$4.7 мільйона</strong>.
              І більшість витоків відбувається саме з локальних систем — через застаріле
              програмне забезпечення, відсутність оновлень безпеки та людський фактор.
            </p>

            <p>
              Локальний сервер малої фірми з 10-20 юристів зазвичай обслуговується приходящим
              IT-спеціалістом раз на місяць. Патчі безпеки встановлюються із затримкою
              у тижні або місяці. Резервне копіювання або відсутнє, або не перевіряється.
              У хмарному сервісі всі ці процеси автоматизовані та відбуваються цілодобово.
            </p>

            <blockquote>
              <p>
                За рекомендаціями <strong>Національної асоціації адвокатів України</strong>, юрист
                зобов&apos;язаний вживати розумних заходів для захисту клієнтської інформації.
                Це не означає &quot;зберігати все на локальному диску&quot; — це означає обирати
                інструменти з доведеним рівнем захисту.
              </p>
            </blockquote>

            <h2>Шифрування: TLS, AES-256 та bcrypt</h2>

            <p>
              Сучасні юридичні CRM використовують <strong>багаторівневе шифрування</strong>,
              яке захищає дані на кожному етапі — від введення до зберігання.
            </p>

            <ul>
              <li><strong>TLS 1.3 для передачі даних</strong> — весь трафік між браузером юриста та сервером шифрується. Навіть якщо зловмисник перехопить пакети, він отримає лише набір випадкових байтів</li>
              <li><strong>AES-256 для зберігання</strong> — документи, нотатки та файли справ зашифровані на диску. AES-256 — це той самий стандарт, який використовують банки та урядові установи</li>
              <li><strong>bcrypt для паролів</strong> — паролі користувачів хешуються алгоритмом bcrypt з індивідуальною &quot;сіллю&quot;. Навіть у разі витоку бази даних відновити оригінальний пароль практично неможливо</li>
              <li><strong>Шифрування резервних копій</strong> — бекапи зберігаються у зашифрованому вигляді в географічно розподілених дата-центрах</li>
            </ul>

            <p>
              Для порівняння: типовий локальний сервер юридичної фірми часто зберігає
              документи у звичайних папках Windows без будь-якого шифрування. Один
              вкрадений ноутбук чи зламаний пароль — і вся інформація клієнтів
              стає доступною.
            </p>

            <h2>Ізоляція даних та контроль доступу</h2>

            <p>
              Хмарна CRM для юристів — це не спільна база даних, де всі бачать все.
              Кожна організація існує у <strong>повністю ізольованому середовищі</strong>.
            </p>

            <ul>
              <li><strong>Ізоляція між організаціями</strong> — дані фірми &quot;А&quot; фізично або логічно відокремлені від даних фірми &quot;Б&quot;. Жодний запит не може перетнути цю межу</li>
              <li><strong>Двофакторна автентифікація (2FA)</strong> — навіть якщо пароль скомпрометований, зловмисник не увійде без другого фактора — коду з SMS, застосунку або апаратного ключа</li>
              <li><strong>RBAC — рольовий контроль доступу</strong> — кожен юрист бачить лише ті справи та документи, до яких має доступ. Стажист не побачить конфіденційну справу партнера, навіть працюючи у тій самій системі</li>
              <li><strong>Журнал аудиту</strong> — кожна дія записується: хто, коли, що переглянув або змінив. Це критично для доведення належного захисту інформації у разі перевірки</li>
            </ul>

            <p>
              <strong>Мережева ізоляція</strong> додає ще один рівень захисту. Бази даних
              розміщені у приватних підмережах, недоступних напряму з інтернету.
              Доступ можливий лише через API-шлюз із автентифікацією та rate-limiting,
              що унеможливлює атаки прямого підбору.
            </p>

            <h2>Чому хмара може бути безпечнішою за локальний сервер</h2>

            <p>
              Це контрінтуїтивно, але для більшості юридичних фірм хмарне рішення
              забезпечує <strong>вищий рівень безпеки</strong>, ніж власний сервер. Ось чому:
            </p>

            <ul>
              <li><strong>Автоматичні оновлення безпеки</strong> — вразливості закриваються протягом годин, а не місяців. Локальний сервер часто працює на застарілому ПЗ з відомими вразливостями</li>
              <li><strong>Цілодобовий моніторинг</strong> — хмарний провайдер має команду безпеки, яка працює 24/7. Малій фірмі такий штат просто не по кишені</li>
              <li><strong>Захист від фізичних загроз</strong> — дата-центри мають резервне живлення, системи пожежогасіння та фізичну охорону. Сервер у кабінеті вразливий до відключення електрики, затоплення або крадіжки</li>
              <li><strong>Географічна надлишковість</strong> — дані зберігаються у кількох дата-центрах одночасно. Навіть якщо один центр виходить з ладу, дані залишаються доступними</li>
              <li><strong>Тестування на проникнення</strong> — відповідальні провайдери регулярно замовляють незалежний аудит безпеки та пентести, щоб виявити вразливості до того, як їх знайдуть зловмисники</li>
            </ul>

            <blockquote>
              <p>
                За даними <strong>Verizon Data Breach Investigations Report</strong>,
                <strong> 74% усіх витоків</strong> включають людський фактор — фішинг, слабкі
                паролі, помилки конфігурації. Хмарна CRM з 2FA та RBAC нейтралізує
                більшість цих ризиків автоматично.
              </p>
            </blockquote>

            <h2>Як JustCRM захищає дані Вашої фірми</h2>

            <p>
              JustCRM побудована з нуля з урахуванням вимог адвокатської таємниці
              та найкращих практик кібербезпеки.
            </p>

            <ul>
              <li><strong>TLS 1.3</strong> для шифрування всіх з&apos;єднань між клієнтом та сервером</li>
              <li><strong>bcrypt</strong> для хешування паролів з індивідуальною сіллю</li>
              <li><strong>Повна ізоляція організацій</strong> — дані кожної фірми зберігаються окремо, без можливості перехресного доступу</li>
              <li><strong>Двофакторна автентифікація</strong> — доступна для всіх користувачів, обов&apos;язкова для адміністраторів</li>
              <li><strong>Рольовий контроль доступу</strong> — гнучка система ролей: адміністратор, партнер, юрист, стажист, клієнт — кожен бачить лише те, що дозволено</li>
              <li><strong>Журнал аудиту</strong> — повний запис усіх дій для комплаєнсу та внутрішніх перевірок</li>
            </ul>

            <p>
              Ваші клієнтські дані захищені на рівні, який відповідає міжнародним
              стандартам безпеки — і при цьому Ви отримуєте зручність хмарного доступу
              з будь-якого пристрою.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі матеріалів{" "}
                <a href="https://www.americanbar.org/groups/law_practice/publications/techreport/" target="_blank" rel="noopener noreferrer">ABA TechReport</a>,{" "}
                <a href="https://www.ibm.com/reports/data-breach" target="_blank" rel="noopener noreferrer">IBM Cost of a Data Breach Report</a>{" "}
                та{" "}
                <a href="https://www.verizon.com/business/resources/reports/dbir/" target="_blank" rel="noopener noreferrer">Verizon DBIR</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові перейти на безпечну хмарну CRM?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM — захист на рівні банків, зручність хмарного доступу.
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
