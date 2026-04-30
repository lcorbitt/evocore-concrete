import { ContactSection } from "./page/components/ContactSection";
import { HeroSection } from "./page/components/HeroSection";
import { MeetTheTeam } from "./page/components/MeetTheTeam";
import { Process } from "./page/components/Process";
import { ServicesSection } from "./page/components/ServicesSection";
import { SiteFooter } from "./page/components/SiteFooter";
import { SiteNavbar } from "./page/components/SiteNavbar";
import { TrustSignals } from "./page/components/TrustSignals";
import { ValueProps } from "./page/components/ValueProps";

import { HOME_VIEWPORT_TOP_CLASS } from "./page/constants";

export default function Home() {
  return (
    <>
      <div className={HOME_VIEWPORT_TOP_CLASS}>
        <SiteNavbar />
        <HeroSection />
      </div>
      <main>
        <ValueProps />
        <ServicesSection />
        <Process />
        <MeetTheTeam />
        <TrustSignals />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
