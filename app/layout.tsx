import type { Metadata } from "next";
import "./globals.css";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: {
    default: "JustCRM — Українська AI-CRM для юристів",
    template: "%s | JustCRM",
  },
  description:
    "Від голосу — до рахунку за 30 секунд. CRM для юридичних фірм з AI-диктуванням, трекінгом часу та білінгом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" type="image/png" href={`${bp}/favicon.png`} />
        <link rel="apple-touch-icon" href={`${bp}/apple-touch-icon.png`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
