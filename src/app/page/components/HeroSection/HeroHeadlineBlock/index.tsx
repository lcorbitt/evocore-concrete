import { AnimatedUnderscore } from "../../AnimatedUnderscore";
import {
  HERO_HEADLINE,
  HERO_HEADLINE_PRIMARY_CLASS,
  HERO_HEADLINE_SECONDARY,
  HERO_HEADLINE_SECONDARY_CLASS,
  HERO_HEADLINE_STACK_CLASS,
} from "../constants";

export const HeroHeadlineBlock = () => (
  <div className={HERO_HEADLINE_STACK_CLASS}>
    <h1 className={HERO_HEADLINE_PRIMARY_CLASS}>{HERO_HEADLINE}</h1>
    <h1 className={HERO_HEADLINE_SECONDARY_CLASS}>{HERO_HEADLINE_SECONDARY}</h1>
    <AnimatedUnderscore />
  </div>
);
