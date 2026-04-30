import Link from "next/link";
import { ArrowRight, FenceIcon, BrickWallIcon, FootprintsIcon, Handshake, HouseIcon, RoadIcon, Wrench } from "lucide-react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/Reveal";
import {
  SERVICE_CARDS,
  SERVICE_HIGHLIGHT_BODY,
  SERVICE_HIGHLIGHT_DIRECT_LEAD,
  SERVICE_HIGHLIGHT_DIRECT_REST,
  SERVICE_HIGHLIGHT_HEADLINE_PRIMARY,
  SERVICE_HIGHLIGHT_HEADLINE_SECONDARY,
  SERVICE_HIGHLIGHTS_EYEBROW,
} from "./constants";
import { serviceHighlightsRegionId, servicesSectionId } from "./utils";

export const ServicesSection = () => (
  <section
    id={servicesSectionId}
    aria-labelledby={`${serviceHighlightsRegionId}-heading ${servicesSectionId}-heading`}
    className="border-b-2 border-evocore-red/50 bg-evocore-black py-12 sm:py-16 md:py-20"
  >
    <Reveal>

      <div
        id={serviceHighlightsRegionId}
        aria-labelledby={`${serviceHighlightsRegionId}-heading`}
        className="px-4 sm:px-6 md:px-8 mb-12"
      >
          <div className="mx-auto max-w-6xl p-6 sm:p-8 border border-evocore-gray/20">
            <h2
              id={`${serviceHighlightsRegionId}-heading`}
              className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red mb-2"
            >
              {SERVICE_HIGHLIGHTS_EYEBROW}
            </h2>
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col">
                <p className="font-display text-4xl font-medium uppercase leading-snug tracking-tight text-evocore-white sm:text-3xl">
                  {SERVICE_HIGHLIGHT_HEADLINE_PRIMARY}
                </p>
                <p className="font-display text-4xl font-medium uppercase leading-snug tracking-tight text-evocore-red sm:text-3xl -mt-4">
                  {SERVICE_HIGHLIGHT_HEADLINE_SECONDARY}
                </p>
              </div>
              <Separator className="my-2 max-w-12 bg-evocore-red/80 data-horizontal:h-0.75" />
              <p className="font-sans text-sm font-medium leading-6 tracking-wide text-evocore-gray">
                {SERVICE_HIGHLIGHT_BODY}
              </p>
              <Image
                src="/glove.png"
                alt="Concrete crew on site with protective gloves and tools"
                width={500}
                height={500}
                className="mt-4"
              />
              <div className="flex gap-4 items-center mt-4">
                <Handshake
                  className="mt-1 size-10 shrink-0 text-evocore-white"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="font-display text-xl font-bold uppercase leading-snug tracking-wide text-evocore-white sm:text-2xl">
                  <span className="text-evocore-white">{SERVICE_HIGHLIGHT_DIRECT_LEAD}</span>
                  <br />
                  <span className="text-evocore-red">{SERVICE_HIGHLIGHT_DIRECT_REST}</span>
                </p>
              </div>
            </div>
          </div>
      </div>
    </Reveal>

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICE_CARDS.map((card, index) => {
          const indexLabel = String(index + 1).padStart(2, "0");
          return (
            <Reveal key={card.title}>
              <li
                className="relative flex min-h-[280px] flex-col border border-white/50 bg-evocore-charcoal/75 p-6 text-left shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] gap-4"
              >
                <span
                  className="pointer-events-none absolute right-5 top-5 font-display text-4xl font-black leading-none text-evocore-red/30 select-none sm:right-5 sm:top-4 sm:text-6xl"
                  aria-hidden
                >
                  {indexLabel}
                </span>
                <div className="relative z-10 mb-5 flex shrink-0 items-start">
                  {card.icon === 'house' && <HouseIcon className="size-6 text-evocore-red" aria-hidden />}
                  {card.icon === 'brick-wall' && <BrickWallIcon className="size-6 text-evocore-red" aria-hidden />}
                  {card.icon === 'footprints' && <FootprintsIcon className="size-6 text-evocore-red" aria-hidden />}
                  {card.icon === 'wrench' && <Wrench className="size-6 text-evocore-red" aria-hidden />}
                  {card.icon === 'fence' && <FenceIcon className="size-6 text-evocore-red" aria-hidden />}
                </div>
                <h3 className="relative z-10 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-evocore-white sm:text-3xl">
                  {card.title}
                </h3>
                <Separator className="relative z-10 my-3 w-12 max-w-12 shrink-0 self-start bg-evocore-red/80 data-horizontal:h-1" />
                <p className="relative z-10 flex-1 font-sans text-sm leading-relaxed text-evocore-white/85">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="color-fade relative z-10 mt-6 inline-flex w-fit items-center gap-2 border border-evocore-white/90 px-5 py-3 font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-evocore-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evocore-red"
                >
                  Learn more
                  <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                </Link>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);
