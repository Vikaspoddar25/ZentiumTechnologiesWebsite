---
name: zentium-responsive
description: 'Ensure Zentium Technologies website features work correctly across mobile, tablet, laptop, desktop, and large-desktop breakpoints. Use when building or reviewing navigation, hero sections, grids, cards, forms, typography, images, animations, or 3D/WebGL for responsive behavior.'
---

# Zentium Responsive Design

## Purpose

Ensure every feature is designed responsively from the start — not simply scaled down
from desktop.

## Scope — verify across breakpoints

- Mobile (small phones and large phones)
- Tablet
- Laptop
- Desktop
- Large desktop / ultra-wide

## Pay special attention to

- **Navigation** — mobile menu behavior, touch targets, focus order (see
  [src/components/layout/header.tsx](../../../src/components/layout/header.tsx)).
- **Hero sections** — text scaling, image/3D scene cropping, CTA stacking.
- **Grids/cards** — column collapse behavior (`Card` in
  [src/components/ui/card.tsx](../../../src/components/ui/card.tsx)), gap adjustments.
- **Forms** — input sizing, label placement, keyboard behavior on mobile.
- **Typography** — fluid/clamped sizing, line-length, heading hierarchy at each
  breakpoint.
- **Images** — use Next.js `<Image>` with correct `sizes`, and the configured
  `avif`/`webp` formats (`next.config.ts`).
- **Animations** — `Reveal`/`Stagger` from
  [src/components/motion/reveal.tsx](../../../src/components/motion/reveal.tsx) should
  not cause layout shift or excessive motion on small screens.
- **3D/WebGL** — must degrade gracefully (static image/gradient fallback) on low-power
  and mobile devices; never block the mobile viewport with an unoptimized heavy scene.

## Rules

- Design mobile-first with Tailwind's responsive prefixes; do not simply apply a single
  desktop layout and rely on shrinking.
- Test real breakpoint behavior (layout reflow, not just visual scaling) before
  considering a feature complete.
- Respect touch target sizing (minimum ~44×44px) on interactive elements.
- Verify no horizontal overflow / clipped content at narrow viewports.

## Procedure

1. Implement layout using Tailwind responsive utilities (`sm:`, `md:`, `lg:`, `xl:`,
   `2xl:`), mobile-first.
2. Check the feature at each breakpoint listed above (use browser dev tools device
   sizes or the browser tools if available).
3. Confirm navigation, forms, and any animation/3D content remain usable and performant
   on mobile.
4. Run `npm run build` for larger responsive changes to catch layout-breaking issues.
