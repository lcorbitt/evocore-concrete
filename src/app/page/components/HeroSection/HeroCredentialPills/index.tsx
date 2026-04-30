import {
  HERO_CREDENTIAL_LABELS,
  HERO_CREDENTIAL_PILL_CLASS,
  HERO_CREDENTIAL_TEXT_CLASS,
  HERO_CREDENTIALS_ROW_CLASS,
} from "../constants";

export const HeroCredentialPills = () => (
  <div className={HERO_CREDENTIALS_ROW_CLASS}>
    {HERO_CREDENTIAL_LABELS.map((label) => (
      <div key={label} className={HERO_CREDENTIAL_PILL_CLASS}>
        <p className={HERO_CREDENTIAL_TEXT_CLASS}>{label}</p>
      </div>
    ))}
  </div>
);
