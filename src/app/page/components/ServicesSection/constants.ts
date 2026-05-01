import type { ServiceCard } from "./types";

/** Intro region above the service cards (“service highlights” framing). */
export const SERVICE_HIGHLIGHTS_EYEBROW = "WHAT WE DO" as const;
export const SERVICE_HIGHLIGHT_HEADLINE_PRIMARY = "THE CONCRETE" as const;
export const SERVICE_HIGHLIGHT_HEADLINE_SECONDARY = "EXPERTS." as const;
export const SERVICE_HIGHLIGHT_BODY =
  "Driveways, patios, repairs, and fencing—in one coordinated crew so your schedule, scope, and finish stay aligned from mobilization to punch list." as const;
export const SERVICE_HIGHLIGHT_DIRECT_LEAD =
  "DIRECT COMMUNICATION. NO MIDDLEMEN." as const;
export const SERVICE_HIGHLIGHT_DIRECT_REST = "NO SURPRISES." as const;

export const SERVICE_HIGHLIGHT_IMAGE = {
  src: "/glove.png",
  alt: "Concrete crew on site with protective gloves and tools",
} as const;

/** `sizes` for highlight grid (`lg:grid-cols-2`). */
export const SERVICE_HIGHLIGHT_IMAGE_SIZES =
  "(max-width: 1024px) 100vw, 50vw" as const;

export const SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: 'house',
    title: "CONCRETE DRIVEWAYS",
    description:
      "Heavy-duty flatwork built for freeze–thaw cycles — clean edges, proper pitch, and finishes that hold up to daily traffic.",
    href: "#contact",
  },
  {
    icon: 'brick-wall',
    title: "PATIOS & WALKWAYS",
    description:
      "Outdoor living slabs and paths with crisp layout, drainage in mind, and surfaces that stay safe underfoot year round.",
    href: "#contact",
  },
  {
    icon: 'footprints',
    title: "SIDEWALKS & STAIRS",
    description:
      "Code-smart walks and steps tied into your grade — smooth transitions, solid footings, and details that pass inspection.",
    href: "#contact",
  },
  {
    icon: 'wrench',
    title: "CONCRETE REPAIR",
    description:
      "From spalling and cracks to settled panels — we diagnose the cause, restore structure, and match texture where it matters.",
    href: "#contact",
  },
  {
    icon: 'fence',
    title: "FENCING SERVICES",
    description:
      "Perimeter solutions that pair with your flatwork — straight runs, tight gates, and hardware chosen for Front Range weather.",
    href: "#contact",
  },
];
