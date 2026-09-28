---
name: zentium-performance
description: 'Performance optimization for the Zentium Technologies website — Lighthouse/Core Web Vitals (LCP, CLS, INP), JS bundle size, images, fonts, lazy loading, code splitting, dynamic imports, third-party scripts, animation/WebGL performance. Use when diagnosing slow pages, large bundles, or reviewing performance impact of a change.'
---

# Zentium Performance

## Purpose

Target Lighthouse 95+ where realistically achievable, without sacrificing usability for
an arbitrary score.

## Review areas

- **LCP** — hero image/text render time; ensure the largest above-the-fold element
  (hero heading/image/3D canvas) isn't blocked by render-blocking JS/CSS or slow fonts.
- **CLS** — reserve space for images (`next/image` width/height), avoid late-loading
  web fonts causing reflow, avoid content injected above existing content without
  reserved space.
- **INP** — keep interaction handlers light; avoid heavy synchronous work in click/scroll
  handlers, especially around motion (`motion/react`) and any future 3D/WebGL scene.
- **JavaScript bundle**: check `next build` output for unexpectedly large route bundles;
  use `next/dynamic` for heavy, non-critical client components.
- **Images**: use `next/image` with the configured `avif`/`webp` formats
  (`next.config.ts`), correct `sizes`, and priority only on true above-the-fold images.
- **Fonts**: verify `next/font` usage for `Inter` (`--font-inter`) avoids
  render-blocking/layout shift (this project already uses `next/font`-style variable
  injection — confirm before changing).
- **Lazy loading / code splitting / dynamic imports**: below-the-fold sections, modals,
  and any 3D/WebGL content should be dynamically imported (`ssr: false` where
  appropriate for client-only code).
- **Third-party scripts**: audit any analytics/embed scripts (Calendly, etc.) for defer/
  async loading and impact on LCP/INP.
- **Animation performance**: `motion/react` reveals should animate `transform`/`opacity`
  only (already the pattern in `reveal.tsx`) — avoid animating layout-affecting
  properties.
- **WebGL performance**: see the Zentium 3D/WebGL skill — capped pixel ratio, paused
  off-screen rendering, disposed resources.

## Rules

- Never sacrifice usability (readability, interactivity, accessibility) for an
  arbitrary performance score.
- Measure before/after (Lighthouse, `next build` bundle output) rather than guessing
  impact.
- Prefer targeted fixes (lazy-load a specific heavy component, resize a specific image)
  over broad rewrites.

## Procedure

1. Identify the specific metric/page regressing or under review.
2. Inspect the relevant code path (image usage, bundle contents, animation, third-party
   script) for the likely cause.
3. Apply the smallest fix that addresses the metric (dynamic import, image sizing,
   deferred script, etc.).
4. Re-measure (Lighthouse and/or `npm run build` output) to confirm improvement.
5. Confirm no regression in usability/accessibility as a result of the optimization.