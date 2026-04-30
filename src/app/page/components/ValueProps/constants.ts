import type { ValuePropCardData } from "./types";

export const VALUE_PROPS_HEADING = "Results and experience" as const;

export const VALUE_PROP_CARDS: readonly ValuePropCardData[] = [
  {
    icon: "calculator",
    title: "Free Quote",
    subtext: "Get a 100% free estimate on your project",
  },
  {
    icon: "dollar-sign",
    title: "Competitive Pricing",
    subtext: "We focus on delivering quality products at fair prices.",
  },
  {
    icon: "map-pin-house",
    title: "Local Business",
    subtext: "Family owned and operated, committed to service you can trust.",
  },
  {
    icon: "shield-check",
    title: "Licensed & Insured",
    subtext: "Fully licensed and certified to deliver professional service.",
  },
] as const;
