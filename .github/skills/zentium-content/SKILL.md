---
name: zentium-content
description: 'Maintain professional, factual technology-consultancy content for the Zentium Technologies website. Use when writing or editing copy, statistics, testimonials, case studies, team bios, or any business-facing content — never invents clients, testimonials, certifications, statistics, or partnerships.'
---

# Zentium Content

## Purpose

Maintain professional technology-consultancy content, sourced exclusively from
[src/content/](../../../src/content/) — never fabricated.

## Ground truth — source of business facts

- [site.ts](../../../src/content/site.ts) — `siteConfig` (name, tagline, description,
  contact, location, socials, stats), navigation structures.
- [company.ts](../../../src/content/company.ts), [team.ts](../../../src/content/team.ts),
  [services.ts](../../../src/content/services.ts),
  [industries.ts](../../../src/content/industries.ts),
  [case-studies.ts](../../../src/content/case-studies.ts),
  [posts.ts](../../../src/content/posts.ts) — the rest of the business data/content.

## Rules

- **Do not invent clients.**
- **Do not invent testimonials.**
- **Do not invent certifications.**
- **Do not invent statistics.**
- **Do not invent partnerships.**
- **Do not make unsupported claims** about outcomes, results, or scale.
- If content needed for a page is missing from `src/content/`, clearly mark it as
  **"requires business input"** instead of writing placeholder facts that look real.
- Placeholder/lorem-ipsum style filler is acceptable only when explicitly labeled as a
  placeholder pending real content — never presented as real business fact.
- Match the existing tone: confident, precise, enterprise/Salesforce-consultancy voice
  (see `siteConfig.tagline` / `description` for the reference voice).

## Procedure

1. Locate the relevant existing content module before writing new copy.
2. Reuse exact figures/claims already present (e.g. `siteConfig.stats`,
   `founded: 2025`) rather than paraphrasing into new numbers.
3. For any new page/section needing a fact not present in `src/content/`, stop and flag
   it as requiring business input rather than guessing.
4. Keep new content in the appropriate typed content module rather than hardcoding
   strings directly in components/pages.
