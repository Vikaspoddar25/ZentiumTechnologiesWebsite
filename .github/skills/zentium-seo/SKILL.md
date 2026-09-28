---
name: zentium-seo
description: 'SEO for the Zentium Technologies website — metadata, page titles, meta descriptions, Open Graph, Twitter/X cards, canonical URLs, sitemap, robots.txt, structured data, semantic HTML, heading hierarchy, internal linking, image alt text. Use when adding pages or reviewing/improving discoverability.'
---

# Zentium SEO

## Purpose

Maximize search/social discoverability of the Zentium Technologies website using only
real, existing business information.

## Responsibilities

- **Metadata**: use Next.js App Router `generateMetadata`/`metadata` exports per page
  (`title`, `description`) sourced from `src/content/` (e.g. `siteConfig` in
  [src/content/site.ts](../../../src/content/site.ts)) — don't hardcode duplicate copy.
- **Open Graph / Twitter/X**: populate `openGraph` and `twitter` metadata fields with
  real title/description/image, consistent per page type (service, case study, blog
  post).
- **Canonical URLs**: derive from `siteConfig.url` (`NEXT_PUBLIC_SITE_URL`), not a
  hardcoded domain.
- **Sitemap / robots.txt**: use Next.js's file-based `sitemap.ts` / `robots.ts`
  conventions under `src/app`, generated from the actual route list / content
  collections (services, industries, case studies, posts) rather than a static manual
  list that can drift.
- **Structured data**: JSON-LD (`Organization`, `Service`, `Article`/`BlogPosting`,
  `BreadcrumbList`) built only from fields already present in `src/content/`.
- **Semantic HTML & heading hierarchy**: one `<h1>` per page, logical `h2`/`h3` nesting,
  landmark elements (`<nav>`, `<main>`, `<footer>`).
- **Internal linking**: link between related services/industries/case studies using
  the existing `footerNav`/`primaryNav` structures in `site.ts` as the source of truth.
- **Image alt text**: descriptive, non-redundant `alt` text for every `<Image>`.

## Rules

- **Do not invent business information** — company stats, certifications, locations,
  contact details, or claims must come from `src/content/`. If metadata needs a fact
  that doesn't exist yet, flag it as requiring business input.
- Keep metadata DRY — compute per-page metadata from content modules, don't duplicate
  strings across files.
- Don't change page URLs/routes as a side effect of an SEO task without flagging the
  redirect implications.

## Procedure

1. Locate the relevant content in `src/content/` for the page being optimized.
2. Add/update `generateMetadata` (title, description, OG, Twitter) sourced from that
   content.
3. Verify heading hierarchy and landmark structure in the page markup.
4. Ensure the page is included in `sitemap.ts` and not excluded by `robots.ts` unless
   intentionally private.
5. Add JSON-LD structured data only using fields that already exist in content.
