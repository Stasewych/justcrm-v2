import Header from "./Header";
import Footer from "./Footer";
import GuideLines from "./GuideLines";
import FloatingDots from "./FloatingDots";
import Button from "./Button";
import ScreenshotCarousel, { CarouselScreen } from "./ScreenshotCarousel";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface SubFeature {
  tag: string;
  title: string;
  desc: string;
  /** Single static screenshot (legacy / fallback). */
  image?: string;
  /** Multiple screenshots → auto-advancing Stories-style carousel. */
  screens?: CarouselScreen[];
  points: { title: string; desc: string; icon: string }[];
}

interface FeaturePageProps {
  tag: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  sections: SubFeature[];
}

function MacBookMockup({ image, label }: { image?: string; label: string }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "4096 / 2731" }}>
      <img
        src={`${bp}/images/macbook-mockup.png`}
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
      />
      {image && (
        <img
          src={`${bp}${image}`}
          alt={label}
          className="absolute object-cover"
          style={{
            left: "25.29%",
            top: "23.76%",
            width: "50.46%",
            height: "47.57%",
          }}
        />
      )}
    </div>
  );
}

function MacPlaceholder({ label, image }: { label: string; image?: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10 flex flex-col w-full"
      style={{ aspectRatio: "16 / 9" }}
    >
      <div className="flex items-center h-9 px-4 bg-[#f6f6f6] border-b border-black/5 shrink-0">
        <div className="flex items-center gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] font-medium text-black/25">JustCRM — {label}</span>
        </div>
        <div className="w-[52px]" />
      </div>
      <div className="flex-1 w-full bg-[#ededed] overflow-hidden">
        {image ? (
          <img src={`${bp}${image}`} alt={`JustCRM — ${label}`} className="w-full h-full object-cover" />
        ) : null}
      </div>
    </div>
  );
}

export default function FeaturePage({ tag, title, subtitle, heroImage, sections }: FeaturePageProps) {
  return (
    <>
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero */}
        <section className="pt-4 lg:pt-5 pb-10 lg:pb-12 bg-[#f4f4f4] relative overflow-hidden">
          <FloatingDots count={30} />
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-3">
              {tag}
            </p>
            <h1 className="text-2xl lg:text-[30px] font-bold leading-[1.2] tracking-tight mb-3 max-w-2xl mx-auto">
              {title}
            </h1>
            <p className="text-sm lg:text-[14px] text-black/50 max-w-xl mx-auto leading-relaxed mb-5">
              {subtitle}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
              <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
            </div>
            <div className="max-w-[1100px] mx-auto mt-8 lg:-mt-32 lg:-mb-24">
              <MacBookMockup image={heroImage} label={tag} />
            </div>
          </div>
        </section>

        {/* Subfeature sections — alternating */}
        {sections.map((sec, i) => {
          const reversed = i % 2 === 1;
          const TextBlock = (
            <div>
              <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
                {sec.tag}
              </p>
              <h2 className="text-2xl lg:text-[32px] font-bold leading-[1.15] tracking-tight mb-4">
                {sec.title}
              </h2>
              <p className="text-[15px] text-black/45 leading-relaxed mb-8">
                {sec.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {sec.points.map((pt, j) => (
                  <div key={j}>
                    <div className="w-10 h-10 rounded-lg bg-black/[0.04] flex items-center justify-center mb-3 text-black/55">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={pt.icon} />
                      </svg>
                    </div>
                    <h4 className="text-[14px] font-semibold mb-1.5">{pt.title}</h4>
                    <p className="text-[13px] text-black/40 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
          const BannerBlock = (
            <div className="w-full">
              {sec.screens && sec.screens.length > 0 ? (
                <ScreenshotCarousel label={sec.tag} screens={sec.screens} indicator="segments" />
              ) : (
                <MacPlaceholder label={sec.tag} image={sec.image} />
              )}
            </div>
          );
          return (
            <section
              key={i}
              className={`py-14 sm:py-20 lg:py-32 lg:min-h-screen flex items-center relative overflow-hidden ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa] bg-dot-grid"}`}
            >
              <FloatingDots count={25} />
              <div className="relative z-10 w-full">
                {/* DOM order is ALWAYS text → screenshot, so on mobile (single
                    column) the reader always gets the copy before the visual.
                    On desktop the odd ("reversed") sections swap their columns
                    via order utilities, preserving the left/right alternation. */}
                <div
                  className={`grid gap-12 lg:gap-12 items-center px-8 ${
                    reversed
                      ? "lg:grid-cols-[1fr_minmax(380px,560px)] lg:pl-6 lg:pr-8"
                      : "lg:grid-cols-[minmax(380px,560px)_1fr] lg:pl-8 lg:pr-6"
                  }`}
                >
                  <div className={reversed ? "lg:order-2" : ""}>{TextBlock}</div>
                  <div className={reversed ? "lg:order-1" : ""}>{BannerBlock}</div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
          <FloatingDots count={35} />
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight mb-5">
              Юридична CRM, у якій зручно працювати
            </h2>
            <p className="text-black/45 max-w-xl mx-auto text-base leading-relaxed mb-10">
              Централізуйте управління справами, клієнтами, документами та фінансами Вашої юридичної фірми.
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
