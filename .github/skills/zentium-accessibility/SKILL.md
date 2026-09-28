---
name: zentium-accessibility
description: 'Accessibility (WCAG) review and implementation for the Zentium Technologies website — keyboard navigation, focus states, screen reader support, semantic HTML, ARIA, color contrast, form accessibility, alt text, reduced motion, touch targets. Use when building or auditing any interactive UI.'
---

# Zentium Accessibility

## Purpose

Deliver a WCAG-compliant implementation across the Zentium Technologies website. This
is a dark-themed site — contrast against `ink-950`/`ink-900` surfaces needs explicit
verification, not assumption.

## Checklist

- **Keyboard navigation**: every interactive element (nav links, mobile menu toggle,
  accordion in [src/components/ui/accordion.tsx](../../../src/components/ui/accordion.tsx),
  form controls, CTAs) must be reachable and operable via keyboard alone, in a logical
  order.
- **Focus states**: visible focus rings on all interactive elements — never
  `outline: none` without a replacement focus style.
- **Screen reader support**: meaningful accessible names for icon-only buttons (e.g.
  via `lucide-react` icons + `aria-label`), correct landmark roles.
- **Semantic HTML**: use native elements (`<button>`, `<nav>`, `<a>`, `<form>`) over
  generic `<div>`/`<span>` with click handlers.
- **ARIA**: only where semantic HTML is insufficient (e.g. `aria-expanded` on the
  mobile menu toggle and accordion triggers); don't over-apply ARIA roles.
- **Color contrast**: verify text/background combinations from the `brand-*`/`accent-*`
  /`ink-*` tokens meet at least WCAG AA (4.5:1 for body text, 3:1 for large text/UI).
- **Form accessibility**: every input has an associated `<label>`, error messages are
  programmatically associated (`aria-describedby`) with `react-hook-form` validation
  errors.
- **Image alt text**: descriptive alt text for meaningful images; empty `alt=""` for
  decorative images.
- **Reduced motion**: verify every animated component honors
  `prefers-reduced-motion`, consistent with `useReducedMotion()` in
  [src/components/motion/reveal.tsx](../../../src/components/motion/reveal.tsx).
- **Touch target sizes**: minimum ~44×44px hit area on mobile for buttons/links/nav
  items.

## Rules

- Target WCAG 2.1 AA as the baseline for all new and modified UI.
- Fix accessibility issues in the component being touched; don't attempt a full-site
  audit rewrite unless explicitly asked.
- Never remove existing ARIA/semantic attributes without replacing their function.

## Procedure

1. Review the component/page against the checklist above.
2. Verify keyboard-only operability and visible focus manually (tab through the flow).
3. Check contrast for any new text/background color combination.
4. Confirm reduced-motion behavior for any animated element involved.
5. Report specific, actionable fixes (file + line) rather than generic advice.
