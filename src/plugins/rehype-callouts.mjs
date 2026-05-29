// Transforms Obsidian-style callouts: > [!type]± Title
// Supports: note, abstract, info, todo, tip, success, question, warning,
//           failure, danger, bug, example, quote  (and their aliases)
// Foldable: [!type]+ (open) or [!type]- (collapsed) → <details>/<summary>
// Nested callouts are handled bottom-up via recursive child-first traversal.

const ALIASES = {
  summary: 'abstract', tldr: 'abstract',
  hint: 'tip',         important: 'tip',
  check: 'success',    done: 'success',
  help: 'question',    faq: 'question',
  caution: 'warning',  attention: 'warning',
  fail: 'failure',     missing: 'failure',
  error: 'danger',
  cite: 'quote',
};

const ICONS = {
  note:     '🗒',  abstract: '📋', info:     'ℹ',  todo:     '☑',
  tip:      '💡', success:  '✅', question: '❓', warning:  '⚠',
  failure:  '❌', danger:   '🔥', bug:      '🐛', example:  '📌',
  quote:    '❝',
};

const CALLOUT_RE = /^\[!(\w+)\]([+-])?\s*/;

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function transformBlockquote(node) {
  // Find the first <p>
  const firstPIdx = node.children.findIndex(
    c => c.type === 'element' && c.tagName === 'p',
  );
  if (firstPIdx === -1) return null;
  const firstP = node.children[firstPIdx];

  // First text child must contain [!type]
  const firstText = firstP.children.find(c => c.type === 'text');
  if (!firstText) return null;
  const m = firstText.value.match(CALLOUT_RE);
  if (!m) return null;

  const [consumed, rawType, fold] = m;
  const type  = ALIASES[rawType.toLowerCase()] ?? rawType.toLowerCase();
  const icon  = ICONS[type] ?? '📝';
  const isFoldable = fold === '+' || fold === '-';
  const openByDefault = fold !== '-';

  // Build title children: strip the [!type]± prefix from the first text node
  const textIdx = firstP.children.indexOf(firstText);
  const titleChildren = firstP.children
    .map((c, i) => {
      if (i !== textIdx) return c;
      const rest = c.value.slice(consumed.length);
      return rest ? { ...c, value: rest } : null;
    })
    .filter(Boolean);

  // Fallback: use the type name as title when no text remains
  if (!titleChildren.some(c => (c.value ?? '').trim() || c.tagName)) {
    titleChildren.length = 0;
    titleChildren.push({ type: 'text', value: cap(rawType) });
  }

  const iconEl = {
    type: 'element', tagName: 'span',
    properties: { className: ['callout-icon'] },
    children: [{ type: 'text', value: icon }],
  };

  const bodyChildren = node.children.slice(firstPIdx + 1);
  const bodyEl = {
    type: 'element', tagName: 'div',
    properties: { className: ['callout-body'] },
    children: bodyChildren,
  };

  if (isFoldable) {
    return {
      type: 'element', tagName: 'details',
      properties: {
        className: ['callout', `callout-${type}`],
        ...(openByDefault && { open: '' }),
      },
      children: [
        {
          type: 'element', tagName: 'summary',
          properties: { className: ['callout-title'] },
          children: [iconEl, ...titleChildren],
        },
        bodyEl,
      ],
    };
  }

  return {
    type: 'element', tagName: 'div',
    properties: { className: ['callout', `callout-${type}`] },
    children: [
      {
        type: 'element', tagName: 'div',
        properties: { className: ['callout-title'] },
        children: [iconEl, ...titleChildren],
      },
      bodyEl,
    ],
  };
}

function transformNode(node) {
  if (!node.children) return;
  node.children = node.children.flatMap(child => {
    transformNode(child); // children first → handles nesting
    if (child.type === 'element' && child.tagName === 'blockquote') {
      const result = transformBlockquote(child);
      return result ? [result] : [child];
    }
    return [child];
  });
}

export function rehypeCallouts() {
  return (tree) => { transformNode(tree); };
}
