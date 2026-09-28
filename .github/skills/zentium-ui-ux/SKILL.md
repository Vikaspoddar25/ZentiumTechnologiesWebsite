---
name: zentium-ui-ux
description: 'Maintain the visual quality and consistency of the Zentium Technologies website — layout, typography, spacing, color system, buttons, cards, navigation, forms, responsive design, visual hierarchy, component consistency. Use when building or reviewing any UI in this repo, or when a request mentions design, styling, look-and-feel, premium/tech-company aesthetic, or component consistency.'
---

# Zentium UI/UX

## Purpose

Maintain a premium, modern, technology-consultancy visual identity across the Zentium
Technologies website, and keep every page consistent with the existing design system.

## Ground truth — the existing design system

- **Theme**: dark by default (`color-scheme: dark` in
  [src/app/globals.css](../../../src/app/globals.css)), surface `--color-ink-950`.
- **Color tokens** (Tailwind v4 `@theme`, no `tailwind.config.js`):
  - `brand-50…950` — blue ramp sampled from the Zentium logo (`brand-500 = #0077BE`).
    Primary CTAs, links, and brand accents.
  - `accent-300/400/500` — sky blues used for glows and highlights on dark surfaces.
  - `ink-50…950` — neutral scale for text and dark backgrounds.
- **Typography**: `--font-sans` = Inter (`--font-inter`) + system fallback; `--font-mono`
  for code/mono contexts.
- **Radii/easing**: `--radius-4xl` (2rem) for large surfaces; `--ease-out-expo`
  (`cubic-bezier(0.16, 1, 0.3, 1)`) for interactive transitions.
- **Components**: reuse [src/components/ui](../../../src/components/ui) (`button.tsx`,
  `card.tsx`, `accordion.tsx`, `container.tsx`, `section.tsx`, `icon.tsx`) and
  [src/components/layout](../../../src/components/layout) (`header.tsx`, `logo.tsx`).
  `Button`/`ButtonLink` already define `primary` / `secondary` / `ghost` variants and
  `sm` / `md` / `lg` sizes — extend these variants, don't create parallel ones.
- **Class merging**: always use `cn()` from
  [src/lib/utils.ts](../../../src/lib/utils.ts) (clsx + tailwind-merge) instead of
  string concatenation.

## Rules

- Do not introduce random design patterns, one-off colors, or ad-hoc spacing scales —
  extend the `@theme` tokens in `globals.css` if a new token is genuinely needed.
- Reuse the existing design system and existing components before creating new ones.
- Maintain consistency across all pages (spacing rhythm, radius, shadow, hover states).
- Prefer clean, premium, modern interfaces consistent with a Salesforce/enterprise
  consultancy brand — avoid gimmicky or generic template aesthetics.
- Check both dark-surface and any light-surface sections for contrast before shipping.

## Procedure

1. Identify the closest existing component/pattern in `src/components/ui` or
   `src/components/layout` before writing new markup.
2. Reuse `@theme` tokens (`brand-*`, `accent-*`, `ink-*`, `--radius-4xl`,
   `--ease-out-expo`) — never hardcode hex colors or arbitrary pixel radii.
3. For new components, follow the existing file shape: typed props, `cn()` for class
   merging, variant/size maps like in `button.tsx`.
4. Verify visual consistency against neighboring pages/sections before considering the
   change complete.
