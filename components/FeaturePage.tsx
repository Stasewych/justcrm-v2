import Header from "./Header";
import Footer from "./Footer";
import GuideLines from "./GuideLines";
import FloatingDots from "./FloatingDots";
import Button from "./Button";
import FeatureSections, { type SubFeature } from "./FeatureSections";
import FaqAccordion from "./FaqAccordion";
import type { Faq } from "./faqData";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "@/app/blog/posts";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface FeaturePageProps {
  tag: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  /** Optional larger hero treatment: when heroImageMaxWidth is set, the mockup
      renders at that container width with its true ratio (heroImageWidth/Height)
      and without the default upward overlap — for a trimmed, frame-filling
      mockup that should read big. Left unset → original 1100px overlapped look. */
  heroImageWidth?: number;
  heroImageHeight?: number;
  heroImageMaxWidth?: number;
  sections: SubFeature[];
  /** Optional page-specific FAQ block, rendered before the closing CTA. */
  faqs?: Faq[];
  /** Optional blog slugs to surface as "matching reading" (product → blog links). */
  relatedPosts?: string[];
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

export default function FeaturePage({ tag, title, subtitle, heroImage, heroImageWidth, heroImageHeight, heroImageMaxWidth, sections, faqs, relatedPosts }: FeaturePageProps) {
  const heroLarge = heroImageMaxWidth != null;
  const related = (relatedPosts ?? [])
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));
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
            <div
              className={`mx-auto ${heroLarge ? "mt-8 lg:mt-10" : "max-w-[1100px] mt-8 lg:-mt-24 lg:-mb-20"}`}
              style={heroLarge ? { maxWidth: heroImageMaxWidth } : undefined}
            >
              {heroImage ? (
                <img
                  src={`${bp}${heroImage}`}
                  alt={tag}
                  width={heroImageWidth ?? 2200}
                  height={heroImageHeight ?? 1467}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto select-none pointer-events-none"
                />
              ) : (
                <MacBookMockup label={tag} />
              )}
            </div>
          </div>
        </section>

        {/* Subfeature sections — alternating (shared renderer) */}
        <FeatureSections sections={sections} />

        {/* Matching reading — product → blog, as an image card gallery */}
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

        {/* Page-specific FAQ — extractable Q&A for the page's intent cluster */}
        {faqs && faqs.length > 0 && <FaqAccordion faqs={faqs} />}

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
