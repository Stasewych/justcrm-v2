import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import Button from "@/components/Button";
import Link from "next/link";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BlogPost() {
  return (
    <>
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
              <span className="font-mono text-[11px] text-black/30">18 квітня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 8 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Захист персональних даних у юридичній CRM: GDPR, адвокатська таємниця та шифрування
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Юридична фірма оперує найчутливішими даними клієнтів — від персональної
              інформації до деталей судових справ. Як обрати CRM, що відповідає вимогам
              GDPR, захищає адвокатську таємницю та гарантує шифрування на кожному рівні?
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-gdpr.jpg`}
              alt="Захист персональних даних у юридичній CRM"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Чому захист даних — критичне питання для юристів</h2>

            <p>
              Юридичні фірми обробляють одні з найцінніших категорій персональних даних:
              паспортні дані, фінансову інформацію, медичні довідки, деталі кримінальних
              проваджень. За статистикою <strong>American Bar Association</strong>, у 2025 році
              <strong> 29% юридичних фірм</strong> зіткнулися з інцидентами кібербезпеки — і це лише ті,
              хто про це повідомив.
            </p>

            <p>
              Для юриста витік даних — це не просто фінансові збитки. Це порушення
              адвокатської таємниці, втрата довіри клієнтів і потенційні дисциплінарні
              санкції. Середня вартість одного витоку даних у юридичній галузі
              становить <strong>$4,56 мільйона</strong> — і ця цифра зростає щороку.
            </p>

            <p>
              Якщо Ваша фірма досі зберігає справи в Google Sheets, обмінюється
              документами через месенджери або використовує CRM без шифрування —
              Ви наражаєте клієнтів і себе на серйозний ризик.
            </p>

            <h2>GDPR: що вимагає регламент від юридичних фірм</h2>

            <p>
              General Data Protection Regulation (GDPR) — це не лише європейський
              стандарт. З 2018 року він став де-факто глобальним орієнтиром для захисту
              персональних даних. Якщо Ваша фірма працює з клієнтами з ЄС або обробляє
              дані громадян Євросоюзу, GDPR застосовується безпосередньо.
            </p>

            <p>
              Ключові вимоги GDPR для юридичних фірм:
            </p>

            <ul>
              <li><strong>Правова основа обробки</strong> — кожна операція з персональними даними повинна мати легітимну мету: виконання договору, законний інтерес або явна згода клієнта</li>
              <li><strong>Мінімізація даних</strong> — збирайте та зберігайте лише ті дані, які дійсно необхідні для ведення справи</li>
              <li><strong>Право на видалення</strong> — клієнт має право вимагати повного видалення своїх персональних даних після завершення справи</li>
              <li><strong>Реєстр операцій обробки (ROPA)</strong> — Ви зобов&apos;язані документувати, які дані збираєте, де зберігаєте, хто має доступ і як довго</li>
              <li><strong>Повідомлення про витоки</strong> — у разі інциденту Ви маєте повідомити наглядовий орган протягом <strong>72 годин</strong></li>
            </ul>

            <p>
              Штрафи за порушення GDPR сягають <strong>4% річного обороту</strong> або
              <strong> 20 мільйонів євро</strong> — залежно від того, яка сума більша. Кумулятивні
              штрафи з моменту набуття чинності GDPR вже перевищили <strong>5,88 мільярда євро</strong>.
            </p>

            <blockquote>
              <p>
                У 2024 році регулятори ЄС наклали штрафів на суму 1,2 мільярда євро.
                Юридичні фірми — серед пріоритетних цілей перевірок, адже обробляють
                особливо чутливі категорії даних.
              </p>
            </blockquote>

            <h2>Адвокатська таємниця в цифрову епоху</h2>

            <p>
              Відповідно до статті 22 Закону України «Про адвокатуру та адвокатську
              діяльність», адвокатська таємниця охоплює будь-яку інформацію, що стала
              відома адвокату у зв&apos;язку з наданням правничої допомоги. Це не просто
              етичний обов&apos;язок — це законодавча вимога.
            </p>

            <p>
              Коли Ви переносите роботу в цифрове середовище, адвокатська таємниця
              має бути захищена на кожному рівні:
            </p>

            <ul>
              <li><strong>При передачі</strong> — дані між Вашим браузером і сервером повинні бути зашифровані (TLS/HTTPS)</li>
              <li><strong>При зберіганні</strong> — база даних і файли мають бути зашифровані алгоритмами AES-256</li>
              <li><strong>При доступі</strong> — кожен співробітник бачить лише ті справи, до яких має право доступу</li>
              <li><strong>При резервному копіюванні</strong> — бекапи мають бути зашифровані з тим самим рівнем захисту</li>
            </ul>

            <p>
              Правило ABA Model Rule 1.6 (Американська асоціація адвокатів) прямо
              вимагає від юристів «розумних зусиль для запобігання несанкціонованому
              розкриттю інформації». У цифровому контексті це означає: CRM без
              шифрування — це порушення професійних стандартів.
            </p>

            <h2>Шифрування та ізоляція: технічний мінімум для юридичної CRM</h2>

            <p>
              Не всі CRM-системи створені для роботи з конфіденційними даними.
              Ось технічні критерії, на які варто звернути увагу при виборі:
            </p>

            <ul>
              <li><strong>Шифрування при передачі (TLS 1.3)</strong> — сучасний протокол забезпечує захист даних під час обміну між клієнтом і сервером</li>
              <li><strong>Шифрування при зберіганні (AES-256)</strong> — «золотий стандарт», який використовують банки та урядові установи</li>
              <li><strong>Ізоляція даних клієнтів</strong> — дані кожної юридичної фірми мають зберігатися окремо, а не в спільній базі</li>
              <li><strong>Двофакторна автентифікація (2FA)</strong> — обов&apos;язковий додатковий рівень захисту при вході в систему</li>
              <li><strong>Рольова модель доступу</strong> — молодший юрист не повинен бачити фінансові звіти, а бухгалтер — деталі кримінальних справ</li>
              <li><strong>Журнал аудиту</strong> — кожна дія в системі (хто, коли, що змінив) має фіксуватися для GDPR-звітності</li>
            </ul>

            <blockquote>
              <p>
                72% юридичних фірм вже мають формальну політику безпеки даних.
                Але наявність політики без технічних засобів її впровадження —
                це лише декларація.
              </p>
            </blockquote>

            <h2>Як обрати безпечну CRM: чек-лист для юридичної фірми</h2>

            <p>
              Перш ніж обрати CRM-систему, перевірте її за цими критеріями:
            </p>

            <ul>
              <li><strong>Де розташовані сервери?</strong> — для GDPR-відповідності дані мають зберігатися в ЄС або в юрисдикції з адекватним рівнем захисту</li>
              <li><strong>Чи є шифрування end-to-end?</strong> — не лише при передачі, а й при зберіганні</li>
              <li><strong>Чи підтримується 2FA?</strong> — базова гігієна кібербезпеки</li>
              <li><strong>Чи є рольовий контроль доступу?</strong> — хто може бачити, редагувати та видаляти дані</li>
              <li><strong>Чи ведеться журнал аудиту?</strong> — обов&apos;язково для GDPR-звітності та внутрішніх перевірок</li>
              <li><strong>Чи є функція видалення даних?</strong> — для виконання права клієнта на забуття</li>
              <li><strong>Чи проводяться регулярні пентести?</strong> — незалежна перевірка безпеки системи</li>
              <li><strong>Чи є DPA (Data Processing Agreement)?</strong> — угода про обробку даних між Вами та постачальником CRM</li>
            </ul>

            <p>
              Якщо CRM-система не може позитивно відповісти на кожне з цих питань —
              це червоний прапорець.
            </p>

            <h2>Архітектура безпеки JustCRM</h2>

            <p>
              JustCRM розроблена з урахуванням специфіки юридичної практики, де
              конфіденційність — не опція, а фундамент. Ось як ми реалізуємо захист даних:
            </p>

            <ul>
              <li><strong>Шифрування AES-256</strong> — усі дані зашифровані як при передачі (TLS 1.3), так і при зберіганні</li>
              <li><strong>Ізоляція даних</strong> — кожна юридична фірма працює у власному ізольованому середовищі, дані не перетинаються</li>
              <li><strong>Рольова модель доступу</strong> — налаштовуйте рівні доступу для партнерів, юристів, помічників і адміністративного персоналу</li>
              <li><strong>Двофакторна автентифікація</strong> — 2FA увімкнена для всіх облікових записів</li>
              <li><strong>Журнал аудиту</strong> — повна історія дій: хто переглядав справу, хто змінив документ, хто експортував дані</li>
              <li><strong>Серверна інфраструктура в ЄС</strong> — дані зберігаються на серверах у Європейському Союзі</li>
              <li><strong>AI з контролем доступу</strong> — AI-помічник JustCRM працює виключно в межах даних Вашої фірми та не передає інформацію стороннім сервісам</li>
            </ul>

            <p>
              Ми не просто відповідаємо вимогам GDPR — ми будуємо систему, де
              адвокатська таємниця захищена за замовчуванням, на рівні архітектури.
            </p>

            <h2>П&apos;ять кроків для посилення захисту даних у Вашій фірмі</h2>

            <p>
              Незалежно від того, яку CRM Ви використовуєте, ці кроки допоможуть
              підвищити рівень захисту:
            </p>

            <ul>
              <li><strong>Проведіть аудит даних</strong> — визначте, які персональні дані Ви збираєте, де вони зберігаються та хто має до них доступ</li>
              <li><strong>Створіть реєстр операцій обробки (ROPA)</strong> — це вимога GDPR, але водночас і основа ефективного управління даними</li>
              <li><strong>Увімкніть 2FA для всіх систем</strong> — не лише для CRM, а й для електронної пошти, хмарних сховищ і месенджерів</li>
              <li><strong>Навчіть команду</strong> — 85% витоків даних відбуваються через людський фактор: фішинг, слабкі паролі, необережне пересилання</li>
              <li><strong>Перейдіть на спеціалізовану юридичну CRM</strong> — загальні CRM (Salesforce, HubSpot) не враховують специфіку адвокатської таємниці та юридичних процесів</li>
            </ul>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі матеріалів{" "}
                <a href="https://secureprivacy.ai/blog/gdpr-compliance-2026" target="_blank" rel="noopener noreferrer">Secure Privacy</a>,{" "}
                <a href="https://www.clio.com/blog/data-security-law-firms/" target="_blank" rel="noopener noreferrer">Clio</a>,{" "}
                <a href="https://www.americanbar.org/groups/business_law/resources/business-law-today/2026-january/privacy-security-law-business-lawyers/" target="_blank" rel="noopener noreferrer">American Bar Association</a>{" "}
                та{" "}
                <a href="https://richtfirm.com/the-2026-privacy-law-and-compliance-state-of-play-navigating-an-increasingly-complex-regulatory-landscape/" target="_blank" rel="noopener noreferrer">Richt Law Firm</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Захистіть дані Ваших клієнтів
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              JustCRM — юридична CRM із шифруванням AES-256, ізоляцією даних та GDPR-відповідністю.
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