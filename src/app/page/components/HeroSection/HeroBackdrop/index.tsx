import Image from "next/image";

import {
  HERO_IMAGE,
  HERO_IMAGE_CLASS,
  HERO_OVERLAY_GRADIENT_CLASS,
  HERO_OVERLAY_SOLID_CLASS,
} from "../constants";

export const HeroBackdrop = () => (
  <div className="absolute inset-0 z-0" aria-hidden>
    <Image
      src={HERO_IMAGE.src}
      alt=""
      fill
      priority
      sizes="100vw"
      className={HERO_IMAGE_CLASS}
      aria-hidden
    />
    <div className={HERO_OVERLAY_SOLID_CLASS} aria-hidden />
    <div className={HERO_OVERLAY_GRADIENT_CLASS} aria-hidden />
  </div>
);
