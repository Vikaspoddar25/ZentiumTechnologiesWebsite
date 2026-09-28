import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export function CtaBand({
  eyebrow = "Start here",
  title = "Tell us what is not working. We will tell you what it takes to fix it.",
  body = "Send us the problem — a stalled implementation, an integration that keeps failing, an AI pilot that will not reach production. You get a considered response from a certified engineer, not a sales sequence.",
  primaryLabel = "Get a proposal",
  primaryHref = "/contact#enquiry",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-[0.35] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/18 blur-[120px]"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl font-semibold text-ink-50 sm:text-4xl lg:text-5xl lg:leading-[1.08]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-ink-300 sm:text-lg">{body}</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" size="lg" external>
              Email us directly
            </ButtonLink>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
            {siteConfig.availability}
          </p>
        </div>
      </Container>
    </section>
  );
}
