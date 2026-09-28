import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, LinkCard, CardArrow, Badge, IconTile } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { industries, getIndustry } from "@/content/industries";
import { getService } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return buildMetadata({
    title: `Salesforce for ${industry.title}`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedServices = industry.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedStudies = caseStudies.filter((study) => study.industrySlug === industry.slug);

  return (
    <>
      <PageHero
        eyebrow={industry.title}
        title={industry.heroHeadline}
        description={industry.heroBody}
        breadcrumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#enquiry" size="lg">
            Talk to an architect
            <ArrowUpRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
      </PageHero>

      <Section spacing="tight">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">
              What we see
            </h2>
            <p className="mt-6 text-2xl font-semibold leading-snug text-ink-50 sm:text-3xl">
              The patterns that show up in nearly every {industry.title.toLowerCase()} engagement.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {industry.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs text-ink-400">{metric.label}</dt>
                  <dd className="mt-1.5 text-lg font-medium text-ink-50">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Stagger as="ul" className="flex flex-col gap-4">
            {industry.challenges.map((challenge) => (
              <StaggerItem as="li" key={challenge}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                  <AlertCircle aria-hidden className="mt-0.5 size-4.5 shrink-0 text-ink-400" />
                  <span className="text-[0.95rem] leading-relaxed text-ink-200">{challenge}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section className="border-y border-white/8">
        <SectionHeading align="left" eyebrow="Our approach" title="What we build" />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2">
          {industry.solutions.map((solution) => (
            <StaggerItem as="li" key={solution.title} className="flex">
              <Card className="flex-1 p-6 sm:p-7">
                <h3 className="text-base font-medium text-ink-50">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{solution.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            Clouds & capabilities
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {industry.clouds.map((cloud) => (
              <li key={cloud}>
                <Badge>{cloud}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {relatedStudies.length ? (
        <Section>
          <SectionHeading align="left" eyebrow="Proof" title="Related work" />
          <Stagger as="ul" className="mt-12 grid gap-5 lg:grid-cols-3">
            {relatedStudies.map((study) => (
              <StaggerItem as="li" key={study.slug} className="flex">
                <LinkCard href={`/case-studies/${study.slug}`} className="flex-1">
                  <Badge tone="brand">Case study</Badge>
                  <h3 className="mt-5 text-base font-medium leading-snug text-ink-50">
                    {study.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{study.summary}</p>
                  <CardArrow>Read case study</CardArrow>
                </LinkCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      ) : null}

      <Section spacing="tight" className="border-t border-white/8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
          Services most used here
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {relatedServices.map((service) => (
            <li key={service.slug} className="flex">
              <Link
                href={`/services/${service.slug}`}
                className="group surface-card flex flex-1 items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand-500/40"
              >
                <IconTile>
                  <Icon name={service.icon} className="size-5" />
                </IconTile>
                <span className="text-sm font-medium text-ink-100 group-hover:text-white">
                  {service.navTitle}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={`Working in ${industry.title.toLowerCase()}? Let us look at your org.`}
        body="A short assessment tells you what is working, what is at risk, and what the highest-value next change is — before you commit to a build."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ])}
      />
    </>
  );
}
