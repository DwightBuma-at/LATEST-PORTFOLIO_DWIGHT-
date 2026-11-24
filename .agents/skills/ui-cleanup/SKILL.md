---
name: ui-cleanup
description: >-
  Audit and polish an existing interface for alignment, spacing, typography, tables, and
  responsiveness without redesigning or breaking functionality.
---

# UI Cleanup Workflow

Use this workflow to improve existing UI quality without redesigning the page:

1. Inspect the target page/component and its rendered output.
2. Audit and fix:
   - Misaligned elements and uneven cards
   - Inconsistent spacing (normalize to the 4px spacing scale)
   - Incorrect positioning or brittle absolute positioning
   - Broken or misaligned tables and unorganized filters
   - Inconsistent typography, button heights, or unnecessary text
   - Excessive decorations, shadows, gradients, or duplicate components
   - Horizontal overflow and responsive breakage (`320px` to `1920px`)
3. Preserve all existing functionality and avoid modifying unrelated sections.
4. Verify in the browser and run `npm run typecheck`, `npm run lint`, and `npm run build`.
