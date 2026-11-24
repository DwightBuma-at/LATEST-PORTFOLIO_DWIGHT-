# Frontend Environment & Architecture Benchmark

Use this document as the **master blueprint** whenever starting a new React + TypeScript frontend project. It captures the exact stack, setup commands, page-based architecture, testing suite, MCP servers, VS Code configuration, permanent rules, and all 27 Antigravity Agent Skills established in `dwight-final-portfolio`.

---

## 1. Environment & Technology Stack

| Layer             | Technology                                                                                                 | Purpose                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Runtime**       | Node.js 20+ (tested on v24), npm 10+                                                                       | Local development and package management                                  |
| **Framework**     | React 19 + TypeScript 5.9 (strict mode)                                                                    | UI library and strict static typing                                       |
| **Build Tool**    | Vite 8 + `@vitejs/plugin-react`                                                                            | Fast HMR dev server and production bundler                                |
| **Routing**       | React Router (`react-router`)                                                                              | Client-side navigation with `<BrowserRouter>` and `<Outlet />`            |
| **Styling**       | Tailwind CSS v4 (`@tailwindcss/vite`) + `tw-animate-css`                                                   | Utility-first styling, CSS variable tokens, light/dark themes             |
| **UI Primitives** | shadcn/ui (`new-york` style) + Radix UI                                                                    | Accessible, customizable UI components in `src/components/ui/`            |
| **Effects**       | Magic UI (`@magicui` registry)                                                                             | Portfolio visual effects in `src/components/magicui/`                     |
| **Animations**    | Motion (`motion/react`) + Lenis (`lenis`)                                                                  | Subtle transitions (`reducedMotion="user"`) and opt-in smooth scroll      |
| **Icons**         | Lucide React (`lucide-react`)                                                                              | Tree-shakable, consistent SVG icons                                       |
| **Typography**    | `@fontsource-variable/plus-jakarta-sans`                                                                   | Locally bundled variable font with system fallback                        |
| **Utilities**     | `clsx`, `tailwind-merge`, `class-variance-authority`                                                       | Class merging (`src/lib/utils.ts` `cn()`) and component variants          |
| **Code Quality**  | ESLint 10 (`typescript-eslint`, `react-hooks`, `react-refresh`) + Prettier + `prettier-plugin-tailwindcss` | Linting and consistent formatting/class ordering                          |
| **Testing**       | Vitest + React Testing Library + Playwright + `@axe-core/playwright`                                       | Unit, E2E, responsive overflow, visual regression, and WCAG 2.2 AA checks |

---

## 2. Step-by-Step Setup Commands (New Project from Scratch)

```bash
# 1. Scaffold Vite React TypeScript app in current directory
npx --yes create-vite@latest . --template react-ts --no-interactive
npm install

# 2. Install core runtime dependencies
npm install react-router lucide-react motion lenis clsx tailwind-merge class-variance-authority @fontsource-variable/plus-jakarta-sans tw-animate-css

# 3. Install styling, linting, formatting, and compatible TypeScript
npm uninstall oxlint
npm install -D tailwindcss @tailwindcss/vite typescript@^5.9.0 @types/node eslint @eslint/js globals typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh prettier prettier-plugin-tailwindcss

# 4. Install dev-only testing & accessibility tools
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @playwright/test @axe-core/playwright
npx playwright install chromium

# 5. Install foundational shadcn/ui components (after configuring components.json & tsconfig paths)
npx --yes shadcn@latest add button card badge avatar separator tooltip dialog sheet dropdown-menu navigation-menu tabs accordion input textarea label select skeleton progress scroll-area carousel hover-card sonner table --yes --overwrite

# 6. Install Magic UI components via @magicui registry (then move into src/components/magicui/)
npx --yes shadcn@latest add @magicui/bento-grid @magicui/marquee @magicui/blur-fade @magicui/animated-gradient-text @magicui/text-reveal @magicui/border-beam @magicui/number-ticker @magicui/animated-list --yes --overwrite

# 7. Initialize Git
git init
```

