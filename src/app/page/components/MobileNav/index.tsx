"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  MOBILE_NAV_CLOSE_ARIA_LABEL,
  MOBILE_NAV_LINKS,
  MOBILE_NAV_OPEN_ARIA_LABEL,
  MOBILE_NAV_PANEL_ID,
} from "./constants";
import { useMobileNav } from "./hooks/useMobileNav";
import type { HamburgerMorphProps } from "./types";
import { mobileNavToggleId } from "./utils";

const toggleButtonClass =
  "relative z-[60] inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-evocore-gray/50 bg-transparent text-evocore-white transition-colors hover:border-evocore-red hover:text-evocore-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evocore-red";

const panelClass =
  "fixed inset-0 z-40 flex flex-col bg-evocore-black md:hidden motion-safe:transition-opacity motion-safe:duration-200";

const linkListClass =
  "flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-6 pb-10 pt-20";

const linkClass =
  "font-label border-b border-evocore-gray/50 py-4 text-base font-semibold uppercase tracking-widest text-evocore-white transition-colors hover:border-evocore-red hover:text-evocore-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evocore-red";

const barBase =
  "absolute left-1/2 block h-0.5 w-5 -translate-x-1/2 rounded-full bg-evocore-gray/75 transition-all duration-300 ease-in-out will-change-transform";

const HamburgerMorph = ({ isOpen }: HamburgerMorphProps) => (
  <span className="relative block h-5 w-6 shrink-0" aria-hidden>
    <span
      className={cn(barBase, "top-0 origin-center", isOpen && "top-1/2 -translate-y-1/2 rotate-45")}
    />
    <span
      className={cn(
        barBase,
        "top-1/2 -translate-y-1/2 origin-center",
        isOpen ? "scale-x-0 opacity-0" : "opacity-100"
      )}
    />
    <span
      className={cn(
        barBase,
        "bottom-0 origin-center",
        isOpen && "bottom-auto top-1/2 -translate-y-1/2 -rotate-45"
      )}
    />
  </span>
);

export const MobileNav = () => {
  const { close, isOpen, toggle } = useMobileNav();

  return (
    <>
      <button
        id={mobileNavToggleId}
        type="button"
        className={`${toggleButtonClass} md:hidden`}
        aria-expanded={isOpen}
        aria-controls={MOBILE_NAV_PANEL_ID}
        aria-label={isOpen ? MOBILE_NAV_CLOSE_ARIA_LABEL : MOBILE_NAV_OPEN_ARIA_LABEL}
        onClick={toggle}
      >
        <HamburgerMorph isOpen={isOpen} />
      </button>

      <div
        id={MOBILE_NAV_PANEL_ID}
        role="dialog"
        aria-modal={isOpen ? true : undefined}
        aria-hidden={!isOpen}
        {...(isOpen ? {} : { inert: true })}
        className={`${panelClass} ${isOpen ? "opacity-100" : "invisible pointer-events-none opacity-0"}`}
        onClick={close}
      >
        <nav
          aria-label="Mobile"
          className="flex min-h-0 flex-1 flex-col"
          onClick={(event) => event.stopPropagation()}
        >
          <ul className={linkListClass}>
            {MOBILE_NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass} onClick={close}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
