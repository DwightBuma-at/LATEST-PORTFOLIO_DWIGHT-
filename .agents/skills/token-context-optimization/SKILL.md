---
name: token-context-optimization
description: Optimizes token consumption, context management, skill selection, file inspection, tool usage, and implementation efficiency while preserving code correctness, security, design accuracy, maintainability, and comprehensive verification. Apply these principles to all development tasks.
---

# Token & Context Optimization (Quality-First)

## Purpose
Minimize unnecessary token consumption, redundant analysis, excessive context loading, and repetitive tool usage without ever compromising engineering or UI/UX quality.

## Priority Hierarchy (Non-Negotiable)
1. Code correctness and security
2. Explicit user requirements
3. Design accuracy and UI/UX quality
4. Code maintainability and architecture
5. Functional testing and visual verification
6. Token and context efficiency

Token efficiency **never** overrides priorities 1–5.

## Activation Criteria
Applies automatically to all development, design, debugging, and review tasks.

## Specialized Instructions
- **Intelligent Skill Selection:** Activate only the skills relevant to the current task; never load all skills simultaneously or disable a needed skill to save tokens.
- **Targeted Context Management:** Read directly relevant files first using targeted searches; avoid reading the entire codebase for isolated changes or re-reading unchanged files. Expand inspection whenever dependencies or regression risks require it.
- **Targeted Implementation:** Modify only necessary files, prefer minimal targeted edits over full-file rewrites, and reuse existing `src/components/ui/`, `src/components/common/`, and `src/lib/utils.ts` primitives.
- **Efficient Tool & MCP Usage:** Batch independent reads/edits in parallel, chain verification commands cleanly, avoid redundant MCP/doc queries, and never skip required browser or documentation checks.
- **Adaptive Depth:** Scale analysis to task complexity—lightweight for simple edits, thorough for multi-file architecture, visual fidelity, or root-cause debugging.
- **Concise Responses:** Report changes made, affected files, verification results, and any remaining limitations directly without repeating prompts or printing entire files unnecessarily.

## Verification Checklist
- All applicable checks (`typecheck`, `lint`, `build`, tests, visual/responsive QA) are executed and never skipped to save tokens.
- No incomplete implementations, speculative shortcuts, or unverified assumptions.

## Anti-Patterns
- Skipping browser/visual verification, skipping tests, leaving out needed skills, assuming unread code is correct, or claiming guaranteed token savings without measurement.

## Completion Criteria
Task satisfies all quality, design, and verification requirements with minimal wasted context or redundant tool calls.
