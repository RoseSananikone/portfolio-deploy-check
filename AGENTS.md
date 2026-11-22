# Project

A static portfolio website that has a home page with my featured projects and skills. An about page with a short introduction and my skills displayed and hobbies. A work page that shows all my projects with a markdown for each one to explain the project. A blog page of what talks or conferences I've been to related to design and my experience at them, each also in a markdown.

## Stack & constraints

- Astro, static output only (no SSR, no server endpoints).
- Plain CSS. No Tailwind, Sass or CSS-in-JS.
- JavaScript only, no TypeScript.
- Colours are defined as custom properties in `src/styles/global.css`.

## Conventions

- Mobile-first: the smallest screen is the base style; media queries use `min-width` only, in `rem`.
- Font sizes in `rem`, never `px`.
- Grid columns in `fr`, `%` or `minmax()`, never a fixed `px` width.
- Use the custom properties from `global.css` for every colour.
- Range syntax should be @media (width >= 39.75rem)
- Breakpoints: 39.75rem (tablet), 62.5rem (desktop). 68.125rem only for the About layout.

## Do not

- Do not change the website's text content.
- Do not add new colours. Any new colour must be a shade of pink or brown and must be
  added as a custom property in `global.css`.
- Do not write hex (or rgb/hsl) colour values anywhere except `global.css`.
- Do not use `px` for font sizes, spacing or layout widths.
- Do not add Tailwind, TypeScript or a CSS framework.

## How to verify

1. `npm run build` finishes with no errors or warnings.
2. In the browser's dev tools, check the layout at 320px, 768px and 1280px wide:
   no horizontal scrolling, and the menu fits at 320px.
3. Check at 200% browser zoom: no text is cut off or overlapping.
4. Check text and background colours with a contrast checker.

## Changelog

- 2026-11-22: Created AGENTS.md.
