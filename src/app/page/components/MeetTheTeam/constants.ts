import type { TeamMember } from "./types";

export const MEET_TEAM_SECTION_TITLE = "MEET THE TEAM" as const;

export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    roleLabel: "Meet the Owner",
    name: "Gloria Arvayo",
    description:
      "Leads estimating, scheduling, and quality control — ensuring every pour meets EVOCORE standards.",
  },
  {
    roleLabel: "Manager",
    name: "José Madera",
    description:
      "Runs daily operations on site, crew coordination, and client updates from first call to final walkthrough.",
  },
];
