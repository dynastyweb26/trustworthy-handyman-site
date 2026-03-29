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
import flooring1 from "@/assets/flooring-1.jpg";
import flooring2 from "@/assets/flooring-2.jpg";

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
      "From garage door repair to full installations and opener replacement — garage doors are our specialty. Same day service available across Sulphur Springs, Tyler, Longview, and East Texas. Get a free quote today.",
    gallery: [
      { alt: "Rustic wooden garage door with iron hardware", src: garageDoor1 },
      { alt: "White panel garage door installation", src: garageDoor2 },
      { alt: "Dark garage door with window panels", src: garageDoor3 },
    ],
  },
  {
    title: "Media Wall Designs",
    description:
      "Custom entertainment walls and built-in shelving crafted with precision and care. We transform living spaces across Dallas, Fort Worth, McKinney, Rockwall and North Texas.",
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
      "Full kitchen renovation including cabinets, countertops, tile installation, and backsplash. Affordable home improvement done right — serving East Texas and North Texas homeowners.",
    gallery: [
      { alt: "Marble countertop kitchen renovation in progress", src: kitchen1 },
      { alt: "Completed blue island kitchen renovation", src: kitchen2 },
      { alt: "White two-tone cabinet kitchen", src: kitchen3 },
    ],
  },
  {
    title: "Accent Walls",
    description:
      "Decorative accent walls and home decor features that add character and depth to any room. Trusted handyman work across Sulphur Springs, Greenville, and surrounding areas.",
    gallery: [
      { alt: "Red LED marble slat accent wall", src: accentWall1 },
      { alt: "Black and gold geometric accent wall with lighting", src: accentWall2 },
    ],
  },
  {
    title: "Flooring & Carpet Removal",
    description:
      "LVP flooring installation, tile installation, hardwood, and full carpet removal. Experienced, affordable flooring services across East Texas and North Texas.",
    gallery: [
      { alt: "LVP flooring installation in progress", src: flooring1 },
      { alt: "Completed dark hardwood flooring", src: flooring2 },
    ],
  },
  {
    title: "In-House Painting",
    description:
      "Interior painting and cabinet painting done clean and precise. Your local handyman for walls, trim, and more — serving Dallas, Tyler, Longview, McKinney and all of Texas.",
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
        <title>Handyman Services Near Me | Garage Door Repair, Renovation & Home Improvement — Crazy Door Texas</title>
        <meta
          name="description"
          content="From garage door repair and opener installation to kitchen renovation, custom entertainment walls, built-in shelving, LVP flooring, tile installation, and interior painting — Crazy Door is the best handyman in East Texas, Dallas, Tyler, Longview and surrounding areas."
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
            Honest work. Quality results. Your trusted, affordable handyman faithfully serving Sulphur Springs, East Texas, Dallas, and all of North Texas.
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
