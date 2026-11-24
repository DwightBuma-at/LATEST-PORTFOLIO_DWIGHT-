---
name: implement-design
description: >-
  Implement a UI design or screenshot reference with high visual fidelity while reusing
  existing shadcn/ui components and preserving unrelated pages.
---

# Implement Design Workflow

Execute these steps when implementing a design or screenshot reference:

1. Read the user's prompt carefully and identify the exact target page or component.
2. Inspect any provided reference images, Figma frames, or design specifications.
3. Extract layout structure, spacing (4px scale), typography, colors, borders, shadows, and hierarchy.
4. Map UI regions to existing `src/components/ui/` (shadcn/ui), `src/components/common/`, and `src/components/magicui/` components.
5. Implement the requested design with minimal, clean TypeScript/Tailwind code. Prioritize reference fidelity over unrequested creativity.
6. Preserve all unrelated pages, routes, and shared components.
7. Open the rendered page in the browser (`http://localhost:5173`).
8. Compare the rendered page against the reference across desktop, tablet, and mobile viewports.
9. Measure and correct any alignment, spacing, typography, or overflow differences.
10. Run `npm run typecheck`, `npm run lint`, and `npm run build` to verify zero errors.
