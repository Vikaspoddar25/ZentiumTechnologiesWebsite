"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function Accordion({ items, className }: { items: readonly FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-white/8 border-y border-white/8", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={cn(
                    "text-base font-medium transition-colors sm:text-lg",
                    isOpen ? "text-ink-50" : "text-ink-100",
                  )}
                >
                  {item.question}
                </span>
                <Plus
                  aria-hidden
                  className={cn(
                    "mt-0.5 size-5 shrink-0 text-ink-300 transition-transform duration-300 ease-[var(--ease-out-expo)]",
                    isOpen && "rotate-45 text-accent-400",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="text-[0.95rem] leading-relaxed text-ink-300">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
