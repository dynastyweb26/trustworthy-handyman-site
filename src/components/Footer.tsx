import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Crazy Door logo" className="h-10 w-10 brightness-0 invert" />
              <span className="font-heading text-xl font-bold uppercase tracking-wider">
                Crazy Door
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="font-heading text-lg font-semibold uppercase tracking-wide">
              Crazy Door
            </p>
            <p className="mt-1 text-sm text-secondary-foreground/70">
              Working Wholeheartedly for the Lord
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href="tel:9453444580"
              className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
            >
              <Phone size={16} />
              945-344-4580
            </a>
            <a
              href="mailto:crazydoor04@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
            >
              <Mail size={16} />
              crazydoor04@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/50">
            © 2026 Crazy Door. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
