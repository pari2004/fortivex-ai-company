import { PremiumNavbar } from "@/components/sections/PremiumNavbar";
import { HeroExperience } from "@/components/sections/HeroExperience";
import { Section01Opportunity } from "@/components/sections/Section01Opportunity";
import { CapabilityExperience } from "@/components/sections/CapabilityExperience";
import { AutomationFlow } from "@/components/sections/AutomationFlow";
import { EcosystemMap } from "@/components/sections/EcosystemMap";
import { ProductReveal } from "@/components/sections/ProductReveal";
import { ProcessJourney } from "@/components/sections/ProcessJourney";
import { TechnologySystem } from "@/components/sections/TechnologySystem";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Section08Belief } from "@/components/sections/Section08Belief";
import { InsightSection } from "@/components/sections/InsightSection";
import { CareersSection } from "@/components/sections/CareersSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PremiumFooter } from "@/components/sections/PremiumFooter";

export default function Home() {
  return (
    <>
      <PremiumNavbar />
      <main>
        <HeroExperience />
        <Section01Opportunity />
        <CapabilityExperience />
        <AutomationFlow />
        <EcosystemMap />
        <ProductReveal />
        <ProcessJourney />
        <TechnologySystem />
        <GlobalPresence />
        <Section08Belief />
        <InsightSection />
        <CareersSection />
        <FinalCTA />
      </main>
      <PremiumFooter />
    </>
  );
}
