import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { LinkCard, CardArrow, IconTile } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

export function ServicesGrid({ limit }: { limit?: number }) {
  const shown = limit ? services.slice(0, limit) : services;

  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we do"
        title="Nine practices, one delivery team"
        description="Every engagement is run by the engineers who scoped it. Pick the practice closest to your problem — most projects span two or three."
      />

      <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((service) => (
          <StaggerItem as="li" key={service.slug} className="flex">
            <LinkCard href={`/services/${service.slug}`} className="flex-1">
              <IconTile>
                <Icon name={service.icon} className="size-5" />
              </IconTile>
              <h3 className="mt-6 text-lg font-medium text-ink-50">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{service.summary}</p>
              <CardArrow />
            </LinkCard>
          </StaggerItem>
        ))}
      </Stagger>

      {limit ? (
        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 hover:text-accent-400"
          >
            View all services
            <ArrowUpRight aria-hidden className="size-4" />
          </Link>
        </Reveal>
      ) : null}
    </Section>
  );
}

export function IndustriesGrid() {
  return (
    <Section id="industries" className="border-y border-white/8">
      <SectionHeading
        eyebrow="Industries"
        title="Context matters more than configuration"
        description="The platform is the same everywhere. What changes is the regulation, the data model and the question your customers keep asking. We start from that."
      />

      <Stagger as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <StaggerItem as="li" key={industry.slug} className="flex">
            <LinkCard href={`/industries/${industry.slug}`} className="flex-1 p-6 sm:p-6">
              <IconTile>
                <Icon name={industry.icon} className="size-5" />
              </IconTile>
              <h3 className="mt-5 text-base font-medium text-ink-50">{industry.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-400">
                {industry.summary}
              </p>
            </LinkCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
