import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function SalesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-28 pb-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20">

              {/* Left — info */}
              <div>
                <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-6">
                  Відділ продажів
                </p>
                <h1 className="text-3xl lg:text-[42px] font-bold leading-[1.12] tracking-tight mb-6">
                  Запит на демонстрацію
                  <span className="font-normal text-black/30"> JustCRM</span>
                </h1>
                <p className="text-base text-black/50 leading-relaxed mb-12 max-w-lg">
                  Залиште заявку або заплануйте зустріч — і наш спеціаліст продемонструє
                  можливості JustCRM для Вашої юридичної фірми. Відповімо на питання
                  щодо функціоналу, міграції та тарифів.
                </p>

                {/* Contact details */}
                <div className="space-y-6 mb-12">
                  <div>
                    <div className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-wider mb-2">
                      Телефон
                    </div>
                    <a
                      href="tel:+380989227949"
                      className="text-lg font-medium text-black hover:text-black/70 transition-colors"
                    >
                      +380 98 922 79 49
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-wider mb-2">
                      Email
                    </div>
                    <a
                      href="mailto:stanislav.marynovych@justsolution.org"
                      className="text-lg font-medium text-black hover:text-black/70 transition-colors"
                    >
                      stanislav.marynovych@justsolution.org
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-medium text-black/30 uppercase tracking-wider mb-2">
                      Графік
                    </div>
                    <p className="text-[15px] text-black/60">
                      Пн — Пт, 09:00 — 18:00
                    </p>
                  </div>
                </div>

                {/* What to expect */}
                <div className="border-t border-black/8 pt-8">
                  <h3 className="text-[15px] font-semibold mb-5">Що Ви отримаєте на зустрічі</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <span className="font-mono text-[13px] font-medium text-black/25 mt-0.5">01</span>
                      <p className="text-[14px] text-black/55 leading-relaxed">
                        Демонстрацію роботи зі справами, білінгом, задачами та контактами
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="font-mono text-[13px] font-medium text-black/25 mt-0.5">02</span>
                      <p className="text-[14px] text-black/55 leading-relaxed">
                        Огляд AI-функцій: голосове введення, генерація документів, покращення тексту
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="font-mono text-[13px] font-medium text-black/25 mt-0.5">03</span>
                      <p className="text-[14px] text-black/55 leading-relaxed">
                        Відповіді на питання щодо міграції з Вашої поточної системи
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="font-mono text-[13px] font-medium text-black/25 mt-0.5">04</span>
                      <p className="text-[14px] text-black/55 leading-relaxed">
                        Підбір тарифного плану під розмір і потреби Вашої команди
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Calendly + form */}
              <div>
                {/* Calendly embed */}
                <div className="bg-[#fafafa] border border-black/5 rounded-xl p-8 mb-8">
                  <h2 className="text-lg font-semibold mb-2">Заплануйте зустріч</h2>
                  <p className="text-sm text-black/40 mb-6">
                    Годинна індивідуальна демонстрація.
                  </p>
                  <iframe
                    src="https://calendly.com/stanislav-marynovych-justsolution/30min?hide_gdpr_banner=1&background_color=fafafa&text_color=1c1c1c&primary_color=1c1c1c"
                    width="100%"
                    height="660"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Заплануйте демо JustCRM"
                    loading="eager"
                  />
                </div>

                {/* Or call CTA */}
                <div className="text-center py-6">
                  <p className="text-sm text-black/35 mb-4">
                    Або зателефонуйте нам напряму
                  </p>
                  <a
                    href="tel:+380989227949"
                    className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-wide text-black/60 hover:text-black transition-colors border border-black/15 hover:border-black/30 rounded px-5 py-2.5"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    +380 98 922 79 49
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
