import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MobileNav } from "../MobileNav";
import {
  COMPANY_NAME,
  SITE_NAV_BRAND_MARK_ARIA_LABEL,
  SITE_NAV_LOCATION_LINE,
  SITE_NAV_QUOTE_CTA_LABEL,
  SITE_NAV_QUOTE_HREF,
  SITE_NAVBAR_INNER_CLASS,
  SITE_NAVBAR_SHELL_CLASS,
} from "./constants";
import type { EvocoreBrandMarkProps } from "./types";
import { siteNavbarId } from "./utils";

const EvocoreBrandMark = ({ className, ...rest }: EvocoreBrandMarkProps) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    role="img"
    aria-label={SITE_NAV_BRAND_MARK_ARIA_LABEL}
    {...rest}
  >
    <polygon
      points="60,4 112,32 112,88 60,116 8,88 8,32"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      className="text-evocore-red"
    />
    <text
      x="60"
      y="72"
      textAnchor="middle"
      fontSize="52"
      fontWeight="800"
      fill="currentColor"
      className="text-evocore-white font-display tracking-tighter"
    >
      C
    </text>
  </svg>
);

export const SiteNavbar = () => (
  <nav
    id={siteNavbarId}
    aria-label="Primary"
    className={SITE_NAVBAR_SHELL_CLASS}
  >
    <div className={SITE_NAVBAR_INNER_CLASS}>
      <div className="flex items-center gap-3">
        <EvocoreBrandMark className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
        <div className="min-w-0">
          <p className="font-display truncate text-xs font-semibold tracking-[0.35em] text-evocore-red sm:text-sm">
            EVO<span className="text-evocore-white">CORE</span>
          </p>
          <p className="font-label truncate text-[10px] font-medium uppercase tracking-widest text-evocore-white/80 sm:text-xs">
           CONCRETE
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <MobileNav />
        <Link
          href={SITE_NAV_QUOTE_HREF}
          className={cn(
            buttonVariants({ size: "default" }),
            "hidden border border-evocore-red bg-evocore-red text-evocore-white hover:bg-evocore-red/90 focus-visible:ring-evocore-red/60 md:inline-flex"
          )}
        >
          {SITE_NAV_QUOTE_CTA_LABEL}
        </Link>
      </div>
    </div>
  </nav>
);
