import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { BlindCategory } from "@/data/blinds";

interface BlindsDetailPageProps {
  data: BlindCategory;
}

const BlindsDetailPage = ({ data }: BlindsDetailPageProps) => {
  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-24">
          <p className="text-xs uppercase tracking-widest text-secondary-foreground/60">
            <Link to="/blinds" className="hover:text-primary">
              Blinds
            </Link>
            <span className="mx-2">/</span>
            {data.name}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight lg:text-5xl">
            {data.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-secondary-foreground/70">
            {data.shortDesc}
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="bg-background">
        <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
              Why Choose {data.name}
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              {data.description}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">
              Features &amp; Benefits
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
            Ready for new {data.name.toLowerCase()}? Get your free quote today.
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

export default BlindsDetailPage;
