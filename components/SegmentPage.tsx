import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import GuideLines from "./GuideLines";
import FloatingDots from "./FloatingDots";
import Button from "./Button";
import FaqAccordion from "./FaqAccordion";
import FeatureSections from "./FeatureSections";
import BlogCard from "./BlogCard";
import { SEGMENT_HERO, SEGMENT_FEATURES } from "./segmentFeatures";
import { BLOG_POSTS } from "@/app/blog/posts";
import type { Segment } from "./segments";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
const NOTCH = "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)";

/** Shared layout for the /for/<segment> landing pages. Data comes from
    components/segments.ts; the FAQPage JSON-LD is mounted by each page via
    segmentGraph(). */
export default function SegmentPage({ segment }: { segment: Segment }) {
  const hero = SEGMENT_HERO[segment.slug];
  const features = SEGMENT_FEATURES[segment.slug] ?? [];
  const related = (segment.relatedPosts ?? [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));
  return (
    <>
      <Header />
      <GuideLines />
      <main className="flex-1 relative z-[1]">
        {/* Hero — compact text + large product screenshot (matches product feature pages) */}
        <section className="pt-4 lg:pt-5 pb-10 lg:pb-12 bg-[#f4f4f4] relative overflow-hidden">
          <FloatingDots count={30} />
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-3">
              {segment.eyebrow}
            </p>
            <h1 className="text-2xl lg:text-[30px] font-bold leading-[1.2] tracking-tight mb-3 max-w-2xl mx-auto">
              {segment.h1}
            </h1>
            <p className="text-sm lg:text-[14px] text-black/50 max-w-2xl mx-auto leading-relaxed mb-5">
              {segment.lead}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button href="https://crm.justsolution.org/register">Почати безкоштовно</Button>
              <Button href="https://calendly.com/stanislav-marynovych-justsolution/30min" variant="outline">Замовити демо</Button>
            </div>

            {hero && (
              <div className="mx-auto mt-8 lg:mt-10" style={{ maxWidth: 1320 }}>
                <img
                  src={`${bp}${hero.image}`}
                  alt={segment.h1}
                  width={hero.width}
                  height={hero.height}
                  fetchPriority="high"
                  decoding="async"
                  className="block w-full h-auto select-none pointer-events-none"
                />
              </div>
            )}
          </div>
        </section>

        {/* Curated feature sections with banners — different per audience */}
        {features.length > 0 && <FeatureSections sections={features} />}

        {/* Why you — light editorial section */}
        <section className="py-20 lg:py-28 bg-[#fafafa] bg-dot-grid relative overflow-hidden">
          <FloatingDots count={16} />
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10 lg:gap-20">
              <div>
                <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-6">
                  Чому саме вам
                </p>
                <h2 className="text-3xl lg:text-[40px] font-light tracking-tight leading-[1.1]">
                  Зроблено під те,
                  <br className="hidden lg:block" /> як ви працюєте
                </h2>
              </div>
              <div className="border-t border-black/10">
                {segment.values.map((v, i) => (
                  <div key={i} className="grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-7 py-7 border-b border-black/10">
                    <span className="font-mono text-xl lg:text-2xl font-light text-black/20 tabular-nums leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg lg:text-xl font-light tracking-tight text-foreground mb-2">{v.title}</h3>
                      <p className="text-[15px] text-black/55 leading-relaxed max-w-xl">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's inside — premium link cards into the product pages */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <FloatingDots count={16} />
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
            <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-3">
              Що входить
            </p>
            <h2 className="text-2xl lg:text-[34px] font-light tracking-tight mb-10 lg:mb-12">
              Усе необхідне — в одній системі
            </h2>
            <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
              {segment.products.map((p, i) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group relative flex flex-col bg-white rounded-2xl p-7 lg:p-8 ring-1 ring-black/[0.07] shadow-sm transition-all duration-300 hover:ring-black/20 hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-0.5"
                >
                  <span className="font-mono text-[12px] text-black/20 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg lg:text-xl font-medium tracking-tight mt-5 mb-2 group-hover:text-black transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-[14px] text-black/45 leading-relaxed mb-8">{p.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wide text-black/45 group-hover:text-black transition-colors">
                    Детальніше
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Matching reading — segment → blog, tightens the internal-link cluster */}
        {related.length > 0 && (
          <section className="py-14 lg:py-20 bg-white border-t border-black/8 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
              <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-8">
                Матеріали по темі
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {related.map((p) => (
                  <BlogCard
                    key={p.slug}
                    post={{
                      slug: p.slug,
                      title: p.title,
                      excerpt: p.excerpt,
                      image: p.image,
                      date: p.displayDate,
                      tag: p.tag,
                      readTime: p.readTime,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Segment FAQ — feeds FAQPage JSON-LD */}
        <FaqAccordion faqs={segment.faqs} />

        {/* Dark CTA */}
        <section className="py-20 lg:py-28 bg-[#1c1c1c] text-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl lg:text-[44px] font-light tracking-tight mb-5">
              Спробуйте JustCRM у вашій практиці
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed mb-10">
              30 днів безкоштовно з повним функціоналом Pro AI. Або замовте демонстрацію —
              покажемо, як перенести вашу практику без втрати даних.
            </p>
            <div className="flex items-center justify-center gap-3">
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
