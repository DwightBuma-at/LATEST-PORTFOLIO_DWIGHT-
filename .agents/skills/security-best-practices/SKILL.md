---
name: security-best-practices
description: >-
  Audits frontend code for XSS/unsafe HTML, exposed secrets, unsafe external links,
  dependency vulnerabilities, and input handling. Use when adding external links, forms,
  env vars, or dependencies.
---

# Security Best Practices

## Purpose

Protect the frontend codebase and users from common web security pitfalls and credential leaks.

## Activation Criteria

Activate when handling user inputs, external links, environment variables, third-party dependencies, or HTML rendering.

## Specialized Instructions

- Never store API keys, tokens, or secrets in `VITE_*` environment variables or source code.
- Always pair `target="_blank"` external links with `rel="noopener noreferrer"`.
- Avoid `dangerouslySetInnerHTML` unless input is strictly static or sanitized.

## Implementation Standards

- Keep `.env` and `.env.local` gitignored; commit only `.env.example` with empty/public placeholders.
- Inspect third-party registry components and dependencies before installing.

## Verification Checklist

- Zero secrets or credentials in tracked files.
- `npm audit` shows no unaddressed high/critical vulnerabilities.

## Anti-Patterns

- Hardcoding secrets, unsanitized HTML injection, or blindly running untrusted install scripts.

## Completion Criteria

Code and configuration follow frontend security best practices with zero exposed secrets.
