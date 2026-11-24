---
name: code-review
description: >-
  Audits code changes for correctness, maintainability, security, performance,
  responsiveness, accessibility, and regressions. Use when reviewing diffs or completed
  features before finalizing.
---

# Code Review

## Purpose

Catch real bugs, regressions, accessibility gaps, and architectural drift before work is finalized.

## Activation Criteria

Activate when reviewing a PR, inspecting git diffs, or auditing a newly implemented feature.

## Specialized Instructions

- Prioritize high-impact findings: correctness bugs, security risks, accessibility violations, layout/responsive regressions, and architectural violations.
- Skip superficial nitpicks already handled by ESLint and Prettier.
- Verify that unrelated pages and components were not unintentionally modified.

## Implementation Standards

- Check strict TypeScript safety, React effect/state hygiene, and semantic HTML.
- Verify that all new UI uses design tokens and existing `src/components/ui/` primitives.

## Verification Checklist

- All explicit requirements and acceptance criteria are met.
- `typecheck`, `lint`, `test`, and `build` pass cleanly.

## Anti-Patterns

- Rubber-stamping without inspecting diffs, focusing on formatting trivia, or ignoring edge cases.

## Completion Criteria

All material findings are resolved or clearly reported with file and line references.
