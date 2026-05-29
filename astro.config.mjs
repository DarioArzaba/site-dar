import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from "remark-math"
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: "https://darioarzaba.com",
  output: "static",
  integrations: [react(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    optimizeDeps: {
      // Ensure React's dev-mode JSX runtime is pre-bundled so jsxDEV is
      // always available when Vite serves component islands in development.
      include: ['react/jsx-dev-runtime'],
    },
  },
});
