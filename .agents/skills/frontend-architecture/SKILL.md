---
name: frontend-architecture
description: >-
  Preserves dwight-final-portfolio's clean page-based architecture under src/pages/,
  src/components/, src/layouts/, src/routes/, src/data/, and src/lib/. Use when adding
  pages, components, or routes.
---

# Frontend Architecture

## Purpose

Protect the lightweight, page-based folder structure and prevent architectural drift or redundant folders.

## Activation Criteria

Activate when creating new pages, page-specific components, routes, data modules, or reorganizing files.

## Specialized Instructions

- Keep independent pages in `src/pages/<PageName>/` (`Dashboard`, `AboutMe`, `Experience`, `Projects`, `Skills`, `Contacts`, `NotFound`).
- Place page-only components inside `src/pages/<PageName>/components/`.
- Keep global UI primitives in `src/components/ui/`, effects in `src/components/magicui/`, shared portfolio blocks in `src/components/common/`, layout shell in `src/layouts/`, routing in `src/routes/AppRoutes.tsx`, data in `src/data/`, and `cn` in `src/lib/utils.ts`.

## Implementation Standards

- Always use the `@/` import alias rather than deep relative paths.
- Never recreate redundant folders (`features/`, `sections/`, `config/`, duplicate `utils/`).

## Verification Checklist

- Every new file sits in its rightful responsibility folder.
- No broken imports; `npm run build` succeeds.

## Anti-Patterns

- Putting page-specific components in `src/components/common/`, duplicating `Header`/`Footer` in pages, or scattering portfolio data in JSX.

## Completion Criteria

Architecture remains clean, modular, and aligned with `AGENTS.md`.
