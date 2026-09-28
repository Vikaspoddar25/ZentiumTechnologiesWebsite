import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { CalendlyEmbed, CalendlyFallback } from "@/components/contact/calendly";
import { FaqSection } from "@/components/sections/feature-sections";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to a certified Salesforce engineer about your project. Email, phone, WhatsApp or book a technical call — we respond within one business hour.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsapp = siteConfig.phones[0];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the engineer who would build it"
        description="No discovery call with a salesperson first. Describe the problem and a certified engineer replies personally — usually within one business hour."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <Section id="enquiry" className="scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <Card className="p-7">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">
                  Direct channels
                </h2>
                <ul className="mt-6 flex flex-col gap-5 text-sm">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group flex items-start gap-3 text-ink-200 transition-colors hover:text-white"
                    >
                      <Mail aria-hidden className="mt-0.5 size-4.5 shrink-0 text-accent-400" />
                      <span>
                        <span className="block text-xs text-ink-400">Email</span>
                        <span className="mt-0.5 block break-all">{siteConfig.email}</span>
                      </span>
                    </a>
                  </li>
                  {siteConfig.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="group flex items-start gap-3 text-ink-200 transition-colors hover:text-white"
                      >
                        <Phone aria-hidden className="mt-0.5 size-4.5 shrink-0 text-accent-400" />
                        <span>
                          <span className="block text-xs text-ink-400">Call</span>
                          <span className="mt-0.5 block">{phone.label}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`https://wa.me/${whatsapp.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 text-ink-200 transition-colors hover:text-white"
                    >
                      <MessageCircle aria-hidden className="mt-0.5 size-4.5 shrink-0 text-accent-400" />
                      <span>
                        <span className="block text-xs text-ink-400">WhatsApp</span>
                        <span className="mt-0.5 block">{whatsapp.label}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-ink-300">
                    <Clock aria-hidden className="mt-0.5 size-4.5 shrink-0 text-accent-400" />
                    <span>
                      <span className="block text-xs text-ink-400">Availability</span>
                      <span className="mt-0.5 block">{siteConfig.availability}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-ink-300">
                    <MapPin aria-hidden className="mt-0.5 size-4.5 shrink-0 text-accent-400" />
                    <span>
                      <span className="block text-xs text-ink-400">Based in</span>
                      <span className="mt-0.5 block">{siteConfig.location.label}</span>
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-7">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">
                  What happens next
                </h2>
                <ol className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-ink-300">
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-accent-300">01</span>
                    An engineer reads your message and replies personally.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-accent-300">02</span>
                    A 30-minute technical call to understand the current state.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-accent-300">03</span>
                    A written assessment and a fixed-scope, fixed-price proposal.
                  </li>
                </ol>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-white/8">
        <SectionHeading
          eyebrow="Book a slot"
          title="Or put 30 minutes in the diary"
          description="A technical conversation about your org — not a qualification call."
        />
        <Reveal className="mt-12">
          {siteConfig.calendlyUrl ? (
            <CalendlyEmbed url={siteConfig.calendlyUrl} />
          ) : (
            <CalendlyFallback />
          )}
        </Reveal>
      </Section>

      <FaqSection
        eyebrow="Before you write"
        title="Things worth knowing"
        items={[
          {
            question: "How quickly will I hear back?",
            answer:
              "Usually within one business hour, and always within 24 hours. Critical production incidents for retainer clients are covered 24/7.",
          },
          {
            question: "Will I speak to a salesperson?",
            answer:
              "No. There are two of us and we are both engineers. Your first conversation is with the person who would architect the solution.",
          },
          {
            question: "Do you charge for the first call?",
            answer:
              "No. The initial technical call is free. Structured discovery — where we audit the org and produce an architecture document — is paid, and that documentation is yours regardless of whether you build with us.",
          },
          {
            question: "What if my project is small?",
            answer:
              "Say so. Some problems are a two-day fix and we will tell you that rather than scoping a project around them.",
          },
        ]}
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: `Contact ${siteConfig.name}`,
            url: `${siteConfig.url}/contact`,
          },
        ]}
      />
    </>
  );
}
