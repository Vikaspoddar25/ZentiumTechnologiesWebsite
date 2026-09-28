import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, LinkCard, CardArrow, IconTile, Badge } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { services, getService } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedStudies = caseStudies.filter((study) => study.services.includes(service.slug));

  return (
    <>
      <PageHero
        eyebrow={service.navTitle}
        title={service.heroHeadline}
        description={service.heroBody}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.navTitle, path: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#enquiry" size="lg">
            Discuss this project
            <ArrowUpRight aria-hidden className="size-4" />
          </ButtonLink>
          <ButtonLink href="/case-studies" variant="secondary" size="lg">
            See our work
          </ButtonLink>
        </div>
      </PageHero>

      <Section spacing="tight">
        <Reveal>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">
            What you get
          </h2>
        </Reveal>
        <Stagger as="ul" className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.outcomes.map((outcome) => (
            <StaggerItem as="li" key={outcome} className="flex items-start gap-3">
              <Check aria-hidden className="mt-1 size-4.5 shrink-0 text-accent-400" />
              <span className="text-[0.95rem] leading-relaxed text-ink-200">{outcome}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="border-y border-white/8">
        <SectionHeading
          align="left"
          eyebrow="The problem"
          title="What usually brings people to us"
        />
        <Stagger as="ul" className="mt-12 grid gap-5 lg:grid-cols-3">
          {service.challenges.map((challenge) => (
            <StaggerItem as="li" key={challenge.title} className="flex">
              <Card className="flex-1 p-6 sm:p-7">
                <h3 className="text-base font-medium text-ink-50">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{challenge.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading align="left" eyebrow="Scope" title="What we deliver" />
        <Stagger as="ul" className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {service.deliverables.map((deliverable, index) => (
            <StaggerItem as="li" key={deliverable.title} className="py-8">
              <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:gap-8">
                <span className="font-mono text-sm text-accent-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink-50">{deliverable.title}</h3>
                  <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-300">
                    {deliverable.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            Typical stack
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {service.stack.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {relatedStudies.length ? (
        <Section className="border-t border-white/8">
          <SectionHeading align="left" eyebrow="Proof" title="Related work" />
          <Stagger as="ul" className="mt-12 grid gap-5 lg:grid-cols-3">
            {relatedStudies.map((study) => (
              <StaggerItem as="li" key={study.slug} className="flex">
                <LinkCard href={`/case-studies/${study.slug}`} className="flex-1">
                  <Badge tone="brand">{study.industry}</Badge>
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

      <Section size="narrow" className="border-t border-white/8">
        <SectionHeading eyebrow="FAQ" title={`${service.navTitle} — common questions`} />
        <Reveal className="mt-12">
          <Accordion items={service.faqs} />
        </Reveal>
      </Section>

      <Section spacing="tight">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
          Related services
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug} className="flex">
              <Link
                href={`/services/${item.slug}`}
                className="group surface-card flex flex-1 items-center gap-4 rounded-2xl p-5 transition-colors hover:border-brand-500/40"
              >
                <IconTile>
                  <Icon name={item.icon} className="size-5" />
                </IconTile>
                <span className="text-sm font-medium text-ink-100 group-hover:text-white">
                  {item.navTitle}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={`Have a ${service.navTitle.toLowerCase()} problem worth solving?`}
        body="Send us the specifics — current state, what has been tried, and what success looks like. You will get a considered technical response, not a brochure."
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.navTitle, path: `/services/${service.slug}` },
          ]),
          faqSchema(service.faqs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.summary,
            serviceType: service.navTitle,
            provider: { "@type": "Organization", name: "Zentium Technologies" },
            areaServed: "Worldwide",
          },
        ]}
      />
    </>
  );
}
