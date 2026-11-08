"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Mail, MessageCircle, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

const STORAGE_KEY = "zentium:engineer-popup";
const DELAY_MS = 8000;
const easing = [0.16, 1, 0.3, 1] as const;

const points = ["Senior-led delivery", "Scope before build", "A useful handover"];

function alreadyShown() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markShown() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage can be unavailable (private mode); showing again is acceptable.
  }
}

export function EngineerPopup() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [open, setOpen] = useState(false);

  const excluded = pathname?.startsWith("/contact") ?? false;
  const whatsapp = siteConfig.phones[0]?.whatsapp;
  const visible = open && !excluded;

  useEffect(() => {
    if (excluded || alreadyShown()) return;
    const timer = window.setTimeout(() => {
      if (alreadyShown()) return;
      markShown();
      setOpen(true);
    }, DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [excluded]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (visible && !dialog.open) {
      dialog.showModal();
      // Focus the title rather than the first control so no focus ring flashes on open.
      titleRef.current?.focus();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [visible]);

  const close = useCallback(() => setOpen(false), []);

  const handleExitComplete = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="engineer-popup-title"
      aria-describedby="engineer-popup-description"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-4 text-ink-50 backdrop:bg-transparent open:flex open:items-center open:justify-center"
    >
      <AnimatePresence onExitComplete={handleExitComplete}>
        {visible ? (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={close}
              className="fixed inset-0 bg-ink-950/75 backdrop-blur-sm"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              key="panel"
              className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/10 bg-ink-900 shadow-[0_40px_120px_-30px] shadow-brand-500/40"
              initial={reduced ? false : { opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduced
                  ? { opacity: 0, transition: { duration: 0 } }
                  : { opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.2 } }
              }
              transition={{ duration: 0.5, ease: easing }}
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
                <div className="absolute inset-0 grid-backdrop opacity-30 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
              </div>

              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-full text-ink-300 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                <X className="size-5" aria-hidden="true" />
              </button>

              <div className="relative px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-200">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-500/70 motion-reduce:animate-none" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
                  </span>
                  Senior engineers · Online
                </p>

                <h2
                  id="engineer-popup-title"
                  ref={titleRef}
                  tabIndex={-1}
                  className="mt-5 text-3xl font-semibold tracking-tight text-white outline-none sm:text-4xl"
                >
                  Talk to an <span className="text-gradient">engineer</span>
                </h2>
                <p id="engineer-popup-description" className="mt-3 text-[0.95rem] leading-relaxed text-ink-300">
                  Tell us what you are building on Salesforce and a senior engineer will get back to
                  you — usually within one business hour.
                </p>

                <ul className="mt-6 grid gap-2.5">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-ink-100">
                      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact#enquiry" size="lg" className="w-full sm:w-auto sm:flex-1" onClick={close}>
                    Talk to an engineer
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </ButtonLink>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex h-13 items-center justify-center rounded-full px-6 text-sm font-medium text-ink-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    Maybe later
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 pt-5 text-sm text-ink-400">
                  <span>Prefer to reach out directly?</span>
                  {whatsapp ? (
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-200 transition-colors hover:text-white"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      WhatsApp
                    </a>
                  ) : null}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 text-ink-200 transition-colors hover:text-white"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </dialog>
  );
}
