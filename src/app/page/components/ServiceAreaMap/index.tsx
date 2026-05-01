import {
  SERVICE_AREA_MAP_EYEBROW,
  SERVICE_AREA_MAP_HEADLINE,
  SERVICE_AREA_MAP_IFRAME_SRC,
  SERVICE_AREA_MAP_IFRAME_TITLE,
} from "./constants";
import { serviceAreaMapSectionId } from "./utils";

export const ServiceAreaMap = () => (
  <section
    id={serviceAreaMapSectionId}
    aria-labelledby={`${serviceAreaMapSectionId}-heading`}
    className="border-b-2 border-evocore-red/50 bg-evocore-charcoal py-12 text-center sm:py-16 md:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <h2
        id={`${serviceAreaMapSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.2rem] text-evocore-red"
      >
        {SERVICE_AREA_MAP_EYEBROW}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-bold uppercase leading-snug tracking-tight text-evocore-white sm:text-3xl">
        {SERVICE_AREA_MAP_HEADLINE}
      </p>

      <div className="relative mx-auto mt-10 aspect-4/3 w-full max-w-4xl overflow-hidden rounded-sm border border-evocore-gray/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:mt-12">
        <iframe
          title={SERVICE_AREA_MAP_IFRAME_TITLE}
          src={SERVICE_AREA_MAP_IFRAME_SRC}
          className="absolute inset-0 h-full w-full bg-evocore-black"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);
