import type { MetadataRoute } from "next";

// Required so the route is emitted as a static file under `output: "export"`.
export const dynamic = "force-static";

const BASE = "https://justsolution.org";

// Blog posts — slug + publish date (ISO). Mirrors the post list in
// app/blog/page.tsx; keep in sync when posts are added.
const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: "ai-transforms-legal-practice", date: "2026-05-16" },
  { slug: "voice-dictation-legal", date: "2026-05-12" },
  { slug: "billing-eats-lawyer-time", date: "2026-05-10" },
  { slug: "excel-to-crm-migration", date: "2026-05-08" },
  { slug: "data-security-law-firms", date: "2026-05-03" },
  { slug: "ai-document-generation", date: "2026-05-01" },
  { slug: "crm-vs-excel-legal", date: "2026-04-25" },
  { slug: "client-intake-funnel", date: "2026-04-24" },
  { slug: "data-protection-legal-crm", date: "2026-04-18" },
  { slug: "kanban-case-management", date: "2026-04-12" },
  { slug: "multicurrency-invoicing", date: "2026-04-05" },
  { slug: "rag-knowledge-base", date: "2026-03-28" },
  { slug: "legal-tech-ukraine-2026", date: "2026-03-20" },
  { slug: "email-integration-legal-crm", date: "2026-03-12" },
];

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/product/cases", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/clients", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/billing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/documents", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/ai", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/tasks", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product/tables", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/sales", changeFrequency: "monthly", priority: 0.6 },
  { path: "/team", changeFrequency: "yearly", priority: 0.4 },
  { path: "/offer", changeFrequency: "yearly", priority: 0.2 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Build-time timestamp for the static marketing pages.
  const lastBuilt = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: r.path === "/" ? BASE : `${BASE}${r.path}`,
    lastModified: lastBuilt,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
