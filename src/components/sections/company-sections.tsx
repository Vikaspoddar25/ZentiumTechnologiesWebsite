import { Check } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { process, differentiators, values } from "@/content/company";
import { certifications, certificationCount } from "@/content/team";

export function Narrative() {
  return (
    <section className="relative overflow-hidden border-y border-white/8">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10rem] top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-brand-600/12 blur-[130px]"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow>The problem</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.12] text-ink-50 sm:text-4xl lg:text-[2.75rem]">
                Most Salesforce orgs do not fail at launch.
                <span className="block text-ink-400">They fail in year two.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-300">
                By then the automation has multiplied, three integrations have been bolted on by
                three different vendors, and nobody can change a validation rule without breaking
                something in a different department.
              </p>
              <ButtonLink href="/contact#enquiry" variant="secondary" className="mt-8">
                Book an org assessment
              </ButtonLink>
            </div>
          </Reveal>

          <Stagger className="flex flex-col gap-5">
            {[
              {
                title: "Automation nobody can untangle",
                body: "Workflow rules, process builders and triggers firing on the same object in an order nobody documented. Every change becomes a gamble.",
              },
              {
                title: "Integrations that fail quietly",
                body: "Synchronous callouts with no retry queue. A downstream outage becomes silent data loss that surfaces at quarter end.",
              },
              {
                title: "AI pilots that never ship",
                body: "An agent that demos beautifully on clean data and collapses on the real service queue, because grounding and guardrails were an afterthought.",
              },
              {
                title: "A portal that failed security review",
                body: "Guest-user access granted to make a page render, never revisited, and now exposing records to anyone who can reach the URL.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="p-6 sm:p-7">
                  <h3 className="text-base font-medium text-ink-50">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{item.body}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How we work"
        title="Four stages, and you can stop after any of them"
        description="Discovery produces something useful on its own. If you decide not to build with us, the assessment and architecture are still yours."
      />

      <Stagger as="ul" className="mt-14 grid gap-5 lg:grid-cols-4">
        {process.map((step) => (
          <StaggerItem as="li" key={step.step} className="flex">
            <Card className="flex flex-1 flex-col p-6 sm:p-7">
              <span className="font-mono text-xs tracking-[0.2em] text-accent-300">{step.step}</span>
              <h3 className="mt-5 text-lg font-medium text-ink-50">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{step.body}</p>
              <p className="mt-6 border-t border-white/8 pt-4 text-xs text-ink-400">
                {step.deliverable}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function WhyZentium() {
  return (
    <Section className="border-y border-white/8">
      <SectionHeading
        eyebrow="Why Zentium"
        title="Small team. Senior hands. Nothing lost in translation."
        description="You brief the architect, the architect builds it, and the same person answers the phone when something breaks."
      />

      <Stagger as="ul" className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2">
        {differentiators.map((item) => (
          <StaggerItem as="li" key={item.title} className="bg-ink-950 p-7 sm:p-8">
            <h3 className="flex items-start gap-3 text-base font-medium text-ink-50">
              <Check aria-hidden className="mt-0.5 size-4.5 shrink-0 text-accent-400" />
              {item.title}
            </h3>
            <p className="mt-3 pl-7.5 text-sm leading-relaxed text-ink-300">{item.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function CertificationsWall() {
  return (
    <Section spacing="tight">
      <Reveal className="surface-card relative overflow-hidden rounded-4xl p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 -translate-y-2/3 rounded-full bg-brand-500/18 blur-[110px]"
        />
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Eyebrow>Credentials</Eyebrow>
            <p className="mt-6 text-5xl font-semibold tracking-tight text-ink-50 sm:text-6xl">
              {certificationCount}
              <span className="text-brand-400">x</span>
            </p>
            <p className="mt-3 text-base text-ink-200">Salesforce certifications across the team</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              Including Integration Architecture Designer and Agentforce Specialist — the two
              credentials that matter most for the work we are usually called in to do.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {certifications.map((certification) => (
              <li
                key={certification}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-200"
              >
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

export function ValuesGrid() {
  return (
    <Stagger as="ul" className="grid gap-5 sm:grid-cols-2">
      {values.map((value) => (
        <StaggerItem as="li" key={value.title} className="flex">
          <Card className="flex-1 p-6 sm:p-7">
            <h3 className="text-base font-medium text-ink-50">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">{value.body}</p>
          </Card>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
