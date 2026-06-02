"use client";

import { useState } from "react";
import type { Faq } from "./faqData";

function FAQItem({ q, a }: Faq) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-medium pr-8 group-hover:text-black/70 transition-colors">
          {q}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 text-black/30 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-80 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-black/45 leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}

/**
 * Standalone FAQ accordion driven by an explicit `faqs` array — used for the
 * per-product question blocks on feature pages (the home/pricing FAQ uses the
 * fuller <FAQ> with its own CTA). Answers stay in the DOM even when collapsed,
 * so AI/scrapers read them; the matching FAQPage JSON-LD comes from the page graph.
 */
export default function FaqAccordion({
  faqs,
  heading = "Часті запитання",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#fafafa] bg-dot-grid relative overflow-hidden" id="faq">
      <div className="max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <p className="font-mono text-[11px] font-medium text-black/30 uppercase tracking-[0.15em] mb-4">
          Питання
        </p>
        <h2 className="text-2xl lg:text-[32px] font-light tracking-tight mb-8">{heading}</h2>
        <div>
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
