---
name: zentium-code-review
description: 'Cross-cutting code review for the Zentium Technologies website — bugs, security, maintainability, duplicate code, unnecessary complexity, naming, performance, accessibility, responsive issues, breaking changes. Use when reviewing a diff/PR or asked to review recently written code.'
---

# Zentium Code Review

## Purpose

Provide actionable, prioritized code review feedback for changes in this repository.

## Review for

- **Bugs**: logic errors, incorrect prop types, unhandled edge cases (empty content
  arrays, missing env vars, failed `resend` calls).
- **Security** (OWASP-aligned): no secrets/API keys committed, server-only code (Resend
  calls, form handlers) never leaks credentials to the client, all external input
  validated with `zod`, no `dangerouslySetInnerHTML` without sanitization, headers in
  `next.config.ts` remain intact.
- **Maintainability**: does the change fit the existing architecture (App Router,
  `src/content/` as data source, `cn()` for classes, typed props)?
- **Duplicate code**: check for copy-pasted markup/logic that should reuse an existing
  `src/components/ui` component or a shared helper.
- **Unnecessary complexity**: flag over-engineered abstractions for one-time needs.
- **Naming**: consistent, descriptive names matching existing conventions (e.g.
  `ButtonLink`, `siteConfig`, `primaryNav`).
- **Performance issues**: unnecessary re-renders, missing memoization only where it
  actually matters, unoptimized images, unnecessarily large client bundles.
- **Accessibility problems**: per the Zentium Accessibility skill checklist.
- **Responsive issues**: per the Zentium Responsive Design skill.
- **Breaking changes**: changes to shared components/content types that could break
  other pages consuming them.

## Rules

- Prioritize findings: **blocking** (bugs/security) → **should-fix** (maintainability/
  accessibility/performance) → **nit** (naming/style).
- Reference exact files/lines in feedback.
- Don't request unrelated refactors — stay scoped to the change under review.

## Procedure

1. Read the diff/changed files in full context (not just the added lines).
2. Check against each review category above.
3. Verify the change doesn't regress lint/typecheck/build.
4. Produce a prioritized list of findings with concrete suggested fixes.
