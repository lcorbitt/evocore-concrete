import { Separator } from "@/components/ui/separator";

import {
  PROCESS_EYEBROW,
  PROCESS_HEADLINE_PRIMARY,
  PROCESS_HEADLINE_SECONDARY,
  PROCESS_INTRO,
  PROCESS_STEPS,
} from "./constants";
import { processSectionId } from "./utils";

export const Process = () => (
  <section
    id={processSectionId}
    aria-labelledby={`${processSectionId}-heading`}
    className="border-b-2 border-evocore-red/50 bg-evocore-charcoal py-12 sm:py-16 md:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <h2
        id={`${processSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red"
      >
        {PROCESS_EYEBROW}
      </h2>
      <div className="mt-4 max-w-3xl">
        <p className="font-display text-3xl font-medium uppercase leading-snug tracking-tight text-evocore-white sm:text-4xl">
          {PROCESS_HEADLINE_PRIMARY}
        </p>
        <p className="font-display text-3xl font-medium uppercase leading-snug tracking-tight text-evocore-red sm:text-4xl">
          {PROCESS_HEADLINE_SECONDARY}
        </p>
      </div>
      <Separator className="my-8 max-w-12 bg-evocore-red/80 data-horizontal:h-0.75" />
      <p className="max-w-2xl font-sans text-sm font-medium leading-relaxed tracking-wide text-evocore-gray">
        {PROCESS_INTRO}
      </p>

      <ol className="mt-12 grid gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {PROCESS_STEPS.map((step, index) => {
          const stepNumber = String(index + 1).padStart(2, "0");
          return (
            <li
              key={step.title}
              className="relative border border-evocore-gray/30 bg-evocore-steel/60 p-6 pt-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <span
                className="pointer-events-none absolute right-4 top-4 font-display text-4xl font-black leading-none text-evocore-red/35 select-none sm:text-5xl"
                aria-hidden
              >
                {stepNumber}
              </span>
              <h3 className="relative z-10 pr-14 font-display text-lg font-bold uppercase leading-tight tracking-wide text-evocore-white">
                {step.title}
              </h3>
              <Separator className="relative z-10 my-4 max-w-10 bg-evocore-red/80 data-horizontal:h-0.75" />
              <p className="relative z-10 font-sans text-sm leading-relaxed text-evocore-white/85">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
