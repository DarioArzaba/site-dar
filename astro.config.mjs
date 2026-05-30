import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex';
import { remarkMermaid } from './src/plugins/remark-mermaid.mjs';
import { remarkNormalizeMeta } from './src/plugins/remark-normalize-meta.mjs';
import { rehypeMark } from './src/plugins/rehype-mark.mjs';
import { rehypeCallouts } from './src/plugins/rehype-callouts.mjs';
import { rehypeImages } from './src/plugins/rehype-images.mjs';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// All EC options live in ec.config.mjs — the integration auto-detects it
// and the <Code> MDX component can load it directly at prerender time.
// Do NOT pass inline options here; non-serializable values (theme objects,
// themeCssSelector function) break the <Code> component's prerender step.

export default defineConfig({
  site: "https://darioarzaba.com",
  output: "static",
  integrations: [
    expressiveCode(),
    react(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid, remarkNormalizeMeta],
    rehypePlugins: [
      rehypeKatex,
      rehypeCallouts,
      rehypeMark,
      rehypeImages,
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: { ariaHidden: 'true', tabIndex: -1, className: ['heading-anchor'] },
        content: { type: 'text', value: ' #' },
      }],
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['react/jsx-dev-runtime'],
    },
  },
});
