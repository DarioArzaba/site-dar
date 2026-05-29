import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex';
import { remarkMermaid } from './src/plugins/remark-mermaid.mjs';
import { remarkNormalizeMeta } from './src/plugins/remark-normalize-meta.mjs';
import { rehypeMark } from './src/plugins/rehype-mark.mjs';
import { rehypeCallouts } from './src/plugins/rehype-callouts.mjs';
import { rehypeImages } from './src/plugins/rehype-images.mjs';

// ── Custom code themes ────────────────────────────────────────────────────────
// Token scope mappings for both themes follow the same palette variables
// defined in global.css (--code-*). Scopes cover JS/TS, Rust, C, Shell, CSS.

const codeDark = {
  name: 'site-dar-dark',
  type: 'dark',
  colors: {
    'editor.background':                 '#000000',
    'editor.foreground':                 '#fffcfe',
    'editorLineNumber.foreground':       '#3a3a3a',
    'editorLineNumber.activeForeground': '#8a8a8a',
    'editor.selectionBackground':        '#32537b66',
    'editorGutter.background':           '#000000',
  },
  tokenColors: [
    {
      scope: ['comment', 'comment.block', 'comment.line', 'punctuation.definition.comment'],
      settings: { foreground: '#8a8a8a', fontStyle: 'italic' },
    },
    {
      scope: [
        'entity.name.function', 'entity.name.method', 'entity.name.method.js',
        'support.function', 'meta.function-call entity.name.function',
        'meta.method-call entity.name.method',
      ],
      settings: { foreground: '#96cf70' },
    },
    {
      scope: [
        'constant.character.escape', 'string.regexp',
        'entity.name.type', 'entity.name.class', 'support.class',
        'meta.decorator punctuation.decorator',
        'storage.type.annotation', 'punctuation.definition.decorator',
      ],
      settings: { foreground: '#e4d386' },
    },
    {
      scope: [
        'keyword', 'keyword.control', 'keyword.control.flow',
        'keyword.control.import', 'keyword.control.export',
        'storage.type', 'storage.modifier',
        'entity.name.type.primitive',
      ],
      settings: { foreground: '#56B6C2' },
    },
    {
      scope: [
        'keyword.operator', 'keyword.operator.arithmetic',
        'keyword.operator.assignment', 'keyword.operator.comparison',
        'keyword.operator.relational', 'keyword.operator.logical',
        'keyword.operator.bitwise', 'keyword.operator.type',
      ],
      settings: { foreground: '#e9626d' },
    },
    {
      scope: [
        'variable.other.property', 'variable.other.object.property',
        'support.type.property-name', 'entity.other.attribute-name',
        'support.variable.property', 'meta.object-literal.key',
        'variable.other.member',
      ],
      settings: { foreground: '#6186ec' },
    },
    {
      scope: [
        'punctuation', 'punctuation.definition', 'punctuation.separator',
        'punctuation.accessor', 'punctuation.terminator',
        'punctuation.section', 'punctuation.bracket',
        'meta.brace', 'meta.delimiter',
      ],
      settings: { foreground: '#e2e8ff' },
    },
    {
      scope: [
        'string', 'string.quoted', 'string.quoted.single',
        'string.quoted.double', 'string.template', 'string.interpolated',
        'string.other',
      ],
      settings: { foreground: '#E5C07B' },
    },
    {
      scope: ['entity.name.tag', 'meta.tag.sgml', 'support.class.component'],
      settings: { foreground: '#6186ec' },
    },
    {
      scope: [
        'constant', 'constant.numeric', 'constant.language',
        'constant.other', 'support.constant',
        'variable.other.enummember', 'constant.other.caps',
      ],
      settings: { foreground: '#d66af7' },
    },
  ],
};

