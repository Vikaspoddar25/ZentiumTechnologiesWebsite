import { PageHero } from "@/components/ui/page-hero";
import { ServicesGrid } from "@/components/sections/grids";
import { ProcessSection } from "@/components/sections/company-sections";
import { CtaBand } from "@/components/layout/cta-band";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Salesforce & Web Development Services",
  description:
    "Salesforce consulting, Agentforce, integration architecture, Sales Cloud, Service Cloud, Experience Cloud, custom Apex and LWC development, managed services and Next.js web development.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine practices, one senior delivery team"
        description="We are deliberately specialised. Each practice below is led by a certified engineer who has shipped it in production — not by a generalist reading a playbook."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />
      <ServicesGrid />
      <ProcessSection />
      <CtaBand
        eyebrow="Not sure which one you need?"
        title="Describe the problem. We will tell you which practice it belongs to."
        body="Most engagements span two or three of these. Send us what is actually going wrong and we will scope it honestly — including telling you if it is smaller than you think."
      />
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
    </>
  );
}
