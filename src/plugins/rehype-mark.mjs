import { visit } from 'unist-util-visit';

const RE = /==([^=\n]+)==/g;

export function rehypeMark() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent) return;
      const tag = parent.tagName;
      if (tag === 'code' || tag === 'pre' || tag === 'script' || tag === 'style') return;

      RE.lastIndex = 0;
      if (!RE.test(node.value)) return;

      RE.lastIndex = 0;
      const parts = [];
      let last = 0;
      let m;
      while ((m = RE.exec(node.value)) !== null) {
        if (m.index > last) parts.push({ type: 'text', value: node.value.slice(last, m.index) });
        parts.push({
          type: 'element',
          tagName: 'mark',
          properties: {},
          children: [{ type: 'text', value: m[1] }],
        });
        last = m.index + m[0].length;
      }
      if (last < node.value.length) parts.push({ type: 'text', value: node.value.slice(last) });

      parent.children.splice(index, 1, ...parts);
      return index + parts.length;
    });
  };
}
