import type { CSSProperties } from "react";

import { Reveal } from "@/components/Reveal";

import { HeroActionLinks } from "./HeroActionLinks";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroBodyCopy } from "./HeroBodyCopy";
import { HeroCredentialPills } from "./HeroCredentialPills";
import { HeroHeadlineBlock } from "./HeroHeadlineBlock";
import { HeroLogo } from "./HeroLogo";
import { HeroServiceAreas } from "./HeroServiceAreas";
import { HeroTrustRibbon } from "./HeroTrustRibbon";
import { HERO_HEADER_CLASS, HERO_IMAGE_OBJECT_POSITION, HERO_REVEAL_CLASS, HERO_SHELL_CLASS } from "./constants";
import { heroSectionId } from "./utils";

export const HeroSection = () => (
  <header id={heroSectionId} className={HERO_HEADER_CLASS}>
    <div
      className={HERO_SHELL_CLASS}
      style={
        {
          "--hero-object-desktop": HERO_IMAGE_OBJECT_POSITION,
        } as CSSProperties
      }
    >
      <HeroBackdrop />
      <Reveal className={HERO_REVEAL_CLASS}>
        <HeroTrustRibbon />
        <HeroServiceAreas />
        <HeroLogo />
        <HeroHeadlineBlock />
        <HeroCredentialPills />
        <HeroBodyCopy />
        <HeroActionLinks />
      </Reveal>
    </div>
  </header>
);
