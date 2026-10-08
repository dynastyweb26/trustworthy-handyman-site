// Google Ads conversion tracking. Inactive until the env vars are set in Vercel:
//   VITE_GOOGLE_ADS_ID          e.g. AW-123456789
//   VITE_ADS_CALL_CLICK_LABEL   conversion label for "Phone call click"
//   VITE_ADS_QUOTE_FORM_LABEL   conversion label for "Quote form submit"
// Vite inlines these at build time, so redeploy after changing them.

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;
const CALL_LABEL = import.meta.env.VITE_ADS_CALL_CLICK_LABEL as string | undefined;
const FORM_LABEL = import.meta.env.VITE_ADS_QUOTE_FORM_LABEL as string | undefined;

const conversion = (label: string | undefined) => {
  if (!ADS_ID || !label || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: `${ADS_ID}/${label}` });
};

export const trackQuoteFormSubmit = () => conversion(FORM_LABEL);

export function initTracking() {
  if (!ADS_ID || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ADS_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ADS_ID);

  // Any tel: link anywhere on the site (navbar, sticky bar, page CTAs, footer).
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) conversion(CALL_LABEL);
    },
    { capture: true },
  );
}
