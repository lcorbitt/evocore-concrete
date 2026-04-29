import type { ContactChannel } from "./types";

export const CONTACT_SECTION_TITLE = "CONTACT" as const;
export const CONTACT_INTRO =
  "Tell us about your project — we respond directly and keep you informed at every step." as const;

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: "phone",
    label: "Phone",
    value: "(303) 555-0142",
    href: "tel:+13035550142",
  },
  {
    id: "email",
    label: "Email",
    value: "hello@evocoreconcrete.com",
    href: "mailto:hello@evocoreconcrete.com",
  },
  {
    id: "location",
    label: "Location",
    value: "Denver, Colorado",
    href: "https://www.google.com/maps/search/?api=1&query=Denver%2C+Colorado",
  },
];
