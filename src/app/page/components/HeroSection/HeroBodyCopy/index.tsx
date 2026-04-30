import {
  HERO_BODY_CLASS,
  HERO_BODY_EMPHASIS_CLASS,
  HERO_TAGLINE_EMPHASIS,
  HERO_TAGLINE_LEAD,
} from "../constants";

export const HeroBodyCopy = () => (
  <p className={HERO_BODY_CLASS}>
    {HERO_TAGLINE_LEAD}
    <span className={HERO_BODY_EMPHASIS_CLASS}>{HERO_TAGLINE_EMPHASIS}</span>
  </p>
);
