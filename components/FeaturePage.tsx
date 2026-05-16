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
  image: string;
  points: { title: string; desc: string }[];
}

interface FeaturePageProps {
  tag: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overviewTitle: string;
  overviewDesc: string;
  cards: { title: string; desc: string }[];
  sections: SubFeature[];
}

function AppWindow({ image, label }: { image: string; label: string }) {
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
      <img src={`${bp}${image}`} alt={label} className="w-full h-auto" />
    </div>
  );
}

export default function FeaturePage({ tag, title, subtitle, heroImage, overviewTitle, overviewDesc, cards, sections }: FeaturePageProps) {
  return (
    <>
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#f4f4f4] relative overflow-hidden">
          <FloatingDots count={30} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10 text-center">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              {tag}
            </p>
            <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.08] tracking-tight mb-5 max-w-3xl mx-auto">
              {title}
            </h1>
            <p className="text-lg text-black/50 max-w-2xl mx-auto leading-relaxed mb-10">
              {subtitle}
            </p>
            <div className="flex items-center justify-center gap-3 mb-14">
              <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
              <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
            </div>
            <div className="max-w-[1100px] mx-auto">
              <AppWindow image={heroImage} label={tag} />
            </div>
          </div>
        </section>

        {/* Overview cards */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
              Головні інструменти
            </p>
            <h2 className="text-2xl lg:text-[36px] font-bold leading-[1.15] tracking-tight mb-3 max-w-3xl">
              {overviewTitle}
            </h2>
            <p className="text-[15px] text-black/45 leading-relaxed max-w-3xl mb-12">
              {overviewDesc}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="border border-black/6 rounded-xl p-6 hover:border-black/12 transition-colors"
                >
                  <h3 className="text-[15px] font-semibold mb-2">{card.title}</h3>
                  <p className="text-[13px] text-black/40 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detail sections — alternating */}
        {sections.map((sec, i) => (
          <section
            key={i}
            className={`py-16 lg:py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa] bg-dot-grid"}`}
          >
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
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
                  <div className="grid sm:grid-cols-2 gap-6">
                    {sec.points.map((pt, j) => (
                      <div key={j}>
                        <h4 className="text-[14px] font-semibold mb-1.5">{pt.title}</h4>
                        <p className="text-[13px] text-black/40 leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot */}
                <div>
                  <AppWindow image={sec.image} label={sec.title} />
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
