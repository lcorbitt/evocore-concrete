export const HERO_HEADLINE = "DENVER, COLORADO'S #1";
export const HERO_HEADLINE_SECONDARY = "CONCRETE & FENCING TEAM";

export const HERO_IMAGE = {
  src: "/truck.jpg",
  alt: "Professional worker hand-finishing a concrete surface with a trowel on a job site.",
} as const;

/**
 * Hero image focal point from the `md` breakpoint up (`object-position`).
 * Below `md`, the hero image uses `object-bottom` (see HeroBackdrop).
 */
export const HERO_IMAGE_OBJECT_POSITION = "center 56%";

export const HERO_TRUST_TEXT = "Colorado's Most Trusted";
export const HERO_SERVICE_AREAS_TEXT =
  "Denver • Aurora • Arvada • Surrounding Areas";

export const HERO_CREDENTIAL_LABELS = [
  "Licensed & Insured",
  "Upfront Pricing",
  "Free Estimates",
] as const;

export const HERO_TAGLINE_LEAD = "Quality work. Honest service. ";
export const HERO_TAGLINE_EMPHASIS = "Strong results.";

export const HERO_CTA_PRIMARY_LABEL = "Call Now";
export const HERO_CTA_SECONDARY_LABEL = "Contact Us";
export const HERO_CTA_PRIMARY_HREF = "/";
export const HERO_CTA_SECONDARY_HREF = "/";

export const HERO_HEADER_CLASS =
  "relative border-b-2 border-evocore-red/50";

export const HERO_SHELL_CLASS =
  "relative flex min-h-[min(420px,82svh)] w-full flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:min-h-[min(520px,85svh)] sm:py-20 lg:min-h-[70vh]";

export const HERO_IMAGE_CLASS =
  "object-cover object-bottom md:[object-(--hero-object-desktop)]";

export const HERO_OVERLAY_SOLID_CLASS =
  "pointer-events-none absolute inset-0 bg-evocore-red/15";

export const HERO_OVERLAY_GRADIENT_CLASS =
  "pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/90";

export const HERO_REVEAL_CLASS =
  "relative z-10 mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-6 text-center";

export const HERO_TRUST_RIBBON_CLASS =
  "flex items-center gap-2 bg-evocore-red/15 p-2 border border-evocore-red/30";

export const HERO_TRUST_STAR_CLASS = "size-2 text-evocore-white";

export const HERO_TRUST_COPY_CLASS =
  "font-montserrat text-[8px] font-extrabold tracking-[0.1rem] uppercase text-evocore-white/80";

export const HERO_SERVICE_AREAS_ROW_CLASS = "flex items-center gap-1";

export const HERO_SERVICE_AREAS_COPY_CLASS =
  "font-montserrat text-[8px] tracking-[0.1rem] uppercase text-evocore-gray font-semibold";

export const HERO_LOGO_CLASS = "h-12 w-12 shrink-0 sm:h-14 sm:w-14";

export const HERO_HEADLINE_STACK_CLASS =
  "flex w-full min-w-0 flex-col items-center gap-1 sm:gap-2";

export const HERO_HEADLINE_PRIMARY_CLASS =
  "text-[28px] font-display font-bold uppercase leading-[1.05] tracking-tight text-evocore-white sm:text-5xl lg:text-7xl";

export const HERO_HEADLINE_SECONDARY_CLASS =
  "text-[28px] font-display font-bold uppercase leading-[1.05] tracking-tight text-evocore-white [text-shadow:0_0_75px_rgba(204,0,0,0.95),0_0_42px_rgba(204,0,0,0.75),0_0_1px_rgba(204,0,0,0.5)] sm:text-5xl lg:text-7xl";

export const HERO_CREDENTIALS_ROW_CLASS = "flex items-center gap-2 ";

export const HERO_CREDENTIAL_PILL_CLASS =
  "flex items-center gap-1 bg-evocore-red/15 p-1 border border-evocore-red/30";

export const HERO_CREDENTIAL_TEXT_CLASS =
  "font-montserrat text-[8px] font-medium tracking-[0.1rem] uppercase text-evocore-gray";

export const HERO_BODY_CLASS =
  "font-sans max-w-2xl text-sm lg:text-base font-medium tracking-wide text-evocore-white/80";

export const HERO_BODY_EMPHASIS_CLASS = "font-bold text-evocore-red";

export const HERO_CTA_ROW_CLASS = "flex items-center gap-4";

export const HERO_CTA_PRIMARY_LINK_CLASS =
  "color-fade uppercase gap-3 px-6 py-3 bg-evocore-red text-evocore-white text-xs font-bold font-montserrat inline-flex items-center hover:bg-evocore-red/90 tracking-widest focus-visible:ring-evocore-red/60";

export const HERO_CTA_SECONDARY_LINK_CLASS =
  "color-fade uppercase gap-3 px-6 py-3 bg-transparent border border-evocore-gray/50 text-evocore-white text-xs font-bold font-montserrat inline-flex items-center tracking-widest hover:bg-evocore-gray/20 focus-visible:ring-evocore-red/60";

export const HERO_CTA_PRIMARY_ICON_CLASS = "size-4 inline-block ml-2 stroke-2";

export const HERO_CTA_SECONDARY_ICON_CLASS = "size-4 inline-block stroke-2";
