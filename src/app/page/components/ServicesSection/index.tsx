import Link from "next/link";
import { ArrowRight, Crosshair, GridIcon, RoadIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { SERVICE_CARDS, SERVICES_SECTION_TITLE } from "./constants";
import { servicesSectionId } from "./utils";

export const ServicesSection = () => (
  <section
    id={servicesSectionId}
    aria-labelledby={`${servicesSectionId}-heading`}
    className="border-b border-evocore-gray/70 bg-evocore-black/40 py-16 sm:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2
        id={`${servicesSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.45em] text-evocore-red"
      >
        {SERVICES_SECTION_TITLE}
      </h2>
      <Separator className="my-6 max-w-md bg-evocore-red/80" />
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICE_CARDS.map((card, index) => {
          const indexLabel = String(index + 1).padStart(2, "0");
          return (
            <li
              key={card.title}
              className="relative flex min-h-[280px] flex-col border border-white/10 bg-[#0a0a0a] p-6 text-left shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <span
                className="pointer-events-none absolute right-4 top-3 font-display text-5xl font-black leading-none text-evocore-red/[0.14] select-none sm:right-5 sm:top-4 sm:text-6xl"
                aria-hidden
              >
                {indexLabel}
              </span>
              <div className="relative z-10 mb-5 flex shrink-0 items-start">
                {card.icon === 'road' && <RoadIcon className="size-6 text-evocore-red" aria-hidden />}
                {card.icon === 'grid' && <GridIcon className="size-6 text-evocore-red" aria-hidden />}
              </div>
              <h3 className="relative z-10 font-display text-base font-bold uppercase leading-tight tracking-wide text-evocore-white sm:text-lg">
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
          );
        })}
      </ul>
    </div>
  </section>
);
