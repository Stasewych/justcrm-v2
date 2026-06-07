import Link from "next/link";
import Button from "./Button";
import FloatingDots from "./FloatingDots";

const plans = [
  {
    name: "Classic",
    desc: "Для фірм, що переходять з Excel і хочуть навести порядок",
    price: 400,
    period: "за користувача / місяць",
    cta: "Почати безкоштовно",
    ctaVariant: "outline" as const,
    featuresTitle: "Включено",
    features: [
      "Управління справами (до 20)",
      "Контакти (до 50)",
      "Задачі (список)",
      "Базовий інвойсинг (1 валюта)",
      "1 GB сховище",
      "Email-підтримка",
    ],
  },
  {
    name: "Pro AI",
    desc: "Повний набір інструментів + AI для юридичної практики",
    price: 600,
    period: "за користувача / місяць",
    badge: "Найпопулярніший",
    cta: "Почати безкоштовно",
    ctaVariant: "primary" as const,
    featured: true,
    featuresTitle: "Все без обмежень, плюс",
    features: [
      "Необмежені справи, контакти, сховище",
      "Документи + Google Drive / OneDrive",
      "Календар + email-інтеграція",
      "Мультивалютність",
      "Dashboard, бюджети, ставки",
      "Автоматизація документів",
      "**AI-диктування** — voice → опис справи",
      "**Покращення з AI** — юридичний стиль",
      "**RAG пошук** по базі знань фірми",
    ],
  },
  {
    name: "Enterprise",
    desc: "Для великих фірм з вимогами до безпеки і кастомізації",
    custom: true,
    period: "під ваші потреби і масштаб",
    cta: "Зв'язатися",
    ctaVariant: "outline" as const,
    featuresTitle: "Все з Pro AI, плюс",
    features: [
      "Self-hosted — CRM на вашому сервері",
      "Кастомні модифікації CRM",
      "Розробка нових інструментів",
      "Персональний менеджер + SLA",
      "Знижки на об'єм (20+ юристів)",
    ],
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing({ transparent }: { transparent?: boolean }) {
  return (
    <section className={`py-10 sm:py-14 lg:py-20 relative overflow-hidden ${transparent ? "" : "bg-white"}`} id="pricing">
      {!transparent && <FloatingDots count={50} />}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* When transparent (i.e. embedded on /pricing under its own hero) the
            internal "Тарифи / Прозорі тарифні плани" header would duplicate the
            page hero — hide it. Standalone use (homepage) keeps the header. */}
        {!transparent && (
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Тарифи
            </p>
            <h2 className="text-3xl lg:text-[40px] font-light tracking-tight">
              Прозорі{" "}
              <strong className="font-medium">тарифні плани</strong>
            </h2>
            <p className="mt-4 text-black/40 text-sm">
              30 днів безкоштовно з повним функціоналом Pro AI.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const clip = "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)";
            const btnClip = "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)";
            return (
              <div
                key={plan.name}
                className={`p-px transition-colors ${plan.featured ? "bg-[#1c1c1c]" : "bg-black/10 hover:bg-black/20"}`}
                style={{ clipPath: clip }}
              >
                <div
                  className={`relative p-8 ${plan.featured ? "bg-[#1c1c1c] text-white" : "bg-white"}`}
                  style={{ clipPath: clip }}
                >
                  {plan.badge && (
                    <span className="absolute top-4 right-6 font-mono text-[10px] uppercase tracking-wider text-white/50">
                      {plan.badge}
                    </span>
                  )}

                  <div className="font-mono text-[11px] font-medium uppercase tracking-wide opacity-50 mb-1">
                    {plan.name}
                  </div>
                  <p className={`text-sm mb-6 ${plan.featured ? "text-white/50" : "text-black/40"}`}>
                    {plan.desc}
                  </p>

                  {plan.custom ? (
                    <div className="mb-1">
                      <span className="text-2xl font-light">Обговоримо</span>
                    </div>
                  ) : (
                    <div className="mb-1">
                      <span className="text-4xl font-light tracking-tight">
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-1 ${plan.featured ? "text-white/50" : "text-black/40"}`}>
                        ₴
                      </span>
                    </div>
                  )}
                  <p className={`text-xs mb-8 ${plan.featured ? "text-white/40" : "text-black/30"}`}>
                    {plan.period}
                  </p>

                  <div className="mb-8">
                    {plan.featured ? (
                      <a
                        href="https://crm.justsolution.org/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center font-mono text-[12px] font-medium uppercase tracking-wide bg-white text-[#1c1c1c] px-6 py-2.5 transition-colors hover:bg-white/90"
                        style={{ clipPath: btnClip }}
                      >
                        {plan.cta}
                      </a>
                    ) : (
                      <Button href={plan.name === "Enterprise" ? "https://calendly.com/stanislav-marynovych-justsolution/30min" : "https://crm.justsolution.org/register"} variant={plan.ctaVariant}>
                        {plan.cta}
                      </Button>
                    )}
                  </div>

                  <div className={`border-t pt-6 ${plan.featured ? "border-white/10" : "border-black/8"}`}>
                    <p className={`font-mono text-[10px] uppercase tracking-wider mb-4 ${plan.featured ? "text-white/30" : "text-black/25"}`}>
                      {plan.featuresTitle}
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className={`flex items-start gap-2.5 text-sm ${plan.featured ? "text-white/70" : "text-black/50"}`}
                        >
                          <Check />
                          <span dangerouslySetInnerHTML={{
                            __html: f.replace(/\*\*(.*?)\*\*/g, `<strong class="${plan.featured ? "text-white" : "text-black/80"}">$1</strong>`)
                          }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="font-mono text-[11px] font-medium uppercase tracking-wide text-black/35 hover:text-black/60 transition-colors inline-flex items-center gap-1.5"
          >
            Порівняти всі тарифи детально
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
