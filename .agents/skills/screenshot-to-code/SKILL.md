---
name: screenshot-to-code
description: >-
  Converts reference screenshots or visual designs into high-fidelity React and Tailwind
  implementations with visual comparison and defect correction. Use when implementing from
  a screenshot or mockup.
---

# Screenshot to Code

## Purpose

Reproduce supplied reference screenshots accurately using the project's existing components and design tokens.

## Activation Criteria

Activate whenever the user provides a screenshot, mockup, or visual reference to implement.

## Specialized Instructions

1. Analyze the full reference: layout hierarchy, component boundaries, proportions, spacing, alignment, typography, colors, borders, and shadows.
2. Map regions to existing `src/components/ui/` and `src/components/common/` primitives.
3. Implement the reference accurately without substituting generic AI patterns.
4. Render the page in the browser, capture a screenshot, and compare against the reference.
5. Correct meaningful visual differences and re-verify.

## Implementation Standards

- Preserve unrelated pages and components.
- Match content density, typographic weights, and spacing rhythm closely.
- Never claim pixel-perfect accuracy without visual comparison.

## Verification Checklist

- Layout hierarchy, proportions, alignment, and typography match the reference.
- Responsive behavior holds on smaller viewports.
- `typecheck`, `lint`, and `build` pass cleanly.

## Anti-Patterns

- Replacing the reference with an unrelated design, adding unrequested gradients/badges/animations, or skipping visual comparison.

## Completion Criteria

Rendered implementation matches the reference screenshot with verified visual comparison and passing checks.
