import { Separator } from "@/components/ui/separator";

import { MEET_TEAM_SECTION_TITLE, TEAM_MEMBERS } from "./constants";
import { meetTeamSectionId } from "./utils";

export const MeetTheTeam = () => (
  <section
    id={meetTeamSectionId}
    aria-labelledby={`${meetTeamSectionId}-heading`}
    className="border-b border-evocore-grey/70 py-16 sm:py-20"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2
        id={`${meetTeamSectionId}-heading`}
        className="font-label text-xs font-bold uppercase tracking-[0.45em] text-evocore-red"
      >
        {MEET_TEAM_SECTION_TITLE}
      </h2>
      <Separator className="my-6 max-w-md bg-evocore-red/80" />
      <div className="grid gap-8 md:grid-cols-2">
        {TEAM_MEMBERS.map((member) => (
          <article
            key={member.name}
            className="relative border border-evocore-grey/80 bg-evocore-steel/90 p-8 shadow-[inset_0_0_0_1px_rgba(204,0,0,0.15)]"
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-20 w-20 skew-x-[-20deg] bg-evocore-red/35"
              aria-hidden
            />
            <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-evocore-red">
              {member.roleLabel}
            </p>
            <h3 className="font-display mt-3 text-2xl font-black uppercase tracking-tight text-evocore-white">
              {member.name}
            </h3>
            <p className="font-label mt-4 text-sm font-medium leading-relaxed text-evocore-white/80">
              {member.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
