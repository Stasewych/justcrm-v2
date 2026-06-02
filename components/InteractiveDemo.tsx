"use client";

// Hero "try the product live" widget.
//
// Desktop (>= lg / 1024px): shows the static crm-hero.webp as a teaser and
// PRELOADS the live iframe hidden in the background once the page goes idle, so
// clicking "Спробувати" reveals an already-loaded demo instantly.
//
// Mobile (< lg): the full-CRM demo is desktop-only and unusable / broken in a
// phone-width view, so we DO NOT offer a way to launch it at all — the teaser is
// a plain, non-interactive product preview with no play button and no iframe.
//
// The desktop preload is deferred to requestIdleCallback (after window 'load')
// so the heavy cross-origin CRM app doesn't compete with the homepage's first
// paint or the hero canvas animations.
//
// Trade-off (desktop): preloading creates a demo session on every desktop visit
// (the original click-to-load code avoided this for analytics cleanliness).
// Switch the preload trigger to a hover/pointer intent signal if that matters.

import { useEffect, useState } from "react";

const DEMO_URL =
    process.env.NEXT_PUBLIC_DEMO_URL ?? "https://dev.crm.justsolution.org/demo";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Single source of truth for "is this a desktop where the embedded demo makes
// sense" — matches the `lg:` breakpoint used in the markup below (and the
// <1024 mobile cutover ScrollRevealQuote already uses site-wide).
const DESKTOP_MIN = 1024;

export default function InteractiveDemo() {
    const [preload, setPreload] = useState(false); // iframe mounted + loading in bg
    const [live, setLive] = useState(false);       // iframe revealed to the user

    // Desktop only: warm the iframe once the page is idle so the click is instant.
    useEffect(() => {
        if (window.innerWidth < DESKTOP_MIN) return; // no demo on mobile, no preload
        let cancelled = false;
        const warm = () => { if (!cancelled) setPreload(true); };
        const schedule = () => {
            const ric = (window as Window & {
                requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
            }).requestIdleCallback;
            if (ric) ric(warm, { timeout: 2500 });
            else setTimeout(warm, 1500);
        };
        if (document.readyState === "complete") schedule();
        else window.addEventListener("load", schedule, { once: true });
        return () => {
            cancelled = true;
            window.removeEventListener("load", schedule);
        };
    }, []);

    const start = () => {
        // Launch is desktop-only; the button is hidden below lg, but guard anyway.
        if (typeof window !== "undefined" && window.innerWidth < DESKTOP_MIN) return;
        setPreload(true); // in case the click beats the idle preload
        setLive(true);
    };

    return (
        <div className="relative w-full" style={{ aspectRatio: "2876 / 1588" }}>
            {(preload || live) && (
                <iframe
                    src={DEMO_URL}
                    title="JustCRM — live demo"
                    className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
                        live ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    tabIndex={live ? 0 : -1}
                    aria-hidden={live ? undefined : true}
                />
            )}

            {!live && (
                <div className="absolute inset-0">
                    <img
                        src={`${bp}/images/crm-hero.webp`}
                        alt="JustCRM — контакти, справи, білінг"
                        width={2600}
                        height={1436}
                        fetchPriority="high"
                        decoding="async"
                        className="block w-full h-full object-cover"
                    />
                    {/* Launch affordance — desktop only. Mobile gets a static
                        preview with no way to open the desktop-only demo. */}
                    <button
                        type="button"
                        onClick={start}
                        aria-label="Запустити інтерактивне демо JustCRM"
                        className="hidden lg:flex absolute inset-0 group w-full p-0 border-0 cursor-pointer items-center justify-center bg-black/15 hover:bg-black/30 transition-colors"
                    >
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
                    </button>
                </div>
            )}
        </div>
    );
}
