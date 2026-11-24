---
name: table-design
description: >-
  Specializes in clean, aligned, responsive data tables with semantic HTML, tabular numerals,
  consistent row heights, sorting, filtering, pagination, and empty/loading states. Use when
  building or fixing tables.
---

# Table Design

## Purpose

Produce compact, readable, properly aligned data tables that never break layout or overflow the page.

## Activation Criteria

Activate when creating or fixing tabular data views, filterable lists, or data-heavy portfolio/dashboard sections.

## Specialized Instructions

- Use semantic `<table>` markup (`<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) or the shadcn/ui Table component.
- Align headers exactly with their columns; right-align numeric columns with `tabular-nums`.
- Wrap wide tables in an intentional `overflow-x-auto` container so they never cause page-level horizontal overflow.

## Implementation Standards

- Keep row heights, cell padding, and action column positions consistent.
- Vertically center icons and action buttons; handle long text with intentional wrapping or truncation + tooltip.
- Align search, filters, and pagination cleanly with the table container; center empty and loading states.

## Verification Checklist

- Column headers align pixel-for-pixel with cell data.
- Sorting indicators do not shift column widths.
- Responsive behavior works cleanly on mobile and tablet.

## Anti-Patterns

- Independent Flexbox rows for headers and bodies that drift out of alignment, unformatted numeric columns, or page-breaking horizontal overflow.

## Completion Criteria

Table renders cleanly across viewports with exact column alignment and accessible markup.
