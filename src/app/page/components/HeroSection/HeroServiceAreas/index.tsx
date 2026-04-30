import {
  HERO_SERVICE_AREAS_COPY_CLASS,
  HERO_SERVICE_AREAS_ROW_CLASS,
  HERO_SERVICE_AREAS_TEXT,
} from "../constants";

export const HeroServiceAreas = () => (
  <div className={HERO_SERVICE_AREAS_ROW_CLASS}>
    <p className={HERO_SERVICE_AREAS_COPY_CLASS}>{HERO_SERVICE_AREAS_TEXT}</p>
  </div>
);
