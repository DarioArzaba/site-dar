// Expressive Code configuration — kept in a separate file so the <Code>
// MDX component can read it at build time (the options contain non-serializable
// values such as theme objects and the themeCssSelector function).
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// ── Custom code themes ────────────────────────────────────────────────────────

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
    // ── Comments ─────────────────────────────────────────────────────────────
    { scope: ['comment', 'comment.block', 'comment.line', 'punctuation.definition.comment'],
      settings: { foreground: '#8a8a8a', fontStyle: 'italic' } },

    // ── Functions & methods ───────────────────────────────────────────────────
    { scope: ['entity.name.function', 'entity.name.method', 'entity.name.method.js'],
      settings: { foreground: '#96cf70' } },
    { scope: ['support.function', 'meta.function-call entity.name.function',
               'meta.method-call entity.name.method'],
      settings: { foreground: '#a8da80' } },

    // ── Types / classes / namespaces ──────────────────────────────────────────
    { scope: ['entity.name.type', 'entity.name.class', 'entity.name.type.primitive'],
      settings: { foreground: '#e4d386' } },
    { scope: ['entity.name.namespace', 'entity.name.module'],
      settings: { foreground: '#d4c068' } },
    { scope: ['support.class', 'support.type'],
      settings: { foreground: '#c8d870' } },
    { scope: ['meta.decorator', 'storage.type.annotation', 'punctuation.definition.decorator'],
      settings: { foreground: '#e89840' } },
    { scope: ['constant.character.escape'],
      settings: { foreground: '#f0c848' } },
    { scope: ['string.regexp'],
      settings: { foreground: '#e8a840' } },
    { scope: ['meta.preprocessor', 'keyword.control.directive', 'entity.name.function.macro'],
      settings: { foreground: '#f09848' } },

    // ── Keywords / storage ────────────────────────────────────────────────────
    { scope: ['keyword.control', 'keyword.control.flow'],
      settings: { foreground: '#56B6C2' } },
    { scope: ['keyword.control.import', 'keyword.control.export',
               'keyword.control.from', 'keyword.control.as'],
      settings: { foreground: '#6ac8d8' } },
    { scope: ['keyword'],
      settings: { foreground: '#62bec8' } },
    { scope: ['storage.type'],
      settings: { foreground: '#7ad4e0' } },
    { scope: ['storage.modifier'],
      settings: { foreground: '#4ee0b0' } },

    // ── Operators ─────────────────────────────────────────────────────────────
    { scope: ['keyword.operator', 'keyword.operator.arithmetic',
               'keyword.operator.assignment', 'keyword.operator.comparison',
               'keyword.operator.relational', 'keyword.operator.logical',
               'keyword.operator.bitwise', 'keyword.operator.type'],
      settings: { foreground: '#e9626d' } },

    // ── Strings ───────────────────────────────────────────────────────────────
    { scope: ['string', 'string.quoted', 'string.quoted.single',
               'string.quoted.double', 'string.other'],
      settings: { foreground: '#E5C07B' } },
    { scope: ['string.template', 'string.interpolated'],
      settings: { foreground: '#e88028' } },

    // ── Constants & literals ──────────────────────────────────────────────────
    { scope: ['constant.numeric'],
      settings: { foreground: '#c07ee0' } },
    { scope: ['constant.language'],
      settings: { foreground: '#d66af7' } },
    { scope: ['constant.other', 'variable.other.enummember', 'constant.other.caps'],
      settings: { foreground: '#b870d8' } },
    { scope: ['support.constant'],
      settings: { foreground: '#c880f0' } },

    // ── Variables ─────────────────────────────────────────────────────────────
    { scope: ['variable.parameter'],
      settings: { foreground: '#c8d8ff' } },
    { scope: ['variable.language'],
      settings: { foreground: '#a0b8f8' } },

    // ── Properties / attributes / tags ───────────────────────────────────────
    { scope: ['variable.other.property', 'variable.other.member',
               'meta.object-literal.key', 'support.variable.property'],
      settings: { foreground: '#6186ec' } },
    { scope: ['support.type.property-name'],
      settings: { foreground: '#7898f0' } },
    { scope: ['entity.other.attribute-name'],
      settings: { foreground: '#88a8f8' } },
    { scope: ['entity.name.tag', 'meta.tag.sgml', 'support.class.component'],
      settings: { foreground: '#5070e0' } },

    // ── Punctuation ───────────────────────────────────────────────────────────
    { scope: ['punctuation', 'punctuation.definition', 'punctuation.separator',
               'punctuation.accessor', 'punctuation.terminator',
               'punctuation.section', 'punctuation.bracket'],
      settings: { foreground: '#e2e8ff' } },
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
    // ── Comments ─────────────────────────────────────────────────────────────
    { scope: ['comment', 'comment.block', 'comment.line', 'punctuation.definition.comment'],
      settings: { foreground: '#091c00', fontStyle: 'italic' } },

    // ── Functions & methods ───────────────────────────────────────────────────
    { scope: ['entity.name.function', 'entity.name.method', 'entity.name.method.js'],
      settings: { foreground: '#23800b' } },
    { scope: ['support.function', 'meta.function-call entity.name.function',
               'meta.method-call entity.name.method'],
      settings: { foreground: '#388a18' } },

    // ── Types / classes / namespaces ──────────────────────────────────────────
    { scope: ['entity.name.type', 'entity.name.class', 'entity.name.type.primitive'],
      settings: { foreground: '#7e6909' } },
    { scope: ['entity.name.namespace', 'entity.name.module'],
      settings: { foreground: '#6a5600' } },
    { scope: ['support.class', 'support.type'],
      settings: { foreground: '#4a7a10' } },
    { scope: ['meta.decorator', 'storage.type.annotation', 'punctuation.definition.decorator'],
      settings: { foreground: '#9a5a00' } },
    { scope: ['constant.character.escape'],
      settings: { foreground: '#906000' } },
    { scope: ['string.regexp'],
      settings: { foreground: '#885200' } },
    { scope: ['meta.preprocessor', 'keyword.control.directive', 'entity.name.function.macro'],
      settings: { foreground: '#b04810' } },

    // ── Keywords / storage ────────────────────────────────────────────────────
    { scope: ['keyword.control', 'keyword.control.flow'],
      settings: { foreground: '#01818f' } },
    { scope: ['keyword.control.import', 'keyword.control.export',
               'keyword.control.from', 'keyword.control.as'],
      settings: { foreground: '#008880' } },
    { scope: ['keyword'],
      settings: { foreground: '#018888' } },
    { scope: ['storage.type'],
      settings: { foreground: '#016870' } },
    { scope: ['storage.modifier'],
      settings: { foreground: '#5a7e00' } },

    // ── Operators ─────────────────────────────────────────────────────────────
    { scope: ['keyword.operator', 'keyword.operator.arithmetic',
               'keyword.operator.assignment', 'keyword.operator.comparison',
               'keyword.operator.relational', 'keyword.operator.logical',
               'keyword.operator.bitwise', 'keyword.operator.type'],
      settings: { foreground: '#950007' } },

    // ── Strings ───────────────────────────────────────────────────────────────
    { scope: ['string', 'string.quoted', 'string.quoted.single',
               'string.quoted.double', 'string.other'],
      settings: { foreground: '#845b02' } },
    { scope: ['string.template', 'string.interpolated'],
      settings: { foreground: '#b83000' } },

    // ── Constants & literals ──────────────────────────────────────────────────
    { scope: ['constant.numeric'],
      settings: { foreground: '#6a2898' } },
    { scope: ['constant.language'],
      settings: { foreground: '#4e1d5f' } },
    { scope: ['constant.other', 'variable.other.enummember', 'constant.other.caps'],
      settings: { foreground: '#5a2278' } },
    { scope: ['support.constant'],
      settings: { foreground: '#601a70' } },

    // ── Variables ─────────────────────────────────────────────────────────────
    { scope: ['variable.parameter'],
      settings: { foreground: '#1a2880' } },
    { scope: ['variable.language'],
      settings: { foreground: '#283898' } },

    // ── Properties / attributes / tags ───────────────────────────────────────
    { scope: ['variable.other.property', 'variable.other.member',
               'meta.object-literal.key', 'support.variable.property'],
      settings: { foreground: '#00339f' } },
    { scope: ['support.type.property-name'],
      settings: { foreground: '#1444b8' } },
    { scope: ['entity.other.attribute-name'],
      settings: { foreground: '#2858c8' } },
    { scope: ['entity.name.tag', 'meta.tag.sgml', 'support.class.component'],
      settings: { foreground: '#0a2898' } },

    // ── Punctuation ───────────────────────────────────────────────────────────
    { scope: ['punctuation', 'punctuation.definition', 'punctuation.separator',
               'punctuation.accessor', 'punctuation.terminator',
               'punctuation.section', 'punctuation.bracket'],
      settings: { foreground: '#1a1919' } },
  ],
};

