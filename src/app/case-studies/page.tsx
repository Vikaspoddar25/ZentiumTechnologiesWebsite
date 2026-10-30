import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { LinkCard, CardArrow, Badge } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { publishedCaseStudies } from "@/content/case-studies";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Explore the thinking behind Salesforce architecture, Agentforce, integrations, and secure Experience Cloud delivery.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The architecture, not just the outcome"
        description="We publish project stories only when the details are ready to share. Until then, talk directly with the engineers about the decisions behind your Salesforce project."
        breadcrumbs={[{ name: "Case Studies", path: "/case-studies" }]}
      />

      <Section>
        {publishedCaseStudies.length ? (
          <Stagger as="ul" className="grid gap-5 lg:grid-cols-3">
            {publishedCaseStudies.map((study) => (
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
        ) : (
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink-300">
            Project stories are being prepared for publication. In the meantime, we are happy to
            discuss how we would approach your challenge.
          </p>
        )}
      </Section>

      <CtaBand
        eyebrow="Your turn"
        title="Bring us the problem behind your project."
        body="Tell us what is blocking you. We will discuss a practical next step and whether we are the right team to help."
      />
      <JsonLd data={breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }])} />
    </>
  );
}
