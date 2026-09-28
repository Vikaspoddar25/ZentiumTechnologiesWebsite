import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden
      className={cn("size-9", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="zt-mark" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2198DB" />
          <stop offset="0.55" stopColor="#0077BE" />
          <stop offset="1" stopColor="#0063A0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#zt-mark)" />
      <g stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
        <path d="M24 24 13 14M24 24l11-10M24 24 13 34M24 24l11 10M24 24h11M24 24H13" />
      </g>
      <g fill="#fff">
        <circle cx="24" cy="24" r="4" />
        <circle cx="13" cy="14" r="2.6" />
        <circle cx="35" cy="14" r="2.6" />
        <circle cx="13" cy="34" r="2.6" />
        <circle cx="35" cy="34" r="2.6" />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3 rounded-lg", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-tight text-ink-50">
          Zentium <span className="text-ink-300 font-normal">Technologies</span>
        </span>
        {showTagline ? (
          <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
