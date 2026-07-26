// Google Ads conversion tracking (gtag.js).
// Base tag "AW-18340117087" is loaded in app/layout.tsx.
//
// Two conversions:
//  - Trial: proxy on click of «Почати безкоштовно» (registration finishes on
//    crm.justsolution.org, whose code we don't control, so we count intent).
//    Wired globally in components/TrialClickTracker.tsx.
//  - Demo: fired on /demo-thank-you (Calendly redirect target) and on
//    calendly.event_scheduled from the embedded widget.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const AW_ID = "AW-18340117087";
const TRIAL_SEND_TO = `${AW_ID}/8-UbCJaS8NYcEN_0n6lE`;
const DEMO_SEND_TO = `${AW_ID}/ZrfLCJmS8NYcEN_0n6lE`;

/**
 * Timing-safe gtag call. On pages where the conversion fires immediately (e.g.
 * /demo-thank-you on mount), gtag.js may not be initialised yet. We ensure the
 * dataLayer queue and a gtag shim exist, so the event is queued and processed
 * once the real tag loads instead of being dropped.
 */
function gtagSafe(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag(...args);
}

/** Trial — click on «Почати безкоштовно» (proxy conversion). */
export function trackTrialSignup() {
  gtagSafe("event", "conversion", {
    send_to: TRIAL_SEND_TO,
    value: 150,
    currency: "UAH",
  });
}

/** Demo — confirmed Calendly booking. */
export function trackDemoBooked() {
  gtagSafe("event", "conversion", {
    send_to: DEMO_SEND_TO,
    value: 750,
    currency: "UAH",
  });
}

export {};
