import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
      />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl">
          This page does not exist
        </h1>
        <p className="max-w-md text-base leading-relaxed text-ink-300">
          The link may be out of date, or the page may have moved. Try the services index, or tell us
          what you were looking for.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Browse services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
