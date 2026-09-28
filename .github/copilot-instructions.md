# Zentium Technologies Website — Copilot Instructions

This is the marketing/consultancy website for **Zentium Technologies**, a Salesforce
consultancy. Respect the existing implementation — this project is under active,
incremental development, not a greenfield sandbox.

## Repository

- Only push to **`Vikaspoddar25/ZentiumTechnologiesWebsite`**. Never push to, or create
  content for, any other repository.
- Never force-push, rewrite history, or delete branches automatically.
- Never commit `.env`, API keys, tokens, or other secrets. `.env.example` documents the
  required variables only — real values never belong in the repo.

## Stack (verified from the codebase — do not assume otherwise)

- **Next.js 16** (App Router, `src/app`), **React 19**, **TypeScript 5.7**, strict mode.
- **Tailwind CSS v4** — tokens are defined as CSS `@theme` variables in
  [src/app/globals.css](../src/app/globals.css) (brand/accent/ink color ramps, fonts,
  radii, easing, keyframes). There is no `tailwind.config.js`.
- **motion** (Framer Motion successor, imported as `motion/react`) for animation —
  see [src/components/motion/reveal.tsx](../src/components/motion/reveal.tsx) and
  [count-up.tsx](../src/components/motion/count-up.tsx).
- **react-hook-form + zod + @hookform/resolvers** for forms, **resend** for transactional
  email, **lucide-react** for icons, **clsx + tailwind-merge** via the `cn()` helper in
  [src/lib/utils.ts](../src/lib/utils.ts).
- No 3D/WebGL library is installed yet. No test framework is configured yet (only
  `eslint` and `tsc --noEmit`). Do not assume a testing library exists.
- Typed content lives in [src/content/](../src/content/) (`site.ts`, `company.ts`,
  `services.ts`, `industries.ts`, `case-studies.ts`, `team.ts`, `posts.ts`) — this is the
  single source of truth for business facts, copy, and structured data.

## Ground rules

- **Prefer incremental changes.** Do not redesign, rewrite, or refactor working code
  unless the task explicitly requires it.
- **Reuse existing components and design tokens** in `src/components/ui`,
  `src/components/layout`, `src/components/motion`, and the `@theme` tokens in
  `globals.css`. Don't invent new color values, spacing scales, or one-off patterns.
- **Never invent company information** — clients, testimonials, certifications,
  statistics, partnerships, or claims not already present in `src/content/`. If
  something is missing, flag it as requiring business input instead of fabricating it.
- **Follow the existing architecture** (App Router conventions, `cn()` for class
  merging, typed content modules) rather than introducing new patterns or dependencies
  without a clear reason.
- Run `npm run lint` and `npm run typecheck` (and `npm run build` for larger changes)
  before considering a change complete.

## Use the right Skill or Agent

Specialized Skills live in [.github/skills/](./skills/) and specialized Agents live in
[.github/agents/](./agents/) — covering UI/UX, frontend, responsive design, motion,
3D/WebGL, SEO, accessibility, performance, content, QA, code review, and Git/Vercel
release workflows. Prefer delegating to the matching Skill/Agent over ad-hoc handling
when a request falls squarely in one of those domains.
