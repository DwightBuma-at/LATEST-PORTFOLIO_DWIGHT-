---
name: frontend-design
description: >-
  Guides premium, minimalist, non-generic frontend and portfolio UI design with strong
  visual hierarchy, intentional whitespace, and clean typography. Use when designing new
  pages, layouts, or visual directions.
---

# Frontend Design

## Purpose

Establish cohesive, distinctive, and professional frontend designs without generic AI aesthetics.

## Activation Criteria

Activate when designing new portfolio pages, hero sections, dashboards, or visual layouts from scratch.

## Specialized Instructions

- Establish a clear visual direction (layout rhythm, typographic hierarchy, color restraint) before writing JSX.
- Prioritize whitespace, alignment, and content hierarchy over decorative chrome.
- When a reference design is provided, prioritize fidelity over creative reinterpretation.

## Implementation Standards

- Use Plus Jakarta Sans (`@fontsource-variable/plus-jakarta-sans`) and existing `src/styles/globals.css` tokens.
- Reuse `src/components/ui/` primitives before creating custom UI elements.
- Keep copy concise and scannable.

## Verification Checklist

- Clear focal point and heading hierarchy (`h1` -> `h2` -> `h3`).
- Balanced whitespace and consistent 4px-scale spacing.
- Clean appearance in both light and dark themes.

## Anti-Patterns

- Generic AI gradients, unnecessary glassmorphism, excessive cards, decorative icons without purpose, oversized headings, or heavy drop shadows.

## Completion Criteria

Rendered UI matches the intended visual direction, passes visual inspection, and introduces zero layout or build regressions.
