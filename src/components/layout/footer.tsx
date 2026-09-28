import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { siteConfig, footerNav } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Logo showTagline />
            <p className="mt-6 text-sm leading-relaxed text-ink-300">
              A Salesforce consultancy led by 17x certified engineers — architecture, Agentforce,
              integrations and the web platforms around them.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-start gap-2.5 text-ink-200 transition-colors hover:text-white"
                >
                  <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-accent-400" />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="inline-flex items-start gap-2.5 text-ink-200 transition-colors hover:text-white"
                  >
                    <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-accent-400" />
                    {phone.label}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-ink-300">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-accent-400" />
                {siteConfig.location.label}
              </li>
            </ul>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-ink-200 transition-colors hover:border-white/25 hover:text-white"
              aria-label="Zentium Technologies on LinkedIn"
            >
              <Linkedin aria-hidden className="size-4" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-ink-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink-200">
              Terms of Service
            </Link>
          </div>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-ink-400">
          Salesforce, Agentforce, Sales Cloud, Service Cloud and Experience Cloud are trademarks of
          Salesforce, Inc. Zentium Technologies is an independent consultancy and is not affiliated
          with or endorsed by Salesforce, Inc.
        </p>
      </Container>
    </footer>
  );
}
