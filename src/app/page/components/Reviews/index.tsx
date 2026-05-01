import { Reveal } from "@/components/Reveal";

import {
  REVIEW_CARDS,
  REVIEWS_EYEBROW,
  REVIEWS_HEADLINE_PRIMARY,
} from "./constants";
import { ReviewCard } from "./ReviewCard";
import { reviewsSectionId } from "./utils";

export const Reviews = () => (
  <section
    id={reviewsSectionId}
    aria-labelledby={`${reviewsSectionId}-heading`}
    className="border-b-2 border-evocore-red/50 bg-evocore-charcoal py-12 sm:py-16 md:py-20"
  >
    <Reveal className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 text-center sm:gap-12 sm:px-6 md:px-8">
      <header className="flex w-full flex-col items-center">
        <h2
          id={`${reviewsSectionId}-heading`}
          className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red"
        >
          {REVIEWS_EYEBROW}
        </h2>
        <div className="mx-auto mt-4 max-w-3xl">
          <p className="font-display text-3xl font-bold uppercase leading-snug tracking-tight text-evocore-white sm:text-4xl lg:text-5xl">
            {REVIEWS_HEADLINE_PRIMARY}
          </p>
        </div>
      </header>

      <ul className="grid w-full list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
        {REVIEW_CARDS.map((review) => (
          <li key={review.authorName} className="min-w-0">
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);
