---
name: motion-design
description: >-
  Guides subtle, performant animations using Motion for React, Magic UI, and optional Lenis
  smooth scrolling while respecting prefers-reduced-motion. Use when adding transitions,
  scroll reveals, or micro-interactions.
---

# Motion Design

## Purpose

Deliver purposeful, smooth, and accessible animations that enhance clarity without distracting from content.

## Activation Criteria

Activate when implementing page transitions, scroll reveals, staggered entrances, hover micro-interactions, or Magic UI effects.

## Specialized Instructions

- Import from `motion/react` (not `framer-motion`) and rely on the root `<MotionConfig reducedMotion="user">` in `src/App.tsx`.
- Reuse `src/components/magicui/` components (`blur-fade`, `bento-grid`, `marquee`, `border-beam`, `number-ticker`, etc.) only where they serve the design.
- Keep Lenis opt-in with proper cleanup (`lenis.destroy()`) and never break native anchor/keyboard scrolling.

## Implementation Standards

- Animate GPU-composited properties (`transform`, `opacity`) with short durations (`150ms–400ms`).
- Ensure all animations respect `prefers-reduced-motion`.
- Avoid blocking initial content visibility with long entrance delays.

## Verification Checklist

- Smooth 60fps interaction without layout thrashing.
- Content remains immediately readable when reduced motion is enabled.
- Zero console warnings or memory leaks on route navigation.

## Anti-Patterns

- Excessive bouncing/spinning effects, animating `width`/`height`/`top`/`left`, or heavy scroll-hijacking.

## Completion Criteria

Animations feel subtle, responsive, accessible, and pass build/runtime checks.
