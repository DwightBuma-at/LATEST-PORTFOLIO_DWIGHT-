---
name: shadcn-ui
description: >-
  Guides discovery, installation, customization, and accessible usage of shadcn/ui and
  Radix UI components in src/components/ui/. Use when building dialogs, forms, tables,
  menus, tabs, or reusable UI primitives.
---

# shadcn/ui

## Purpose

Maximize reuse of accessible, theme-aware shadcn/ui primitives while keeping `src/components/ui/` clean and consistent.

## Activation Criteria

Activate when adding or customizing buttons, cards, badges, dialogs, sheets, dropdowns, tooltips, tabs, forms, or tables.

## Specialized Instructions

- Inspect existing components in `src/components/ui/` before creating or installing anything new.
- Use shadcn MCP (`shadcn`) or `npx shadcn@latest add <component>` when a needed primitive is not yet installed.
- Preserve `components.json` settings (`new-york`, Tailwind v4, CSS variables, Lucide icons, `@/` alias).

## Implementation Standards

- Use `cn()` from `@/lib/utils` and CVA variants for styling extensions.
- Keep Radix UI accessibility intact (keyboard navigation, focus trapping, ARIA attributes, `<TooltipProvider>`).
- Consume centralized CSS variables from `src/styles/globals.css` for light and dark theme compatibility.

## Verification Checklist

- Existing primitives reused rather than reinvented.
- Dialogs, menus, and tooltips are keyboard-accessible.
- `typecheck` and `lint` pass with zero errors.

## Anti-Patterns

- Writing custom modals/dropdowns when shadcn/ui provides them, breaking Radix focus management, or hardcoding theme colors.

## Completion Criteria

Components integrate cleanly with the design system and pass all accessibility and code-quality checks.