// ── Expressive Code options ───────────────────────────────────────────────────

export default {
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
      'sh,shell,bash,zsh,fish,console,powershell': {
        frame: 'terminal',
        showLineNumbers: false,
      },
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
    // borderColor controls --ec-brdCol (pre border + terminal header border).
    // editorTabBarBorderColor controls the header::before border (top/sides of editor).
    // Both must match so the border wraps the full block continuously.
    borderColor: ['#3a3a3a', '#b4bca0'],
    codeFontFamily: 'var(--font-mono)',
    codeFontSize: '0.865rem',
    uiLineHeight: '1.6',

    // Custom themes don't provide diffEditor colors, so EC derives transparent
    // backgrounds for text markers — making them invisible. Set explicitly.
    textMarkers: {
      markBackground:   ['rgba(255,200,50,0.13)',  'rgba(160,130,0,0.10)'],
      markBorderColor:  ['rgba(255,210,50,0.55)',  'rgba(140,110,0,0.45)'],
      insBackground:    ['rgba(50,200,80,0.14)',   'rgba(0,150,60,0.10)'],
      insBorderColor:   ['rgba(70,210,90,0.60)',   'rgba(0,150,60,0.50)'],
      delBackground:    ['rgba(255,70,70,0.14)',   'rgba(210,50,50,0.10)'],
      delBorderColor:   ['rgba(255,90,90,0.58)',   'rgba(200,50,50,0.50)'],
    },

    frames: {
      editorTabBarBackground:            ['#0d0d0d', '#ece9de'],
      editorActiveTabBackground:         ['#000000', '#fefdf6'],
      editorActiveTabBorderColor:        'transparent',
      editorActiveTabForeground:         ['#fffcfe', '#282828'],
      editorTabBarBorderColor:           ['#3a3a3a', '#b4bca0'],
      editorTabBarBorderBottomColor:     'transparent',
      terminalBackground:                ['#000000', '#fefdf6'],
      terminalTitlebarBackground:        ['#0d0d0d', '#ece9de'],
      terminalTitlebarForeground:        ['#8a8a8a', '#5e6978'],
      terminalTitlebarBorderBottomColor: ['#3a3a3a', '#b4bca0'],
    },
  },
};
