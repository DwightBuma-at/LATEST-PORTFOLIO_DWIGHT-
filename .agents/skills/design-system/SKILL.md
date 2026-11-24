---
name: design-system
description: >-
  Enforces consistency across color tokens, typography, spacing, border radius, shadows,
  component variants, and light/dark themes. Use when creating or updating UI components
  or design tokens.
---

# Design System

## Purpose

Maintain a single source of truth for visual tokens and reusable UI primitives across the portfolio.

## Activation Criteria

Activate when adding CSS variables, creating shared components, or auditing visual consistency across pages.

## Specialized Instructions

- Centralize all color, radius, shadow, and typography tokens in `src/styles/globals.css`.
- Reuse `src/components/ui/` (shadcn/ui) and `src/components/common/` rather than duplicating styles.
- Ensure every new token has matching light (`:root`) and dark (`.dark`) values.

## Implementation Standards

- Use the 4px spacing scale (`4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`).
- Use `cn()` from `@/lib/utils` and `cva()` for component variants.
- Keep component heights, paddings, and border radii uniform across buttons, inputs, cards, and badges.

## Verification Checklist

- Zero hardcoded hex/rgb colors where semantic tokens exist.
- Light and dark themes render with proper contrast.
- No duplicate primitive components or conflicting CSS definitions.

## Anti-Patterns

- Scattered inline color values, one-off radii/shadows, or bypassing `src/components/ui/` primitives.

## Completion Criteria

All affected UI elements consume centralized tokens and pass `typecheck`, `lint`, and `build`.
