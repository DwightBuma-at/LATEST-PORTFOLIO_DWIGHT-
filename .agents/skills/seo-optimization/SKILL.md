---
name: seo-optimization
description: >-
  Improves portfolio discoverability through semantic HTML, page titles, meta descriptions,
  Open Graph tags, robots.txt, and descriptive image alt text. Use when updating metadata or
  page structure.
---

# SEO Optimization

## Purpose

Ensure the portfolio is cleanly indexed, shareable, and structurally clear for search engines and social previews.

## Activation Criteria

Activate when updating `index.html`, `public/robots.txt`, page headings, Open Graph metadata, or portfolio images.

## Specialized Instructions

- Maintain semantic HTML landmarks and a logical heading hierarchy (`<h1>` -> `<h2>` -> `<h3>`) on every page.
- Keep `<title>`, `<meta name="description">`, and Open Graph tags accurate and configurable via `VITE_SITE_NAME` / `VITE_SITE_URL`.
- Provide concise, descriptive `alt` text for all meaningful images.

## Implementation Standards

- Never fabricate a production domain; keep URLs configurable.
- Preserve `public/robots.txt` and `public/favicon.svg`.

## Verification Checklist

- Valid document title, meta description, and Open Graph placeholders.
- Single `<h1>` per page with descriptive headings.

## Anti-Patterns

- Missing `alt` attributes, skipped heading levels, duplicate `<h1>` tags, or hardcoded fake domains.

## Completion Criteria

Metadata and semantic structure are clean, accurate, and verified in the build output.
