import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Crazy Door — Trusted Handyman Serving East Texas & North Texas</title>
        <meta
          name="description"
          content="Contact Crazy Door for a free quote. Affordable, experienced, and licensed handyman services in Sulphur Springs, Dallas, Fort Worth, Rockwall, McKinney, Greenville and all of Texas. Same day service available."
        />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-16 text-center lg:px-8 lg:py-24">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base text-secondary-foreground/70">
            Get a free quote — we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-background">
        <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">
              Get in Touch
            </h2>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Whether you need same day garage door repair, a kitchen renovation, LVP flooring, or a fresh coat of paint — Crazy Door is your trusted local handyman serving Sulphur Springs, Dallas, Tyler, Fort Worth, Rockwall, McKinney, Greenville, Longview and all of East Texas and North Texas. Reach out for a free quote.
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="tel:9453444580"
                className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="font-semibold">945-344-4580</p>
                </div>
              </a>
              <a
                href="mailto:crazydoor04@gmail.com"
                className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="font-semibold">crazydoor04@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-semibold">Faithfully Serving All of Texas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm lg:p-8">
            <h2 className="mb-6 font-heading text-xl font-semibold uppercase tracking-wide">
              Send Us a Message
            </h2>
            <QuoteForm submitLabel="Send Message" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
