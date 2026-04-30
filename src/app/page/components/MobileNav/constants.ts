import type { MobileNavLinkItem } from "./types";

export const MOBILE_NAV_PANEL_ID = "mobile-nav-panel";

export const MOBILE_NAV_OPEN_ARIA_LABEL = "Open menu";

export const MOBILE_NAV_CLOSE_ARIA_LABEL = "Close menu";

export const MOBILE_NAV_LINKS: readonly MobileNavLinkItem[] = [
  { href: "#top", label: "Home" },
  { href: "#value-propositions", label: "Why Evocore" },
  { href: "#meet-the-team", label: "Meet the team" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Our process" },
  { href: "#trust", label: "Trust & licensing" },
  { href: "#contact", label: "Contact" },
];
