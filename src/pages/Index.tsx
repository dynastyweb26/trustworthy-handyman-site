import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "@/assets/logo.png";
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
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const services = [
  { icon: Wrench, title: "Garage Door Services", desc: "Installations, repairs & opener replacements — our specialty." },
  { icon: Tv, title: "Media Wall Designs", desc: "Custom built-in entertainment walls with precision & detail." },
  { icon: ChefHat, title: "Kitchen Renovation", desc: "Full kitchen upgrades — cabinets, countertops, backsplash & more." },
  { icon: Layers, title: "Accent Walls", desc: "Feature walls that add character, depth & a custom feel." },
  { icon: Square, title: "Flooring & Carpet Removal", desc: "LVP, hardwood, tile & full carpet removal." },
  { icon: Paintbrush, title: "In-House Painting", desc: "Interior painting — walls, cabinets, trim & more." },
];

const badges = [
  { icon: MapPin, label: "Faithfully Serving Texas" },
  { icon: Award, label: "Quality Guaranteed" },
  { icon: ThumbsUp, label: "No Job Too Small" },
];

const galleryPlaceholders = [
  { alt: "Garage door installation by Crazy Door", src: gallery1 },
  { alt: "Custom media wall design with LED lighting", src: gallery2 },
  { alt: "Kitchen renovation with marble countertops", src: gallery3 },
  { alt: "Black and gold accent wall", src: gallery4 },
  { alt: "LVP flooring installation", src: gallery5 },
  { alt: "Overhead garage storage rack installation", src: gallery6 },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Crazy Door | Handyman Near Me — Garage Doors, Renovation & Home Improvement — Sulphur Springs, East Texas</title>
        <meta
          name="description"
          content="Crazy Door is your trusted, affordable handyman serving Sulphur Springs, Dallas, Tyler, East Texas and all of North Texas. Garage door repair, kitchen renovation, media walls, accent walls, LVP flooring, cabinet painting and interior painting. Get a free quote today."
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[5%]">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="h-[70vh] w-auto max-w-none brightness-0 invert opacity-[0.06]"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 40%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 40%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
          }}
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rotate-12 bg-primary opacity-[0.08]"
          style={{ clipPath: "polygon(0 60%, 100% 30%, 100% 100%, 0 100%)" }}
        />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary opacity-[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary opacity-[0.04] blur-[100px]" />

        <div className="relative container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight lg:text-6xl">
              Crazy Door
            </h1>
            <p className="font-heading text-lg font-medium uppercase tracking-wider text-primary">
              Working Wholeheartedly for the Lord
            </p>
            <p className="text-sm uppercase tracking-widest text-secondary-foreground/60">
              Faithfully Serving Texas
            </p>
            <p className="max-w-md text-base leading-relaxed text-secondary-foreground/80">
              Looking for a trusted handyman near you in East Texas or North Texas? Crazy Door delivers affordable, experienced home improvement services — from garage door repair and opener installation to kitchen renovation, LVP flooring, cabinet painting, and interior painting. Serving Sulphur Springs, Dallas, Tyler, Longview, Rockwall, Greenville, McKinney, Fort Worth and surrounding areas. Get a free quote today.
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
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-10 px-4 py-10 md:gap-16 lg:px-8">
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
          <h2 className="mb-2 text-center font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">
            What We Do
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Your local handyman for garage doors, renovation, home decor, and more across East Texas and North Texas.
          </p>
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
                className="aspect-[4/3] overflow-hidden rounded-lg border border-border"
              >
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
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
