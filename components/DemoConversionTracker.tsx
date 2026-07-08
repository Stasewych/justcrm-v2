"use client";

import { useEffect } from "react";
import { trackDemoBooked } from "@/lib/gtag";

/**
 * Fires the Google Ads "Demo" conversion once, on mount. Rendered only on
 * /demo-thank-you — the page Calendly redirects to after a confirmed booking.
 */
export default function DemoConversionTracker() {
  useEffect(() => {
    trackDemoBooked();
  }, []);
  return null;
}
