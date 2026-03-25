import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import mediaWall1 from "@/assets/media-wall-1.jpg";
import mediaWall2 from "@/assets/media-wall-2.jpg";
import mediaWall3 from "@/assets/media-wall-3.png";
import mediaWall4 from "@/assets/media-wall-4.jpg";
import garageDoor1 from "@/assets/garage-door-1.png";
import garageDoor2 from "@/assets/garage-door-2.png";
import garageDoor3 from "@/assets/garage-door-3.png";
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import kitchen3 from "@/assets/kitchen-3.jpg";
import accentWall1 from "@/assets/accent-wall-1.jpg";
import accentWall2 from "@/assets/accent-wall-2.jpg";

interface GalleryItem {
  alt: string;
  src?: string;
}

interface ServiceSection {
  title: string;
  description: string;
  gallery: GalleryItem[];
}

const serviceSections: ServiceSection[] = [
  {
    title: "Garage Door Services",
    description:
      "From installations to repairs and opener replacements, garage doors are our specialty. We get it done right the first time.",
    gallery: [
      { alt: "Rustic wooden garage door with iron hardware", src: garageDoor1 },
      { alt: "White panel garage door installation", src: garageDoor2 },
      { alt: "Dark garage door with window panels", src: garageDoor3 },
    ],
  },
  {
    title: "Media Wall Designs",
    description:
      "Custom built-in entertainment walls crafted with precision, lighting, and detail that transforms any living space.",
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
      "Full kitchen upgrades including cabinets, countertops, backsplash, and more — built to last and designed to impress.",
    gallery: [
      { alt: "Marble countertop kitchen renovation in progress", src: kitchen1 },
      { alt: "Completed blue island kitchen renovation", src: kitchen2 },
      { alt: "White two-tone cabinet kitchen", src: kitchen3 },
    ],
  },
  {
    title: "Accent Walls",
    description:
      "Decorative feature walls that add character, depth, and a custom feel to any room.",
    gallery: [
      { alt: "Black and gold accent wall close-up" },
      { alt: "Decorative accent wall detail" },
    ],
  },
  {
    title: "Flooring & Carpet Removal",
    description:
      "LVP, hardwood, tile installation, and full carpet removal. Clean, level, and built to last.",
    gallery: [
      { alt: "LVP flooring installation in progress" },
      { alt: "Completed dark hardwood flooring" },
    ],
  },
  {
    title: "In-House Painting",
    description:
      "Interior painting done clean, precise, and with care — walls, cabinets, trim, and more.",
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
        <title>Our Services | Smart Handyman — Texas</title>
        <meta
          name="description"
          content="Smart Handyman provides garage door services, media wall designs, kitchen renovation, accent walls, flooring, and interior painting across Texas."
        />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-24">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight lg:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-base text-secondary-foreground/70">
            Honest work. Quality results. Faithfully serving Texas.
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
              {/* Text */}
              <div className={isReversed ? "lg:[direction:ltr]" : ""}>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-tight lg:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>

              {/* Gallery */}
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
            Ready to get started? Let's talk.
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
