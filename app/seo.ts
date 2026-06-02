import type { Metadata } from "next";

/**
 * Site-wide SEO constants and a per-page metadata helper.
 *
 * `pageMeta` keeps every route's <title>, description, canonical and
 * Open Graph tags consistent. The root layout sets the title template
 * `%s | JustCRM — юридична CRM`, so each page passes only the variable
 * part of the title (the home page uses `absoluteTitle` to opt out).
 *
 * Open Graph / Twitter images come from the file conventions
 * `app/opengraph-image.png` and `app/twitter-image.png` (site-wide
 * default), so they are intentionally NOT set here. metadataBase
 * (set in the root layout) resolves the relative `path` values below
 * into absolute URLs.
 */
export const SITE = {
  name: "JustCRM",
  brandSuffix: "JustCRM — юридична CRM",
  url: "https://justsolution.org",
  locale: "uk_UA",
} as const;

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
      ...(publishedTime ? { publishedTime } : {}),
    },
  };
}
