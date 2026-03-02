# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (port 5173)
npm run build     # Production build
npm run preview   # Preview production build (port 4173)
npm run start     # Build + preview (used in deployment)
```

No test framework is configured in this project.

## Environment

Set `VITE_API_URL` to point at the backend. Defaults to `http://localhost:8000`.

```
VITE_API_URL=http://localhost:8000
```

## Architecture

**React 18 + Vite** SPA with no TypeScript. Path alias `@` maps to `./src`.

**Routing** — four pages via React Router: `/`, `/about`, `/projects`, `/experience`.

**Theming** — dark/light mode managed by `ThemeContext` using a CSS class on `<html>`. Tailwind is configured with `darkMode: 'class'`. Theme is persisted to `localStorage`.

**i18n** — English/Spanish via `i18next`. Translation files live in `src/i18n/en.json` and `src/i18n/es.json`. Language is auto-detected from the browser.

**Data layer** — Content comes from a REST API (`src/services/api.js`) that returns `{ success, data, total }`. The two custom hooks (`useExperiences`, `useProjects`) fetch from the API and enrich the results with local visual metadata:

- `src/config/experiencesMetadata.js` — maps experience IDs to `company`, `location`, `tech`, `variant`, and `level` (LEGENDARY / EPIC / RARE / COMMON).
- `src/config/projectsMetadata.js` — maps project IDs to `tech` and `variant`.

When a new experience or project is added via the API, add a matching entry to the relevant config file to provide its display metadata.

**Design system** — Custom 8-bit / pixel-art aesthetic. Reusable primitives are in `src/components/`: `PixelCard`, `PixelButton`, `PixelBadge`, `PixelProgress`. The `variant` prop on these components accepts `default | secondary | accent | warning | ghost`. Custom Tailwind utilities (`shadow-pixel`, `animate-blink`, `animate-glitch`, etc.) and fonts (`font-pixel` = Press Start 2P, `font-mono` = VT323) are defined in `tailwind.config.js`. Global CRT effects (`scanlines`, `crt-effect`) are CSS classes applied at the root in `App.jsx`.

**Color palette** (in `tailwind.config.js` under `retro`):

| Token | Hex |
|---|---|
| primary | `#1e3a8a` |
| secondary | `#3b82f6` |
| accent | `#60a5fa` |
| warning | `#f59e0b` |
| danger | `#ef4444` |
| success | `#10b981` |