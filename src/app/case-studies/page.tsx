import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { LinkCard, CardArrow, Badge } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { caseStudies } from "@/content/case-studies";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "How we implement Agentforce, rebuild failing integrations and ship secure Experience Cloud portals — with the architecture decisions behind each build.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The architecture, not just the outcome"
        description="Each of these explains the decision that mattered — the pattern chosen, the guardrail added, the failure mode designed out. Client names are withheld where confidentiality applies."
        breadcrumbs={[{ name: "Case Studies", path: "/case-studies" }]}
      />

      <Section>
        <Stagger as="ul" className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem as="li" key={study.slug} className="flex">
              <LinkCard href={`/case-studies/${study.slug}`} className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="brand">{study.industry}</Badge>
                  {study.featured ? <Badge>Featured</Badge> : null}
                </div>
                <h2 className="mt-6 text-lg font-medium leading-snug text-ink-50">{study.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{study.summary}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  {formatDate(study.publishedAt)}
                </p>
                <CardArrow>Read the breakdown</CardArrow>
              </LinkCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand
        eyebrow="Your turn"
        title="Every one of these started as a problem someone could not solve internally."
        body="Tell us what is blocking you. If we are not the right team for it, we will say so and point you somewhere better."
      />
      <JsonLd data={breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }])} />
    </>
  );
}
