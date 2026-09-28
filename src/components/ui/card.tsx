import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "surface-card relative overflow-hidden rounded-3xl p-6 transition-colors duration-300 sm:p-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Card with a hover glow — used for linked grids. */
export function LinkCard({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group surface-card relative flex flex-col overflow-hidden rounded-3xl p-6 transition duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-brand-500/45 sm:p-8",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at 50% 0%, color-mix(in oklab, var(--color-brand-500) 20%, transparent), transparent 70%)",
        }}
      />
      <span className="relative flex flex-1 flex-col">{children}</span>
    </Link>
  );
}

export function CardArrow({ children }: { children?: React.ReactNode }) {
  return (
    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-colors group-hover:text-accent-400">
      {children ?? "Learn more"}
      <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-accent-300">
      {children}
    </span>
  );
}

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "brand";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider",
        tone === "brand"
          ? "border-brand-500/35 bg-brand-500/10 text-accent-300"
          : "border-white/10 bg-white/[0.04] text-ink-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
