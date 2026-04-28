# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server at localhost:3000
pnpm build      # production build (TypeScript errors ignored by config)
pnpm lint       # ESLint
```

Use `pnpm` — both `pnpm-lock.yaml` and `package-lock.json` exist, but pnpm is the primary package manager.

## Architecture

Single-page Next.js 16 / React 19 landing site. The entire page is assembled in [app/page.tsx](app/page.tsx) as a stack of section components imported from [components/](components/).

### Section components (`components/`)

Each file is one full-width landing page section rendered top-to-bottom:

| Component | Purpose |
|---|---|
| `Header` | Nav bar |
| `HeroSection` | Above-the-fold hero with Spline 3D robot |
| `SpeedSection` | Speed/response-time value prop |
| `AIFrontDeskVisual` | AI front desk concept illustration |
| `AuditCards` | Pain point cards |
| `WorkflowPipeline` | Step-by-step lead handling flow |
| `LiveDemoPanel` | Interactive demo panel |
| `FAQSection` | Objection-handling FAQ |
| `FinalCTA` | Booking CTA |
| `Footer` | Footer |

### UI primitives (`components/ui/`)

shadcn/ui components (new-york style). Add new ones with:
```bash
pnpm dlx shadcn@latest add <component>
```
Icon library is `lucide-react`.

### Styling

- Tailwind CSS v4 — config lives entirely inside [app/globals.css](app/globals.css) via `@theme inline` (no `tailwind.config.*` file).
- Dark-only design. Background is pure black (`oklch(0 0 0)`). There is no light/dark toggle and no `.dark` class switching needed.
- All color tokens are CSS custom properties in `:root` inside `globals.css`. Extend the theme there, not in a separate config file.
- Fonts: Geist (sans) and Geist Mono loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx).

### Animation & 3D

- `framer-motion` for scroll animations and transitions across section components.
- `@splinetool/react-spline` renders the 3D robot in `HeroSection`. The Spline scene URL is embedded in the component.

### Deployment

Deployed to Netlify via `@netlify/plugin-nextjs` ([netlify.toml](netlify.toml)). `@vercel/analytics` is also wired in [app/layout.tsx](app/layout.tsx) and only activates in production.

### Notes

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`.
- No test framework is configured.
- The `IMPLEMENTATIONPLAN_*.md` files in the repo root are content/copy planning documents for the landing page, not code specs.
