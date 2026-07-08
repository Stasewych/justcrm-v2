"use client";

import { useEffect } from "react";
import { trackDemoBooked } from "@/lib/gtag";

/**
 * Fires the Google Ads "Demo" conversion when a booking is completed inside an
 * embedded Calendly widget (e.g. the /sales page iframe). Calendly posts a
 * `calendly.event_scheduled` message to the parent window on a confirmed
 * booking. Buttons that open Calendly in a new tab don't reach this listener —
 * those are covered by the /demo-thank-you redirect instead. The conversion's
 * count is set to "One", so the two paths can't double-count the same user.
 */
export default function CalendlyBookingTracker() {
  useEffect(() => {
    function handler(e: MessageEvent) {
      if (
        e.origin === "https://calendly.com" &&
        typeof e.data === "object" &&
        e.data !== null &&
        (e.data as { event?: string }).event === "calendly.event_scheduled"
      ) {
        trackDemoBooked();
      }
    }
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);
  return null;
}
