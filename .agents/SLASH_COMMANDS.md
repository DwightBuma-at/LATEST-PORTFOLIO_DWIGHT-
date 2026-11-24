# Slash Commands Quick Reference

Commands starting with `/` are called **Slash Commands**. Type `/` in the chat input to trigger them, or just ask normally and Antigravity will auto-activate the right skill.

---

## Core Project Workflows (4)

| Command             | When to use                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| `/visual-qa`        | Inspect a rendered page, check alignment/spacing/overflow across viewports, and fix visual defects. |
| `/implement-design` | Build a page or component from a screenshot or design reference with high visual fidelity.          |
| `/ui-cleanup`       | Polish spacing, alignment, typography, or tables on an existing page without redesigning it.        |
| `/prompt-to-plan`   | Turn a feature request into a structured internal plan before editing code.                         |

---

## UI/UX Design Skills (11)

| Command               | When to use                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| `/frontend-design`    | Design a new page or layout with strong hierarchy, whitespace, and non-generic aesthetics.     |
| `/ui-ux-pro-max`      | Get senior UX direction on palettes, typography pairing, layout composition, and interactions. |
| `/design-system`      | Enforce consistent CSS variables, spacing, radius, shadows, and light/dark themes.             |
| `/responsive-design`  | Fix or verify mobile-first layouts across `320px`–`1920px` with zero horizontal overflow.      |
| `/visual-alignment`   | Fix misaligned elements, uneven cards, icon placement, and grid/flex spacing.                  |
| `/screenshot-to-code` | Convert a screenshot or mockup into accurate React + Tailwind code with visual comparison.     |
| `/shadcn-ui`          | Discover, install, or customize accessible shadcn/ui and Radix UI primitives.                  |
| `/tailwind-css`       | Style layouts cleanly with Tailwind v4, Grid/Flexbox, tokens, and `cn()`/`cva()`.              |
| `/motion-design`      | Add subtle Motion, Magic UI, or Lenis animations that respect `prefers-reduced-motion`.        |
| `/accessibility`      | Audit WCAG 2.2 AA contrast, keyboard navigation, focus states, ARIA, and axe-core checks.      |
| `/table-design`       | Build or fix aligned, responsive data tables with sorting, filtering, and pagination.          |

---

## Software Development Skills (12)

| Command                     | When to use                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| `/react-best-practices`     | Write or refactor clean React 19 components, hooks, and state without effect anti-patterns.  |
| `/typescript-expert`        | Enforce strict TypeScript types, interfaces, safe narrowing, and zero `any`.                 |
| `/clean-code`               | Simplify code, improve naming, remove dead code, and avoid overengineering.                  |
| `/frontend-architecture`    | Keep new pages, components, and routes aligned with the clean page-based structure.          |
| `/systematic-debugging`     | Diagnose root causes of bugs, build errors, or UI regressions before applying minimal fixes. |
| `/code-review`              | Audit diffs or completed features for bugs, security, accessibility, and regressions.        |
| `/webapp-testing`           | Write or run Vitest, React Testing Library, Playwright E2E, and axe-core tests.              |
| `/performance-optimization` | Audit bundle size, image/font loading, rendering efficiency, and layout shifts.              |
| `/security-best-practices`  | Check external links, env vars, dependencies, and XSS/unsafe HTML hygiene.                   |
| `/prompt-engineering`       | Break down complex requests into exact requirements, constraints, and acceptance criteria.   |
| `/seo-optimization`         | Improve page titles, meta descriptions, Open Graph tags, semantic HTML, and image alt text.  |
| `/git-best-practices`       | Review diffs safely, keep `.gitignore` clean, and write clear commit messages.               |

---

## Built-in Antigravity Slash Commands (9)

| Command     | When to use                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| `/plan`     | Complex tasks that need step-by-step planning before execution.                          |
| `/grill-me` | Resolve unclear requirements or design choices through a quick Q&A interview.            |
| `/browser`  | Open, inspect, or interact with live web pages (e.g., `localhost:5173`).                 |
| `/boost`    | Complex coding or research tasks needing deeper thinking and rigorous verification.      |
| `/goal`     | Long-running tasks where the agent should keep working until the goal is fully achieved. |
| `/teamwork` | Large multi-part projects that benefit from multiple autonomous agents working together. |
| `/learn`    | Save a correction or workflow preference so the agent remembers it for future tasks.     |
| `/compact`  | Summarize a long conversation to free up context window space.                           |
| `/schedule` | Run an instruction on a recurring schedule or a one-time timer.                          |
