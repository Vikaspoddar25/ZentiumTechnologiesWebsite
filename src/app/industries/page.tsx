import { PageHero } from "@/components/ui/page-hero";
import { IndustriesGrid } from "@/components/sections/grids";
import { CtaBand } from "@/components/layout/cta-band";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Salesforce and web solutions for technology & SaaS, finance & fintech, ecommerce & retail, healthcare, real estate, education, travel and media businesses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The platform is the same. Your constraints are not."
        description="Regulation, data sensitivity and the questions your customers keep asking are what shape the build. Here is how that plays out across the sectors we work in most."
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <IndustriesGrid />
      <CtaBand
        eyebrow="Not listed?"
        title="We have probably solved a version of your problem somewhere else."
        body="The industry label matters less than the shape of the problem — volume, regulation, integration complexity. Tell us yours and we will tell you what transfers."
      />
      <JsonLd data={breadcrumbSchema([{ name: "Industries", path: "/industries" }])} />
    </>
  );
}
