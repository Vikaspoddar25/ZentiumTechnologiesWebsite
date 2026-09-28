---
name: zentium-3d-webgl
description: 'Manage 3D/WebGL experiences on the Zentium Technologies website — 3D hero scenes, performance optimization, lazy loading, GPU efficiency, mobile fallback, reduced-motion fallback, error handling. Use when adding, reviewing, or optimizing any three.js/WebGL/Canvas/react-three-fiber content.'
---

# Zentium 3D/WebGL

## Purpose

Manage the website's 3D/WebGL experience so it enhances the premium brand feel without
compromising performance, accessibility, or stability.

## Current state (verified)

No 3D/WebGL library is installed in `package.json` today. If a task requires adding
one (e.g. `three`, `@react-three/fiber`, `@react-three/drei`), that is a new dependency
— confirm it's genuinely needed before installing, and keep the addition scoped to a
single hero/feature rather than sprinkling WebGL across many sections.

## Responsibilities

- **3D hero**: prefer one strong, well-optimized 3D/WebGL moment (e.g. hero) over
  multiple heavy scenes across the site.
- **Performance optimization**: cap pixel ratio, minimize draw calls/polygon count,
  dispose of geometries/materials/textures on unmount.
- **Lazy loading**: dynamically import the 3D component (`next/dynamic`, `ssr: false`)
  so it never blocks initial page render or adds to the main bundle for pages that
  don't use it.
- **GPU efficiency**: throttle/pause the render loop when off-screen (use an
  intersection observer) and on tab-blur.
- **Mobile fallback**: serve a static image, gradient, or lightweight CSS animation
  instead of the full 3D scene on low-power/mobile devices, or when WebGL is
  unsupported.
- **Reduced-motion fallback**: when `prefers-reduced-motion` is set, disable
  auto-rotation/continuous animation loops (a static render or the image fallback is
  acceptable), consistent with the reduced-motion handling in
  [src/components/motion/reveal.tsx](../../../src/components/motion/reveal.tsx).
- **Error handling**: wrap 3D scenes in an error boundary so a WebGL context failure
  degrades to the static fallback instead of breaking the page.

## Rules

- Never allow 3D effects to significantly degrade page performance (LCP/INP/CLS) —
  measure before/after with Lighthouse or equivalent.
- Detect `WebGL` support and reduced-motion/low-power conditions before mounting a
  heavy scene; fail gracefully to the fallback rather than crashing.
- Keep 3D-specific dependencies isolated to the component(s) that need them (code
  splitting) so the rest of the site's bundle stays lean.

## Procedure

1. Confirm the 3D feature is genuinely required and scoped (ideally one hero moment).
2. If adding a library, choose the smallest viable option and lazy-load it via
   `next/dynamic`.
3. Implement pause-when-offscreen, capped pixel ratio, and disposal of GPU resources.
4. Implement mobile/low-power and reduced-motion fallbacks, and an error boundary.
5. Measure performance impact (bundle size, LCP/INP) before/after via the Zentium
   Performance skill/agent.