### Standard `package.json` Scripts

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "typecheck": "tsc -b --noEmit",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "test": "vitest run",
  "test:e2e": "playwright test"
}
```

---

## 3. Page-Based Frontend Architecture

Keep the architecture lightweight and flat. Avoid redundant folders (`features/`, `sections/`, `config/`, duplicate `utils/`).

```text
project-root/
├── .agents/
│   ├── mcp_config.json         # Workspace MCP servers (Playwright, shadcn, Sequential Thinking)
│   ├── SLASH_COMMANDS.md       # Quick-reference cheat sheet for / commands
│   └── skills/                 # 27 Antigravity Agent Skills (each with SKILL.md)
├── .vscode/
│   ├── extensions.json         # 13 recommended VS Code / Antigravity extensions
│   └── settings.json           # Format on save, Prettier, ESLint fix, Tailwind regex, TS SDK
├── docs/
│   └── ENVIRONMENT_BENCHMARK.md
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/                 # Imported local images & fonts
│   ├── components/
│   │   ├── ui/                 # 23 shadcn/ui primitives + Container.tsx
│   │   ├── magicui/            # 8 Magic UI effect components
│   │   └── common/             # Shared app components (SectionContainer, SectionHeading, ThemeToggle, SocialLinks)
│   ├── data/                   # Centralized, strongly typed content (never scattered in JSX)
│   ├── layouts/                # Shared shell: MainLayout.tsx (<Outlet />), Header.tsx, Footer.tsx
│   ├── lib/
│   │   └── utils.ts            # cn() helper (clsx + tailwind-merge)
│   ├── pages/                  # Independent page folders (page-only components go in <Page>/components/)
│   │   ├── Dashboard/
│   │   ├── AboutMe/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contacts/
│   │   └── NotFound/
│   ├── routes/
│   │   └── AppRoutes.tsx       # Centralized React Router route definitions
│   ├── styles/
│   │   └── globals.css         # Tailwind v4, tw-animate-css, light/dark CSS variables, Plus Jakarta Sans
│   ├── types/                  # Shared TypeScript interfaces
│   ├── App.tsx                 # BrowserRouter + MotionConfig + TooltipProvider + AppRoutes + Toaster
│   └── main.tsx                # Imports Fontsource variable font & globals.css
├── tests/
│   ├── unit/                   # Vitest + React Testing Library tests
│   └── e2e/                    # Playwright + axe-core smoke, overflow & visual regression tests
├── .env.example                # Public env template (VITE_SITE_NAME, VITE_SITE_URL)
├── .env.local                  # Local overrides (gitignored)
├── .gitignore
├── .prettierignore
├── .prettierrc
├── AGENTS.md                   # Permanent project rules
├── components.json             # shadcn/ui + @magicui registry config
├── eslint.config.js            # Flat ESLint config with scoped src/components/ui override
├── index.html                  # Semantic HTML, OG placeholders, anti-FOUC theme script
├── playwright.config.ts        # 390px, 768px, 1440px projects + reducedMotion + baseline template
├── tsconfig.json               # Includes @/* paths for CLI tools + project references
├── tsconfig.app.json           # Strict mode + @/* path alias
├── vite.config.ts              # React + Tailwind v4 + @/* alias (import.meta.dirname)
└── vitest.config.ts            # jsdom + @/* alias + setup.ts
```

---

## 4. AI Agent, MCP, Rules & Skills Setup

### Permanent Project Rules (`AGENTS.md`)

Defines non-negotiable standards for:

- Page-based architecture & `@/` import alias
- 10-step prompt interpretation before coding
- Reference screenshot fidelity & design accuracy
- 4px spacing scale, alignment, Plus Jakarta Sans typography, visual hierarchy
- Semantic, aligned, overflow-free tables
- Responsive verification across `320px`, `390px`, `768px`, `1024px`, `1440px`, `1920px`

### MCP Servers (`.agents/mcp_config.json`)

- **Playwright MCP:** `npx @playwright/mcp@latest --isolated`
- **shadcn MCP:** `npx shadcn@latest mcp`
- **Sequential Thinking MCP:** `npx -y @modelcontextprotocol/server-sequential-thinking`
- _Optional Marketplace Plugins:_ Context7 (`antigravity-plugins-partners/plugin/context7`), Chrome DevTools (`antigravity-plugins-official/plugin/chrome-devtools-plugin`), Figma (`antigravity-plugins-partners/plugin/figma`).

### 27 Antigravity Agent Skills (`.agents/skills/`)

- **4 Core Workflows:** `visual-qa`, `implement-design`, `ui-cleanup`, `prompt-to-plan`
- **11 UI/UX Design Skills:** `frontend-design`, `ui-ux-pro-max`, `design-system`, `responsive-design`, `visual-alignment`, `screenshot-to-code`, `shadcn-ui`, `tailwind-css`, `motion-design`, `accessibility`, `table-design`
- **12 Software Development Skills:** `react-best-practices`, `typescript-expert`, `clean-code`, `frontend-architecture`, `systematic-debugging`, `code-review`, `webapp-testing`, `performance-optimization`, `security-best-practices`, `prompt-engineering`, `seo-optimization`, `git-best-practices`

### VS Code Recommended Extensions (`.vscode/extensions.json`)

`dbaeumer.vscode-eslint`, `esbenp.prettier-vscode`, `bradlc.vscode-tailwindcss`, `usernamehw.errorlens`, `yoavbls.pretty-ts-errors`, `christian-kohler.path-intellisense`, `pranaygp.vscode-css-peek`, `Zignd.html-css-class-completion`, `formulahendry.auto-rename-tag`, `dsznajder.es7-react-js-snippets`, `ms-playwright.playwright`, `PKief.material-icon-theme`, `eamodio.gitlens`.

---

## 5. Master Copy-Paste Prompt for Future Projects

Copy and paste this prompt into Antigravity when starting any new frontend project to reproduce this exact benchmark environment:

```text
Initialize this empty workspace using my Frontend Environment & Architecture Benchmark (frontend only, no backend/auth/database, do not implement the final visual design yet):

