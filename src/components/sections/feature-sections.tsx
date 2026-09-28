import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { featuredCaseStudy } from "@/content/case-studies";
import { homeFaqs } from "@/content/company";

const agentSteps = [
  { label: "Inbound", text: "Customer emails the service address asking where their order is." },
  { label: "Case", text: "Email-to-Case creates the case and applies the right SLA." },
  { label: "Extract", text: "Order references are parsed from the subject and body — including forwarded threads." },
  { label: "Retrieve", text: "Live order data is fetched through a retry-safe integration layer." },
  { label: "Enrich", text: "Status, line items and fulfilment detail are written onto the case." },
  { label: "Draft", text: "A pre-populated reply is prepared for the agent to review and send." },
];

export function AgentforceSpotlight() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-25 [mask-image:radial-gradient(60%_60%_at_30%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8rem] top-1/3 size-[32rem] rounded-full bg-brand-500/15 blur-[130px]"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Eyebrow>Agentforce</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] text-ink-50 sm:text-4xl lg:text-[2.75rem]">
              AI agents that close cases,
              <span className="block text-ink-400">not demos that impress a boardroom.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-300">
              Agentforce only works when it is grounded in data the agent is genuinely permitted to
              see, constrained by guardrails enforced in configuration rather than in prose, and
              measured against a baseline you captured before launch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              Our first production build handles inbound order-status email end to end — with a human
              reviewing every outbound reply.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services/agentforce-ai">
                Agentforce services
                <ArrowUpRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href={`/case-studies/${featuredCaseStudy.slug}`} variant="secondary">
                Read the case study
              </ButtonLink>
            </div>
          </Reveal>

          <Stagger as="ul" className="relative flex flex-col gap-3">
            {agentSteps.map((step, index) => (
              <StaggerItem as="li" key={step.label}>
                <div className="surface-card flex items-start gap-4 rounded-2xl p-5">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 font-mono text-xs text-accent-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-300">
                      {step.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-200">{step.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <p className="mt-2 inline-flex items-center gap-2 text-xs text-ink-400">
                <Sparkles aria-hidden className="size-3.5 text-accent-400" />
                Human approval on every outbound message
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

export function FeaturedCaseStudy() {
  const study = featuredCaseStudy;

  return (
    <Section className="border-y border-white/8">
      <Reveal>
        <Link
          href={`/case-studies/${study.slug}`}
          className="group surface-card block overflow-hidden rounded-4xl p-8 transition duration-300 ease-[var(--ease-out-expo)] hover:border-brand-500/40 sm:p-12"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge tone="brand">Case study</Badge>
            <Badge>{study.industry}</Badge>
          </div>

          <h2 className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-ink-50 sm:text-3xl lg:text-4xl">
            {study.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300">{study.summary}</p>

          <dl className="mt-10 grid gap-8 border-t border-white/8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {study.results.map((result) => (
              <div key={result.label}>
                <dt className="sr-only">{result.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold text-ink-50 sm:text-3xl">
                    {result.value}
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-ink-400">
                    {result.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-colors group-hover:text-accent-400">
            Read the full breakdown
            <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </Reveal>
    </Section>
  );
}

export function FaqSection({
  items = homeFaqs,
  title = "Questions we get asked before the first call",
  eyebrow = "FAQ",
  description,
}: {
  items?: readonly { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <Section size="narrow">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <Reveal className="mt-12">
        <Accordion items={items} />
      </Reveal>
    </Section>
  );
}
