---
name: accessibility
description: >-
  Verifies WCAG 2.2 AA accessibility including keyboard navigation, color contrast, semantic
  HTML, focus management, ARIA attributes, reduced motion, and axe-core checks. Use when
  building or auditing any UI.
---

# Accessibility

## Purpose

Ensure the portfolio is usable by everyone, targeting WCAG 2.2 AA compliance.

## Activation Criteria

Activate when creating interactive controls, navigation, forms, dialogs, tables, or running accessibility audits.

## Specialized Instructions

- Use semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`) and a single `<h1>` per page.
- Verify keyboard-only navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`) and visible `:focus-visible` states.
- Run `@axe-core/playwright` (`npm run test:e2e`) to catch automated accessibility violations.

## Implementation Standards

- Associate every form input with a `<Label>` and provide `aria-label` for icon-only buttons.
- Mark decorative icons with `aria-hidden="true"` and provide meaningful `alt` text for images.
- Maintain WCAG AA contrast ratios (`4.5:1` for normal text, `3:1` for large text/UI components).

## Verification Checklist

- Zero critical/serious axe-core violations.
- Full keyboard reachability with no focus traps.
- Respects `prefers-reduced-motion`.

## Anti-Patterns

- Clickable `<div>`s instead of `<button>`/`<a>`, missing focus outlines, low-contrast muted text, or unlabeled icon buttons.

## Completion Criteria

UI passes keyboard inspection and automated axe-core checks with zero violations.
