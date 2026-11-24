---
name: git-best-practices
description: >-
  Enforces safe version control workflows, diff review, clean commit messages, .gitignore
  hygiene, and protection of existing user changes. Use when reviewing git status, diffs, or
  preparing commits.
---

# Git Best Practices

## Purpose

Keep repository history clean, reversible, and free of accidental commits, secrets, or generated artifacts.

## Activation Criteria

Activate when checking `git status`/`git diff`, organizing branches, or preparing commits when requested by the user.

## Specialized Instructions

- Never automatically commit, push, force-push, reset, or discard user changes without explicit authorization.
- Review `git status` and `git diff` carefully before staging or committing.
- Ensure `.gitignore` excludes `node_modules/`, `dist/`, `.env*` (except `.env.example`), `playwright-report/`, and `test-results/`.

## Implementation Standards

- Write concise, meaningful commit messages describing _why_ a change was made.
- Keep commits focused and atomic so changes remain easy to review or revert.

## Verification Checklist

- No secrets, `.env.local`, or build/test artifacts staged.
- Existing unrelated user changes remain untouched.

## Anti-Patterns

- Force-pushing shared branches, running destructive `git reset --hard` unprompted, or committing generated output.

## Completion Criteria

Working tree and git history remain clean, safe, and under explicit user control.
