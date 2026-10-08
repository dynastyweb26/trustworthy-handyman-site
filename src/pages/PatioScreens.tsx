import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, MapPin, Phone, Ruler, Sun, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import BlindsGallery from "@/components/BlindsGallery";
import { Button } from "@/components/ui/button";
import { SERVICE_AREA_TEXT } from "@/data/serviceArea";
import { patioReviews } from "@/data/reviews";
import type { GalleryImage } from "@/data/blinds";
import coveredCorner from "@/assets/patio/covered-patio-corner.webp";
import installDay from "@/assets/patio/install-day-gray.webp";
import sideYard from "@/assets/patio/side-yard-white.webp";
import poolGable from "@/assets/Patio-Screen-1.webp";

const PHONE_DISPLAY = "945-344-4580";
const PHONE_HREF = "tel:+19453444580";

const highlights = [
  { icon: Ruler, label: "Custom Made to Measure" },
  { icon: Award, label: "Free Quotes" },
  { icon: MapPin, label: "Based in Forney" },
];

const photos: GalleryImage[] = [
  {
    src: coveredCorner,
    alt: "Dark gray patio screens lowered on two sides of a covered patio attached to a two-story brick home",
    caption: "Two-sided covered patio",
  },
  {
    src: poolGable,
    alt: "Charcoal solar screen lowered over a large gabled patio opening beside a pool",
    caption: "Poolside patio",
  },
  {
    src: installDay,
    alt: "Light gray patio screen installed between brick columns, with a ladder and tools on the lawn",
    caption: "Install day",
  },
  {
    src: sideYard,
    alt: "Light gray screen lowered across a side-yard opening between two brick walls",
    caption: "Side-yard opening",
  },
];

const openness = [
  {
    icon: Sun,
    title: "1% Openness",
    desc: "Blocks the most sun and heat. The view out is more restricted. Good for west-facing patios that bake in the afternoon.",
  },
  {
    icon: Eye,
    title: "3% Openness",
    desc: "A clearer view through the screen, with a little less sun blocked. Good when you want to keep looking at the yard or pool.",
  },
];

const steps = [
  { title: "Free quote & measure", desc: "We look at your patio openings, measure, and give you a price." },
  { title: "Custom made", desc: "Your screens are made to your exact measurements. Lead time is about two weeks." },
  { title: "Installed", desc: "We install the screens and show you how they work." },
];

const faqs = [
  {
    q: "How long does it take?",
    a: "Screens are custom made to your measurements, with a lead time of about two weeks before install.",
  },
  {
    q: "Do patio screens give privacy?",
    a: "During the day, yes. Like any screen, they don't give privacy at night when the lights are on inside.",
  },
  {
    q: "Are quotes free?",
    a: "Yes. We measure and quote for free before any work starts.",
  },
  {
    q: "What areas do you serve?",
    a: `We're based in Forney and serve ${SERVICE_AREA_TEXT}.`,
  },
];

const PatioScreens = () => {
  return (
    <>
      <Helmet>
        <title>Patio & Solar Screen Installation in Forney & DFW | Cyril Handyman & Door LLC</title>
        <meta
          name="description"
          content="Custom solar patio screens that cut heat and glare, installed in Forney, Rockwall, Mesquite, Garland, Dallas, and across DFW. Free quotes. Call 945-344-4580."
        />
        <link rel="canonical" href="https://crazydoorhandyman.com/patio-screens" />
        <meta property="og:url" content="https://crazydoorhandyman.com/patio-screens" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary opacity-[0.07] blur-[120px]" />
        <div className="relative container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Patio &amp; Solar Screens</p>
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
              Patio Screen Installation in Forney &amp; DFW
            </h1>
            <p className="max-w-md text-base leading-relaxed text-secondary-foreground/80">
              Take back your patio from the Texas sun. Custom solar screens cut heat and glare, and every
              quote is free.
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
                  <span className="font-heading text-xs font-semibold uppercase tracking-widest">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="quote"
            className="scroll-mt-24 rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 lg:p-8"
          >
            <h2 className="mb-6 font-heading text-xl font-semibold uppercase tracking-wide">
              Request a Patio Screen Quote
            </h2>
            <QuoteForm darkMode defaultService="Patio & Solar Screens" />
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-2 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            Recent Patio Screen Installs
          </h2>
          <p className="mb-12 text-center text-muted-foreground">Select any photo to view it full size.</p>
          <BlindsGallery
            images={photos}
            categoryName="Patio screen"
            columns={4}
            footnote="Fabric made in Korea by Harrom Textile."
          />
        </div>
      </section>

      {/* Openness */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-2 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            Pick Your Screen
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Sunscreen fabric comes in two openness levels. We'll help you choose.
          </p>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {openness.map((o) => (
              <div key={o.title} className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8">
                <o.icon className="text-primary" size={36} aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">{o.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews reviews={patioReviews} />

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

      {/* FAQ */}
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
            Need shades for inside too?{" "}
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
            Ready for a cooler patio? Get your free quote.
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

export default PatioScreens;
