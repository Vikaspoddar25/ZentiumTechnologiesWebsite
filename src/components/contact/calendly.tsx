"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

/** Loads the Calendly widget only once it scrolls into view, so it never blocks first paint. */
export function CalendlyEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    if (document.querySelector("script[data-calendly]")) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendly = "true";
    document.body.appendChild(script);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="surface-card overflow-hidden rounded-3xl">
      {shouldLoad ? (
        <>
          <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
          <div
            className="calendly-inline-widget min-h-[680px]"
            data-url={`${url}?hide_gdpr_banner=1&background_color=04070c&text_color=e9eef5&primary_color=0077be`}
          />
          <noscript>
            <p className="p-6 text-sm text-ink-300">
              Enable JavaScript to book a slot, or email us instead.
            </p>
          </noscript>
        </>
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 p-10 text-center">
          <Calendar aria-hidden className="size-8 text-accent-400" />
          <p className="text-sm text-ink-300">Loading the scheduling calendar…</p>
        </div>
      )}
    </div>
  );
}

export function CalendlyFallback() {
  return (
    <div className="surface-card flex flex-col items-start gap-4 rounded-3xl p-8">
      <Calendar aria-hidden className="size-7 text-accent-400" />
      <h3 className="text-lg font-medium text-ink-50">Prefer to talk it through?</h3>
      <p className="text-sm leading-relaxed text-ink-300">
        Send us a couple of times that suit you and we will confirm a 30-minute technical call — no
        sales pitch, just an engineer and your problem.
      </p>
      <ButtonLink href="#enquiry" variant="secondary" size="sm">
        Request a call
      </ButtonLink>
    </div>
  );
}
