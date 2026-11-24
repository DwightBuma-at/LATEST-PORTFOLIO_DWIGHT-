---
name: responsive-design
description: >-
  Ensures mobile-first responsive layouts across 320px, 390px, 768px, 1024px, 1440px, and
  1920px viewports with zero horizontal overflow. Use when building or fixing responsive UI.
---

# Responsive Design

## Purpose

Guarantee clean, functional, overflow-free layouts from small mobile phones to ultrawide desktops.

## Activation Criteria

Activate when building responsive grids, mobile navigation, dialogs, tables, or fixing mobile/tablet layout defects.

## Specialized Instructions

- Verify layouts at `320px`, `390px`, `768px`, `1024px`, `1440px`, and `1920px`.
- Adapt layout structure purposefully for mobile instead of merely shrinking desktop components.
- Preserve existing desktop layouts when specifically fixing mobile issues.

## Implementation Standards

- Use mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) and fluid containers.
- Ensure touch targets meet at least `40px–44px` on mobile.
- Prevent horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`).

## Verification Checklist

- Zero horizontal scrollbars at all 6 representative viewports.
- No clipped text, overlapping controls, or overflowing dialogs/tables.
- Mobile navigation opens, closes, and navigates cleanly.

## Anti-Patterns

- Fixed pixel widths on page containers, unwrapping long strings without `break-words`/`truncate`, or degrading desktop layouts during mobile fixes.

## Completion Criteria

All target viewports pass visual and overflow checks without regressions.
