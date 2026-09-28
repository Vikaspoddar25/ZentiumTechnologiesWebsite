---
name: zentium-frontend
description: 'React/Next.js frontend development for the Zentium Technologies website — component architecture, TypeScript, state, data handling, routing, forms, API integration, error handling. Use when adding pages, components, hooks, forms, or API routes in this Next.js App Router project.'
---

# Zentium Frontend Development

## Purpose

Implement frontend features that fit cleanly into the existing Next.js 16 App Router
codebase without introducing new patterns or dependencies unnecessarily.

## Ground truth — verified stack

- **Next.js 16** (App Router, `src/app`), **React 19**, **TypeScript 5.7** (strict).
- **Tailwind CSS v4** via `@theme` tokens in `globals.css` — no `tailwind.config.js`.
- **Forms**: `react-hook-form` + `zod` + `@hookform/resolvers` for validation.
- **Email**: `resend` for transactional email (server-side only — never expose API keys
  client-side).
- **Icons**: `lucide-react`. **Class merging**: `cn()` in
  [src/lib/utils.ts](../../../src/lib/utils.ts).
- **Content**: typed modules in [src/content/](../../../src/content/) (`site.ts`,
  `company.ts`, `services.ts`, `industries.ts`, `case-studies.ts`, `team.ts`,
  `posts.ts`) — treat these as the single source of truth; import from them rather than
  duplicating copy/data inline.
- No state management library is installed — use React state/context idiomatically;
  don't add Redux/Zustand/etc. without a clear, explicit need.
- No test framework is configured — don't assume Jest/Vitest/RTL exist.

## Rules

- Follow the existing project architecture (App Router conventions: `page.tsx`,
  `layout.tsx`, server components by default, `"use client"` only where needed for
  interactivity/hooks — see `reveal.tsx` for the pattern).
- Do not introduce unnecessary dependencies. Check `package.json` first; prefer what's
  already installed.
- Do not rewrite working components without a specific reason tied to the task.
- Prefer reusable, typed components over copy-pasted markup.
- Keep secrets (Resend API key, Calendly URL, etc.) in environment variables — read
  from `process.env`, never hardcode. Match the pattern in `.env.example`.
- Validate all external/form input with `zod` schemas before using it, especially in
  API routes / server actions.

## Procedure

1. Check `src/content/` for existing data before adding new content or props.
2. Check `src/components/ui` and `src/components/layout` for an existing component to
   reuse or extend before creating a new one.
3. Implement using TypeScript types (avoid `any`); run `npm run typecheck` after
   non-trivial changes.
4. For forms, use `react-hook-form` + `zod` + `@hookform/resolvers`, consistent with
   existing forms in the project.
5. Run `npm run lint` and `npm run typecheck` before considering the change complete.
