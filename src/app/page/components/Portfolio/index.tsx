import { DeferredPublicImage } from "@/components/DeferredPublicImage";
import { Reveal } from "@/components/Reveal";

import {
  PORTFOLIO_BODY,
  PORTFOLIO_EYEBROW,
  PORTFOLIO_GALLERY,
  PORTFOLIO_GALLERY_SIZES,
  PORTFOLIO_HEADLINE_PRIMARY,
  PORTFOLIO_HEADLINE_SECONDARY,
} from "./constants";
import { portfolioSectionId } from "./utils";

export const Portfolio = () => (
  <section
    id={portfolioSectionId}
    aria-labelledby={`${portfolioSectionId}-heading`}
    className="border-b-2 border-evocore-red/50 bg-evocore-black py-12 text-center sm:py-16 md:py-20"
  >
    <Reveal className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 sm:gap-14 sm:px-6 md:px-8">
      <header className="flex w-full flex-col items-center">
        <h2
          id={`${portfolioSectionId}-heading`}
          className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red"
        >
          {PORTFOLIO_EYEBROW}
        </h2>
        <div className="mx-auto mt-5 max-w-4xl">
          <p className="font-display text-3xl font-bold uppercase leading-[1.08] tracking-tight text-evocore-white sm:text-5xl lg:text-6xl">
            {PORTFOLIO_HEADLINE_PRIMARY}
          </p>
          <p className="font-display text-3xl font-bold uppercase leading-[1.08] tracking-tight text-evocore-red sm:text-5xl lg:text-6xl">
            {PORTFOLIO_HEADLINE_SECONDARY}
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-2xl font-sans text-sm font-medium leading-relaxed tracking-wide text-evocore-gray sm:text-base">
          {PORTFOLIO_BODY}
        </p>
      </header>

      <ul className="grid w-full list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {PORTFOLIO_GALLERY.map((item) => (
          <li key={`${item.src}-${item.alt}`} className="w-full">
            <DeferredPublicImage
              src={item.src}
              alt={item.alt}
              sizes={PORTFOLIO_GALLERY_SIZES}
              className="aspect-4/3 w-full rounded-sm ring-1 ring-white/10"
            />
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);
