// Parses Obsidian-style image modifiers from alt text: ![alt|modifier](url)
// Modifiers are space-separated after the final `|` — multiple can be combined:
//   Numeric  → sets width in px:       ![Photo|200](url)
//   half     → max-width 50%
//   center   → centered block image
//   wide     → grid-column: wide       (wraps parent <p>)
//   bleed    → grid-column: full with edge padding (wraps parent <p>)
//   full     → grid-column: full       (wraps parent <p>)
//   Combined → ![Photo|300 center](url)  sets 300px AND centers

import { visit } from 'unist-util-visit';

export function rehypeImages() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img') return;

      const alt = node.properties?.alt ?? '';
      const pipeIdx = alt.lastIndexOf('|');
      if (pipeIdx === -1) return;

      const cleanAlt = alt.slice(0, pipeIdx).trim();
      const parts    = alt.slice(pipeIdx + 1).trim().split(/\s+/).filter(Boolean);

      node.properties.alt = cleanAlt;
      if (parts.length === 0) return;

      const classes   = [];
      const gridMods  = [];

      for (const part of parts) {
        const n = Number(part);
        if (!isNaN(n)) {
          node.properties.style = `width:${n}px;height:auto;`;
        } else {
          classes.push(`img-${part}`);
          if (part === 'wide' || part === 'full' || part === 'bleed') {
            gridMods.push(part);
          }
        }
      }

      if (classes.length) {
        node.properties.className = [...(node.properties.className ?? []), ...classes];
      }

      // For grid-breaking modifiers, push the class up to the wrapping <p>
      if (parent?.tagName === 'p' && gridMods.length > 0) {
        parent.properties ??= {};
        parent.properties.className = [
          ...(parent.properties.className ?? []),
          ...gridMods,
        ];
      }
    });
  };
}
