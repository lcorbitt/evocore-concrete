import { Handshake } from "lucide-react";
import Image from "next/image";

import {
  SECTION_TITLE,
  VALUE_DIRECT_LEAD,
  VALUE_DIRECT_REST,
  VALUE_PRIMARY_LINE,
  VALUE_SECONDARY_LINE,
} from "./constants";
import { valueSectionId } from "./utils";
import { Separator } from "@/components/ui/separator";

export const ValueProps = () => (
  <section
    id={valueSectionId}
    aria-labelledby={`${valueSectionId}-heading`}
    className="border-b border-evocore-gray/50 bg-evocore-charcoal py-12 sm:py-20 px-4 sm:px-6 md:px-8"
  >
    <div className="mx-auto max-w-6xl p-6 sm:p-8 border border-gray/50 rounded-md">
      <h2
        id={`${valueSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red mb-2"
      >
        {SECTION_TITLE}
      </h2>
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <p className="font-display text-2xl font-black uppercase leading-snug tracking-tight text-evocore-white sm:text-3xl">
            {VALUE_PRIMARY_LINE}
          </p>
          <p className="font-display text-2xl font-black uppercase leading-snug tracking-tight text-evocore-red sm:text-3xl -mt-2">
            {VALUE_SECONDARY_LINE}
          </p>
        </div>
        <Separator className="my-2 max-w-12 bg-evocore-red/80 data-horizontal:h-0.75" />
        <p className="font-sans text-sm font-medium tracking-wide text-evocore-gray">Five disciplines. One team. Zero compromises. We handle every job with the same level of care and attention to detail.</p>
        <Image src="/glove.png" alt="Team working together" width={500} height={500} className="rounded-md" />
        <div className="flex gap-4">
          <Handshake
            className="mt-1 size-10 shrink-0 text-evocore-red"
            strokeWidth={1.25}
            aria-hidden
          />
          <p className="font-display text-xl font-bold uppercase leading-snug tracking-wide text-evocore-white sm:text-2xl">
            <span className="text-evocore-red">{VALUE_DIRECT_LEAD}</span>
            {VALUE_DIRECT_REST}
          </p>
        </div>
      </div>
    </div>
  </section>
);
