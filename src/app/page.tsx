import { Hero } from "@/components/sections/hero";
import { Narrative, ProcessSection, WhyZentium, CertificationsWall } from "@/components/sections/company-sections";
import { ServicesGrid, IndustriesGrid } from "@/components/sections/grids";
import {
  AgentforceSpotlight,
  FeaturedCaseStudy,
  FaqSection,
} from "@/components/sections/feature-sections";
import { CtaBand } from "@/components/layout/cta-band";
import { JsonLd, faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/company";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Narrative />
      <ServicesGrid limit={6} />
      <AgentforceSpotlight />
      <IndustriesGrid />
      <ProcessSection />
      <FeaturedCaseStudy />
      <WhyZentium />
      <CertificationsWall />
      <FaqSection />
      <CtaBand />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
