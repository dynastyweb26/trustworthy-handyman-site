import { Star } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, type Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

interface ReviewsProps {
  reviews: Review[];
  heading?: string;
  className?: string;
}

const Stars = ({ size = 16 }: { size?: number }) => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={size} className="fill-[#FBBC04] text-[#FBBC04]" />
    ))}
  </div>
);

const Reviews = ({ reviews, heading = "What Customers Say", className }: ReviewsProps) => (
  <section className={cn("bg-background", className)}>
    <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight lg:text-4xl">{heading}</h2>
        <div className="flex items-center gap-2">
          <Stars size={20} />
          <p className="text-sm font-semibold">
            {GOOGLE_RATING} on Google · {GOOGLE_REVIEW_COUNT} reviews
          </p>
        </div>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.id} className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
            <Stars />
            <blockquote className="flex-1 text-sm leading-relaxed text-foreground">"{r.text}"</blockquote>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {r.name} · Google review
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Reviews;
