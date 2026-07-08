"use client";

import { useEffect } from "react";
import { trackTrialSignup } from "@/lib/gtag";

/**
 * Global click delegation: fires the Google Ads "Trial" conversion whenever any
 * link to registration is clicked — regardless of whether it renders via the
 * shared <Button> or a raw <a> (Header, Pricing, etc). Capture phase runs before
 * the browser opens the target="_blank" tab, so the event is sent in time.
 * count=One dedupes if a link is somehow matched twice.
 */
export default function TrialClickTracker() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const link = el?.closest?.<HTMLAnchorElement>(
        'a[href*="crm.justsolution.org/register"]',
      );
      if (link) trackTrialSignup();
    }
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);
  return null;
}
