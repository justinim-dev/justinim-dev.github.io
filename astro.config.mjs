// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://justinim-dev.github.io',
  // Keep project URLs as /projects/<name>/ with a trailing slash, which GitHub Pages serves natively.
  trailingSlash: 'always',
});
