# Personal Portfolio

A lightweight, page-based personal portfolio frontend built with React, TypeScript, Vite, React Router, Tailwind CSS, Lucide React, and Motion for React.

## Technology Stack

- **Framework:** React + TypeScript (strict mode)
- **Routing:** React Router
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with CSS variable design tokens
- **Typography:** Plus Jakarta Sans with system font fallback
- **Icons:** Lucide React
- **Animation:** Motion for React (`motion/react`) with `prefers-reduced-motion` support
- **Code Quality:** ESLint + Prettier (`prettier-plugin-tailwindcss`)

## Prerequisites

- Node.js 20+ (tested on Node.js 24)
- npm 10+

## Installation

```bash
npm install
```

## Environment Configuration

Copy `.env.example` to `.env.local` to customize public site metadata locally:

```env
VITE_SITE_NAME=Personal Portfolio
VITE_SITE_URL=
```

Never store secrets or private API keys in frontend `VITE_*` variables.

## Development & Build Commands

```bash
npm run dev          # Start the Vite development server
npm run build        # Type-check and create a production build in dist/
npm run preview      # Preview the production build locally
npm run lint         # Run ESLint across the project
npm run typecheck    # Run TypeScript strict type-checking
npm run format       # Format all files with Prettier
npm run format:check # Verify formatting without modifying files
```

## Routes

| Page       | Route         |
| ---------- | ------------- |
| Dashboard  | `/`           |
| About Me   | `/about-me`   |
| Experience | `/experience` |
| Projects   | `/projects`   |
| Skills     | `/skills`     |
| Contacts   | `/contacts`   |

## Folder Structure

```text
├── public/                 # Static public assets (favicon.svg, robots.txt, images/)
├── src/
│   ├── assets/             # Imported local images and fonts
│   ├── components/
│   │   ├── ui/             # Generic UI primitives (Button, Card, Badge, Container)
│   │   └── common/         # Shared portfolio components (SectionContainer, ThemeToggle, etc.)
│   ├── layouts/            # Shared page shell (MainLayout, Header, Footer)
│   ├── pages/              # Independent portfolio pages
│   │   ├── Dashboard/
│   │   ├── AboutMe/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contacts/
│   │   └── NotFound/
│   ├── routes/             # Application routing (AppRoutes.tsx)
│   ├── data/               # Centralized, strongly typed portfolio content
│   ├── styles/             # Global CSS, Tailwind v4 setup, and light/dark design tokens
│   ├── types/              # Shared TypeScript interfaces and types
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
```

## Updating Portfolio Content

Edit the typed data files in `src/data/`:

- `src/data/portfolio.ts` — Name, role, bio, location, and social links
- `src/data/projects.ts` — Projects and tags
- `src/data/experience.ts` — Work history and highlights
- `src/data/skills.ts` — Technical skills and categories
