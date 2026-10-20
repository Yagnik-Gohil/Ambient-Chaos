# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Ambient Chaos: a single-page ambient sound mixer. Each card loops one sound (rain, waves, lo-fi, instruments, ...) with its own circular volume knob. Based on another developer's project.

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # static export to out/ (output: "export")
npm run lint     # eslint (next core-web-vitals + typescript)
```

There is no test suite. `npm run build` plus `npm run lint` are the checks. Ignore `npm run export`: `next export` was removed in Next 15 and fails.

## Stack

Next.js 15.5 (App Router, static export), React 19.1, TypeScript, Tailwind CSS v4 via `@tailwindcss/postcss`. Path alias `@/*` maps to `src/*`. No state library and no backend: everything runs in the browser.

## Architecture

- `src/app/page.tsx` (`"use client"`) is the whole app. It declares every sound as a pair of `public/svg/<name>.svg` icon + `public/audio/<name>.mp3` path at the top of the file and renders a grid of `Card`s. A first-click overlay (`hasInteracted`) exists because browsers block audio until the user interacts.
- `src/components/Card.tsx` holds one sound: an `<audio>` element plus a hand-built SVG circular slider (pointer and touch dragging, 0–100 mapped to volume; 0 pauses). Its size is set in JS from `window.innerWidth` breakpoints, not CSS.
- `src/components/Title.tsx` is a small heading.
- `src/app/layout.tsx` writes the `<head>` by hand (meta, Open Graph, Twitter, AdSense script) and loads the Protest Strike and Yeseva One Google fonts as CSS variables.

To add a sound: put the icon in `public/svg/`, the loop in `public/audio/`, add the two path constants and a `Card` in `page.tsx`.

## Rules

- **The site must stay out of search engines.** Keep `<meta name="robots" content="noindex, nofollow">` in `layout.tsx`, keep exactly one robots tag (don't add `robots` to the Next `metadata` export), and don't block crawling in a `robots.txt`, because crawlers must fetch pages to see the noindex.
- Static export only: no API routes, server actions, or runtime `headers()`/`cookies()`.
- Images use `next/image` with `unoptimized`, because export mode has no image optimizer.
- Test volume dragging on touch devices after touching `Card.tsx`; touch handling has broken before.
- `deploy.bat` is git-ignored and run only by the owner. Never run it.

<!-- control-room:begin -->
## Workspace (control room)

This repo is part of a workspace run from a sibling `control-room` folder. When that folder exists, its shared rules and this repo's workspace context load below; when it doesn't (e.g. a fresh clone of this repo alone), the imports are skipped and nothing else changes.

@../control-room/rules/core.md
@../control-room/rules/git.md
@../control-room/rules/public-repo.md
@../control-room/.local/repos/Ambient-Chaos.md
<!-- control-room:end -->
