import { CalendarDays, CheckCircle, Hammer, Phone } from "lucide-react";

import {
  PROCESS_CARD_ARTICLE_CLASS,
  PROCESS_CARD_BODY_CLASS,
  PROCESS_CARD_ICON_CLASS,
  PROCESS_CARD_ICON_ORBIT_CLASS,
  PROCESS_CARD_RULE_CLASS,
  PROCESS_CARD_STEP_BADGE_CLASS,
  PROCESS_CARD_TITLE_CLASS,
} from "./constants";
import type { ProcessCardProps } from "./types";

const iconById = {
  phone: Phone,
  calendar: CalendarDays,
  "check-circle": CheckCircle,
} as const;

export const ProcessCard = ({
  stepNumber,
  icon,
  title,
  description,
  timeLabel,
  timeCaption,
}: ProcessCardProps) => {
  const Icon = iconById[icon];

  return (
    <article className={PROCESS_CARD_ARTICLE_CLASS}>
      <div className={PROCESS_CARD_ICON_ORBIT_CLASS}>
        <Icon className={PROCESS_CARD_ICON_CLASS} aria-hidden strokeWidth={1.65} />
        <span className={PROCESS_CARD_STEP_BADGE_CLASS}>{stepNumber}</span>
      </div>
      <h3 className={PROCESS_CARD_TITLE_CLASS}>{title}</h3>
      <div className={PROCESS_CARD_RULE_CLASS} role="presentation" />
      <p className={PROCESS_CARD_BODY_CLASS}>{description}</p>
    </article>
  );
};
