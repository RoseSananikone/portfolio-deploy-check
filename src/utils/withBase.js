// BASE_URL comes from `base` in astro.config.mjs ("/portfolio-deploy-check/").
// Normalise it to always end in "/" so we can just append the page path.
const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");

export const withBase = (href) => base + href.replace(/^\//, "");
