import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ValuesGrid } from "@/components/sections/company-sections";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "We hire rarely and deliberately. If you are a Salesforce engineer who documents their work and says the difficult thing early, send us your CV.",
  path: "/careers",
});

const whatWeLookFor = [
  {
    title: "You can explain the trade-off",
    body: "Anyone can make Salesforce do something. We care that you can articulate why you chose Flow over Apex, or a platform event over a callout — and what it costs.",
  },
  {
    title: "You write things down",
    body: "Undocumented automation is technical debt with interest. If your instinct after solving something is to record how and why, you will fit here.",
  },
  {
    title: "You say the difficult thing early",
    body: "If a requirement will not survive contact with the platform, we want that raised in week one — to us and to the client.",
  },
  {
    title: "You are senior, or clearly heading there",
    body: "We are small and client-facing. There is no bench to hide on and no layer between you and the person paying for the work.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We hire rarely, and only people we would put in front of a client on day one"
        description="There are no open roles advertised right now. That does not mean we are not interested — we keep a short list and reach out when the right project arrives."
        breadcrumbs={[{ name: "Careers", path: "/careers" }]}
      >
        <div className="mt-9">
          <ButtonLink href={`mailto:${siteConfig.email}?subject=Application%20%E2%80%94%20Salesforce%20Engineer`} size="lg" external>
            Send us your CV
            <ArrowUpRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          align="left"
          eyebrow="What we look for"
          title="Four things we actually screen on"
        />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2">
          {whatWeLookFor.map((item) => (
            <StaggerItem as="li" key={item.title} className="flex">
              <Card className="flex-1 p-6 sm:p-7">
                <h3 className="text-base font-medium text-ink-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="border-y border-white/8">
        <SectionHeading eyebrow="How we work" title="What you would be joining" />
        <div className="mt-14">
          <ValuesGrid />
        </div>
      </Section>

      <Section size="narrow">
        <Reveal>
          <Card className="p-8 sm:p-10">
            <h2 className="text-xl font-medium text-ink-50">Sending a speculative application</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-300">
              Email your CV to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-300 hover:text-accent-400"
              >
                {siteConfig.email}
              </a>{" "}
              with a short note covering:
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-[0.95rem] leading-relaxed text-ink-200">
              {[
                "The hardest Salesforce problem you have solved, and what made it hard",
                "Your certifications and Trailhead profile",
                "A link to code or a component you are proud of, if you have one you can share",
                "Whether you are looking for project work, retainer work or something full time",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-400">
              We read everything and reply to everyone, even when the answer is no.
            </p>
          </Card>
        </Reveal>
      </Section>

      <JsonLd data={breadcrumbSchema([{ name: "Careers", path: "/careers" }])} />
    </>
  );
}
