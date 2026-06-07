import type { Metadata } from "next";

/**
 * Site-wide SEO constants and a per-page metadata helper.
 *
 * `pageMeta` keeps every route's <title>, description, canonical and
 * Open Graph tags consistent. The root layout sets the title template
 * `%s | JustCRM — юридична CRM`, so each page passes only the variable
 * part of the title (the home page uses `absoluteTitle` to opt out).
 *
 * Open Graph / Twitter images are set explicitly here (not via the
 * `app/opengraph-image.png` file convention) because Next shallow-merges
 * metadata: any page that exports its own `openGraph` object (every page
 * does, via this helper) REPLACES the inherited `openGraph` — including the
 * images the file convention injects at the root. The result was og:image
 * present only on the home page. Pointing at the same static files here
 * restores og:image on every route. metadataBase (set in the root layout)
 * resolves the relative paths below into absolute URLs.
 */
export const SITE = {
  name: "JustCRM",
  brandSuffix: "JustCRM — юридична CRM",
  url: "https://justsolution.org",
  locale: "uk_UA",
} as const;

/** Site-wide social share images (1200×630). Live as static files in app/. */
const OG_IMAGE = "/opengraph-image.png";
const TWITTER_IMAGE = "/twitter-image.png";

type PageMetaInput = {
  /** Variable part of the title; the root template appends the brand suffix. */
  title: string;
  description: string;
  /** Canonical path, e.g. "/product/billing" or "/" for the homepage. */
  path: string;
  /** Home page: render the full title verbatim, ignoring the template. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** ISO date — only for articles. */
  publishedTime?: string;
};

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  publishedTime,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.brandSuffix}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE.brandSuffix }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}
