import { Handshake } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import {
  SECTION_TITLE,
  VALUE_DIRECT_LEAD,
  VALUE_DIRECT_REST,
  VALUE_PRIMARY_LINE,
} from "./constants";
import { valueSectionId } from "./utils";

export const ValueProps = () => (
  <section
    id={valueSectionId}
    aria-labelledby={`${valueSectionId}-heading`}
    className="border-b border-evocore-gray/70 bg-evocore-black/60 py-16 sm:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2
        id={`${valueSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.45em] text-evocore-red"
      >
        {SECTION_TITLE}
      </h2>
      <Separator className="my-6 max-w-md bg-evocore-red/80" />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <p className="font-display text-2xl font-black uppercase leading-snug tracking-tight text-evocore-white sm:text-3xl">
          {VALUE_PRIMARY_LINE}
        </p>
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
