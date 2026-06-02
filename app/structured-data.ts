import { SITE } from "./seo";
import { faqs } from "@/components/faqData";
import { BLOG_POSTS_BY_SLUG } from "./blog/posts";

/**
 * Schema.org / JSON-LD builders for the marketing site.
 *
 * Builders return plain schema "nodes" (no @context). Compose them into one
 * document per page with `graph(...)`, then render via <JsonLd>. Stable @id
 * anchors let nodes reference each other even across separate <script> blocks
 * on the same page (JSON-LD consumers merge all blocks) — e.g. the page-level
 * SoftwareApplication references the Organization defined once in the root
 * layout's siteGraph().
 *
 * Notes:
 *  - NO aggregateRating anywhere — there are no real reviews yet, and a faked
 *    rating is a Google manual-action risk.
 *  - Blog author is a Person ("Станіслав Маринович"), mirroring the visible
 *    byline on every blog card; structured data must match on-page content.
 */

type Node = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const SOFTWARE_ID = `${SITE.url}/#software`;

const LOGO_URL = `${SITE.url}/images/logo.png`;
const SAME_AS = ["https://www.linkedin.com/company/just-solution-ua/"];
const CONTACT_EMAIL = "stanislav.marynovych@justsolution.org";

const AUTHOR: Node = {
  "@type": "Person",
  name: "Станіслав Маринович",
  url: `${SITE.url}/team`,
};

const PUBLISHER: Node = {
  "@type": "Organization",
  name: SITE.name,
  logo: { "@type": "ImageObject", url: LOGO_URL },
};

/** Wrap one or more schema nodes into a single @graph document. */
export function graph(...nodes: Node[]): Node {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: "Just Solution",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: LOGO_URL },
    image: LOGO_URL,
    email: CONTACT_EMAIL,
    sameAs: SAME_AS,
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "uk-UA",
    publisher: { "@id": ORG_ID },
  };
}

export function softwareApplicationNode(): Node {
  return {
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE.url,
    inLanguage: "uk-UA",
    description:
      "Українська AI-CRM для юридичних фірм: справи, клієнти, документи та білінг в одній системі.",
    publisher: { "@id": ORG_ID },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "UAH",
      lowPrice: "400",
      highPrice: "600",
      offerCount: 3,
    },
    featureList: [
      "Управління справами — Kanban, таблиця, список, календар дедлайнів",
      "Білінг і тайм-трекінг з мультивалютними рахунками",
      "Документообіг, прив'язаний до справи",
      "AI-асистент — RAG-пошук, голосове введення, генерація документів",
      "Клієнтська база з повною історією взаємодій",
      "Задачі, доручення та контроль доступу по справі",
    ],
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? SITE.url : `${SITE.url}${it.path}`,
    })),
  };
}

export function faqNode(pagePath: string): Node {
  const url = pagePath === "/" ? SITE.url : `${SITE.url}${pagePath}`;
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "uk-UA",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogPostingNode(slug: string): Node {
  const p = BLOG_POSTS_BY_SLUG[slug];
  if (!p) throw new Error(`blogPostingNode: unknown blog slug "${slug}"`);
  const url = `${SITE.url}/blog/${slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: p.title,
    description: p.excerpt,
    image: `${SITE.url}${p.image}`,
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: "uk-UA",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: AUTHOR,
    publisher: PUBLISHER,
    isPartOf: { "@id": WEBSITE_ID },
  };
}

// ── Per-page composed graphs ──────────────────────────────────────────────
// Tiny call-site helpers so each page mounts exactly one <JsonLd>.

/** Root layout: site-wide Organization + WebSite, rendered once. */
export function siteGraph(): Node {
  return graph(organizationNode(), websiteNode());
}

/** Home: the product entity + the FAQ (FAQ is for AI; Google retired the rich result). */
export function homeGraph(): Node {
  return graph(softwareApplicationNode(), faqNode("/"));
}

/** Pricing: product entity + FAQ + breadcrumb. */
export function pricingGraph(): Node {
  return graph(
    softwareApplicationNode(),
    faqNode("/pricing"),
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name: "Ціни", path: "/pricing" },
    ]),
  );
}

/** Product feature pages: product entity + breadcrumb. */
export function productGraph(name: string, path: string): Node {
  return graph(
    softwareApplicationNode(),
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name, path },
    ]),
  );
}

/** Blog post: BlogPosting + breadcrumb (Головна › Блог › <стаття>). */
export function blogPostGraph(slug: string): Node {
  const p = BLOG_POSTS_BY_SLUG[slug];
  if (!p) throw new Error(`blogPostGraph: unknown blog slug "${slug}"`);
  return graph(
    blogPostingNode(slug),
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name: "Блог", path: "/blog" },
      { name: p.title, path: `/blog/${slug}` },
    ]),
  );
}
