---
name: clean-code
description: >-
  Enforces readable naming, focused functions, minimal duplication, dead-code removal, and
  pragmatic simplicity without overengineering. Use when writing or refactoring code.
---

# Clean Code

## Purpose

Keep the portfolio codebase concise, readable, and easy to maintain without enterprise bloat.

## Activation Criteria

Activate when refactoring, simplifying complex logic, or reviewing code readability.

## Specialized Instructions

- Use descriptive PascalCase for React components and camelCase for functions/variables.
- Keep functions small and focused on a single responsibility.
- Remove dead code, unused imports, commented-out blocks, and redundant abstractions.

## Implementation Standards

- Prefer straightforward, self-documenting code over clever one-liners.
- Extract shared helpers only when genuine duplication exists across multiple files.

## Verification Checklist

- No unused variables, imports, or files.
- `npm run lint` and `npm run format:check` pass.

## Anti-Patterns

- Premature abstractions, wrapper layers with no logic, duplicated constants, or noisy comments explaining obvious code.

## Completion Criteria

Code is concise, readable, formatted, and passes all quality checks.
