import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="font-heading text-xl font-bold uppercase tracking-wider">
              Smart Handyman
            </Link>
          </div>

          {/* Center Info */}
          <div className="flex flex-col items-center text-center">
            <p className="font-heading text-lg font-semibold uppercase tracking-wide">
              Smart Handyman
            </p>
            <p className="mt-1 text-sm text-secondary-foreground/70">
              Working Wholeheartedly for the Lord
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href="tel:9453444580"
              className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
            >
              <Phone size={16} />
              945-344-4580
            </a>
            <a
              href="mailto:smartworkhandyman@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
            >
              <Mail size={16} />
              smartworkhandyman@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/50">
            © 2026 Smart Handyman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
