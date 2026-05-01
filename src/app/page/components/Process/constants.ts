import type { ProcessCardData } from "./types";

export const PROCESS_EYEBROW = "HOW IT WORKS" as const;

export const PROCESS_HEADLINE_PRIMARY = "CLEAR STEPS" as const;

export const PROCESS_HEADLINE_SECONDARY = "NO GUESSWORK." as const;

export const PROCESS_CARDS: readonly ProcessCardData[] = [
  {
    icon: "phone",
    title: "Call or book online",
    description:
      "A real person answers every call — no hold music, no call centers. Tell us what's wrong, pick your window, and you're on the schedule. Same-day slots available most days.",
    timeLabel: "~5 min",
    timeCaption: "To get booked",
  },
  {
    icon: "calendar",
    title: "We show up on time",
    description:
      "Crew arrives in branded trucks with the right tools and materials. We walk the site together, confirm the scope, and get to work — no surprises, no runaround.",
    timeLabel: "~Same day",
    timeCaption: "Most service calls",
  },
  {
    icon: "check-circle",
    title: "Done right, cleaned up",
    description:
      "Quality work through completion, then we haul debris, sweep the area, and walk you through what we did. You sign off only when you're satisfied.",
    timeLabel: "Job done",
    timeCaption: "Walkthrough & warranty notes",
  },
];
