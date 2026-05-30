"use client";

const points = [
  {
    title: "Шифрування на кожному рівні",
    desc: "TLS для всіх з'єднань. Паролі зберігаються у захешованому вигляді. Файли — в ізольованому сховищі кожної організації.",
  },
  {
    title: "Ізоляція даних між організаціями",
    desc: "Кожна фірма працює в окремому просторі. Архітектурно неможливо отримати доступ до даних іншої організації.",
  },
  {
    title: "Двофакторна автентифікація",
    desc: "Додатковий рівень захисту при вході в систему. Токени з обмеженим часом дії та автоматичною інвалідацією.",
  },
  {
    title: "Захист від веб-атак",
    desc: "X-Frame-Options, XSS-Protection, Content-Type-Options, strict Referrer-Policy на рівні серверної інфраструктури.",
  },
  {
    title: "Ролі, дозволи та журнал дій",
    desc: "Розмежування доступу по ролях. Аудит-лог фіксує хто, коли і що змінив у системі.",
  },
  {
    title: "Мережева ізоляція",
    desc: "База даних недоступна ззовні. Обмін даними відбувається виключно через захищений внутрішній сервер.",
  },
];

export default function SecurityCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f7f7f5] bg-dot-grid" id="security">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — headline */}
          <div>
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Безпека
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold leading-[1.15] tracking-tight mb-5">
              Адвокатська таємниця —{" "}
              <span className="font-normal text-black/40">
                наша інженерна задача
              </span>
            </h2>
            <p className="text-base text-black/45 leading-relaxed mb-10">
              Юридична фірма працює з конфіденційною інформацією щодня. JustCRM побудована так, щоб захист даних працював за замовчуванням — без додаткових налаштувань з Вашого боку.
            </p>
            <div className="border-l-2 border-black/15 pl-5">
              <p className="text-lg font-medium leading-relaxed text-black/55">
                Дані клієнтів не використовуються для навчання AI-моделей. Конфіденційність — не функція, а архітектурне рішення.
              </p>
            </div>
          </div>

          {/* Right — points list */}
          <div className="border-t border-black/10">
            {points.map((point) => (
              <div
                key={point.title}
                className="py-5 border-b border-black/10"
              >
                <h3 className="text-[15px] font-semibold text-black/80 mb-1.5">
                  {point.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/40">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
