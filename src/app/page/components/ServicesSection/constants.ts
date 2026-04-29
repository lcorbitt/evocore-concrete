import { CarFront, Fence, Footprints, Grid2x2, Wrench } from "lucide-react";

import type { ServiceCard } from "./types";

export const SERVICES_SECTION_TITLE = "SERVICES" as const;

export const SERVICE_CARDS: readonly ServiceCard[] = [
  { title: "CONCRETE DRIVEWAYS", Icon: CarFront },
  { title: "PATIOS & WALKWAYS", Icon: Grid2x2 },
  { title: "SIDEWALKS & STAIRS", Icon: Footprints },
  { title: "CONCRETE REPAIR", Icon: Wrench },
  { title: "FENCING SERVICES", Icon: Fence },
];
