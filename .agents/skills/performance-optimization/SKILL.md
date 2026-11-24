---
name: performance-optimization
description: >-
  Audits and optimizes bundle size, rendering efficiency, image/font loading, lazy loading,
  and animation performance without premature optimization. Use when optimizing frontend speed.
---

# Performance Optimization

## Purpose

Keep the portfolio fast, lightweight, and responsive with minimal bundle overhead and zero layout shift.

## Activation Criteria

Activate when inspecting bundle size, image/asset loading, Core Web Vitals (LCP, CLS, INP), or sluggish interactions.

## Specialized Instructions

- Measure before optimizing (Vite build output, Chrome DevTools Performance/Lighthouse).
- Keep `@fontsource-variable/plus-jakarta-sans` locally bundled and avoid redundant external font requests.
- Use native lazy loading (`loading="lazy"`) for below-the-fold images and explicit dimensions/aspect ratios to prevent CLS.

## Implementation Standards

- Do not add heavy runtime libraries when lightweight native or existing tools suffice.
- Keep animations GPU-composited (`transform`, `opacity`).

## Verification Checklist

- Production bundle builds cleanly with no unexpected bloat.
- Zero unnecessary re-renders or layout shifts.

## Anti-Patterns

- Premature micro-optimizations, unoptimized multi-megabyte images, or importing entire icon/utility packs without tree-shaking.

## Completion Criteria

Measured performance is healthy and `npm run build` succeeds cleanly.
