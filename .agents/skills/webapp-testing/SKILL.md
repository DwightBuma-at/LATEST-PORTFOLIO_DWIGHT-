---
name: webapp-testing
description: >-
  Guides frontend verification using Vitest, React Testing Library, Playwright E2E, and
  axe-core accessibility tests. Use when writing tests or verifying user flows and routes.
---

# Web Application Testing

## Purpose

Ensure reliable client-side routing, component behavior, responsive rendering, and accessibility through automated tests.

## Activation Criteria

Activate when writing unit/component tests (`tests/unit/`), Playwright E2E/visual tests (`tests/e2e/`), or verifying interactive flows.

## Specialized Instructions

- Use **Vitest + React Testing Library** (`npm run test`) for utility logic and meaningful component behavior.
- Use **Playwright + `@axe-core/playwright`** (`npm run test:e2e`) for route navigation, overflow detection, accessibility, and visual regression baselines.
- Keep approved baselines in `tests/e2e/__baselines__/` and never overwrite them automatically on regression.

## Implementation Standards

- Test user-visible behavior (roles, labels, text, navigation) rather than internal implementation details.
- Stabilize screenshots with `reducedMotion: 'reduce'` and deterministic content.
- Never fabricate test results.

## Verification Checklist

- Unit tests (`npm run test`) pass.
- E2E/a11y tests (`npm run test:e2e`) pass when Playwright browsers are installed.

## Anti-Patterns

- Brittle CSS-selector assertions, testing library internals, or claiming tests passed without executing them.

## Completion Criteria

Relevant tests execute cleanly and accurately report pass/fail status.
