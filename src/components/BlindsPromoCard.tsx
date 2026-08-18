import { useState } from "react";
import { Link } from "react-router-dom";
import zebraPromo from "@/assets/blinds-promo-zebra.png";
import rollerPromo from "@/assets/blinds-promo-roller.webp";
import { cn } from "@/lib/utils";

/**
 * Homepage hero promo card announcing the new blinds service.
 * Entrance (fade + rise) plays once on mount; once it finishes we drop that
 * animation so `transform` is free again for the hover lift — otherwise the
 * finished entrance animation keeps pinning `transform` and the hover
 * transition never visibly applies. The shadow-pulse keeps running the whole
 * time. Both are gated behind `motion-safe:` so prefers-reduced-motion users
 * get the resting state with no animation at all.
 */
const BlindsPromoCard = () => {
  const [entranceDone, setEntranceDone] = useState(false);

  return (
    <Link
      to="/blinds"
      onAnimationEnd={(e) => {
        if (e.animationName === "card-in") setEntranceDone(true);
      }}
      className={cn(
        "block w-full max-w-[380px] rounded-xl bg-white p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.40)]",
        "transition-[transform,filter] duration-200 ease-out hover:-translate-y-1 hover:drop-shadow-[0_20px_36px_rgba(0,0,0,0.45)]",
        entranceDone ? "motion-safe:animate-promo-pulse" : "motion-safe:animate-promo-entrance"
      )}
    >
      <div className="grid grid-cols-2 gap-2">
        <img
          src={zebraPromo}
          alt="Grey zebra shades installed in a living room window"
          className="h-[100px] w-full rounded-[8px] object-cover"
        />
        <img
          src={rollerPromo}
          alt="White roller shades in a bedroom"
          className="h-[100px] w-full rounded-[8px] object-cover"
        />
      </div>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
        New Service
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">
        Now Offering Window Blinds &amp; Shades
      </h3>
      <p className="mt-2 text-base text-muted-foreground">
        Zebra, roller, blackout and solar screens. Book a consultation.
      </p>

      <span className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground">
        View Our Blinds
      </span>
    </Link>
  );
};

export default BlindsPromoCard;
