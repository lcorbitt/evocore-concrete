import type { CSSProperties } from "react";
import Image from "next/image";

import { AnimatedUnderscore } from "../AnimatedUnderscore";
import {
  HERO_BODY_AFTER_EMPHASIS,
  HERO_BODY_BEFORE_EMPHASIS,
  HERO_BODY_EMPHASIS,
  HERO_HEADLINE,
  HERO_HEADLINE_SECONDARY,
  HERO_IMAGE,
  HERO_IMAGE_OBJECT_POSITION,
} from "./constants";
import { heroSectionId } from "./utils";
import { StarIcon } from "lucide-react";

export const HeroSection = () => (
  <header id={heroSectionId} className="relative border-b border-evocore-gray/80">
    <div
      className="relative flex min-h-[min(420px,82svh)] w-full flex-col items-center justify-center px-4 py-12 sm:min-h-[min(520px,85svh)] sm:px-6 sm:py-20 lg:min-h-[70vh]"
      style={
        {
          "--hero-object-desktop": HERO_IMAGE_OBJECT_POSITION,
        } as CSSProperties
      }
    >
      <Image
        src={HERO_IMAGE.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom md:[object-position:var(--hero-object-desktop)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-evocore-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/40 to-black/80"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-1 bg-evocore-red/15 p-2 border border-evocore-red/30">
          <StarIcon strokeWidth={1.25} aria-hidden className="size-2 text-evocore-white" />
          <p className="font-montserrat text-[8px] font-extrabold tracking-[0.1rem] uppercase text-evocore-white/80">
            {"Colorado's Most Trusted"}
          </p>
          <StarIcon strokeWidth={1.25} aria-hidden className="size-2 text-evocore-white" />
        </div>
        <div className="flex items-center gap-1">
          <p className="font-montserrat text-[8px] tracking-[0.1rem] uppercase text-evocore-gray">
            {"Denver • Aurora • Arvada • Surrounding Areas"}
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col items-center gap-1 sm:gap-2">
          <h1 className="text-3xl font-display font-bold uppercase leading-[1.05] tracking-tight text-evocore-white sm:text-5xl lg:text-7xl">
            {HERO_HEADLINE}
          </h1>
          <h1
            className="text-3xl font-display font-bold uppercase leading-[1.05] tracking-tight text-evocore-white [text-shadow:0_0_75px_rgba(204,0,0,0.95),0_0_42px_rgba(204,0,0,0.75),0_0_1px_rgba(204,0,0,0.5)] sm:text-5xl lg:text-7xl"
          >
            {HERO_HEADLINE_SECONDARY}
          </h1>
          <AnimatedUnderscore />
        </div>
        <p className="font-label max-w-2xl text-base font-medium leading-relaxed text-evocore-white/90 sm:text-lg">
          {HERO_BODY_BEFORE_EMPHASIS}
          <span className="font-semibold text-evocore-red">{HERO_BODY_EMPHASIS}</span>
          {HERO_BODY_AFTER_EMPHASIS}
        </p>
      </div>
    </div>
  </header>
);
