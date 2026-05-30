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
                Продуктивність
              </span>
              <span className="font-mono text-[11px] text-black/30">12 травня 2026</span>
              <span className="font-mono text-[11px] text-black/30">· 5 хв читання</span>
            </div>

            <h1 className="text-3xl lg:text-[44px] font-bold leading-[1.12] tracking-tight mb-6">
              Голосове введення для юристів: як диктовка замінює ручний облік часу
            </h1>

            <p className="text-lg text-black/50 leading-relaxed max-w-3xl">
              Юристи витрачають до 40% робочого тижня на документування та ручний облік
              годин. Голосова диктовка з AI дозволяє скоротити цей час утричі — і повернути
              втрачені білінгові години. Розбираємо, як це працює на практиці.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <img
              src={`${bp}/images/blog-voice-dictation.jpg`}
              alt="Юрист диктує нотатки за допомогою голосового введення"
              className="w-full h-[300px] lg:h-[480px] object-cover rounded-xl"
            />
          </div>
        </section>

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-8 legal-prose prose prose-neutral prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-black/60 prose-li:text-[16px] prose-li:text-black/60 prose-strong:text-black/80 prose-blockquote:border-l-2 prose-blockquote:border-black/15 prose-blockquote:pl-5 prose-blockquote:text-black/50 prose-blockquote:italic">

            <h2>Проблема: ручний облік часу з&apos;їдає білінгові години</h2>

            <p>
              За даними <strong>Clio&apos;s Legal Trends Report 2025</strong>, юристи виставляють
              рахунки лише за <strong>31% робочого часу</strong> — приблизно 2,9 години з 8-годинного
              дня. Решта йде на адміністрування: заповнення таймшитів, опис виконаних завдань,
              звірку записів із фактичними діями.
            </p>

            <p>
              Проблема не лише у витраченому часі. Ручний облік хронічно неточний. Юристи
              заповнюють таймшити наприкінці дня або навіть наступного тижня, покладаючись
              на пам&apos;ять. Результат — <strong>до 30% білінгових годин просто втрачаються</strong>,
              бо їх забувають зафіксувати або занижують тривалість завдання.
            </p>

            <p>
              Для невеликої фірми з 10 юристів це означає сотні годин щомісяця, які ніколи
              не перетворюються на дохід. При середній ставці навіть у 500 грн/год —
              це суттєві фінансові втрати.
            </p>

            <h2>Як працює голосова диктовка у контексті CRM</h2>

            <p>
              Сучасні системи голосового введення для юристів — це не просто транскрибація
              звуку в текст. Це AI-інструменти, які розуміють юридичну термінологію,
              структурують інформацію та інтегруються з робочими процесами.
            </p>

            <p>
              Ось як виглядає робочий процес із голосовою диктовкою у юридичній CRM:
            </p>

            <ul>
              <li><strong>Миттєвий запис після завдання</strong> — юрист натискає кнопку мікрофона у картці справи та описує виконану роботу голосом: &quot;Підготував відповідь на позов, аналіз трьох прецедентів, 45 хвилин&quot;</li>
              <li><strong>AI-розпізнавання та структурування</strong> — система перетворює голос у текст із точністю <strong>90-99%</strong> для юридичної лексики, автоматично визначає тип завдання та витрачений час</li>
              <li><strong>Прив&apos;язка до справи</strong> — запис одразу потрапляє до таймшиту відповідної справи, без ручного копіювання та переносу між системами</li>
              <li><strong>Формування рахунку</strong> — накопичені записи автоматично групуються у рахунок для клієнта з деталізацією кожного завдання</li>
            </ul>

            <p>
              Ключова перевага — <strong>контекст</strong>. Коли голосовий запис робиться безпосередньо
              у CRM, система знає, до якої справи та якого клієнта він належить.
              Юристу не потрібно заповнювати додаткові поля чи перемикатися між вікнами.
            </p>

            <h2>Статистика: скільки часу реально економить диктовка</h2>

            <p>
              Різниця між швидкістю набору тексту та мовлення є драматичною.
              Середній юрист друкує зі швидкістю <strong>40-60 слів на хвилину</strong>, тоді
              як диктує — <strong>150-180 слів на хвилину</strong>. Це різниця у <strong>3-4 рази</strong>.
            </p>

            <p>
              За дослідженнями, конкретна економія часу на різних юридичних завданнях:
            </p>

            <ul>
              <li><strong>Складання меморандумів</strong> (500 слів) — на 60% швидше</li>
              <li><strong>Підготовка розділів позовних заяв</strong> (1500 слів) — на 65% швидше</li>
              <li><strong>Відповіді на електронні листи клієнтів</strong> — на 60% швидше</li>
              <li><strong>Нотатки після зустрічей та консультацій</strong> — на 67% швидше</li>
              <li><strong>Загальне прискорення підготовки документів</strong> — до 75%</li>
            </ul>

            <blockquote>
              <p>
                Навіть якщо юрист заощаджує лише 30 хвилин на день завдяки голосовому введенню,
                це понад <strong>100 додаткових годин на рік</strong> — час, який можна
                перетворити на білінгові години або інвестувати у розвиток практики.
                Для фірми з 10 юристів це вже 1 000 годин річної ємності.
              </p>
            </blockquote>

            <p>
              Фінансовий ефект ще більш показовий. За розрахунками CleverType, соло-практик
              зі ставкою $300/год, який повертає 5 годин щотижня завдяки голосовому обліку,
              отримує додатково <strong>$1 500 на тиждень</strong>. Для фірми з 10 юристів —
              це <strong>$15 000 на тиждень</strong> повернутого доходу.
            </p>

            <h2>Конфіденційність та безпека голосових даних</h2>

            <p>
              Для юристів питання безпеки голосових записів є критичним. Адвокатська
              таємниця поширюється на всі форми комунікації, включно з голосовими нотатками
              та їхніми транскрипціями.
            </p>

            <p>
              Сучасні рішення для юридичної диктовки враховують ці вимоги:
            </p>

            <ul>
              <li><strong>Шифрування даних</strong> — голосові записи та транскрипції шифруються як при передачі, так і при зберіганні (AES-256)</li>
              <li><strong>Ізоляція даних клієнтів</strong> — інформація кожної фірми зберігається окремо, без перехресного доступу</li>
              <li><strong>Відсутність навчання на даних</strong> — відповідальні провайдери не використовують голосові записи юристів для тренування AI-моделей</li>
              <li><strong>Локальна обробка</strong> — деякі системи пропонують on-device розпізнавання, коли аудіо не покидає пристрій юриста</li>
            </ul>

            <p>
              У JustCRM голосове введення побудоване з урахуванням цих принципів: дані
              кожної фірми ізольовані, передача шифрується, а AI-функції працюють
              у контексті конкретної справи, не змішуючи інформацію між клієнтами.
            </p>

            <h2>Як впровадити голосовий облік часу у Вашій фірмі</h2>

            <p>
              За даними WisprFlow, вже <strong>82% юридичних фірм</strong> використовують
              диктовку у тій чи іншій формі. Але між базовим голосовим набором
              та повноцінною інтеграцією у робочий процес — велика різниця. Thomson Reuters
              повідомляє, що рівень впровадження AI серед юристів зріс із <strong>14% до 26%</strong> лише
              за один рік, і очікується, що до кінця 2026 року він перевищить <strong>50%</strong>.
            </p>

            <p>
              Ось практичні кроки для впровадження:
            </p>

            <ul>
              <li><strong>Почніть із таймшитів</strong> — голосовий запис витраченого часу одразу після завдання дає найбільший ефект при мінімальних змінах у звичках</li>
              <li><strong>Оберіть CRM із вбудованою диктовкою</strong> — окремі програми для диктовки та облік часу в іншій системі створюють додаткове тертя. Коли все в одному місці — використання стає природним</li>
              <li><strong>Навчіть команду за один тиждень</strong> — голосове введення інтуїтивне, але першого тижня варто нагадувати про нього після кожної зустрічі та завершеного завдання</li>
              <li><strong>Вимірюйте результат</strong> — порівняйте кількість зафіксованих годин до та після впровадження. Зазвичай фірми фіксують зростання на <strong>15-30%</strong> вже у перший місяць</li>
            </ul>

            <p>
              JustCRM поєднує CRM, облік часу та AI-диктування в одній системі. Юрист
              відкриває справу, натискає мікрофон, описує виконану роботу голосом — і
              запис одразу потрапляє до таймшиту. Без зайвих кроків, без забутих годин.
            </p>

            <hr />

            <p>
              <em>
                Стаття підготовлена на основі досліджень{" "}
                <a href="https://www.clevertype.co/post/voice-to-text-for-lawyers-how-ai-dictation-saves-hours-on-legal-documentation" target="_blank" rel="noopener noreferrer">CleverType</a>,{" "}
                <a href="https://wisprflow.ai/post/legal-dictation" target="_blank" rel="noopener noreferrer">WisprFlow</a>,{" "}
                <a href="https://www.speechlive.com/gb/blog/ai-powered-dictation-for-legal/" target="_blank" rel="noopener noreferrer">Philips SpeechLive</a>{" "}
                та{" "}
                <a href="https://lumevoice.com/blog/legal-ai-dictation-guide/" target="_blank" rel="noopener noreferrer">LumeVoice</a>.
              </em>
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 bg-[#fafafa] bg-dot-grid">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              Готові повернути втрачені білінгові години?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto mb-8">
              Спробуйте JustCRM — CRM із голосовим введенням та AI, створену для юристів.
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
