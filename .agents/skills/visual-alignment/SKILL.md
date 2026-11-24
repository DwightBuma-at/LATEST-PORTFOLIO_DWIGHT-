---
name: visual-alignment
description: >-
  Inspects and corrects frontend component alignment, spacing, positioning, table columns,
  grid layouts, and visual inconsistencies using computed styles and bounding boxes. Use
  when fixing or reviewing UI alignment.
---

# Visual Alignment

## Purpose

Achieve crisp, mathematically consistent component alignment and spacing across every section.

## Activation Criteria

Activate when elements appear misaligned, cards have uneven heights, icons sit off-center, or grid/flex layouts feel unbalanced.

## Specialized Instructions

- Inspect rendered bounding boxes and computed CSS via Playwright or Chrome DevTools — never rely solely on source code inspection.
- Align related elements along shared horizontal and vertical grid lines.
- Normalize spacing to the 4px scale unless a reference design specifies otherwise.

## Implementation Standards

- Prefer CSS Grid and Flexbox (`items-center`, `items-baseline`, `justify-between`, `gap-*`) over absolute positioning.
- Ensure neighboring cards share equal heights (`h-full`, `flex-col justify-between`) and consistent padding.
- Align icons cleanly with text baselines or vertical centers.

## Verification Checklist

- Headers align with their content containers.
- Cards, buttons, form labels, and table columns share exact alignment lines.
- Zero overlapping elements or unintended overflow.

## Anti-Patterns

- Brittle absolute positioning (`top-[13px] left-[7px]`), inconsistent margins/paddings, or visual guessing without browser measurement.

## Completion Criteria

Computed bounding boxes confirm clean alignment across desktop and mobile viewports.
