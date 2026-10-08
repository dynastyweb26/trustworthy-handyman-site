import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, Check, Clock, MapPin, Phone, Wrench, Zap, DoorClosed } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { SERVICE_AREA_TEXT } from "@/data/serviceArea";
import garageBefore from "@/assets/garage-door-2.png";
import garageAfter from "@/assets/garage-door-3.png";

const PHONE_DISPLAY = "945-344-4580";
const PHONE_HREF = "tel:+19453444580";

const highlights = [
  { icon: Clock, label: "Same-Day Service" },
  { icon: Award, label: "Free Quotes" },
  { icon: MapPin, label: "Based in Forney" },
];

const services = [
  {
    icon: Wrench,
    title: "Garage Door Repair",
    desc: "Door stuck, off track, noisy, or won't close? We diagnose the problem and fix it, often the same day you call.",
  },
  {
    icon: Zap,
    title: "Opener Repair & Replacement",
    desc: "Opener dead, slow, or unreliable? We repair or replace it and get your door opening smoothly again.",
  },
  {
    icon: DoorClosed,
    title: "New Garage Door Installation",
    desc: "Upgrade your curb appeal with a new door, from classic raised panels to modern styles with window inserts.",
  },
];

const problems = [
  "Broken or snapped springs",
  "Frayed or snapped cables",
  "Door off track or crooked",
  "Door won't open or close",
  "Opener not responding",
  "Loud, grinding, or jerky door",
  "Dented or damaged panels",
  "Old door that needs replacing",
];

const steps = [
  { title: "Call or request a quote", desc: "Tell us what's going on with your door. Calls get the fastest response." },
  { title: "Get a free quote", desc: "We look at the problem and give you an honest price before any work starts." },
  { title: "Door fixed", desc: "We complete the repair or installation, often the same day." },
];

const faqs = [
  {
    q: "Do you offer same-day garage door repair?",
    a: "Yes. Same-day service is available. Call 945-344-4580 for the fastest response.",
  },
  {
    q: "Are quotes free?",
    a: "Yes. Every quote is free, and you get the price before any work starts.",
  },
  {
    q: "What areas do you serve?",
    a: `We're based in Forney and serve ${SERVICE_AREA_TEXT}.`,
  },
];

const GarageDoors = () => {
  return (
    <>
      <Helmet>
        <title>Garage Door Repair & Installation in Forney & DFW | Cyril Handyman & Door LLC</title>
        <meta
          name="description"
          content="Same-day garage door repair, opener replacement, and new garage door installation in Forney, Rockwall, Mesquite, Garland, Dallas, and DFW. Free quotes. Call 945-344-4580."
        />
        <link rel="canonical" href="https://crazydoorhandyman.com/garage-doors" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary opacity-[0.07] blur-[120px]" />
        <div className="relative container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Garage Doors Are Our Specialty
            </p>
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
              Garage Door Repair &amp; Installation in Forney &amp; DFW
            </h1>
            <p className="max-w-md text-base leading-relaxed text-secondary-foreground/80">
              Broken spring, dead opener, or ready for a new door? Same-day service is available, and
              every quote is free.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
              >
                <a href={PHONE_HREF}>
                  <Phone size={18} aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground/30 bg-transparent font-heading text-sm uppercase tracking-widest text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              >
                <a href="#quote">Get a Free Quote</a>
              </Button>
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-center gap-2">
                  <h.icon className="text-primary" size={18} aria-hidden="true" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-widest">
                    {h.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="quote"
            className="scroll-mt-24 rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 lg:p-8"
          >
            <h2 className="mb-6 font-heading text-xl font-semibold uppercase tracking-wide">
              Request a Garage Door Quote
            </h2>
            <QuoteForm darkMode defaultService="Garage Door Services" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-2 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            Garage Door Services
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Repair, openers, and new installations, handled by a local crew.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8"
              >
                <s.icon className="text-primary" size={36} aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-2 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            Before &amp; After
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            A recent garage door replacement: same house, new door.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { src: garageBefore, label: "Before", alt: "Old white raised-panel garage door before replacement" },
              { src: garageAfter, label: "After", alt: "New dark brown garage door with window inserts after installation" },
            ].map((img) => (
              <figure key={img.label} className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="px-5 py-3 font-heading text-sm font-semibold uppercase tracking-widest">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="bg-background">
        <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
              Common Garage Door Problems We Fix
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              If your door isn't working right, don't force it. Give us a call and we'll take a look.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
            >
              <a href={PHONE_HREF}>
                <Phone size={18} aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <ul className="grid gap-3 rounded-lg border border-border bg-card p-6 sm:grid-cols-2 lg:p-8">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Check className="mt-0.5 shrink-0 text-primary" size={18} aria-hidden="true" />
                <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            How It Works
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-border bg-card p-8">
                <span className="font-heading text-3xl font-bold text-primary">{i + 1}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold uppercase tracking-wide">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + service area */}
      <section className="bg-background">
        <div className="container mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            Questions
          </h2>
          <dl className="flex flex-col gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-lg border border-border bg-card p-6">
                <dt className="font-heading text-base font-semibold uppercase tracking-wide">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Also need blinds or shades?{" "}
            <Link to="/blinds" className="font-semibold text-primary hover:underline">
              See our window blinds
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
            Garage door trouble? We can often fix it today.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
            >
              <a href={PHONE_HREF}>
                <Phone size={18} aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/30 bg-transparent font-heading text-sm uppercase tracking-widest text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
            >
              <a href="#quote">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GarageDoors;
