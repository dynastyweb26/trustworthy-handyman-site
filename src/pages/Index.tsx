import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Wrench,
  Tv,
  ChefHat,
  Layers,
  Square,
  Paintbrush,
  Shield,
  MapPin,
  Award,
  ThumbsUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Wrench, title: "Garage Door Services", desc: "Installations, repairs & opener replacements — our specialty." },
  { icon: Tv, title: "Media Wall Designs", desc: "Custom built-in entertainment walls with precision & detail." },
  { icon: ChefHat, title: "Kitchen Renovation", desc: "Full kitchen upgrades — cabinets, countertops, backsplash & more." },
  { icon: Layers, title: "Accent Walls", desc: "Feature walls that add character, depth & a custom feel." },
  { icon: Square, title: "Flooring & Carpet Removal", desc: "LVP, hardwood, tile & full carpet removal." },
  { icon: Paintbrush, title: "In-House Painting", desc: "Interior painting — walls, cabinets, trim & more." },
];

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: MapPin, label: "Faithfully Serving Texas" },
  { icon: Award, label: "Quality Guaranteed" },
  { icon: ThumbsUp, label: "No Job Too Small" },
];

const galleryPlaceholders = [
  { alt: "Garage door installation by Smart Handyman" },
  { alt: "Custom media wall design with LED lighting" },
  { alt: "Kitchen renovation with marble countertops" },
  { alt: "Black and gold accent wall" },
  { alt: "LVP flooring installation" },
  { alt: "Interior cabinet painting" },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Smart Handyman | Garage Doors, Renovations & Home Services — Texas</title>
        <meta
          name="description"
          content="Smart Handyman offers garage door services, kitchen renovation, media walls, flooring, accent walls, and painting across Texas. Quality work done with integrity."
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight lg:text-6xl">
              Smart Handyman
            </h1>
            <p className="font-heading text-lg font-medium uppercase tracking-wider text-primary">
              Working Wholeheartedly for the Lord
            </p>
            <p className="text-sm uppercase tracking-widest text-secondary-foreground/60">
              Faithfully Serving Texas
            </p>
            <p className="max-w-md text-base leading-relaxed text-secondary-foreground/80">
              Quality home improvement done with integrity and care. From garage doors to full renovations, we treat every project like it's our own.
            </p>
            <div>
              <Button
                asChild
                className="bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 lg:p-8">
            <h2 className="mb-6 font-heading text-xl font-semibold uppercase tracking-wide">
              Request a Quote
            </h2>
            <QuoteForm darkMode />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-foreground">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 lg:px-8">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
              <badge.icon className="text-primary" size={32} />
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-background">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            What We Do
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                to="/services"
                key={service.title}
                className="group flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <service.icon className="text-primary transition-transform group-hover:scale-110" size={40} />
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            A Look at Our Work
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryPlaceholders.map((item, i) => (
              <div
                key={i}
                className="flex aspect-[4/3] items-center justify-center rounded-lg bg-secondary/10 border border-border"
              >
                <span className="px-4 text-center text-xs text-muted-foreground">{item.alt}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <Link to="/services">See All Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
