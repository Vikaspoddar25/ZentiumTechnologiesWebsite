import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { NodeField } from "@/components/motion/node-field";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { siteConfig } from "@/content/site";

const clouds = [
  "Agentforce",
  "Sales Cloud",
  "Service Cloud",
  "Experience Cloud",
  "Data Cloud",
  "Integration",
  "Apex & LWC",
  "Next.js",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-backdrop opacity-40 [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-18rem] size-[46rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]" />
        <div className="absolute right-[-12rem] top-32 size-[30rem] rounded-full bg-accent-500/10 blur-[130px]" />
        <NodeField className="absolute inset-0 size-full opacity-70 [mask-image:radial-gradient(65%_55%_at_50%_35%,black,transparent)]" />
      </div>

      <Container className="relative pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pt-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Salesforce consultancy · Est. {siteConfig.founded}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-ink-50 sm:text-5xl lg:text-[4.1rem]">
              Salesforce, architected to still
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient">make sense in year three</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              We design, build and support Salesforce for companies that need it to work properly —
              Agentforce in production, integrations that survive outages, and portals that pass a
              security review. Seventeen certifications, two senior engineers, no account layer.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact#enquiry" size="lg">
                Get a proposal
                <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary" size="lg">
                See how we work
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-ink-400">
              <ShieldCheck aria-hidden className="size-4 text-accent-400" />
              Fixed scope, fixed price — agreed before a single field is built
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 lg:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="bg-ink-950 px-6 py-7 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl">
                    {"raw" in stat && stat.raw ? (
                      stat.raw
                    ) : (
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    )}
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-ink-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.48}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {clouds.map((cloud) => (
              <span
                key={cloud}
                className="rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400"
              >
                {cloud}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
