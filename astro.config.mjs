// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexgravx.com',
  output: 'static',
  build: {
    // Emit /resume as resume.html rather than resume/index.html, so the
    // printable resume keeps a clean standalone URL when served by Netlify.
    format: 'file',
  },
});
