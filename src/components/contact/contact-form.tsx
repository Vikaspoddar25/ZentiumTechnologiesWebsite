"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  contactSchema,
  serviceOptions,
  budgetOptions,
  type ContactInput,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.95rem] text-ink-50 placeholder:text-ink-400 transition-colors focus:border-brand-500/60 focus:outline-none focus:ring-2 focus:ring-brand-500/25";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "", budget: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setServerError(data?.error ?? "Something went wrong. Please email us directly.");
        setStatus("error");
        return;
      }

      reset();
      setStatus("success");
    } catch {
      setServerError("Network error. Please email us directly.");
      setStatus("error");
    }
  });

  if (status === "success") {
    return (
      <div
        role="status"
        className="surface-card flex flex-col items-center gap-4 rounded-3xl p-10 text-center"
      >
        <CheckCircle2 aria-hidden className="size-10 text-accent-400" />
        <h3 className="text-xl font-medium text-ink-50">Message received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-300">
          A certified engineer will read this and reply personally — usually within one business
          hour, and always within 24 hours.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card rounded-3xl p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} required>
          <input
            {...register("name")}
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            className={fieldClasses}
          />
        </Field>

        <Field label="Work email" error={errors.email?.message} required>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            className={fieldClasses}
          />
        </Field>

        <Field label="Company" error={errors.company?.message}>
          <input
            {...register("company")}
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className={fieldClasses}
          />
        </Field>

        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Include country code"
            className={fieldClasses}
          />
        </Field>

        <Field label="What do you need?" error={errors.service?.message}>
          <select {...register("service")} id="service" className={cn(fieldClasses, "appearance-none")}>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget range" error={errors.budget?.message}>
          <select {...register("budget")} id="budget" className={cn(fieldClasses, "appearance-none")}>
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Tell us about the project" error={errors.message?.message} required>
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              placeholder="What is the current state, what has been tried, and what does success look like?"
              aria-invalid={Boolean(errors.message)}
              className={cn(fieldClasses, "resize-y")}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot — hidden from users, catches naive bots. */}
      <div aria-hidden className="absolute left-[-9999px] top-auto size-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input {...register("website")} id="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError ? (
        <p role="alert" className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {serverError}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight aria-hidden className="size-4" />
            </>
          )}
        </Button>
        <p className="text-xs leading-relaxed text-ink-400">
          We reply personally. No newsletters, no drip sequences.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactElement<{ id?: string }>;
}) {
  const id = children.props.id;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink-200">
        {label}
        {required ? (
          <span aria-hidden className="ml-1 text-accent-400">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-ink-400">(optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
