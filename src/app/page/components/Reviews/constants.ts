import type { ReviewCardData } from "./types";

export const REVIEWS_EYEBROW = "REVIEWS" as const;

export const REVIEWS_HEADLINE_PRIMARY = "HAPPY CUSTOMERS" as const;


export const REVIEW_CARDS: readonly ReviewCardData[] = [
  {
    category: "Driveway replacement",
    date: "Mar 2025",
    body:
      "They tore out our cracked apron, regraded, and poured in two days. Edges are perfectly straight and drainage finally runs away from the garage. Neighbors already asked who we used.",
    authorName: "Marcus T.",
    authorInitial: "M",
    locationLine: "Arvada, CO • Verified Google Review",
  },
  {
    category: "Stamped patio",
    date: "Jan 2025",
    body:
      "Wanted a stamped patio that matched the brick on the house. They nailed the color release and the control joints line up with our walk. Crew was on time, cleanup was spotless.",
    authorName: "Rachel K.",
    authorInitial: "R",
    locationLine: "Lakewood, CO • Verified Google Review",
  },
  {
    category: "Fence and flatwork",
    date: "Nov 2024",
    body:
      "Coordinated new cedar fence posts with a widened side yard slab. One crew, one schedule, and no finger pointing between trades. Gate swings true and the slab hasn’t heaved through winter.",
    authorName: "James P.",
    authorInitial: "J",
    locationLine: "Westminster, CO • Verified Google Review",
  },
];
