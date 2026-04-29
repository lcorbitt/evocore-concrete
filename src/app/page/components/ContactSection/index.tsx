import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { CONTACT_CHANNELS, CONTACT_INTRO, CONTACT_SECTION_TITLE } from "./constants";
import { contactSectionId, getContactIcon } from "./utils";

export const ContactSection = () => (
  <section
    id={contactSectionId}
    aria-labelledby={`${contactSectionId}-heading`}
    className="py-16 sm:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2
        id={`${contactSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.45em] text-evocore-red"
      >
        {CONTACT_SECTION_TITLE}
      </h2>
      <Separator className="my-6 max-w-md bg-evocore-red/80" />
      <p className="font-label max-w-2xl text-base font-medium text-evocore-white/85">{CONTACT_INTRO}</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-3">
        {CONTACT_CHANNELS.map((channel) => {
          const Icon = getContactIcon(channel.id);
          return (
            <li
              key={channel.id}
              className="border border-evocore-grey/70 bg-evocore-steel/70 p-6"
            >
              <div className="flex items-start gap-4">
                <Icon className="mt-0.5 size-6 shrink-0 text-evocore-red" strokeWidth={1.35} aria-hidden />
                <div>
                  <p className="font-label text-xs font-bold uppercase tracking-widest text-evocore-white/60">
                    {channel.label}
                  </p>
                  <Link
                    href={channel.href}
                    {...(channel.id === "location"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-2 inline-block text-sm font-semibold text-evocore-white underline-offset-4 hover:text-evocore-red hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evocore-red"
                  >
                    {channel.value}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
