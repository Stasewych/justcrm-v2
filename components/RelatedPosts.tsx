import Link from "next/link";
import { BLOG_POSTS } from "@/app/blog/posts";

/**
 * Internal-linking block for blog posts (Phase 2 P2.7). Builds two link sets
 * from one input — the current slug:
 *   - up to 3 related articles (same tag first, then most recent), and
 *   - one "product by topic" link mapped from the post's tag.
 * Tightens the topical cluster (blog↔blog) and routes readers from informational
 * posts to the matching commercial page (blog→product) — both crawl + GEO signals.
 */
const TAG_TO_PRODUCT: Record<string, { href: string; label: string }> = {
  "AI & Legal Tech": { href: "/product/ai", label: "AI-асистент для юристів" },
  "Продуктивність": { href: "/product/ai", label: "AI-асистент для юристів" },
  "Білінг": { href: "/product/billing", label: "Білінг і тайм-трекінг" },
  "Управління практикою": { href: "/product/cases", label: "Управління справами" },
  "Клієнти": { href: "/product/clients", label: "Клієнтська база" },
  "Інтеграції": { href: "/product/clients", label: "Клієнтська база й пошта" },
  "Безпека": { href: "/product/documents", label: "Документи й контроль доступу" },
  "Індустрія": { href: "/why", label: "Чим JustCRM відрізняється" },
};

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const current = BLOG_POSTS.find((p) => p.slug === currentSlug);
  if (!current) return null;

  const sameTag = BLOG_POSTS.filter((p) => p.slug !== currentSlug && p.tag === current.tag);
  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug && p.tag !== current.tag);
  const related = [...sameTag, ...others].slice(0, 3);

  const product = TAG_TO_PRODUCT[current.tag];

  return (
    <section className="py-14 lg:py-16 bg-white border-t border-black/8">
      <div className="max-w-3xl mx-auto px-8">
        <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-6">
          Читайте також
        </p>

        <div className="border-t border-black/10">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex items-baseline justify-between gap-6 py-4 border-b border-black/10"
            >
              <span className="text-[16px] lg:text-[17px] text-black/75 group-hover:text-black transition-colors leading-snug">
                {p.title}
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-wide text-black/30 shrink-0 whitespace-nowrap">
                {p.tag}
              </span>
            </Link>
          ))}
        </div>

        {product && (
          <p className="mt-7 text-[15px] text-black/55">
            Продукт по темі:{" "}
            <Link href={product.href} className="font-medium text-black/80 underline underline-offset-4 decoration-black/20 hover:decoration-black/60 transition-colors">
              {product.label}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
