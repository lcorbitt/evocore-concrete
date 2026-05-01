import { Separator } from "@/components/ui/separator";

import {
  PROCESS_CARDS,
  PROCESS_EYEBROW,
  PROCESS_HEADLINE_PRIMARY,
  PROCESS_HEADLINE_SECONDARY,
} from "./constants";
import { ProcessCard } from "./ProcessCard";
import { processSectionId } from "./utils";
import { Reveal } from "@/components/Reveal";

export const Process = () => (
  <section
    id={processSectionId}
    aria-labelledby={`${processSectionId}-heading`}
    className="relative border-b-2 border-evocore-red/50 bg-evocore-charcoal py-12 text-center sm:py-16 md:py-20"
  >
    <div
      className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_50%,rgb(204_0_0/0.1),rgb(204_0_0/0.05)_48%,transparent_72%)]"
      aria-hidden
    />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <h2
        id={`${processSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red"
      >
        {PROCESS_EYEBROW}
      </h2>
      <div className="mx-auto mt-4 max-w-3xl">
        <p className="font-display text-3xl font-medium uppercase leading-snug tracking-tight text-evocore-white sm:text-4xl">
          {PROCESS_HEADLINE_PRIMARY}
        </p>
        <p className="font-display text-3xl font-medium uppercase leading-snug tracking-tight text-evocore-red sm:text-4xl">
          {PROCESS_HEADLINE_SECONDARY}
        </p>
      </div>
      <Separator className="mx-auto my-8 max-w-12 bg-evocore-red/80 data-horizontal:h-0.75" />

      <ol className="mx-auto mt-12 flex list-none flex-col items-center gap-12 md:grid md:max-w-none md:grid-cols-3 md:items-stretch md:gap-8 md:justify-items-center lg:gap-10">
        {PROCESS_CARDS.map((card, index) => (
          <Reveal key={card.title}>
            <li key={card.title} className="flex w-full justify-center md:block md:w-auto">
              <ProcessCard stepNumber={index + 1} {...card} />
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
