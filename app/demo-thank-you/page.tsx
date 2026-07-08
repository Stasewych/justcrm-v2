import type { Metadata } from "next";
import { pageMeta } from "@/app/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import DemoConversionTracker from "@/components/DemoConversionTracker";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Демо заплановано",
    description:
      "Дякуємо за запис на демонстрацію JustCRM. Деталі зустрічі надіслано на вашу пошту.",
    path: "/demo-thank-you",
  }),
  // Confirmation page — keep it out of search.
  robots: { index: false, follow: false },
};

export default function DemoThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
        {/* Fires the Google Ads Demo conversion on mount */}
        <DemoConversionTracker />

        <p className="font-mono text-[12px] font-medium uppercase tracking-wide text-black/50">
          JustCRM
        </p>
        <h1 className="mt-4 font-mono text-2xl sm:text-3xl font-medium uppercase tracking-wide text-black">
          Демо заплановано
        </h1>
        <p className="mt-6 max-w-md text-black/70">
          Дякуємо! Деталі зустрічі надіслано на вашу пошту. До зустрічі — покажемо,
          як JustCRM економить час вашій команді.
        </p>
        <div className="mt-10">
          <Button href="/">На головну</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
