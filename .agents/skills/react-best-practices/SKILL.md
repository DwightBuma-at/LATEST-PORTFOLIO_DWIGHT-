---
name: react-best-practices
description: >-
  Enforces modern React 19 patterns for component composition, state management, hooks,
  effect hygiene, and rendering performance. Use when writing or refactoring React components.
---

# React Best Practices

## Purpose

Keep React components predictable, composable, fast, and free of effect or state anti-patterns.

## Activation Criteria

Activate when building or refactoring React components, hooks, state flows, or lists.

## Specialized Instructions

- Keep state minimal and local; derive values during render instead of syncing state in `useEffect`.
- Use `useEffect` only to synchronize with external systems (DOM APIs, media queries, subscriptions) with proper cleanup.
- Compose small, single-responsibility components using `children` and clear props.

## Implementation Standards

- Use stable, unique `key` props on mapped lists (never array indices for dynamic lists).
- Avoid unnecessary `useMemo`/`useCallback` unless profiling or referential stability requires it.
- Keep `react-hooks` ESLint rules green with zero suppressed warnings.

## Verification Checklist

- No cascading renders or missing effect cleanups.
- `npm run lint` and `npm run typecheck` pass.

## Anti-Patterns

- Derived state inside `useEffect`, prop drilling across unrelated layers, or mutating state directly.

## Completion Criteria

Components are clean, composable, and pass lint, typecheck, and runtime verification.
