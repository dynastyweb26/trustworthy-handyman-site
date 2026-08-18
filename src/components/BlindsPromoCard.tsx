import { useState } from "react";
import { Link } from "react-router-dom";
import zebraPromo from "@/assets/blinds-promo-zebra.png";
import rollerPromo from "@/assets/blinds-promo-roller.webp";
import { cn } from "@/lib/utils";

/**
 * Homepage hero promo card announcing the new blinds service.
 *
 * Two layers on purpose:
 * - Outer `<Link>` only ever handles the fade-in-and-rise entrance (once,
 *   on mount) and the hover lift (`-translate-y-1`). The entrance animation
 *   is dropped entirely once it finishes, freeing `transform` for the hover
 *   transition — otherwise a finished-but-still-filling animation keeps
 *   pinning `transform` and the hover transition never visibly applies.
 * - Inner `<div>` (the visual white card) owns the resting pulse — a soft
 *   white glow breathing around the edges plus a subtle scale. Keeping it on
 *   a separate element from the hover lift means the two `transform`s can
 *   never fight over the same property. It's paused on hover via
 *   `group-hover` so it doesn't compete with the lift perceptually either.
 *
 * Both animations are gated behind `motion-safe:` so prefers-reduced-motion
 * users get the resting state with no animation of any kind.
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
        "group block w-full max-w-[380px] transition-transform duration-200 ease-out hover:-translate-y-1",
        !entranceDone && "motion-safe:animate-promo-entrance"
      )}
    >
      <div
        className={cn(
          "rounded-xl bg-white p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.40)]",
          "transition-[filter] duration-200 ease-out group-hover:drop-shadow-[0_20px_36px_rgba(0,0,0,0.45)]",
          "[animation-play-state:running] group-hover:[animation-play-state:paused]",
          "motion-safe:animate-promo-pulse-glow"
        )}
      >
        <div className="grid grid-cols-2 gap-2">
          <img
            src={zebraPromo}
            alt="Grey zebra shades installed in a living room window"
            className="h-[120px] w-full rounded-[8px] object-cover"
          />
          <img
            src={rollerPromo}
            alt="Dark roller shades in a bedroom"
            className="h-[120px] w-full rounded-[8px] object-cover"
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

        <span className="mt-4 flex h-14 w-full items-center justify-center rounded-full border-2 border-primary bg-transparent font-heading text-sm uppercase tracking-widest text-primary">
          View Our Blinds
        </span>
      </div>
    </Link>
  );
};

export default BlindsPromoCard;
