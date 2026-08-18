import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blindsCategories } from "@/data/blinds";

const Blinds = () => {
  return (
    <>
      <Helmet>
        <title>Window Blinds & Shades | Zebra, Roller, Blackout & Solar Screens — Cyril Handyman & Door LLC</title>
        <meta
          name="description"
          content="Custom window blinds and shades — zebra, roller, blackout, and solar & patio screens — installed across Forney, Mesquite, Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty. Get a free quote today."
        />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-24">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight lg:text-5xl">
            Window Blinds &amp; Shades
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-secondary-foreground/70">
            Custom-fit blinds and screens installed clean and precise — serving Forney, Mesquite,
            Sunnyvale, Rockwall, Heath, Terrell, Crandall, Kaufman, and Talty.
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

      {/* Bottom CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
            Let's talk — get your free quote today.
          </h2>
          <div className="mt-8">
            <Button
              asChild
              className="bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blinds;
