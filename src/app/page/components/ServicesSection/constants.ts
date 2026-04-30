import type { ServiceCard } from "./types";
import { RoadIcon } from "lucide-react";

export const SERVICES_SECTION_TITLE = "SERVICES" as const;

export const SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: 'road',
    title: "CONCRETE DRIVEWAYS",
    description:
      "Heavy-duty flatwork built for freeze–thaw cycles — clean edges, proper pitch, and finishes that hold up to daily traffic.",
    href: "#contact",
  },
  {
    icon: 'grid',
    title: "PATIOS & WALKWAYS",
    description:
      "Outdoor living slabs and paths with crisp layout, drainage in mind, and surfaces that stay safe underfoot year round.",
    href: "#contact",
  },
  {
    icon: 'sidewalk',
    title: "SIDEWALKS & STAIRS",
    description:
      "Code-smart walks and steps tied into your grade — smooth transitions, solid footings, and details that pass inspection.",
    href: "#contact",
  },
  {
    icon: 'repair',
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
