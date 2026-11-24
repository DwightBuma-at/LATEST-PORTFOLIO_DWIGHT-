---
name: systematic-debugging
description: >-
  Guides root-cause debugging by reproducing issues, inspecting evidence, forming a
  hypothesis, applying the smallest fix, and verifying the outcome. Use when investigating
  bugs, build errors, or UI regressions.
---

# Systematic Debugging

## Purpose

Eliminate guesswork by diagnosing root causes before editing code.

## Activation Criteria

Activate whenever investigating runtime errors, TypeScript/Vite build failures, broken layouts, or failing tests.

## Specialized Instructions

1. **Reproduce** — Confirm the exact error message, failing route, or broken behavior.
2. **Inspect Evidence** — Read stack traces, compiler output, DOM/computed styles, or console logs.
3. **Hypothesize** — Identify the single most likely root cause.
4. **Fix Minimally** — Apply the smallest targeted fix without touching unrelated code.
5. **Verify** — Re-run the reproduction and full verification (`typecheck`, `lint`, `test`, `build`).

## Implementation Standards

- Never apply speculative shotgun edits without understanding why the failure occurred.
- Fix the underlying cause rather than masking symptoms.

## Verification Checklist

- Original failure no longer reproduces.
- No regressions introduced in related code.

## Anti-Patterns

- Repeatedly guessing fixes, disabling lint/type checks to hide errors, or ignoring console warnings.

## Completion Criteria

Root cause is confirmed, fixed minimally, and verified with passing checks.
