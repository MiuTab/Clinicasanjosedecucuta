import { HeroSection } from "../components/HeroSection";
import { TrustSection } from "../components/TrustSection";
import { ServicesSection } from "../components/ServicesSection";
import { InstitutesSection } from "../components/InstitutesSection";
import { SchedulingCTA } from "../components/SchedulingCTA";
import { DoctorsSection } from "../components/DoctorsSection";
import { BlogSection } from "../components/BlogSection";
import { LocationSection } from "../components/LocationSection";

export function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <InstitutesSection />
      <SchedulingCTA />
      <DoctorsSection />
      <BlogSection />
      <LocationSection />
    </main>
  );
}
