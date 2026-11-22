// BASE_URL is "/portfolio/" on GitHub Pages (from `base` in astro.config.mjs).
// Normalise it to always end in "/" so a page path can be appended.
export const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");

// withBase("/work/") -> "/portfolio/work/"
export const withBase = (href) => base + href.replace(/^\//, "");
