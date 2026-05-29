import { visit } from 'unist-util-visit';

export function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'mermaid') return;
      const safe = node.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<figure class="mermaid-block"><pre class="mermaid">${safe}</pre></figure>`,
      });
    });
  };
}
