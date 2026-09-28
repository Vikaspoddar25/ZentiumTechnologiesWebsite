---
name: zentium-qa
description: 'Pre-completion QA checks for the Zentium Technologies website — build, TypeScript, lint, responsive behavior, browser behavior, navigation, forms, console errors, accessibility, SEO, performance, regressions. Use before considering any feature/change complete.'
---

# Zentium QA

## Purpose

Verify a feature is genuinely done before calling it complete, and catch regressions
introduced by the latest change.

## Checklist — before considering a feature complete

- **Build**: `npm run build` succeeds with no errors.
- **TypeScript**: `npm run typecheck` passes with no new errors.
- **Lint**: `npm run lint` passes with no new warnings/errors.
- **Tests**: no test framework is configured in this repo today — do not assume Jest/
  Vitest/RTL exist; note this instead of failing on missing tests.
- **Responsive behavior**: verify mobile/tablet/desktop per the Zentium Responsive
  Design skill.
- **Browser behavior**: no obvious cross-browser issues (flex/grid quirks, backdrop
  filters, `color-mix()` fallback where relevant since `globals.css` uses
  `color-mix(in oklab, …)`).
- **Navigation**: links resolve to real routes; mobile menu opens/closes correctly.
- **Forms**: `react-hook-form` + `zod` validation fires correctly, submit succeeds/fails
  gracefully, no unhandled promise rejections around `resend` calls.
- **Console errors**: no new console errors/warnings introduced (React key warnings,
  hydration mismatches, etc.).
- **Accessibility**: spot-check against the Zentium Accessibility skill checklist.
- **SEO**: metadata present or unaffected for touched pages, per the Zentium SEO skill.
- **Performance**: no obvious new performance regression (large new bundle, un-lazy
  heavy component), per the Zentium Performance skill.

## Rules

- Focus QA on the area actually changed plus its direct neighbors (shared layout,
  shared content) — not a full-site re-audit for every change, unless requested.
- Clearly separate "pre-existing issue" from "regression caused by this change."
- Report findings with specific file/line references, not vague impressions.

## Procedure

1. Run `npm run lint`, `npm run typecheck`, and `npm run build` for the change.
2. Manually trace the changed feature's user flow (navigation → interaction → form/
   submit if applicable).
3. Check the console/network behavior for errors introduced by the change.
4. Cross-check responsive, accessibility, SEO, and performance impact using their
   respective skills.
5. Report a clear pass/fail per checklist item, flagging anything that looks like a
   regression versus the prior working state.
