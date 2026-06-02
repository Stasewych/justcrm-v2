import type { MetadataRoute } from "next";

// Required so the route is emitted as a static file under `output: "export"`.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JustCRM — юридична CRM для юристів",
    short_name: "JustCRM",
    description:
      "Українська AI-CRM для юридичних фірм: справи, клієнти, документи та білінг в одній системі.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    lang: "uk",
    icons: [
      { src: "/favicon.png", sizes: "any", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
