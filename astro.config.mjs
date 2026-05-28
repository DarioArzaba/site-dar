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
  }
});
