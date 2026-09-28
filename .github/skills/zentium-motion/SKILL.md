---
name: zentium-motion
description: 'Maintain the Zentium Technologies "balanced, tasteful motion" animation philosophy using the motion (Framer Motion) library — reveals, hover effects, scroll animations, micro-interactions, page transitions, reduced-motion support. Use when adding or reviewing animation/motion/transition code.'
---

# Zentium Motion & Animation

## Purpose

Maintain the existing animation philosophy: **"Balanced — tasteful motion."** Motion
should support the premium tech-consultancy feel without ever distracting from content.

## Ground truth — existing animation system

- Library: **motion** (Framer Motion successor), imported as `motion/react`.
- Core primitives in
  [src/components/motion/reveal.tsx](../../../src/components/motion/reveal.tsx):
  - `Reveal` — fade + rise-in on scroll (`whileInView`, `viewport={{ once: true }}`).
  - `Stagger` / `StaggerItem` — staggered children reveal (`staggerChildren: 0.08`).
  - Shared easing curve: `[0.16, 1, 0.3, 1]` (also defined as `--ease-out-expo` in
    `globals.css`) with durations around `0.6–0.7s`.
- [count-up.tsx](../../../src/components/motion/count-up.tsx) animates stat numbers
  (used with `siteConfig.stats`).
- CSS keyframes already defined in `globals.css`: `marquee`, `shimmer`, `float` — reuse
  these `--animate-*` utilities instead of writing new keyframes for similar effects.
- Every existing motion component reads `useReducedMotion()` and **skips animation
  entirely** (renders the plain element/no transform) when reduced motion is preferred.

## Use

- Smooth scroll-triggered reveals (`Reveal`, `Stagger`) for section/content entrances.
- Subtle hover effects (scale, shadow, color shift) on interactive elements, consistent
  with `Button`'s existing hover treatment.
- Micro-interactions (icon nudges, underline draws) — small, purposeful, brief.
- Page transitions only where they add clarity, not just spectacle.

## Avoid

- Excessive animation or animating every element on a page.
- Distracting effects, heavy parallax, or scroll-jacking.
- Animation durations/easing that don't match the existing `0.6–0.7s` /
  `--ease-out-expo` rhythm — new animations should feel like they belong.
- Animations that block interaction or trigger layout shift.

## Rules

- **Always** respect `prefers-reduced-motion` via `useReducedMotion()` — mirror the
  pattern in `reveal.tsx` for any new animated component.
- Reuse `Reveal`/`Stagger`/`StaggerItem` and the existing easing/duration constants
  before writing bespoke animation logic.
- Keep animation `"use client"` boundaries as small as possible (wrap only the animated
  piece, not entire server-rendered sections).

## Procedure

1. Check if `Reveal`, `Stagger`, or an existing `--animate-*` keyframe already covers
   the need.
2. If a new animation is required, match the existing easing (`[0.16, 1, 0.3, 1]`) and
   duration range, and implement `useReducedMotion()` handling.
3. Verify the animation degrades to no-motion (not just "shorter motion") when reduced
   motion is enabled, matching the existing pattern.
