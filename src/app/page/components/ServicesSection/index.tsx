import { Separator } from "@/components/ui/separator";

import { SERVICE_CARDS, SERVICES_SECTION_TITLE } from "./constants";
import { servicesSectionId } from "./utils";

export const ServicesSection = () => (
  <section
    id={servicesSectionId}
    aria-labelledby={`${servicesSectionId}-heading`}
    className="border-b border-evocore-grey/70 bg-evocore-black/40 py-16 sm:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2
        id={`${servicesSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.45em] text-evocore-red"
      >
        {SERVICES_SECTION_TITLE}
      </h2>
      <Separator className="my-6 max-w-md bg-evocore-red/80" />
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {SERVICE_CARDS.map(({ title, Icon }) => (
          <li
            key={title}
            className="flex flex-col items-center border border-evocore-grey/70 bg-evocore-steel/60 px-4 py-8 text-center"
          >
            <Icon
              className="mb-5 size-12 text-evocore-red"
              strokeWidth={1.15}
              aria-hidden
            />
            <h3 className="font-display text-sm font-black uppercase leading-snug tracking-wide text-evocore-white">
              {title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
