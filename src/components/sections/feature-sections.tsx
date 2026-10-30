import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
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
            <Eyebrow>Agentforce · illustrative workflow</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] text-ink-50 sm:text-4xl lg:text-[2.75rem]">
              Agentforce needs more
              <span className="block text-ink-400">than a good demo.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-300">
              A responsible service workflow starts with the data an agent may access, guardrails
              enforced in configuration, and a baseline to measure before launch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              For an order-status enquiry, that could mean retrieving live order details and
              preparing a reply for an agent to review rather than sending an autonomous answer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services/agentforce-ai">
                Agentforce services
                <ArrowUpRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="/contact#enquiry" variant="secondary">
                Talk through your use case
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
