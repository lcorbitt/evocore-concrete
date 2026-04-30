import type { ProcessStep } from "./types";

export const PROCESS_EYEBROW = "OUR PROCESS" as const;

export const PROCESS_HEADLINE_PRIMARY = "CLEAR STEPS" as const;

export const PROCESS_HEADLINE_SECONDARY = "NO GUESSWORK." as const;

export const PROCESS_INTRO =
  "Every job follows the same rhythm—so you always know who is on site, what happens next, and when we wrap." as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "DISCOVERY CALL",
    description:
      "We align on goals, access, and timing—then outline what a good outcome looks like for your property.",
  },
  {
    title: "ON-SITE ASSESSMENT",
    description:
      "Measurements, photos, and a straight conversation about scope, drainage, and any repair work up front.",
  },
  {
    title: "PROPOSAL & SCHEDULE",
    description:
      "Transparent numbers, material choices, and a start window that fits your calendar—no middlemen.",
  },
  {
    title: "BUILD & CLOSEOUT",
    description:
      "Crew on site through completion, daily communication, cleanup, and a final walkthrough before we sign off.",
  },
];
