import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { ContactChannel } from "./types";

export const contactSectionId = "contact";

export const getContactIcon = (id: ContactChannel["id"]): LucideIcon => {
  if (id === "phone") return Phone;
  if (id === "email") return Mail;
  return MapPin;
};