1. Stack & Setup:
   - Scaffold with Vite + React 19 + TypeScript (strict mode, verbatimModuleSyntax, noUnusedLocals, noUnusedParameters, and @/* -> ./src/* path alias in BOTH tsconfig.json and tsconfig.app.json; use import.meta.dirname in vite.config.ts).
   - Install runtime packages: react-router, lucide-react, motion, lenis, clsx, tailwind-merge, class-variance-authority, @fontsource-variable/plus-jakarta-sans, tw-animate-css.
   - Install dev packages: tailwindcss, @tailwindcss/vite, typescript@^5.9.0, @types/node, eslint, @eslint/js, globals, typescript-eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, prettier, prettier-plugin-tailwindcss, vitest, @testing-library/react, @testing-library/jest-dom, jsdom, @playwright/test, @axe-core/playwright. Remove oxlint/.oxlintrc.json if generated.
   - Run `npx playwright install chromium`.

2. Styling, UI & Effects:
   - Configure Tailwind CSS v4 in src/styles/globals.css with @import 'tailwindcss', @import 'tw-animate-css', @custom-variant dark (&:where(.dark, .dark *)), light/dark OKLCH CSS variables, Plus Jakarta Sans Variable font, and prefers-reduced-motion support. Import @fontsource-variable/plus-jakarta-sans in src/main.tsx.
   - Configure index.html with semantic metadata, Open Graph placeholders, favicon.svg, and an inline anti-FOUC theme script reading localStorage('portfolio-theme') and prefers-color-scheme. Add public/robots.txt and public/favicon.svg.
   - Configure components.json (new-york style, Tailwind v4, CSS variables, Lucide icons, @/ alias, @magicui registry) and src/lib/utils.ts (cn helper).
   - Install 23 shadcn/ui components into src/components/ui/: button, card, badge, avatar, separator, tooltip, dialog, sheet, dropdown-menu, navigation-menu, tabs, accordion, input, textarea, label, select, skeleton, progress, scroll-area, carousel, hover-card, sonner, table (plus Container.tsx).
   - Install 8 Magic UI components via @magicui registry and place them in src/components/magicui/: bento-grid, marquee, blur-fade, animated-gradient-text, text-reveal, border-beam, number-ticker, animated-list.
   - Wrap src/App.tsx with <BrowserRouter>, <MotionConfig reducedMotion="user">, <TooltipProvider>, <AppRoutes />, and <Toaster />.

3. Page-Based Frontend Architecture:
   - Organize pages in src/pages/<PageName>/<PageName>.tsx (with page-only components in <PageName>/components/), plus NotFound.
   - Shared layout in src/layouts/ (MainLayout.tsx with <Outlet />, Header.tsx with NavLink + mobile menu + ThemeToggle, Footer.tsx).
   - Centralized routes in src/routes/AppRoutes.tsx, shared portfolio components in src/components/common/ (SectionContainer, SectionHeading with h1, ThemeToggle, SocialLinks), typed content in src/data/, shared types in src/types/.
   - Never create redundant features/, sections/, config/, or duplicate utils/ folders.

4. Quality, Testing & Scripts:
   - Configure eslint.config.js (flat config with scoped override for src/components/ui/**), .prettierrc (with prettier-plugin-tailwindcss), .prettierignore, .gitignore, .env.example, and .env.local.
   - Configure vitest.config.ts (jsdom, @/ alias, tests/unit/setup.ts, tests/unit/cn.test.ts) and playwright.config.ts (390px, 768px, 1440px viewports, reducedMotion: 'reduce', baseline snapshot template, tests/e2e/smoke.spec.ts checking zero horizontal overflow and zero axe-core violations).
   - Add package.json scripts: dev, build, preview, lint, typecheck, format, format:check, test, test:e2e.

5. Workspace AI Rules, MCP, Skills & Editor Config:
   - Create AGENTS.md with permanent rules for page-based architecture, 10-step prompt interpretation, reference design accuracy, 4px spacing scale, alignment, typography, visual hierarchy, semantic tables, and responsive verification (320px–1920px).
   - Create .agents/mcp_config.json with playwright (@playwright/mcp@latest --isolated), shadcn (shadcn@latest mcp), and sequential-thinking (@modelcontextprotocol/server-sequential-thinking).
   - Create 27 Antigravity Agent Skills in .agents/skills/<name>/SKILL.md (valid YAML frontmatter, unique names, clear activation criteria):
     * Workflows (4): visual-qa, implement-design, ui-cleanup, prompt-to-plan
     * UI/UX (11): frontend-design, ui-ux-pro-max, design-system, responsive-design, visual-alignment, screenshot-to-code, shadcn-ui, tailwind-css, motion-design, accessibility, table-design
     * Dev (12): react-best-practices, typescript-expert, clean-code, frontend-architecture, systematic-debugging, code-review, webapp-testing, performance-optimization, security-best-practices, prompt-engineering, seo-optimization, git-best-practices
   - Create .agents/SLASH_COMMANDS.md quick-reference guide.
   - Create .vscode/extensions.json recommending: dbaeumer.vscode-eslint, esbenp.prettier-vscode, bradlc.vscode-tailwindcss, usernamehw.errorlens, yoavbls.pretty-ts-errors, christian-kohler.path-intellisense, pranaygp.vscode-css-peek, Zignd.html-css-class-completion, formulahendry.auto-rename-tag, dsznajder.es7-react-js-snippets, ms-playwright.playwright, PKief.material-icon-theme, eamodio.gitlens, plus .vscode/settings.json (formatOnSave, Prettier default formatter, ESLint fixAll on save, workspace TS SDK, Tailwind cva/cn classRegex).
   - Run `git init` (do not auto-commit).

6. Final Verification:
   - Run npm run format, npm run typecheck, npm run lint, npm run format:check, npm run test, npm run build, and npm run test:e2e. Fix any issues until every single check passes with zero errors and zero accessibility violations.
```
