---
name: typescript-expert
description: >-
  Enforces strict TypeScript typing, clean interfaces, safe type narrowing, accurate
  component props, and zero unnecessary any types. Use when writing or debugging TypeScript.
---

# TypeScript Expert

## Purpose

Maintain rock-solid type safety under `tsconfig.app.json` strict mode (`strict`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`).

## Activation Criteria

Activate when defining types/interfaces, typing React props/events, or resolving TypeScript compiler errors.

## Specialized Instructions

- Use `import type` for type-only imports (`verbatimModuleSyntax: true`).
- Centralize shared domain types in `src/types/` and colocate component prop interfaces with their components.
- Prefer discriminated unions, `unknown` + type guards, and `as const` over `any` or unsafe casts.

## Implementation Standards

- Extend native HTML element props (`React.ComponentProps<'button'>` / `HTMLAttributes`) when wrapping primitives.
- Avoid `// @ts-ignore` and `as any`.

## Verification Checklist

- `npm run typecheck` (`tsc -b --noEmit`) passes with 0 errors.
- No unused types, parameters, or locals.

## Anti-Patterns

- Using `any`, silencing compiler errors with `@ts-ignore`, or duplicating domain interfaces across files.

## Completion Criteria

All TypeScript code compiles cleanly under strict mode with expressive, accurate types.
