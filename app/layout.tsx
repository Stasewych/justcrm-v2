import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import CalendlyBookingTracker from "@/components/CalendlyBookingTracker";
import { siteGraph } from "@/app/structured-data";
import "./globals.css";

// Self-hosted via next/font — no browser request to Google, no layout shift.
// cyrillic subset is mandatory: the whole site is Ukrainian. Roboto is a
// variable font, so we omit `weight` and get every weight from one file.
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justsolution.org"),
  // Plain string (not a template) — the brand suffix is baked into every page's
  // title by pageMeta() in app/seo.ts. This avoids the Next gotcha where an
  // intermediate layout (app/blog/layout.tsx) with a string title would reset a
  // title.template for its child routes (blog posts would lose the suffix).
  title: "CRM для юристів та адвокатів | JustCRM — юридична CRM",
  description:
    "JustCRM — українська AI-CRM для юридичних фірм: справи, клієнти, документи та білінг в одній системі. Від голосу до рахунку за 30 секунд.",
  applicationName: "JustCRM",
  authors: [{ name: "Just Solution" }],
  creator: "Just Solution",
  publisher: "Just Solution",
  keywords: [
    "CRM для юристів",
    "CRM для адвокатів",
    "юридична CRM",
    "CRM для юридичної фірми",
    "автоматизація юридичної фірми",
    "облік судових справ",
    "білінг для юристів",
    "LegalTech Україна",
  ],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: "JustCRM",
    url: "/",
    title: "CRM для юристів та адвокатів | JustCRM — юридична CRM",
    description:
      "Українська AI-CRM для юридичних фірм: справи, клієнти, документи та білінг в одній системі.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${roboto.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={siteGraph()} />
        {children}
        <Analytics />
        <CalendlyBookingTracker />

        {/* Google tag (gtag.js) — Google Ads conversion tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18253448763"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18253448763');
          `}
        </Script>
      </body>
    </html>
  );
}
