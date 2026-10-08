import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SERVICE_AREA_TEXT } from "@/data/serviceArea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blindsCategories } from "@/data/blinds";

const Blinds = () => {
  return (
    <>
      <Helmet>
        <title>Custom Window Blinds & Shades Installation | Forney & DFW — Cyril Handyman & Door LLC</title>
        <meta
          name="description"
          content="Zebra, roller, blackout, and solar patio screens, custom-fit and installed in Forney, Rockwall, Mesquite, Garland, Dallas, and across DFW. Free quotes."
        />
        <link rel="canonical" href="https://crazydoorhandyman.com/blinds" />
        <meta property="og:url" content="https://crazydoorhandyman.com/blinds" />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-24">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight lg:text-5xl">
            Window Blinds &amp; Shades
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-secondary-foreground/70">
            Custom-fit blinds and screens installed clean and precise — serving{" "}
            {SERVICE_AREA_TEXT}.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2">
            {blindsCategories.map((category) => (
              <Link
                key={category.slug}
                to={category.path}
                className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-md"
              >
                <h2 className="font-heading text-xl font-semibold uppercase tracking-wide group-hover:text-primary">
                  {category.name}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {category.shortDesc}
                </p>
                <span className="mt-2 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
              Get a free blinds quote
            </h2>
            <p className="max-w-md text-base leading-relaxed text-secondary-foreground/80">
              Tell us which rooms and styles you're thinking about, and we'll get back to you with a
              price. Prefer to talk? Give us a call.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
              >
                <a href="tel:+19453444580">
                  <Phone size={18} aria-hidden="true" />
                  Call 945-344-4580
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 lg:p-8">
            <QuoteForm darkMode defaultService="Window Blinds & Shades" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blinds;
