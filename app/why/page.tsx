import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { whyGraph } from "@/app/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";
import Button from "@/components/Button";
import WhyCompare from "@/components/WhyCompare";

export const metadata = pageMeta({
  title: "Чому JustCRM, а не Clio чи Notion",
  description:
    "Чесне порівняння JustCRM з Clio, Notion, ClickUp та Excel: де ми сильніші (українською, у гривні, AI українською) і де кращим вибором може бути інший інструмент.",
  path: "/why",
});

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const ALTS = [
  {
    name: "Clio",
    logos: [{ src: "vs-clio.png", h: "h-9" }],
    meta: "Міжнародна платформа · $39–139 / користувача",
    body: "Світовий лідер legal practice management: найбагатший функціонал, велика екосистема інтеграцій, клієнтський портал і мобільний застосунок.",
    fit: "Інтерфейс англійською, ціни в доларах, без гривневих рахунків і української специфіки. JustCRM закриває той самий клас задач для української фірми — рідною мовою і в гривні.",
  },
  {
    name: "Notion",
    logos: [{ src: "vs-notion.png", h: "h-7" }],
    meta: "Гнучкий робочий простір · є безкоштовний тариф",
    body: "Дуже гнучкий: бази даних, документи й вікі під будь-який процес, є власний AI з пошуком по простору. Багато соло-юристів починають саме тут.",
    fit: "Юридичний білінг, ФОП-рахунки й облік справ зі строками доводиться збирати вручну. JustCRM дає це з коробки, без налаштування.",
  },
  {
    name: "ClickUp",
    logos: [{ src: "vs-clickup.png", h: "h-11" }],
    meta: "Управління задачами · є безкоштовний тариф",
    body: "Сильний у задачах і проєктах: багато режимів перегляду, вбудований тайм-трекінг і AI, гнучке налаштування.",
    fit: "Це універсальний інструмент керування роботою — без юридичних інвойсів, ФОП-документів і української специфіки. JustCRM закриває саме юридичну частину.",
  },
  {
    name: "Excel",
    logos: [{ src: "vs-excel.png", h: "h-8" }],
    meta: "Таблиці · у складі Microsoft 365",
    body: "Звичний і доступний, українською. Добре підходить для простих списків і розрахунків на старті практики.",
    fit: "Немає контролю доступу, нагадувань про строки й зв'язку документів зі справою — із зростанням практики це стає ризиком. JustCRM зберігає простоту, але під роботу юриста.",
  },
];

const NOTCH = "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)";

export default function WhyPage() {
  return (
    <>
      <JsonLd data={whyGraph()} />
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-24 bg-[#f4f4f4] border-b border-black/10 relative overflow-hidden">
          <FloatingDots count={20} />
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
              <div>
                <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-6">
                  Чому JustCRM
                </p>
                <h1 className="text-[34px] sm:text-6xl lg:text-[72px] font-light leading-[1.06] sm:leading-[1.04] tracking-[-0.02em] max-w-3xl">
                  Зроблено під українську юридичну практику
                </h1>
                <p className="mt-5 sm:mt-7 text-base sm:text-lg lg:text-xl text-black/50 max-w-2xl leading-relaxed">
                  JustCRM — українська AI-CRM для юридичних фірм. Нижче — чесне порівняння
                  з міжнародними платформами, українськими CRM і універсальними
                  інструментами: де ми сильні й де кращим вибором може бути хтось інший.
                </p>
                <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3">
                  <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
                  <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <img
                  src={`${bp}/images/scales.png`}
                  alt="Терези правосуддя"
                  className="w-[300px] xl:w-[340px] h-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed comparison table */}
        <WhyCompare />

        {/* Alternatives — honest, editorial */}
        <section className="py-16 lg:py-24 bg-[#fafafa] bg-dot-grid relative overflow-hidden">
          <FloatingDots count={18} />
          <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Альтернативи чесно
            </p>
            <h2 className="text-3xl lg:text-[40px] font-light tracking-tight mb-3 max-w-2xl">
              Кожен інструмент сильний у своєму
            </h2>
            <p className="text-black/45 text-[15px] mb-14 max-w-xl">
              Де його місце — і де наше.
            </p>

            <div className="border-t border-black/10">
              {ALTS.map((a) => (
                <div
                  key={a.name}
                  className="grid lg:grid-cols-[300px_1fr] gap-5 lg:gap-12 py-9 lg:py-10 border-b border-black/10"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4 min-h-[48px]">
                      {a.logos.map((l) => (
                        <img
                          key={l.src}
                          src={`${bp}/images/${l.src}`}
                          alt=""
                          aria-hidden="true"
                          className={`${l.h} w-auto object-contain`}
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-light tracking-tight leading-tight">
                      {a.name}
                    </h3>
                    <p className="font-mono text-[10.5px] uppercase tracking-wide text-black/35 mt-2">
                      {a.meta}
                    </p>
                  </div>
                  <div>
                    <p className="text-[15px] text-black/55 leading-relaxed mb-4">{a.body}</p>
                    <div className="flex gap-3">
                      <span className="font-mono text-[11px] font-semibold text-[#1c1c1c] shrink-0 mt-0.5 whitespace-nowrap">
                        JustCRM →
                      </span>
                      <p className="text-[14px] text-black/70 leading-relaxed">{a.fit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark closing CTA */}
        <section className="py-20 lg:py-28 bg-[#1c1c1c] text-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl lg:text-[44px] font-light tracking-tight mb-5">
              Подивіться JustCRM у вашій практиці
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed mb-10">
              30 днів безкоштовно з повним функціоналом Pro AI. Або замовте
              демонстрацію — покажемо, як перенести вашу практику без втрати даних.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://crm.justsolution.org/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[12px] font-medium uppercase tracking-wide bg-white text-[#1c1c1c] px-6 py-2.5 transition-colors hover:bg-white/90"
                style={{ clipPath: NOTCH }}
              >
                Почати безкоштовно
              </a>
              <a
                href="https://calendly.com/stanislav-marynovych-justsolution/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[12px] font-medium uppercase tracking-wide text-white/80 border border-white/25 px-6 py-2.5 transition-colors hover:text-white hover:border-white/50"
              >
                Замовити демо
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
