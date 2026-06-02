"use client";

// Hero "try the product live" widget. Shows the static crm-hero.webp as a
// teaser and only mounts the live iframe after the visitor clicks — so we
// don't auto-create a demo session for every page load (which would write
// to sessionStorage on app.justcrm.com on first visit and look spammy in
// analytics). On narrow viewports the demo opens in a new tab instead;
// embedding the full CRM chrome inside a phone-width iframe is unusable.

import { useState } from "react";

const DEMO_URL =
    process.env.NEXT_PUBLIC_DEMO_URL ?? "https://dev.crm.justsolution.org/demo";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function InteractiveDemo() {
    const [live, setLive] = useState(false);

    const start = () => {
        if (typeof window !== "undefined" && window.innerWidth < 900) {
            window.open(DEMO_URL, "_blank", "noopener");
            return;
        }
        setLive(true);
    };

    if (live) {
        return (
            <iframe
                src={DEMO_URL}
                title="JustCRM — live demo"
                // Match the static crm-hero.webp aspect (2600×1436 ≈ 1.81).
                // Inline `aspectRatio` instead of Tailwind's arbitrary
                // `aspect-[2876/1588]` — the arbitrary-class JIT misses
                // unusual ratios in some Tailwind v4 setups, leaving the
                // iframe its 150px default height and looking cropped.
                className="block w-full border-0"
                style={{ aspectRatio: "2876 / 1588" }}
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={start}
            aria-label="Запустити інтерактивне демо JustCRM"
            className="relative group block w-full p-0 border-0 bg-transparent cursor-pointer"
        >
            <img
                src={`${bp}/images/crm-hero.webp`}
                alt="JustCRM — контакти, справи, білінг"
                className="block w-full h-auto"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/30 transition-colors">
                <span className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium shadow-2xl shadow-black/30 group-hover:scale-105 transition-transform">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    Спробувати CRM прямо зараз
                </span>
            </span>
        </button>
    );
}
