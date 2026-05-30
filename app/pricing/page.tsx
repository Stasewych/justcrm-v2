import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";
import Pricing from "@/components/Pricing";
import PricingCompare from "@/components/PricingCompare";
import FAQ from "@/components/FAQ";
import Button from "@/components/Button";

export default function PricingPage() {
  return (
    <>
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        <div className="bg-white bg-dot-grid relative overflow-hidden">
          <FloatingDots count={60} />

          <div className="relative z-10">
            {/* Hero */}
            <div className="pt-28 pb-12">
              <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
                <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
                  Тарифи
                </p>
                <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-5">
                  Оберіть план
                  <span className="font-normal text-black/30"> для Вашої фірми</span>
                </h1>
                <p className="text-lg text-black/50 max-w-2xl mx-auto leading-relaxed">
                  14 днів безкоштовно з повним функціоналом Pro AI.
                </p>
              </div>
            </div>

            {/* Pricing cards */}
            <Pricing transparent />

            {/* Comparison table */}
            <PricingCompare transparent />

            {/* FAQ + CTA */}
            <FAQ transparent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
