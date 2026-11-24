# Project Rules — dwight-final-portfolio

These are the permanent engineering, design-accuracy, and UI/UX standards for this repository.

## 1. Architecture Standards

- Follow the page-based architecture under `src/pages/` (`Dashboard`, `AboutMe`, `Experience`, `Projects`, `Skills`, `Contacts`, `NotFound`).
- Keep globally reusable primitives in `src/components/ui/` (shadcn/ui), effects in `src/components/magicui/`, and shared portfolio components in `src/components/common/`.
- Place page-specific components inside that page's folder (e.g., `src/pages/Projects/components/`).
- Do not recreate redundant folders (`features/`, `sections/`, `config/`, duplicate `utils/`).
- Maintain TypeScript strict mode (`tsconfig.app.json`) and use the `@/` import alias.
- Use `src/lib/utils.ts` (`cn`) for class merging and existing shadcn/ui components before writing custom primitives.
- Keep portfolio content centralized in `src/data/` and never invent personal credentials, work history, or achievements.

## 2. Prompt Interpretation Standards

Before implementing any request:

1. Identify the actual objective and requested page/component.
2. Inspect the existing implementation and design tokens.
3. Extract explicit requirements and constraints.
4. Identify elements that must remain unchanged.
5. Analyze any provided reference design or screenshot.
6. Determine the minimal set of affected files.
7. Plan the smallest correct implementation.
8. Implement only what was requested — do not modify unrelated components or invent unrequested features.
9. Verify the rendered output and run code-quality checks (`typecheck`, `lint`, `build`).
10. Ask for clarification only when a missing requirement materially blocks correct implementation.

## 3. Design Accuracy Standards

When a reference screenshot or design is provided, inspect and reproduce:

- Overall layout, container dimensions, and component hierarchy
- Relative positioning, alignment lines, margins, padding, and gaps
- Typography scale, font weights, line heights, and text wrapping
- Colors, border radius, borders, shadows, icon sizes, and content density

Rules:

- Never replace a supplied reference with a generic AI-generated design.
- Do not add unrequested gradients, decorative cards, badges, or animations.
- Never claim pixel-perfect accuracy without visual inspection.

## 4. UI/UX Standards

### Spacing System

- Use a consistent 4px-based spacing scale (`4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`).
- Prefer existing design tokens over arbitrary values unless matching a specific reference.

### Alignment

- Share alignment lines across related elements, cards, headers, and section boundaries.
- Align icons cleanly with text baselines or vertical centers.
- Maintain consistent button heights and form label alignment.
- Use CSS Grid and Flexbox rather than brittle absolute positioning.

### Typography

- Use Plus Jakarta Sans (`@fontsource-variable/plus-jakarta-sans`) as the primary font.
- Maintain clear heading hierarchy, readable line heights, accessible contrast, and intentional wrapping.

### Visual Hierarchy

- Prioritize important information through whitespace, grouping, subtle borders, and purposeful color.
- Avoid excessive cards, heavy shadows, unnecessary badges, decorative icons, repeated labels, and wordy copy.

## 5. Table & Data Display Standards

- Use semantic `<table>` elements (or shadcn/ui Table) for tabular data; avoid independent Flexbox rows that break column alignment.
- Align headers exactly with their columns; align numeric columns consistently with `tabular-nums`.
- Keep row heights, header/body padding, and action column positions consistent.
- Center icons and buttons vertically; handle long text with intentional wrapping or truncation + tooltips.
- Ensure sorting indicators do not shift headers, pagination/filters align with the table container, empty states are properly centered, and tables never cause unintended page overflow.

## 6. Responsive Design Standards

Verify every frontend change across representative viewports:

- `320px` (Small mobile)
- `390px` (Mobile)
- `768px` (Tablet)
- `1024px` (Laptop / tablet landscape)
- `1440px` (Desktop)
- `1920px` (Large desktop)

Ensure zero unintended horizontal overflow, no overlapping/clipped elements, accessible navigation and dialogs, and purposeful mobile layout adaptation without degrading the desktop appearance.

## 7. Response Reporting Standard

At the end of **every** response, always include:

1. **Skills Used on This Prompt** — List which Antigravity Agent Skills were applied (or `None` for simple questions).
2. **What Changed** — List the exact files created, edited, or deleted with clickable file links (or `No files modified in this turn.`).

## 8. Quality-First Token & Context Efficiency

Apply `token-context-optimization` automatically on all tasks:

- Follow the strict priority order: (1) correctness & security, (2) explicit requirements, (3) design accuracy, (4) maintainability, (5) testing & visual verification, (6) token/context efficiency.
- Load only relevant skills, read only directly relevant files first, batch independent tool calls, prefer targeted edits over full-file rewrites, and keep responses concise.
- Never skip required analysis, tests, or browser/visual verification to save tokens.
