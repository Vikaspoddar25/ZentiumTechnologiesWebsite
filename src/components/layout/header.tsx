"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type MenuKey = "services" | "industries";

const flatLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close any open menu when the route changes.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || openMenu
          ? "border-b border-white/8 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
            <MenuTrigger
              label="Services"
              isOpen={openMenu === "services"}
              onOpen={() => setOpenMenu("services")}
              href="/services"
            />
            <MenuTrigger
              label="Industries"
              isOpen={openMenu === "industries"}
              onOpen={() => setOpenMenu("industries")}
              href="/industries"
            />
            {flatLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(null)}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-ink-50"
                    : "text-ink-300 hover:text-ink-50",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/contact" variant="secondary" size="sm">
              Contact
            </ButtonLink>
            <ButtonLink href="/contact#enquiry" size="sm">
              Get a proposal
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-ink-100 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </Container>

      {openMenu ? (
        <div className="absolute inset-x-0 top-full hidden border-b border-white/8 bg-ink-950 shadow-2xl shadow-black/60 lg:block">
          <Container>
            {openMenu === "services" ? <ServicesMenu /> : <IndustriesMenu />}
          </Container>
        </div>
      ) : null}

      {mobileOpen ? <MobileNav /> : null}
    </header>
  );
}

function MenuTrigger({
  label,
  href,
  isOpen,
  onOpen,
}: {
  label: string;
  href: string;
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      aria-expanded={isOpen}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors",
        isOpen ? "text-ink-50" : "text-ink-300 hover:text-ink-50",
      )}
    >
      {label}
      <ChevronDown
        aria-hidden
        className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")}
      />
    </Link>
  );
}

function ServicesMenu() {
  return (
    <div className="grid grid-cols-[1fr_20rem] gap-10 py-8">
      <ul className="grid grid-cols-3 gap-x-6 gap-y-1">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.04]"
            >
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-accent-300">
                <Icon name={service.icon} className="size-4.5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink-50">{service.navTitle}</span>
                <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-ink-400">
                  {service.blurb}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="surface-card rounded-3xl p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300">
          Featured
        </p>
        <p className="mt-3 text-base font-medium text-ink-50">
          Agentforce, in production
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-300">
          Inbound order-status email resolved end to end — parsed, enriched from live order data and
          drafted for agent review.
        </p>
        <Link
          href="/case-studies/agentforce-order-status-automation"
          className="mt-4 inline-block text-sm font-medium text-accent-300 hover:text-accent-400"
        >
          Read the case study →
        </Link>
      </div>
    </div>
  );
}

function IndustriesMenu() {
  return (
    <ul className="grid grid-cols-4 gap-x-6 gap-y-1 py-8">
      {industries.map((industry) => (
        <li key={industry.slug}>
          <Link
            href={`/industries/${industry.slug}`}
            className="flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.04]"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-accent-300">
              <Icon name={industry.icon} className="size-4.5" />
            </span>
            <span className="text-sm font-medium text-ink-50">{industry.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileNav() {
  return (
    <div
      id="mobile-nav"
      className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-white/8 bg-ink-950 lg:hidden"
    >
      <Container className="flex flex-col gap-8 py-8">
        <MobileGroup title="Services" href="/services">
          {services.map((service) => (
            <MobileLink key={service.slug} href={`/services/${service.slug}`}>
              {service.navTitle}
            </MobileLink>
          ))}
        </MobileGroup>

        <MobileGroup title="Industries" href="/industries">
          {industries.map((industry) => (
            <MobileLink key={industry.slug} href={`/industries/${industry.slug}`}>
              {industry.title}
            </MobileLink>
          ))}
        </MobileGroup>

        <div className="flex flex-col gap-1">
          {flatLinks.map((link) => (
            <MobileLink key={link.href} href={link.href}>
              {link.label}
            </MobileLink>
          ))}
          <MobileLink href="/careers">Careers</MobileLink>
        </div>

        <div className="flex flex-col gap-3 pb-6">
          <ButtonLink href="/contact#enquiry" size="lg" className="w-full">
            Get a proposal
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg" className="w-full">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}

function MobileGroup({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link
        href={href}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-300"
      >
        {title}
      </Link>
      <div className="mt-3 flex flex-col gap-1">{children}</div>
    </div>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-xl py-2.5 text-[1.05rem] text-ink-100 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
