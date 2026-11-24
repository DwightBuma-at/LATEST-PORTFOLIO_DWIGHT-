---
name: prompt-to-plan
description: >-
  Transform a development request into a structured internal implementation plan before
  making edits, without altering user intent or adding unrequested features.
---

# Prompt-to-Plan Workflow

Before writing code for a non-trivial request, synthesize an internal plan covering:

- **Objective:** The exact outcome requested.
- **Explicit Requirements:** Concrete features, content, or design details specified.
- **Affected Pages & Components:** Minimal set of files to create or modify.
- **Design References:** Any screenshots, tokens, or visual specs provided.
- **Interactions & Responsive Behavior:** Required states, navigation, and viewport adaptations.
- **Constraints & Unchanged Elements:** What must not be modified.
- **Acceptance Criteria & Verification:** How to verify (`typecheck`, `lint`, tests, browser checks).

Keep the plan internal unless the user asks to see it. Proceed directly to implementation once requirements are clear.
