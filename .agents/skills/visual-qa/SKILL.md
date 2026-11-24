---
name: visual-qa
description: >-
  Run a 10-step visual quality assurance workflow: inspect, implement, render, capture
  screenshots across viewports, measure computed styles/overflow, fix defects, and validate.
  Use when verifying or refining rendered UI quality.
---

# Visual QA

## Purpose

Verify that the rendered application visually matches requirements across viewports, since a passing build alone does not prove visual accuracy.

## Activation Criteria

Activate after implementing UI changes, fixing visual defects, or performing pre-release visual verification.

## Specialized Instructions

1. **Inspect** — Read the target page, components, and `src/styles/globals.css`.
2. **Understand** — Confirm explicit requirements, acceptance criteria, and any reference design.
3. **Implement** — Apply the smallest correct changes without touching unrelated components.
4. **Render** — Start or reuse the dev server (`http://localhost:5173`) and open the page via Playwright MCP or Chrome DevTools.
5. **Capture** — Capture screenshots at representative viewports (`390px`, `768px`, `1440px`, plus `320px`/`1024px`/`1920px` as needed).
6. **Compare** — Compare rendered output against requirements or reference screenshots.
7. **Measure** — Check computed CSS, bounding boxes, and overflow (`scrollWidth <= innerWidth`).
8. **Correct** — Fix detected defects and re-verify affected components.
9. **Validate** — Run `npm run typecheck`, `npm run lint`, relevant tests, and `npm run build`.
10. **Report** — Summarize changes, defects fixed, viewports tested, verification results, and any limitations.

## Implementation Standards

- Use computed measurements rather than visual guesses.
- Never claim visual verification passed if the browser was not actually inspected.

## Verification Checklist

- Zero console/runtime errors during navigation.
- Zero horizontal overflow or clipped/overlapping elements.
- `typecheck`, `lint`, and `build` pass.

## Anti-Patterns

- Skipping browser inspection, assuming a green build means clean UI, or silently ignoring viewport defects.

## Completion Criteria

All visual, responsive, and code-quality checks pass or remaining limitations are explicitly reported.
