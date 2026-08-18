import { useCallback, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/blinds";

interface BlindsGalleryProps {
  images: GalleryImage[];
  categoryName: string;
}

/**
 * A showroom-style photo gallery for a blinds category.
 *
 * Layout is a CSS-columns masonry (1 / 2 / 3 columns across mobile / tablet /
 * desktop) so the varied photo heights stack naturally instead of reading as a
 * templated grid. Each tile is a fixed frame with `overflow-hidden`; the image
 * gently zooms inside it on hover while a soft gradient reveals the caption.
 *
 * Clicking a tile opens a lightbox built on Radix Dialog — which gives us focus
 * trapping, scroll lock, Escape-to-dismiss, and aria wiring for free — with
 * left/right arrow-key navigation layered on top. Every motion is gated behind
 * `motion-safe:` so prefers-reduced-motion users get a static experience.
 */
const BlindsGallery = ({ images, categoryName }: BlindsGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const active = isOpen ? images[openIndex] : null;

  const showPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const roundControl =
    "flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white " +
    "transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  return (
    <>
      <div className="gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View larger: ${img.caption}`}
            className={cn(
              "group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-xl",
              "border border-border bg-muted focus:outline-none focus-visible:ring-2",
              "focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.05]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <span className="p-4 text-left text-base font-medium leading-snug text-white">
                {img.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-4 text-center text-base text-muted-foreground">
        Fabric made in Korea by Harrom Textile.
      </p>

      <DialogPrimitive.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <DialogPrimitive.Content
            aria-describedby={undefined}
            onKeyDown={(e) => {
              if (images.length < 2) return;
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                showPrev();
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                showNext();
              }
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 focus:outline-none sm:p-6"
          >
            <DialogPrimitive.Title className="sr-only">
              {active ? active.caption : `${categoryName} photo gallery`}
            </DialogPrimitive.Title>

            {active && (
              <figure className="flex w-full max-w-5xl flex-col items-center">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[76vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
                <figcaption className="mt-5 max-w-2xl text-center text-base text-white">
                  {active.caption}
                  {images.length > 1 && (
                    <span className="ml-2 text-white/70">
                      ({openIndex + 1} / {images.length})
                    </span>
                  )}
                </figcaption>
              </figure>
            )}

            <DialogPrimitive.Close className={cn(roundControl, "absolute right-4 top-4")} aria-label="Close gallery">
              <X className="h-6 w-6" />
            </DialogPrimitive.Close>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous photo"
                  className={cn(roundControl, "absolute left-2 top-1/2 -translate-y-1/2 sm:left-4")}
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next photo"
                  className={cn(roundControl, "absolute right-2 top-1/2 -translate-y-1/2 sm:right-4")}
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

export default BlindsGallery;
