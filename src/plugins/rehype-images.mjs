// Parses Obsidian-style image modifiers from alt text: ![alt|modifier](url)
// Numeric modifier  → sets width in px:      ![Photo|200](url)
// Named modifiers   → adds utility class:
//   half    → max-width 50%
//   full    → grid-column: full  (wraps parent <p> in full column)
//   wide    → grid-column: wide  (wraps parent <p> in wide column)
//   center  → centered block image

import { visit } from 'unist-util-visit';

export function rehypeImages() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img') return;

      const alt = node.properties?.alt ?? '';
      const pipeIdx = alt.lastIndexOf('|');
      if (pipeIdx === -1) return;

      const cleanAlt  = alt.slice(0, pipeIdx).trim();
      const modifier  = alt.slice(pipeIdx + 1).trim();

      node.properties.alt = cleanAlt;

      const num = Number(modifier);
      if (modifier !== '' && !isNaN(num)) {
        node.properties.style = `width:${num}px;height:auto;`;
        return;
      }

      node.properties.className = [
        ...(node.properties.className ?? []),
        `img-${modifier}`,
      ];

      // For grid-breaking modifiers, push the class up to the wrapping <p>
      if (parent?.tagName === 'p' && (modifier === 'wide' || modifier === 'full')) {
        parent.properties ??= {};
        parent.properties.className = [
          ...(parent.properties.className ?? []),
          modifier,
        ];
      }
    });
  };
}
