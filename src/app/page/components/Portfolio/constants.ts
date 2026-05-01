import type { PortfolioGalleryItem } from "./types";

export const PORTFOLIO_EYEBROW = "PORTFOLIO" as const;

export const PORTFOLIO_HEADLINE_PRIMARY = "OUR WORK" as const;

export const PORTFOLIO_HEADLINE_SECONDARY = "SPEAKS FOR ITSELF." as const;

export const PORTFOLIO_BODY =
  "Real jobs. Real homes. Every project completed with the same standard of care we'd want for our own families." as const;

/** Responsive `sizes` for the 3-column gallery (deferred `next/image`). */
export const PORTFOLIO_GALLERY_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" as const;

/**
 * Six portfolio slots using `/public` assets (repeats allowed where we have
 * fewer unique photos on disk).
 */
export const PORTFOLIO_GALLERY: readonly PortfolioGalleryItem[] = [
  {
    src: "/ec-hero.jpg",
    alt: "Concrete crew finishing a large flatwork pour on a residential site.",
  },
  {
    src: "/driveway.png",
    alt: "Freshly poured concrete driveway with clean edges and broom finish.",
  },
  {
    src: "/truck.jpg",
    alt: "Evocore branded truck and equipment staged for a concrete pour.",
  },
  {
    src: "/glove.png",
    alt: "Finishing detail work with professional gloves and hand tools on wet concrete.",
  },
  {
    src: "/driveway.png",
    alt: "Driveway approach and apron tied into existing grade and landscaping.",
  },
  {
    src: "/ec-hero.jpg",
    alt: "Wide view of flatwork under finishing passes before cure.",
  },
];
