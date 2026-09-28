import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "default" | "narrow" | "wide";
  spacing?: "default" | "tight" | "loose";
  children: React.ReactNode;
};

const spacingMap = {
  tight: "py-16 sm:py-20",
  default: "py-20 sm:py-28",
  loose: "py-24 sm:py-36",
};

export function Section({
  id,
  className,
  containerClassName,
  size = "default",
  spacing = "default",
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative", spacingMap[spacing], className)}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-3xl items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold text-ink-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent-300",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_2px] shadow-accent-400/60" />
      {children}
    </span>
  );
}
