import { Reveal } from "@/components/Reveal";
import { Separator } from "@/components/ui/separator";

import { VALUE_PROP_CARDS, VALUE_PROPS_HEADING } from "./constants";
import { valueSectionId } from "./utils";
import { ValuePropCard } from "./ValuePropCard";

const VALUE_PROP_ROW_LENGTH = 2;

export const ValueProps = () => {
  const topRow = VALUE_PROP_CARDS.slice(0, VALUE_PROP_ROW_LENGTH);
  const bottomRow = VALUE_PROP_CARDS.slice(VALUE_PROP_ROW_LENGTH);

  return (
    <section
      id={valueSectionId}
      aria-labelledby={`${valueSectionId}-heading`}
      className="relative border-b-2 border-evocore-red/50 bg-evocore-charcoal py-12 sm:py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_50%,rgb(204_0_0/0.1),rgb(204_0_0/0.05)_48%,transparent_72%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <h2 id={`${valueSectionId}-heading`} className="sr-only">
          {VALUE_PROPS_HEADING}
        </h2>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-14">
              {topRow.map((card) => (
                <ValuePropCard key={card.title} {...card} />
              ))}
            </div>
            <Separator className="my-10 max-w-full bg-evocore-gray/35 data-horizontal:h-px sm:my-12 md:my-14" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-14">
              {bottomRow.map((card) => (
                <ValuePropCard key={card.title} {...card} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
