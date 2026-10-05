# Rachel Regnell — UX/UI Portfolio

A playful, interactive portfolio built with React, [Vite](https://vite.dev) and
[Framer Motion](https://motion.dev).

## What's inside

- **Hero**: letters that bounce when you hover them, plus stickers you can drag and throw around
- **Work**: 3D-tilt project cards that open into case-study modals (press → for the next one, Esc to close)
- **Playground**: a working version of the iOS coffee checkout, with live totals and confetti
- **About**: goal sticky notes you can rearrange
- **Contact**: magnetic buttons
- Honors the visitor's "reduce motion" setting

## Editing content

All copy, links and projects live in [`src/content.js`](src/content.js). Fill in `email`,
`linkedin` and `resume` there to show the contact buttons. To add a project, drop an image
into `src/assets/work/` and add an entry to `projects`.

The original full-size design exports are in `design-files/`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploying

Pushing to `main` builds the site and deploys it to GitHub Pages through
`.github/workflows/deploy.yml`. One-time setup: **Settings → Pages → Source: GitHub Actions**.
To use rachelregnell.com, add it under **Settings → Pages → Custom domain** and point your DNS at GitHub Pages.
