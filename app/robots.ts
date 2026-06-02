import type { MetadataRoute } from "next";

// Required so the route is emitted as a static file under `output: "export"`.
export const dynamic = "force-static";

const BASE = "https://justsolution.org";

// JustCRM wants AI-search visibility, so every crawler — classic and
// generative — is explicitly allowed. The AI list documents intent and
// makes it easy to disallow a specific bot later if needed.
const AI_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
