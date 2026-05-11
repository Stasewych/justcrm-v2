import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import PricingCompare from "@/components/PricingCompare";
import FAQ from "@/components/FAQ";
import Button from "@/components/Button";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-28 pb-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Тарифи
            </p>
            <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-5">
              Оберіть план
              <span className="font-normal text-black/30"> для Вашої фірми</span>
            </h1>
            <p className="text-lg text-black/50 max-w-2xl mx-auto leading-relaxed">
              14 днів безкоштовно з повним функціоналом Pro AI. Без картки, без зобов'язань. Ціни у гривнях.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <Pricing />

        {/* Comparison table */}
        <PricingCompare />

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
            <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight mb-5">
              Готові спробувати?
            </h2>
            <p className="text-black/45 max-w-lg mx-auto text-base leading-relaxed mb-8">
              Розпочніть із безкоштовної 14-денної версії Pro AI. Перехід між тарифами — в будь-який момент.
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
