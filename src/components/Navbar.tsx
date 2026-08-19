import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Blinds", path: "/blinds" },
  { label: "Contact", path: "/contact" },
];

const PHONE_DISPLAY = "945-344-4580";
const PHONE_HREF = "tel:+19453444580";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Sliding red underline: absolute position/width, driven off the active or
  // hovered link's measured box. opacity 0 hides it when no link is active.
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const location = useLocation();
  const linkEls = useRef(new Map<string, HTMLLIElement>());

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  const activePath = navLinks.find((l) => isActive(l.path))?.path;

  const moveIndicator = (path: string | undefined) => {
    const el = path ? linkEls.current.get(path) : undefined;
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    else setIndicator((prev) => ({ ...prev, opacity: 0 }));
  };

  // Compress the bar once scrolled past ~80px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rest the underline under the active link on route change; re-measure on resize.
  useLayoutEffect(() => {
    moveIndicator(activePath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePath, location.pathname]);

  useEffect(() => {
    const onResize = () => moveIndicator(activePath);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePath]);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b motion-safe:transition-[background-color,border-color,box-shadow] motion-safe:duration-300",
        scrolled
          ? "border-secondary-foreground/10 bg-secondary/80 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-secondary/70"
          : "border-transparent bg-secondary",
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between px-4 lg:px-8",
          "motion-safe:transition-[padding] motion-safe:duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Cyril Handyman & Door LLC — home">
          <img
            alt="Cyril Handyman & Door LLC logo"
            src={logo}
            className={cn(
              "w-auto object-contain motion-safe:transition-[height] motion-safe:duration-300",
              scrolled ? "h-9" : "h-12",
            )}
          />
          <span className="font-heading text-xl font-bold uppercase tracking-wider text-secondary-foreground">
            Cyril Handyman &amp; Door LLC
          </span>
        </Link>

        {/* Desktop links + phone CTA */}
        <div className="hidden items-center gap-8 md:flex">
          <ul
            className="relative flex items-center gap-8"
            onMouseLeave={() => moveIndicator(activePath)}
          >
            {navLinks.map((link) => (
              <li
                key={link.path}
                ref={(el) => {
                  if (el) linkEls.current.set(link.path, el);
                  else linkEls.current.delete(link.path);
                }}
              >
                <Link
                  to={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  onMouseEnter={() => moveIndicator(link.path)}
                  onFocus={() => moveIndicator(link.path)}
                  onBlur={() => moveIndicator(activePath)}
                  className={cn(
                    "flex h-11 items-center font-heading text-base font-medium uppercase tracking-widest text-secondary-foreground transition-opacity hover:opacity-100",
                    isActive(link.path) ? "opacity-100" : "opacity-80",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primary motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out"
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
            />
          </ul>

          <a
            href={PHONE_HREF}
            className="group inline-flex h-12 items-center gap-2 rounded-full border-2 border-primary bg-transparent px-5 font-heading text-base font-semibold uppercase tracking-widest text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            <Phone size={18} aria-hidden="true" className="text-primary transition-colors group-hover:text-primary-foreground" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-14 w-14 items-center justify-center text-secondary-foreground md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-secondary-foreground/10 bg-secondary md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={cn(
                    "flex min-h-14 items-center border-l-2 px-4 font-heading text-lg font-medium uppercase tracking-widest transition-colors",
                    isActive(link.path)
                      ? "border-primary text-secondary-foreground"
                      : "border-transparent text-secondary-foreground/80 hover:text-secondary-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={PHONE_HREF}
                className="group flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-5 font-heading text-lg font-semibold uppercase tracking-widest text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone size={20} aria-hidden="true" className="text-primary transition-colors group-hover:text-primary-foreground" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
