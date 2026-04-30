import Link from "next/link";

import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MobileNav } from "../MobileNav";
import {
  SITE_NAV_QUOTE_CTA_LABEL,
  SITE_NAV_QUOTE_HREF,
  SITE_NAVBAR_INNER_CLASS,
  SITE_NAVBAR_SHELL_CLASS,
} from "./constants";
import { siteNavbarId } from "./utils";

export const SiteNavbar = () => (
  <nav
    id={siteNavbarId}
    aria-label="Primary"
    className={SITE_NAVBAR_SHELL_CLASS}
  >
    <div className={SITE_NAVBAR_INNER_CLASS}>
      <div className="flex items-center gap-3">
        <Logo className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
        <div className="min-w-0 flex flex-col items-center">
          <p className="font-display truncate text-2xl font-[900] tracking-[0.15rem]">
            <span className="text-evocore-gray">EVO</span>
            <span className="text-evocore-red">CORE</span>
          </p>
          <p className="-mt-2 w-fit max-w-full truncate border-b border-evocore-red pb-0.5 font-label text-[12px] font-bold uppercase tracking-[0.3rem] text-evocore-gray">
            CONCRETE
          </p>
          <p className="font-sans mt-1 text-[8px] font-medium uppercase tracking-wider text-evocore-gray">
            built strong. built to last.
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
