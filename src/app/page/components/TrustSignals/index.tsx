import { Shield } from "lucide-react";

import { TRUST_HEADLINE, TRUST_SUPPORTING } from "./constants";
import { trustSectionId } from "./utils";

export const TrustSignals = () => (
  <section
    id={trustSectionId}
    aria-labelledby={`${trustSectionId}-heading`}
    className="border-b border-evocore-grey/70 py-12 sm:py-14"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden border-2 border-evocore-red bg-evocore-steel/95 px-6 py-10 sm:px-10">
        <div
          className="pointer-events-none absolute -left-10 bottom-0 top-0 w-28 skew-x-[-16deg] bg-evocore-red/25"
          aria-hidden
        />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
          <Shield
            className="size-16 shrink-0 text-evocore-red sm:size-20"
            strokeWidth={1.1}
            aria-hidden
          />
          <div>
            <h2
              id={`${trustSectionId}-heading`}
              className="font-display text-3xl font-black uppercase tracking-wide text-evocore-white sm:text-4xl"
            >
              {TRUST_HEADLINE}
            </h2>
            <p className="font-label mt-3 max-w-2xl text-sm font-medium leading-relaxed text-evocore-white/85 sm:text-base">
              {TRUST_SUPPORTING}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
