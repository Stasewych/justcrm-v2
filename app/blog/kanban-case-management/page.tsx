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
                Управління практикою
              </span>
              <span className="font-mono text-[11px] text-black/30">12 квітня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 5 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Kanban-дошка для юриста: як візуалізація справ підвищує контроль і продуктивність
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Списки у блокноті, Excel-таблиці, стікери на моніторі — знайомо? Коли справ стає
              більше десяти, класичні методи обліку перестають працювати. Kanban-дошка дає
              юристу те, чого не може жоден список: миттєвий візуальний контроль над кожною
              справою на кожному етапі.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-kanban.jpg`}
              alt="Kanban-дошка для управління юридичними справами"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Чому списки та таблиці підводять юриста</h2>

            <p>
              Більшість юридичних фірм починають із простого: Excel-файл або Google Sheet,
              де кожен рядок — це справа, а колонки — статус, дедлайн, відповідальний. На перших
              п&apos;яти справах це працює. На двадцятій — починаються проблеми.
            </p>

            <ul>
              <li><strong>Відсутність контексту</strong> — рядок у таблиці не показує, на якому етапі справа застрягла і чому</li>
              <li><strong>Ручне оновлення</strong> — статуси не змінюються автоматично, тому таблиця завжди відстає від реальності</li>
              <li><strong>Немає пріоритизації</strong> — всі справи виглядають однаково, хоча одна потребує уваги сьогодні, а інша — через місяць</li>
              <li><strong>Командна сліпота</strong> — партнер не бачить, над чим працює асоціат, поки не запитає особисто</li>
            </ul>

            <p>
              Результат — пропущені дедлайни, дублювання роботи та постійний стрес від відчуття,
              що «щось забули». За даними юридичних досліджень, адміністративні втрати у фірмах
              без системи управління справами можуть сягати <strong>30-40% робочого часу</strong>.
            </p>

            <h2>Kanban-методологія: від Toyota до юридичної фірми</h2>

            <p>
              Kanban (від японського «візуальний сигнал») — це методологія управління роботою,
              яку розробив інженер Toyota Таїті Оно наприкінці 1940-х років. Принцип простий:
              вся робота представлена у вигляді карток, які рухаються зліва направо через колонки,
              де кожна колонка — це етап процесу.
            </p>

            <p>
              Три базові правила Kanban:
            </p>

            <ul>
              <li><strong>Візуалізуйте роботу</strong> — кожна справа стає карткою на дошці, яку бачить уся команда</li>
              <li><strong>Обмежуйте обсяг незавершеної роботи (WIP)</strong> — не беріть нових справ, поки не завершите поточні</li>
              <li><strong>Фокусуйтесь на завершенні</strong> — замість того, щоб починати нове, доведіть до кінця те, що вже в роботі</li>
            </ul>

            <p>
              Для юридичної практики це особливо актуально. Юристи часто працюють одночасно над
              десятками справ, і кожна з них має свій ритм: одна чекає рішення суду, інша — у стадії
              підготовки документів, третя — на переговорах. Kanban дозволяє бачити всю цю
              картину одним поглядом.
            </p>

            <h2>Як налаштувати етапи для юридичної практики</h2>

            <p>
              Стандартна Kanban-дошка «Зробити / В роботі / Готово» занадто проста для юридичної
              роботи. Натомість Ви можете створити колонки, що відповідають реальним етапам
              Вашої практики.
            </p>

            <p>
              <strong>Приклад для літігації:</strong>
            </p>

            <ul>
              <li><strong>Intake</strong> — первинне звернення клієнта, збір інформації</li>
              <li><strong>Аналіз</strong> — вивчення матеріалів, оцінка перспектив</li>
              <li><strong>Підготовка документів</strong> — складання позовів, відзивів, клопотань</li>
              <li><strong>Переговори / Медіація</strong> — досудове врегулювання</li>
              <li><strong>Судовий процес</strong> — засідання, подання доказів</li>
              <li><strong>Виконання</strong> — контроль виконання рішення суду</li>
              <li><strong>Архів</strong> — справа завершена</li>
            </ul>

            <p>
              <strong>Приклад для договірної практики:</strong>
            </p>

            <ul>
              <li><strong>Запит</strong> — клієнт описує потребу</li>
              <li><strong>Драфт</strong> — підготовка першої версії документа</li>
              <li><strong>Внутрішня перевірка</strong> — рецензування старшим юристом</li>
              <li><strong>Узгодження з клієнтом</strong> — правки, коментарі</li>
              <li><strong>Підписання</strong> — фінальна версія, підпис сторін</li>
              <li><strong>Завершено</strong> — документ підписаний і збережений</li>
            </ul>

            <blockquote>
              <p>
                Головне правило: колонки мають відображати <em>Вашу</em> реальну послідовність
                дій, а не ідеальний процес із підручника. Якщо у Вашій фірмі етап «узгодження
                з партнером» є обов&apos;язковим — додайте окрему колонку.
              </p>
            </blockquote>

            <h2>Видимість для команди: кінець «а хто цим займається?»</h2>

            <p>
              Одна з найбільших переваг Kanban-дошки — <strong>прозорість</strong>. Кожна картка
              показує не лише статус справи, а й хто за неї відповідає, який дедлайн і де
              виникло «вузьке місце».
            </p>

            <p>
              Що це дає на практиці:
            </p>

            <ul>
              <li><strong>Керуючий партнер</strong> бачить завантаженість кожного юриста без щоденних нарад</li>
              <li><strong>Асоціат</strong> розуміє пріоритети — які справи потребують уваги зараз, а які можуть почекати</li>
              <li><strong>Секретар</strong> знає, на якому етапі кожна справа, і може коректно інформувати клієнтів</li>
              <li><strong>Новий співробітник</strong> швидко розуміє процеси фірми без тижневого онбордингу</li>
            </ul>

            <p>
              Коли картки накопичуються в одній колонці — це візуальний сигнал проблеми.
              Наприклад, якщо у колонці «Внутрішня перевірка» постійно стоїть 8-10 справ,
              це означає, що старший юрист перевантажений і потрібно або делегувати рецензію,
              або найняти додаткового спеціаліста. Без Kanban-дошки таку проблему можна
              не помічати місяцями.
            </p>

            <h2>WIP-ліміти: як не потонути у незавершених справах</h2>

            <p>
              WIP (Work In Progress) — це кількість справ, які одночасно перебувають на
              певному етапі. Kanban-методологія рекомендує обмежувати цю кількість.
            </p>

            <p>
              Для юридичної фірми це означає просте правило: якщо Ви встановили ліміт
              у 5 справ на етапі «Підготовка документів», то шоста справа не потрапить
              у цю колонку, поки одна з п&apos;яти не перейде далі. Це змушує завершувати
              роботу, а не накопичувати чернетки.
            </p>

            <p>
              Практичні WIP-ліміти для юридичної фірми:
            </p>

            <ul>
              <li><strong>Intake:</strong> 3-5 справ — щоб не затягувати первинний аналіз</li>
              <li><strong>Підготовка документів:</strong> 5-7 справ на юриста — оптимальний обсяг для якісної роботи</li>
              <li><strong>Перевірка:</strong> 3-4 справи — щоб старший юрист встигав рецензувати вчасно</li>
            </ul>

            <h2>Kanban-перегляди у JustCRM</h2>

            <p>
              JustCRM має вбудований Kanban-перегляд справ, який створений спеціально для
              юридичної практики. Замість адаптації універсального інструменту Ви отримуєте
              дошку, яка «розуміє» юридичний контекст.
            </p>

            <ul>
              <li><strong>Налаштовувані етапи</strong> — створюйте колонки під Вашу практику: літігація, договірна робота, due diligence, compliance</li>
              <li><strong>Картки справ</strong> — кожна картка містить клієнта, тип справи, дедлайн, відповідального юриста та суму</li>
              <li><strong>Drag-and-drop</strong> — перетягуйте справи між етапами одним рухом</li>
              <li><strong>Фільтри та групування</strong> — відображайте справи за юристом, типом практики, клієнтом або дедлайном</li>
              <li><strong>Автоматичні нагадування</strong> — коли справа «застрягла» на етапі довше встановленого терміну, система попередить</li>
            </ul>

            <p>
              Окрім Kanban-дошки, JustCRM інтегрує облік часу, документи та комунікацію
              з клієнтом в одному інтерфейсі. Коли Ви переміщуєте справу на наступний етап,
              система автоматично фіксує дату переходу — це дані для аналітики ефективності
              Вашої фірми.
            </p>

            <blockquote>
              <p>
                Фірма, яка бачить свої процеси, може ними керувати. Фірма, яка працює
                «на пам&apos;яті», керується випадковістю.
              </p>
            </blockquote>

            <h2>З чого почати</h2>

            <p>
              Впровадження Kanban у юридичній фірмі не вимагає радикальних змін. Почніть
              із трьох кроків:
            </p>

            <ul>
              <li><strong>Крок 1.</strong> Визначте 5-7 основних етапів Вашого робочого процесу</li>
              <li><strong>Крок 2.</strong> Перенесіть поточні справи на Kanban-дошку — навіть якщо спочатку це буде фізична дошка зі стікерами</li>
              <li><strong>Крок 3.</strong> Встановіть WIP-ліміти та проводьте короткі щотижневі перегляди дошки з командою</li>
            </ul>

            <p>
              Або зробіть це ще простіше — зареєструйтесь у JustCRM, де Kanban-дошка
              вже налаштована для юридичної практики, і почніть додавати свої справи.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі матеріалів{" "}
                <a href="https://www.agileattorney.com/enhancing-efficiency-kanban-boards-for-legal-workflow-management/" target="_blank" rel="noopener noreferrer">Agile Attorney</a>,{" "}
                <a href="https://www.lexzur.com/kanban-for-lawyers-your-way-to-visualize-workflow-and-optimize-legal-project-management/" target="_blank" rel="noopener noreferrer">Lexzur</a>,{" "}
                <a href="https://kanbanzone.com/solutions/law-firms/" target="_blank" rel="noopener noreferrer">Kanban Zone</a>{" "}
                та{" "}
                <a href="https://lawyerist.com/news/better-workflow-for-lawyer-with-kanban-boards/" target="_blank" rel="noopener noreferrer">Lawyerist</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові побачити свої справи на Kanban-дошці?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM — CRM із вбудованим Kanban-переглядом для юристів.
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
