import { Link, useLocation } from "react-router-dom";
import { FileText, Phone } from "lucide-react";

const PHONE_HREF = "tel:+19453444580";

// Pages that have an inline quote form with id="quote".
const PAGES_WITH_QUOTE_FORM = new Set(["/", "/garage-doors", "/patio-screens", "/blinds"]);

/**
 * Fixed bottom bar on phones/tablets: one-tap call + jump to a quote form.
 * Renders a spacer so it never covers the footer. Hidden on lg and up,
 * where the navbar phone button is always visible.
 */
const MobileCallBar = () => {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;

  const quoteClasses =
    "flex flex-1 items-center justify-center gap-2 border-l border-secondary-foreground/15 font-heading text-sm font-semibold uppercase tracking-widest text-secondary-foreground";

  return (
    <>
      <div aria-hidden="true" className="h-16 lg:hidden" />
      <div
        className="fixed inset-x-0 bottom-0 z-50 flex h-16 bg-secondary shadow-[0_-4px_16px_rgba(0,0,0,0.25)] lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={PHONE_HREF}
          className="flex flex-[1.3] items-center justify-center gap-2 bg-primary font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground"
        >
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
        {PAGES_WITH_QUOTE_FORM.has(pathname) ? (
          <a href="#quote" className={quoteClasses}>
            <FileText size={18} aria-hidden="true" />
            Free Quote
          </a>
        ) : (
          <Link to="/contact" className={quoteClasses}>
            <FileText size={18} aria-hidden="true" />
            Free Quote
          </Link>
        )}
      </div>
    </>
  );
};

export default MobileCallBar;
