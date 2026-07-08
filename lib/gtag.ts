// Google Ads conversion tracking (gtag.js).
// Base tag "AW-18253448763" is loaded in app/layout.tsx.
//
// Two conversions:
//  - Trial: proxy on click of «Почати безкоштовно» (registration finishes on
//    crm.justsolution.org, whose code we don't control, so we count intent).
//  - Demo: fired on /demo-thank-you, the Calendly confirmation redirect target,
//    so it counts a real booking rather than a click.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const AW_ID = "AW-18253448763";

const TRIAL_SEND_TO = `${AW_ID}/rFmzCKDHyswcELuM9v9D`;
const DEMO_SEND_TO = `${AW_ID}/k185CI39y8wcELuM9v9D`;

/** Trial — click on «Почати безкоштовно» (proxy conversion). */
export function trackTrialSignup() {
  window.gtag?.("event", "conversion", {
    send_to: TRIAL_SEND_TO,
    value: 200,
    currency: "UAH",
  });
}

/** Demo — confirmed Calendly booking (called from /demo-thank-you). */
export function trackDemoBooked() {
  window.gtag?.("event", "conversion", {
    send_to: DEMO_SEND_TO,
    value: 500,
    currency: "UAH",
  });
}

export {};
