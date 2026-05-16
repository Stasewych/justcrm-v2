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
                Клієнти
              </span>
              <span className="font-mono text-[11px] text-black/30">24 квітня 2026</span>
              <span className="font-mono text-[11px] text-black/30">&middot; 6 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Воронка лідів для юридичної фірми: як не втрачати потенційних клієнтів
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              До 40% звернень у юридичні фірми залишаються без відповіді. Половина
              потенційних клієнтів наймає першого юриста, який їм передзвонив. Як побудувати
              воронку, що перетворює кожне звернення на реальну справу?
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-intake.jpg`}
              alt="Воронка лідів для юридичної фірми"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Де юридичні фірми втрачають клієнтів</h2>

            <p>
              Більшість юристів впевнені: якщо клієнт зателефонував — він уже Ваш. На практиці
              все навпаки. За даними галузевих досліджень, <strong>до 40% вхідних звернень</strong> у
              юридичні фірми залишаються без своєчасної відповіді. Причини банальні: юрист на
              судовому засіданні, секретар зайнятий, повідомлення загубилося серед десятка каналів.
            </p>

            <p>
              Цифри ще тривожніші, якщо врахувати поведінку клієнтів: <strong>35-50%</strong> людей,
              які шукають юриста, наймають першого спеціаліста, що відповів на їхнє звернення. Це
              означає, що кожна пропущена заявка — це не просто втрачений контакт, а клієнт, який
              пішов до конкурента.
            </p>

            <p>
              Додайте до цього звернення у неробочий час — <strong>35-42%</strong> усіх вхідних
              запитів надходять після 18:00 або у вихідні. Якщо у Вашій фірмі немає системи, що
              фіксує ці запити автоматично, Ви втрачаєте майже половину потоку ще до того, як
              побачите перше повідомлення вранці.
            </p>

            <h2>Етапи воронки прийому клієнтів</h2>

            <p>
              Ефективна воронка (intake funnel) для юридичної фірми складається з п&apos;яти
              послідовних етапів. Кожен із них — це точка, де клієнт або рухається далі, або
              йде назавжди.
            </p>

            <ul>
              <li><strong>Первинний контакт</strong> — телефонний дзвінок, форма на сайті, месенджер, реферальне звернення. Головне — зафіксувати запит протягом перших хвилин</li>
              <li><strong>Кваліфікація</strong> — визначення, чи відповідає звернення спеціалізації фірми, чи є конфлікт інтересів, яка потенційна вартість справи</li>
              <li><strong>Збір документів</strong> — клієнт надсилає первинні матеріали: договори, листування, судові рішення. На цьому етапі багато справ «зависають» через відсутність нагадувань</li>
              <li><strong>Юридична оцінка</strong> — юрист аналізує перспективи справи та формує попередню стратегію. Це момент, коли клієнт приймає рішення про співпрацю</li>
              <li><strong>Підписання договору</strong> — оформлення угоди про надання правової допомоги, внесення авансу, відкриття справи в системі</li>
            </ul>

            <p>
              Середній показник конверсії для юридичних фірм — від <strong>5% до 11%</strong> залежно
              від каналу залучення. Фірми, які оптимізували свою воронку за допомогою CRM та
              автоматизації, конвертують <strong>до 80% більше лідів</strong>, ніж ті, що працюють
              вручну.
            </p>

            <h2>Автоматизація прийому: що можна делегувати системі</h2>

            <p>
              Ручний прийом клієнтів — це рецепт для втрат. Коли юрист одночасно веде
              справи, відповідає на дзвінки та заповнює таблиці, щось неминуче губиться.
              Автоматизація intake-процесу дозволяє вивільнити юриста для юридичної роботи,
              а рутину віддати системі.
            </p>

            <p>
              Що саме варто автоматизувати:
            </p>

            <ul>
              <li><strong>Фіксація звернень</strong> — кожен дзвінок, лист, повідомлення з месенджера автоматично створює картку ліда в CRM. Нічого не губиться</li>
              <li><strong>Миттєві сповіщення</strong> — відповідальний юрист отримує пуш-повідомлення одразу після надходження звернення, навіть якщо він не за комп&apos;ютером</li>
              <li><strong>Автоматичні follow-up</strong> — якщо клієнт не відповів протягом 24 годин, система надсилає нагадування. Дослідження показують, що для конверсії потрібно <strong>мінімум 5 дотиків</strong></li>
              <li><strong>Онлайн-форми прийому</strong> — замість телефонного опитування клієнт заповнює структуровану форму на сайті. Дані одразу потрапляють у систему без ручного перенесення</li>
              <li><strong>Розподіл за спеціалізацією</strong> — система автоматично направляє звернення відповідному юристу залежно від категорії справи</li>
            </ul>

            <blockquote>
              <p>
                Фірма з 10 юристів, яка отримує 200 звернень на місяць і втрачає 40%
                через повільну реакцію, щомісяця губить 80 потенційних клієнтів. При
                середньому чеку 15 000 грн за справу — це 1,2 млн грн упущеного доходу
                щомісяця.
              </p>
            </blockquote>

            <h2>Відстеження конверсії на кожному етапі</h2>

            <p>
              Воронка без метрик — це просто список етапів. Щоб справді покращувати прийом
              клієнтів, потрібно бачити, де саме відбуваються втрати.
            </p>

            <p>
              Ключові метрики, які варто відстежувати:
            </p>

            <ul>
              <li><strong>Час першої відповіді</strong> — скільки хвилин проходить між зверненням і першим контактом. Ідеал — до 5 хвилин у робочий час</li>
              <li><strong>Конверсія між етапами</strong> — яка частка лідів переходить від контакту до кваліфікації, від кваліфікації до збору документів, і так далі</li>
              <li><strong>Середній цикл закриття</strong> — скільки днів потрібно від першого звернення до підписання договору</li>
              <li><strong>Причини відмов</strong> — чому клієнти йдуть: ціна, швидкість реакції, спеціалізація, конкурент запропонував краще</li>
              <li><strong>Вартість залучення клієнта (CAC)</strong> — скільки фірма витрачає на маркетинг і продаж для отримання одного нового клієнта</li>
            </ul>

            <p>
              Kanban-дошка в CRM, де кожен лід — це картка, що рухається по етапах воронки,
              дає миттєву візуалізацію. Ви бачите, де скупчилися звернення, які етапи стають
              вузькими місцями, і де потрібне втручання.
            </p>

            <h2>Як JustCRM будує воронку лідів</h2>

            <p>
              У JustCRM воронка прийому клієнтів — це не окремий модуль, а наскрізний
              процес, інтегрований у щоденну роботу юриста.
            </p>

            <ul>
              <li><strong>Pipeline лідів</strong> — візуальна kanban-дошка з налаштовуваними етапами: від первинного звернення до підписання договору. Перетягуйте картки, додавайте нотатки, встановлюйте дедлайни</li>
              <li><strong>Єдине вікно звернень</strong> — дзвінки, електронна пошта, повідомлення з сайту збираються в одному місці. Жоден запит не загубиться між каналами</li>
              <li><strong>Автоматичні нагадування</strong> — система сама нагадає зв&apos;язатися з клієнтом, якщо він не відповів, або якщо юрист не обробив звернення вчасно</li>
              <li><strong>Конверсія в справу</strong> — коли клієнт погоджується на співпрацю, лід перетворюється на справу в один клік. Усі зібрані документи та нотатки переносяться автоматично</li>
              <li><strong>Аналітика воронки</strong> — дашборд показує конверсію на кожному етапі, середній час закриття та ефективність кожного юриста у прийомі нових клієнтів</li>
            </ul>

            <p>
              Замість розрізнених таблиць, нотаток у блокноті та листування в месенджерах
              Ви отримуєте прозорий процес, де кожне звернення має відповідального, дедлайн
              і статус.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі досліджень{" "}
                <a href="https://attorneyassistant.com/blog/law-firm-intake-optimize-lead-follow-up/" target="_blank" rel="noopener noreferrer">Attorney Assistant</a>,{" "}
                <a href="https://abovethelaw.com/2025/06/the-quiet-crisis-of-law-firm-lead-conversion-why-you-dont-have-a-marketing-problem-you-have-an-intake-problem/" target="_blank" rel="noopener noreferrer">Above the Law</a>,{" "}
                <a href="https://golawhustle.com/blogs/improving-lead-conversion-rates-legal" target="_blank" rel="noopener noreferrer">LawHustle</a>{" "}
                та{" "}
                <a href="https://www.lawmatics.com/client-intake" target="_blank" rel="noopener noreferrer">Lawmatics</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові автоматизувати прийом клієнтів?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM — CRM з воронкою лідів, створену для юристів.
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
