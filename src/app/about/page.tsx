import { Linkedin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card, Badge } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CertificationsWall, ValuesGrid, WhyZentium } from "@/components/sections/company-sections";
import { CtaBand } from "@/components/layout/cta-band";
import { team } from "@/content/team";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Zentium Technologies",
  description:
    "A two-person Salesforce consultancy with 17 certifications between them — founded in 2025, based in Rajasthan, India, working with clients worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Two senior engineers. Seventeen certifications. No account layer."
        description="Zentium Technologies exists because the people who understand your architecture and the people who talk to you are usually not the same people. We removed the gap by staying small."
        breadcrumbs={[{ name: "About", path: "/about" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our story" title={`Founded in ${siteConfig.founded}`} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5 text-[1.05rem] leading-relaxed text-ink-200">
              <p>
                Between us we have spent more than fifteen years inside Salesforce consultancies,
                delivering implementations for clients who mostly never met the architect who
                designed their org.
              </p>
              <p>
                We kept seeing the same failure. A project is scoped by someone commercial, designed
                by someone senior, built by someone junior, and handed over with no documentation.
                Eighteen months later the client is paying a different firm to untangle it.
              </p>
              <p>
                Zentium is the correction. Two certified engineers who scope, architect, build and
                support the same work — so nothing is lost in translation, and the person who
                answers when something breaks already knows why it was built that way.
              </p>
              <p>
                We are based in Rajasthan and work fully remote with clients across India, the US,
                Europe and the Middle East. We are not a Salesforce AppExchange partner, and we do
                not price like one.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-white/8">
        <SectionHeading
          eyebrow="The team"
          title="You will work with both of us"
          description="Not a bench, not a rotating pool of resources. These are the two people on every project."
        />

        <Stagger as="ul" className="mt-14 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <StaggerItem as="li" key={member.slug} className="flex">
              <Card className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-start gap-5">
                  <span
                    aria-hidden
                    className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/12 font-mono text-base text-accent-300"
                  >
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-ink-50">{member.name}</h3>
                    <p className="mt-1 text-sm text-accent-300">{member.role}</p>
                    <p className="mt-1 text-xs text-ink-400">{member.location}</p>
                  </div>
                </div>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  {member.headline}
                </p>

                <div className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-relaxed text-ink-300">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-white/8 pt-6 sm:grid-cols-4">
                  {member.highlights.map((highlight) => (
                    <div key={highlight.label}>
                      <dt className="text-[11px] text-ink-400">{highlight.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-ink-100">{highlight.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6">
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                    Certifications
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {member.certifications.map((certification) => (
                      <li key={certification}>
                        <Badge>{certification.replace("Salesforce Certified ", "").replace("Salesforce ", "")}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-accent-300 transition-colors hover:text-accent-400"
                  >
                    <Linkedin aria-hidden className="size-4" />
                    View LinkedIn profile
                  </a>
                ) : null}
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CertificationsWall />

      <Section className="border-t border-white/8">
        <SectionHeading
          eyebrow="How we operate"
          title="Four things we will not compromise on"
        />
        <div className="mt-14">
          <ValuesGrid />
        </div>
      </Section>

      <WhyZentium />

      <CtaBand
        eyebrow="Work with us"
        title="Talk to the person who will architect your solution."
        body="No discovery call with a salesperson first. Your first conversation is with the engineer who would lead the work."
      />
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
    </>
  );
}
