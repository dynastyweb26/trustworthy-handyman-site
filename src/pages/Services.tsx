import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SERVICE_AREA_TEXT } from "@/data/serviceArea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import mediaWall1 from "@/assets/media-wall-1.webp";
import mediaWall2 from "@/assets/media-wall-2.webp";
import mediaWall3 from "@/assets/media-wall-3.webp";
import mediaWall4 from "@/assets/media-wall-4.webp";
import garageModern from "@/assets/garage/modern-black-flush.webp";
import garageBrown from "@/assets/garage/brown-windows-front.webp";
import garageWhite from "@/assets/garage/after-white-windows.webp";
import garageInterior from "@/assets/garage/interior-double-windows.webp";
import kitchen1 from "@/assets/kitchen-1.webp";
import kitchen2 from "@/assets/kitchen-2.webp";
import kitchen3 from "@/assets/kitchen-3.webp";
import accentWall1 from "@/assets/accent-wall-1.webp";
import accentWall2 from "@/assets/accent-wall-2.webp";
import flooring1 from "@/assets/flooring-1.webp";
import flooring2 from "@/assets/flooring-2.webp";

interface GalleryItem {
  alt: string;
  src?: string;
}

interface ServiceSection {
  title: string;
  description: string;
  gallery: GalleryItem[];
  link?: { to: string; label: string };
}

const serviceSections: ServiceSection[] = [
  {
    title: "Garage Door Services",
    description:
      "From garage door repair to full installations and opener replacement — garage doors are our specialty. Same day service available across Forney, Mesquite, and Rockwall. Get a free quote today.",
    gallery: [
      { alt: "Modern black flush garage door with window strip", src: garageModern },
      { alt: "Dark brown garage door with window inserts", src: garageBrown },
      { alt: "New white raised-panel garage door with windows", src: garageWhite },
      { alt: "Two new white garage doors with windows, inside view", src: garageInterior },
    ],
    link: { to: "/garage-doors", label: "Garage Door Repair & Installation →" },
  },
  {
    title: "Media Wall Designs",
    description:
      "Custom entertainment walls and built-in shelving crafted with precision and care. We transform living spaces throughout Sunnyvale, Heath, and the surrounding Rockwall communities.",
    gallery: [
      { alt: "White built-in entertainment center with fireplace", src: mediaWall1 },
      { alt: "White built-in media wall with black slat backing", src: mediaWall2 },
      { alt: "Marble and wood slat media wall with LED lighting", src: mediaWall3 },
      { alt: "Custom built-in entertainment center in progress", src: mediaWall4 },
    ],
  },
  {
    title: "Kitchen Renovation",
    description:
      "Full kitchen renovation including cabinets, countertops, tile installation, and backsplash. Affordable home improvement done right — serving Terrell, Kaufman, and Crandall homeowners.",
    gallery: [
      { alt: "Marble countertop kitchen renovation in progress", src: kitchen1 },
      { alt: "Completed blue island kitchen renovation", src: kitchen2 },
      { alt: "White two-tone cabinet kitchen", src: kitchen3 },
    ],
  },
  {
    title: "Accent Walls",
    description:
      "Decorative accent walls and home decor features that add character and depth to any room. Trusted handyman work across Forney, Rockwall, Mesquite, and the DFW area.",
    gallery: [
      { alt: "Red LED marble slat accent wall", src: accentWall1 },
      { alt: "Black and gold geometric accent wall with lighting", src: accentWall2 },
    ],
  },
  {
    title: "Flooring & Carpet Removal",
    description:
      "LVP flooring installation, tile installation, hardwood, and full carpet removal. Experienced, affordable flooring services across Mesquite, Sunnyvale, and Rockwall.",
    gallery: [
      { alt: "LVP flooring installation in progress", src: flooring1 },
      { alt: "Completed dark hardwood flooring", src: flooring2 },
    ],
  },
  {
    title: "In-House Painting",
    description:
      "Interior painting and cabinet painting done clean and precise. Your local handyman for walls, trim, and more — serving Heath, Terrell, and Kaufman homeowners.",
    gallery: [
      { alt: "Freshly painted kitchen cabinets" },
      { alt: "Cabinet painting detail work" },
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Handyman & Remodeling Services | Garage Doors, Kitchens, Media Walls — Cyril Handyman & Door LLC</title>
        <meta
          name="description"
          content="Garage door repair and installation, kitchen renovation, media and accent walls, LVP flooring, and painting across Forney, Rockwall, Mesquite, Garland, Dallas, and DFW. Free quotes."
        />
        <link rel="canonical" href="https://crazydoorhandyman.com/services" />
        <meta property="og:url" content="https://crazydoorhandyman.com/services" />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-24">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight lg:text-5xl">
            Handyman &amp; Home Improvement Services
          </h1>
          <p className="mt-4 text-base text-secondary-foreground/70">
            Honest work. Quality results. Your trusted, affordable handyman faithfully serving {SERVICE_AREA_TEXT}.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((service, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <section
            key={service.title}
            className={`${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
          >
            <div
              className={`container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24 ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    to={service.link.to}
                    className="mt-6 inline-block font-heading text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
                  >
                    {service.link.label}
                  </Link>
                )}
              </div>

              <div className={`grid gap-3 ${service.gallery.length > 2 ? "grid-cols-2" : "grid-cols-1"} ${isReversed ? "lg:[direction:ltr]" : ""}`}>
                {service.gallery.map((item, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg border border-border bg-secondary/10 aspect-[4/3]"
                  >
                    {item.src ? (
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="px-4 text-center text-xs text-muted-foreground">
                          {item.alt}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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

export default Services;
