import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { COPYRIGHT_LINE, SITE_URL_HREF, SITE_URL_LABEL } from "./constants";
import { footerId } from "./utils";

export const SiteFooter = () => (
  <footer
    id={footerId}
    className="mt-auto border-t border-evocore-gray/80 bg-evocore-black/80 py-10"
  >
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div>
        <p className="font-label text-xs font-bold uppercase tracking-[0.35em] text-evocore-red">
          EVOCORE CONCRETE
        </p>
        <p className="font-label mt-2 text-sm font-medium text-evocore-white/70">{COPYRIGHT_LINE}</p>
      </div>
      <div className="flex flex-col items-start gap-3 sm:items-end">
        <Separator className="w-full max-w-xs bg-evocore-gray sm:hidden" />
        <p className="font-label text-xs font-semibold uppercase tracking-widest text-evocore-white/50">Website</p>
        <Link
          href={SITE_URL_HREF}
          className="text-sm font-bold text-evocore-white underline-offset-4 hover:text-evocore-red hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evocore-red"
        >
          {SITE_URL_LABEL}
        </Link>
      </div>
    </div>
  </footer>
);
