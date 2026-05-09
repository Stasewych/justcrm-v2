import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrowserFrame from "@/components/BrowserFrame";
import HeroDots from "@/components/HeroDots";
import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import HalftoneImage from "@/components/HalftoneImage";
import SecurityCards from "@/components/SecurityCards";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#f4f4f4] overflow-hidden">
          <HeroDots />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 lg:pt-24 pb-0">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-5xl sm:text-6xl lg:text-[72px] font-light leading-[1.08] tracking-tight text-foreground"
                style={{ textShadow: "0 0 30px rgba(244,244,244,0.9), 0 0 60px rgba(244,244,244,0.7)" }}
              >
                Юридична CRM,
                <br />
                <span className="text-black/40">
                  у якій зручно працювати
                </span>
              </h1>

              <p
                className="mt-6 text-lg lg:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed"
                style={{ textShadow: "0 0 20px rgba(244,244,244,0.95), 0 0 40px rgba(244,244,244,0.8)" }}
              >
                Централізуйте управління справами, клієнтами, документами
                та фінансами вашої юридичної фірми. Від першого контакту
                з клієнтом до виставлення рахунку — в одній системі.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <Button href="/trial">Почати безкоштовно</Button>
                <Button href="/demo" variant="outline">Замовити демо</Button>
              </div>

              <p className="relative z-10 mt-3 inline-block text-sm text-black/70 font-medium bg-[#f4f4f4]/80 backdrop-blur-sm px-4 py-1 rounded-full">
                14 днів безкоштовно · Без картки · Ціни у гривнях
              </p>
            </div>

            {/* Browser frame */}
            <div className="mt-2 mx-auto max-w-5xl translate-y-16 lg:translate-y-20">
              <BrowserFrame />
            </div>
          </div>
        </section>

        {/* Spacer for the overflowing browser frame */}
        <div className="h-16 lg:h-20 bg-white" />

        {/* Clients */}
        <section className="py-10 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-8">
              Компанії, які вже працюють з нами
            </p>
            <Marquee duration={80}>
              <img src={`${bp}/images/Auxilium-dark.svg`} alt="Auxilium" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/everlegal.svg`} alt="Everlegal" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/NABU.png`} alt="НАБУ" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/Auxilium-dark.svg`} alt="Auxilium" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/everlegal.svg`} alt="Everlegal" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/NABU.png`} alt="НАБУ" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/Auxilium-dark.svg`} alt="Auxilium" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/everlegal.svg`} alt="Everlegal" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/NABU.png`} alt="НАБУ" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
            </Marquee>
          </div>
        </section>

        {/* Awards */}
        <section className="py-10 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-8">
              Нагороди та визнання
            </p>
            <Marquee duration={70} reverse>
              <div className="flex items-center gap-4 shrink-0">
                <img src={`${bp}/images/award-ucu.png`} alt="UCU Law" className="h-10 rounded grayscale opacity-60" />
                <div>
                  <div className="text-sm font-medium">Найкраща програма юридичної автоматизації</div>
                  <div className="text-xs text-black/40">1 місце · Хакатон УКУ · 2025</div>
                </div>
              </div>
              <div className="w-px h-8 bg-black/10 shrink-0" />
              <div className="flex items-center gap-4 shrink-0">
                <img src={`${bp}/images/award-ideaslab.png`} alt="Ideas Lab" className="h-10 rounded grayscale opacity-60" />
                <div>
                  <div className="text-sm font-medium">Найкращий юридичний стартап</div>
                  <div className="text-xs text-black/40">1 місце · Ideas Lab · 2025</div>
                </div>
              </div>
              <div className="w-px h-8 bg-black/10 shrink-0" />
              <div className="flex items-center gap-4 shrink-0">
                <img src={`${bp}/images/award-aimeetups.jpg`} alt="AI Meetups" className="h-10 rounded grayscale opacity-60" />
                <div>
                  <div className="text-sm font-medium">Найкраща інтеграція AI</div>
                  <div className="text-xs text-black/40">1 місце · AI Meetups × НАБУ · 2026</div>
                </div>
              </div>
            </Marquee>
          </div>
        </section>

        {/* Story section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Halftone illustration */}
              <div className="order-2 lg:order-1">
                <HalftoneImage src={`${bp}/images/problem-office.jpg`} />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2">
                <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[#1c1c1c]" />
                  Чому це важливо
                </p>
                <h2 className="text-3xl lg:text-[40px] font-light leading-[1.15] tracking-tight mb-10">
                  Хаос коштує грошей.{" "}
                  <strong className="font-medium">
                    Щодня.
                  </strong>
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-5">
                    <span className="font-mono text-[28px] font-light text-[#1c1c1c] leading-none mt-0.5">5</span>
                    <div>
                      <div className="text-[15px] font-medium">місць, де живе картка клієнта</div>
                      <div className="text-sm text-black/40 mt-0.5">Excel, Gmail, Notion, папка, голова партнера</div>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="font-mono text-[28px] font-light text-[#1c1c1c] leading-none mt-0.5">40%</span>
                    <div>
                      <div className="text-[15px] font-medium">оплачуваного часу не потрапляє в рахунок</div>
                      <div className="text-sm text-black/40 mt-0.5">Години фіксуються «на око» в кінці тижня</div>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="font-mono text-[28px] font-light text-[#1c1c1c] leading-none mt-0.5">150+</span>
                    <div>
                      <div className="text-[15px] font-medium">годин на рік юрист шукає документи</div>
                      <div className="text-sm text-black/40 mt-0.5">Шукати замість працювати</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        <SecurityCards />

        <Pricing />

        <FAQ />

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
              Спробуйте JustCRM вже сьогодні
            </h2>
            <p className="mt-5 text-black/50 max-w-lg mx-auto text-lg">
              Виведіть управління вашою юридичною практикою на новий рівень.
              Розпочніть із безкоштовної 14-денної версії.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <Button href="/trial">Почати безкоштовно</Button>
              <Button href="/demo" variant="outline">Замовити демо</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
