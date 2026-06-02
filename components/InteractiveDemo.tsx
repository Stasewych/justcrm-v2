"use client";

// Hero "try the product live" widget. Shows the static crm-hero.webp as a
// teaser; on desktop the live iframe is PRELOADED in the background shortly
// after the page goes idle, so clicking "Спробувати" reveals an already-loaded
// demo instantly instead of making the visitor wait for the iframe to boot.
//
// The preload is deferred to requestIdleCallback (after window 'load') so the
// heavy cross-origin CRM app doesn't compete with the homepage's first paint or
// the hero canvas animations. On narrow viewports the demo opens in a new tab
// instead (embedding the full CRM chrome in a phone-width iframe is unusable),
// so we don't preload there and waste mobile data.
//
// Trade-off vs the old click-to-load behaviour: preloading creates a demo
// session on every desktop visit (the original code avoided this to keep
// analytics clean). Switch the preload trigger to a hover/pointer intent signal
// if that session noise becomes a problem.

import { useEffect, useState } from "react";

const DEMO_URL =
    process.env.NEXT_PUBLIC_DEMO_URL ?? "https://dev.crm.justsolution.org/demo";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function InteractiveDemo() {
    const [preload, setPreload] = useState(false); // iframe mounted + loading in bg
    const [live, setLive] = useState(false);       // iframe revealed to the user

    // Desktop: warm the iframe once the page is idle so the click is instant.
    useEffect(() => {
        if (window.innerWidth < 900) return; // mobile opens in a new tab; no preload
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
        if (typeof window !== "undefined" && window.innerWidth < 900) {
            window.open(DEMO_URL, "_blank", "noopener");
            return;
        }
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
                    style={{ visibility: "visible" }}
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    tabIndex={live ? 0 : -1}
                    aria-hidden={live ? undefined : true}
                />
            )}

            {!live && (
                <button
                    type="button"
                    onClick={start}
                    aria-label="Запустити інтерактивне демо JustCRM"
                    className="absolute inset-0 group block w-full p-0 border-0 bg-transparent cursor-pointer"
                >
                    <img
                        src={`${bp}/images/crm-hero.webp`}
                        alt="JustCRM — контакти, справи, білінг"
                        width={2600}
                        height={1436}
                        className="block w-full h-full object-cover"
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
            )}
        </div>
    );
}
