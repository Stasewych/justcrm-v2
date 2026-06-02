import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./blog/posts";

// Required so the route is emitted as a static file under `output: "export"`.
export const dynamic = "force-static";

const BASE = "https://justsolution.org";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/why", changeFrequency: "monthly", priority: 0.8 },
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
