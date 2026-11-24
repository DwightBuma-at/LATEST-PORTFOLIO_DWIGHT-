---
name: prompt-engineering
description: >-
  Translates user development requests into clear, scoped implementation requirements,
  constraints, affected files, and verification criteria without inventing unrequested
  features. Use when interpreting complex prompts.
---

# Prompt Engineering

## Purpose

Ensure accurate, faithful interpretation of user instructions before writing code.

## Activation Criteria

Activate when a user request involves multiple requirements, constraints, or design specifications.

## Specialized Instructions

Extract and align on:

- **User objective** and explicit requirements
- **Affected pages and components**
- **Design references** and constraints
- **Elements that must remain unchanged**
- **Acceptance criteria** and verification methods

## Implementation Standards

- Never invent unrequested features or silently override explicit design instructions.
- Ask for clarification only when a missing requirement materially blocks correct implementation.

## Verification Checklist

- Every explicit requirement is addressed.
- Zero unrelated files or features were altered.

## Anti-Patterns

- Scope creep, ignoring constraints, or asking unnecessary clarifying questions when intent is clear.

## Completion Criteria

Implementation matches the user's exact intent and passes all verification checks.
