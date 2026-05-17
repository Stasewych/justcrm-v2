import Header from "./Header";
import Footer from "./Footer";
import GuideLines from "./GuideLines";
import FloatingDots from "./FloatingDots";
import Button from "./Button";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface SubFeature {
  tag: string;
  title: string;
  desc: string;
  image?: string;
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

function MacPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center h-9 px-4 bg-[#f6f6f6] border-b border-black/5">
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
      <div className="bg-[#ededed] aspect-[16/11]" />
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
        <section className="pt-10 lg:pt-12 pb-20 bg-[#f4f4f4] relative overflow-hidden">
          <FloatingDots count={30} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10 text-center">
            <div className="max-w-[1000px] mx-auto mb-10 lg:mb-14">
              <MacBookMockup image={heroImage} label={tag} />
            </div>
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              {tag}
            </p>
            <h1 className="text-2xl lg:text-[34px] font-bold leading-[1.2] tracking-tight mb-4 max-w-2xl mx-auto">
              {title}
            </h1>
            <p className="text-base lg:text-[15px] text-black/50 max-w-xl mx-auto leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
              <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
            </div>
          </div>
        </section>

        {/* Subfeature sections — alternating */}
        {sections.map((sec, i) => (
          <section
            key={i}
            className={`py-16 lg:py-24 relative overflow-hidden ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa] bg-dot-grid"}`}
          >
            <FloatingDots count={25} />
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
              <div className={`grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
              }`}>
                {/* Text */}
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

                {/* Banner */}
                <div>
                  <MacPlaceholder label={sec.tag} />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-white relative overflow-hidden">
          <FloatingDots count={35} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center relative z-10">
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
