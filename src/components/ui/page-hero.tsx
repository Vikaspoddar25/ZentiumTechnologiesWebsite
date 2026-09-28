import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./container";
import { Eyebrow } from "./section";
import { Reveal } from "@/components/motion/reveal";

export type Crumb = { name: string; path: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-backdrop opacity-30 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-16rem] size-[36rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[130px]" />
      </div>

      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="transition-colors hover:text-ink-200">
                  Home
                </Link>
                <ChevronRight aria-hidden className="size-3" />
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center gap-1.5">
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-ink-200" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.path} className="transition-colors hover:text-ink-200">
                        {crumb.name}
                      </Link>
                      <ChevronRight aria-hidden className="size-3" />
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <Reveal className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-50 sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {description ? (
            <div className="mt-6 text-base leading-relaxed text-ink-300 sm:text-lg">
              {description}
            </div>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