const codeLight = {
  name: 'site-dar-light',
  type: 'light',
  colors: {
    'editor.background':                 '#fefdf6',
    'editor.foreground':                 '#0c0c0c',
    'editorLineNumber.foreground':       '#c8c5b8',
    'editorLineNumber.activeForeground': '#888880',
    'editor.selectionBackground':        '#b0cbe855',
    'editorGutter.background':           '#fefdf6',
  },
  tokenColors: [
    {
      scope: ['comment', 'comment.block', 'comment.line', 'punctuation.definition.comment'],
      settings: { foreground: '#091c00', fontStyle: 'italic' },
    },
    {
      scope: [
        'entity.name.function', 'entity.name.method', 'entity.name.method.js',
        'support.function', 'meta.function-call entity.name.function',
        'meta.method-call entity.name.method',
      ],
      settings: { foreground: '#23800b' },
    },
    {
      scope: [
        'constant.character.escape', 'string.regexp',
        'entity.name.type', 'entity.name.class', 'support.class',
        'meta.decorator punctuation.decorator',
        'storage.type.annotation', 'punctuation.definition.decorator',
      ],
      settings: { foreground: '#7e6909' },
    },
    {
      scope: [
        'keyword', 'keyword.control', 'keyword.control.flow',
        'keyword.control.import', 'keyword.control.export',
        'storage.type', 'storage.modifier',
        'entity.name.type.primitive',
      ],
      settings: { foreground: '#01818f' },
    },
    {
      scope: [
        'keyword.operator', 'keyword.operator.arithmetic',
        'keyword.operator.assignment', 'keyword.operator.comparison',
        'keyword.operator.relational', 'keyword.operator.logical',
        'keyword.operator.bitwise', 'keyword.operator.type',
      ],
      settings: { foreground: '#950007' },
    },
    {
      scope: [
        'variable.other.property', 'variable.other.object.property',
        'support.type.property-name', 'entity.other.attribute-name',
        'support.variable.property', 'meta.object-literal.key',
        'variable.other.member',
      ],
      settings: { foreground: '#00339f' },
    },
    {
      scope: [
        'punctuation', 'punctuation.definition', 'punctuation.separator',
        'punctuation.accessor', 'punctuation.terminator',
        'punctuation.section', 'punctuation.bracket',
        'meta.brace', 'meta.delimiter',
      ],
      settings: { foreground: '#1a1919' },
    },
    {
      scope: [
        'string', 'string.quoted', 'string.quoted.single',
        'string.quoted.double', 'string.template', 'string.interpolated',
        'string.other',
      ],
      settings: { foreground: '#845b02' },
    },
    {
      scope: ['entity.name.tag', 'meta.tag.sgml', 'support.class.component'],
      settings: { foreground: '#193164' },
    },
    {
      scope: [
        'constant', 'constant.numeric', 'constant.language',
        'constant.other', 'support.constant',
        'variable.other.enummember', 'constant.other.caps',
      ],
      settings: { foreground: '#4e1d5f' },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  site: "https://darioarzaba.com",
  output: "static",
  integrations: [
    expressiveCode({
      themes: [codeLight, codeDark],
      plugins: [pluginLineNumbers()],

      // Follow the site's data-theme attribute (option is camelCase "Css" not "CSS")
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) =>
        theme.name === 'site-dar-light'
          ? ':root:not([data-theme="dark"])'
          : '[data-theme="dark"]',

      defaultProps: {
        wrap: false,
        showLineNumbers: true,
        overridesByLang: {
          // Terminal frames skip line numbers — they're not useful for commands
          'sh,shell,bash,zsh,fish,console,powershell': {
            frame: 'terminal',
            showLineNumbers: false,
          },
          // Plain text / markdown output never needs line numbers
          'text,md,markdown': {
            showLineNumbers: false,
          },
        },
      },

      styleOverrides: {
        borderRadius: '8px',
        // NOTE: EC styleOverrides arrays are [alternateValue, baseValue] = [dark, light]
        // because codeLight is the base (first) theme and codeDark is the alternate (second).
        //
        // borderColor controls --ec-brdCol, used by:
        //   • pre border (code area — all frames)
        //   • terminal header top/side border
        // editorTabBarBorderColor controls the header::before border (top/sides of editor frame).
        // Both must be the same colour so the border wraps the full block continuously.
        borderColor: ['#3a3a3a', '#b4bca0'],   // dark: subtle grey | light: sage-green mocha
        codeFontFamily: 'var(--font-mono)',
        codeFontSize: '0.865rem',
        uiLineHeight: '1.6',
        frames: {
          editorTabBarBackground:            ['#0d0d0d', '#ece9de'],
          editorActiveTabBackground:         ['#000000', '#fefdf6'],
          editorActiveTabBorderColor:        'transparent',     // remove tab's own border
          editorActiveTabForeground:         ['#fffcfe', '#282828'],
          editorTabBarBorderColor:           ['#3a3a3a', '#b4bca0'], // must match borderColor
          editorTabBarBorderBottomColor:     'transparent',    // no divider line between tab and code
          terminalBackground:                ['#000000', '#fefdf6'],
          terminalTitlebarBackground:        ['#0d0d0d', '#ece9de'],
          terminalTitlebarForeground:        ['#8a8a8a', '#5e6978'],
          terminalTitlebarBorderBottomColor: ['#3a3a3a', '#b4bca0'], // match outer border
        },
      },
    }),
    react(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid, remarkNormalizeMeta],
    rehypePlugins: [rehypeKatex, rehypeCallouts, rehypeMark, rehypeImages],
  },
  vite: {
    optimizeDeps: {
      include: ['react/jsx-dev-runtime'],
    },
  },
});
