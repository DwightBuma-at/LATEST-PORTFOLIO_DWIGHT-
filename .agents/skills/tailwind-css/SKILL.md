---
name: tailwind-css
description: >-
  Enforces Tailwind CSS v4 best practices for CSS Grid, Flexbox, responsive breakpoints,
  design tokens, dark mode, overflow control, and class merging with cn()/CVA. Use when
  styling components or layouts.
---

# Tailwind CSS

## Purpose

Write clean, maintainable, conflict-free Tailwind CSS v4 utilities aligned with the project's design tokens.

## Activation Criteria

Activate when styling layouts, components, responsive breakpoints, dark mode, or resolving CSS positioning/overflow issues.

## Specialized Instructions

- Use Tailwind CSS v4 patterns (`@import 'tailwindcss'`, `@theme inline`, `@custom-variant dark`) defined in `src/styles/globals.css`.
- Combine conditional and overridable classes with `cn()` from `@/lib/utils` (`clsx` + `tailwind-merge`).
- Use `prettier-plugin-tailwindcss` class ordering.

## Implementation Standards

- Prefer semantic token classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`) over raw palette colors.
- Use CSS Grid and Flexbox cleanly; manage overflow intentionally (`overflow-x-auto`, `min-w-0`, `truncate`).
- Avoid arbitrary values (`p-[13px]`) unless matching an explicit reference measurement.

## Verification Checklist

- Zero conflicting utility classes or `!important` hacks.
- Clean dark mode rendering via `.dark` variant.
- Verified rendered layout in the browser.

## Anti-Patterns

- Mixing Tailwind v3 config patterns, excessive absolute positioning, duplicated custom CSS, or unnecessary `!important` overrides.

## Completion Criteria

Styling is concise, token-driven, formatted with Prettier, and visually verified.
