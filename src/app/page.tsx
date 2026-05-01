import { ContactSection } from "./page/components/ContactSection";
import { HeroSection } from "./page/components/HeroSection";
import { MeetTheTeam } from "./page/components/MeetTheTeam";
import { Portfolio } from "./page/components/Portfolio";
import { Reviews } from "./page/components/Reviews";
import { ServiceAreaMap } from "./page/components/ServiceAreaMap";
import { Process } from "./page/components/Process";
import { ServicesSection } from "./page/components/ServicesSection";
import { SiteFooter } from "./page/components/SiteFooter";
import { SiteNavbar } from "./page/components/SiteNavbar";
import { TrustSignals } from "./page/components/TrustSignals";
import { ValueProps } from "./page/components/ValueProps";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <HeroSection />
      <main>
        <ValueProps />
        <ServicesSection />
        <Process />
        <Portfolio />
        <Reviews />
        <ServiceAreaMap />
        <MeetTheTeam />
        <TrustSignals />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
