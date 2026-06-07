import { SITE } from "./seo";
import { faqs, type Faq } from "@/components/faqData";
import { productFaqs } from "@/components/productFaqs";
import { SEGMENTS } from "@/components/segments";
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from "./blog/posts";

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

const TEAM: { name: string; role: string; linkedin: string }[] = [
  { name: "Тарас Зубачик", role: "Chief of Business Development & Product, Co-founder", linkedin: "https://www.linkedin.com/in/taras-zubachyk-95077a215/" },
  { name: "Станіслав Маринович", role: "Chief of Marketing & Project, Co-founder", linkedin: "https://www.linkedin.com/in/stanislav-marynovych/" },
  { name: "Мар'ян Петлований", role: "AI/ML Engineer & Co-founder", linkedin: "https://www.linkedin.com/in/marian-petlovanyi/" },
  { name: "Микола Ковалик", role: "CTO & Co-founder", linkedin: "https://www.linkedin.com/in/mykola-kovalyk/" },
];

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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      availableLanguage: ["Ukrainian"],
      areaServed: "UA",
    },
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

export function faqNode(pagePath: string, items: Faq[] = faqs): Node {
  const url = pagePath === "/" ? SITE.url : `${SITE.url}${pagePath}`;
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "uk-UA",
    mainEntity: items.map((f) => ({
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

/** Blog index: a Blog node listing every post + breadcrumb. Gives search and
    AI engines the full article inventory from one page. */
export function blogGraph(): Node {
  const url = `${SITE.url}/blog`;
  return graph(
    {
      "@type": "Blog",
      "@id": `${url}#blog`,
      url,
      name: "Блог JustCRM",
      description:
        "Статті про технології, AI та управління юридичною фірмою.",
      inLanguage: "uk-UA",
      publisher: { "@id": ORG_ID },
      blogPost: BLOG_POSTS.map((p) => ({
        "@type": "BlogPosting",
        "@id": `${SITE.url}/blog/${p.slug}#article`,
        headline: p.title,
        url: `${SITE.url}/blog/${p.slug}`,
        datePublished: p.date,
        author: AUTHOR,
      })),
    },
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name: "Блог", path: "/blog" },
    ]),
  );
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

/** Product feature pages: product entity + breadcrumb (+ FAQPage if the page
    has a per-product FAQ block in productFaqs). */
export function productGraph(name: string, path: string): Node {
  const pageFaqs = productFaqs[path];
  return graph(
    softwareApplicationNode(),
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name, path },
    ]),
    ...(pageFaqs ? [faqNode(path, pageFaqs)] : []),
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

/** Team page: a Person node per co-founder (E-E-A-T) + breadcrumb. */
export function teamGraph(): Node {
  const persons: Node[] = TEAM.map((m, i) => ({
    "@type": "Person",
    "@id": `${SITE.url}/team#person-${i + 1}`,
    name: m.name,
    jobTitle: m.role,
    worksFor: { "@id": ORG_ID },
    sameAs: [m.linkedin],
  }));
  return graph(
    ...persons,
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name: "Команда", path: "/team" },
    ]),
  );
}

// Fair, factual vs-questions for the "Чому JustCRM" page — feed FAQPage so AI
// answer engines can extract the comparison without disparaging competitors.
const WHY_FAQ: { q: string; a: string }[] = [
  {
    q: "Чим JustCRM відрізняється від Clio?",
    a: "Clio — міжнародний лідер з найбагатшим функціоналом, але інтерфейс англійською, ціни в доларах ($39–139 за користувача) і без української специфіки. JustCRM закриває той самий клас задач для української фірми: інтерфейс українською, ціни у гривнях з ФОП-рахунками та AI українською.",
  },
  {
    q: "Чи підходить Notion для юридичної фірми?",
    a: "Notion дуже гнучкий і має власний AI — на старті соло-практики його вистачає. Але юридичний білінг, ФОП-рахунки й облік справ зі строками доводиться збирати вручну. JustCRM дає це з коробки, українською і в гривні.",
  },
  {
    q: "Чи підходить ClickUp для юристів?",
    a: "ClickUp сильний у задачах і має вбудований тайм-трекінг та AI. Це універсальний інструмент керування роботою, без юридичних інвойсів, ФОП-документів і української специфіки — їх закриває спеціалізована CRM на кшталт JustCRM.",
  },
  {
    q: "JustCRM чи Excel — коли переходити з таблиць?",
    a: "Excel звичний і доступний, українською, і добре працює для простих списків на старті. Коли з'являється потреба в контролі доступу, нагадуваннях про строки й зв'язку документів зі справою — варто переходити на CRM на кшталт JustCRM.",
  },
];

/** "Чому JustCRM" page: product entity + comparison FAQ + breadcrumb. */
export function whyGraph(): Node {
  return graph(
    softwareApplicationNode(),
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/why#faq`,
      url: `${SITE.url}/why`,
      inLanguage: "uk-UA",
      mainEntity: WHY_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name: "Чому JustCRM", path: "/why" },
    ]),
  );
}

/** Segment landing page (/for/<slug>): product entity + breadcrumb + segment FAQ. */
export function segmentGraph(slug: string): Node {
  const seg = SEGMENTS[slug];
  if (!seg) throw new Error(`segmentGraph: unknown segment "${slug}"`);
  const path = `/for/${slug}`;
  return graph(
    softwareApplicationNode(),
    breadcrumbNode([
      { name: "Головна", path: "/" },
      { name: seg.h1, path },
    ]),
    faqNode(path, seg.faqs),
  );
}
