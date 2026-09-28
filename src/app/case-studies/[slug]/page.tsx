import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, Badge } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBand } from "@/components/layout/cta-band";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService } from "@/content/services";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    type: "article",
    publishedTime: study.publishedAt,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const relatedServices = study.services
    .map((serviceSlug) => getService(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { name: "Case Studies", path: "/case-studies" },
          { name: study.industry, path: `/case-studies/${study.slug}` },
        ]}
      >
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
              Client
            </dt>
            <dd className="mt-2 text-sm text-ink-100">{study.client}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
              Industry
            </dt>
            <dd className="mt-2 text-sm text-ink-100">
              {study.industrySlug ? (
                <Link
                  href={`/industries/${study.industrySlug}`}
                  className="text-accent-300 hover:text-accent-400"
                >
                  {study.industry}
                </Link>
              ) : (
                study.industry
              )}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
              Published
            </dt>
            <dd className="mt-2 text-sm text-ink-100">{formatDate(study.publishedAt)}</dd>
          </div>
        </dl>
      </PageHero>

      <Section spacing="tight">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.results.map((result) => (
            <Reveal key={result.label}>
              <Card className="p-6">
                <p className="text-2xl font-semibold text-ink-50 sm:text-3xl">{result.value}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-ink-400">{result.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section size="narrow" spacing="tight">
        <SectionHeading align="left" eyebrow="Challenge" title="What was going wrong" />
        <Stagger className="mt-8 flex flex-col gap-5">
          {study.challenge.map((paragraph) => (
            <StaggerItem key={paragraph}>
              <p className="text-[1.05rem] leading-relaxed text-ink-200">{paragraph}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="border-y border-white/8">
        <SectionHeading align="left" eyebrow="Approach" title="How we built it" />
        <Stagger as="ul" className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {study.approach.map((item, index) => (
            <StaggerItem as="li" key={item.title} className="py-8">
              <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:gap-8">
                <span className="font-mono text-sm text-accent-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink-50">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-300">
                    {item.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section size="narrow">
        <SectionHeading align="left" eyebrow="Architecture" title="How the pieces fit together" />
        <Reveal className="mt-10">
          <ol className="relative flex flex-col gap-5 border-l border-white/10 pl-7">
            {study.architecture.map((step) => (
              <li key={step} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.05rem] top-1.5 size-2.5 rounded-full border border-brand-500/60 bg-ink-950"
                />
                <p className="text-[0.95rem] leading-relaxed text-ink-200">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-12">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">Stack</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {study.stack.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>

        {relatedServices.length ? (
          <Reveal className="mt-12">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
              Services involved
            </h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-200 transition-colors hover:border-brand-500/40 hover:text-white"
                  >
                    {service.navTitle}
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </Section>

      <CtaBand
        title="Recognise this problem in your own org?"
        body="Send us the details. We will tell you whether it is a configuration fix, an architecture problem, or something you can solve without us."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />
    </>
  );
}
