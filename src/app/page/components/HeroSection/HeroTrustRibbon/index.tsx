import { StarIcon } from "lucide-react";

import {
  HERO_TRUST_COPY_CLASS,
  HERO_TRUST_RIBBON_CLASS,
  HERO_TRUST_STAR_CLASS,
  HERO_TRUST_TEXT,
} from "../constants";

export const HeroTrustRibbon = () => (
  <div className={HERO_TRUST_RIBBON_CLASS}>
    <StarIcon strokeWidth={1.25} aria-hidden className={HERO_TRUST_STAR_CLASS} />
    <p className={HERO_TRUST_COPY_CLASS}>{HERO_TRUST_TEXT}</p>
    <StarIcon strokeWidth={1.25} aria-hidden className={HERO_TRUST_STAR_CLASS} />
  </div>
);
