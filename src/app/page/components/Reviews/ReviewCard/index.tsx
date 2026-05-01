import { Quote, Star } from "lucide-react";

import {
  REVIEW_CARD_ARTICLE_CLASS,
  REVIEW_CARD_AUTHOR_CLASS,
  REVIEW_CARD_AVATAR_CLASS,
  REVIEW_CARD_BODY_CLASS,
  REVIEW_CARD_DATE_CLASS,
  REVIEW_CARD_META_CLASS,
  REVIEW_CARD_QUOTE_CLASS,
  REVIEW_CARD_STAR_CLASS,
  REVIEW_CARD_STARS_ROW_CLASS,
  REVIEW_CARD_TAG_CLASS,
} from "./constants";
import type { ReviewCardProps } from "./types";

const RATING_STARS = 5;

export const ReviewCard = ({
  category,
  date,
  body,
  authorName,
  authorInitial,
  locationLine,
}: ReviewCardProps) => (
  <article className={REVIEW_CARD_ARTICLE_CLASS}>
    <Quote className={REVIEW_CARD_QUOTE_CLASS} aria-hidden strokeWidth={1.25} />
    <div className={REVIEW_CARD_STARS_ROW_CLASS}>
      {Array.from({ length: RATING_STARS }, (_, index) => (
        <Star
          key={index}
          className={REVIEW_CARD_STAR_CLASS}
          aria-hidden
          strokeWidth={0}
        />
      ))}
    </div>
    <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3">
      <span className={REVIEW_CARD_TAG_CLASS}>{category}</span>
      <span className={REVIEW_CARD_DATE_CLASS}>{date}</span>
    </div>
    <blockquote className={REVIEW_CARD_BODY_CLASS}>
      <p>{body}</p>
    </blockquote>
    <footer className="relative z-10 mt-8 flex items-center gap-3">
      <div className={REVIEW_CARD_AVATAR_CLASS} aria-hidden>
        {authorInitial}
      </div>
      <div className="min-w-0">
        <cite className={REVIEW_CARD_AUTHOR_CLASS}>{authorName}</cite>
        <p className={REVIEW_CARD_META_CLASS}>{locationLine}</p>
      </div>
    </footer>
  </article>
);
