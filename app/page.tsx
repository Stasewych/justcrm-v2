import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrowserFrame from "@/components/BrowserFrame";
import HeroDots from "@/components/HeroDots";
import GuideLines from "@/components/GuideLines";
import FloatingDots from "@/components/FloatingDots";
import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import HalftoneImage from "@/components/HalftoneImage";
import ObeliskSVG from "@/components/ObeliskSVG";
import SecurityCards from "@/components/SecurityCards";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import MoreTools from "@/components/MoreTools";
import ScrollButtons from "@/components/ScrollButtons";
import Integrations from "@/components/Integrations";
import ScrollRevealQuote from "@/components/ScrollRevealQuote";
import InteractiveDemo from "@/components/InteractiveDemo";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero */}
        <section id="hero" className="relative bg-[#f4f4f4] overflow-hidden">
          <HeroDots />

          <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 pt-20 lg:pt-24 pb-0">
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
                className="mt-6 text-lg lg:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed"
                style={{ textShadow: "0 0 20px rgba(244,244,244,0.95), 0 0 40px rgba(244,244,244,0.8)" }}
              >
                Централізуйте управління справами, клієнтами, документами
                та фінансами вашої юридичної фірми. Від першого контакту
                з клієнтом до виставлення рахунку — в одній системі.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
                <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
              </div>

              <p className="relative z-10 mt-3 inline-block text-sm text-black/70 font-medium bg-[#f4f4f4]/80 backdrop-blur-sm px-4 py-1 rounded-full">
                14 днів безкоштовно · Повний функціонал Pro AI
              </p>
            </div>

            {/* Browser frame — click the play overlay to swap the screenshot
                for the live in-browser demo (iframe). The translate-y the
                static screenshot originally used pulled the iframe below
                its natural box, cropping the live CRM bottom; removed. */}
            <div className="my-8 mx-auto max-w-[1400px]">
              <BrowserFrame>
                <InteractiveDemo />
              </BrowserFrame>
            </div>
          </div>
        </section>

        {/* Spacer for the overflowing browser frame */}
        <div className="h-16 lg:h-20 bg-white" />

        {/* Clients */}
        <section className="py-10 bg-white border-t border-black/5 relative overflow-hidden">
          <FloatingDots count={20} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <p className="text-center font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-8">
              Компанії, які вже працюють з нами
            </p>
            <Marquee duration={80}>
              <img src={`${bp}/images/Auxilium-dark.svg`} alt="Auxilium" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/everlegal.svg`} alt="Everlegal" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/NABU.webp`} alt="НАБУ" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/Auxilium-dark.svg`} alt="Auxilium" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/everlegal.svg`} alt="Everlegal" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/NABU.webp`} alt="НАБУ" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/Auxilium-dark.svg`} alt="Auxilium" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/everlegal.svg`} alt="Everlegal" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
              <img src={`${bp}/images/NABU.webp`} alt="НАБУ" className="w-32 shrink-0 object-contain opacity-50 grayscale hover:opacity-80 transition-opacity" />
            </Marquee>
          </div>
        </section>

        {/* Awards */}
        <section className="py-10 bg-white border-t border-black/5 relative overflow-hidden">
          <FloatingDots count={20} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
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
                <img src={`${bp}/images/award-aimeetups.webp`} alt="AI Meetups" className="h-10 rounded grayscale opacity-60" />
                <div>
                  <div className="text-sm font-medium">Найкраща інтеграція AI</div>
                  <div className="text-xs text-black/40">1 місце · AI Meetups × НАБУ · 2026</div>
                </div>
              </div>
            </Marquee>
          </div>
        </section>

        {/* Problem section — Twenty-style */}
        <section id="problem" className="py-16 lg:py-20 bg-white relative overflow-hidden">
          <FloatingDots count={25} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
              {/* Left — halftone image */}
              <div>
                <HalftoneImage src={`${bp}/images/problem-columns.webp`} />
              </div>

              {/* Right — text */}
              <div>
                <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[#1c1c1c]" />
                  Проблема
                </p>

                <h2 className="text-3xl lg:text-[38px] font-light leading-[1.2] tracking-tight mb-12">
                  Юридична практика потребує системності,{" "}
                  <strong className="font-semibold">
                    але побудувати її — складно
                  </strong>
                </h2>

                <div className="space-y-8">
                  <div>
                    <div className="text-[15px] font-semibold mb-1">Розрізнені інструменти</div>
                    <div className="text-sm text-black/45 leading-relaxed">
                      Справи в Excel, листування в Gmail, документи в папках, фінанси в голові партнера. П'ять місць замість одного.
                    </div>
                  </div>

                  <div>
                    <div className="text-[15px] font-semibold mb-1">Втрачений оплачуваний час</div>
                    <div className="text-sm text-black/45 leading-relaxed">
                      До 40% робочих годин не потрапляють у рахунок. Час фіксується «на око» в кінці тижня.
                    </div>
                  </div>

                  <div>
                    <div className="text-[15px] font-semibold mb-1">Білінг з'їдає робочий час</div>
                    <div className="text-sm text-black/45 leading-relaxed">
                      До 10 годин на місяць кожен юрист витрачає на ручне внесення часу, розрахунок ставок і підготовку рахунків. У фірмі з 15 осіб це понад 1 800 годин на рік — при середній ставці €50/год це €90 000, які йдуть на адміністрування замість роботи з клієнтами.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollRevealQuote />

        <Features />

        <Integrations />

        <MoreTools />

        <SecurityCards />

        <Pricing />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
