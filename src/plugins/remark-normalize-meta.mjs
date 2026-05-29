// Converts title:"..." (Obsidian / VS Code convention) to title="..." (EC spec)
// so that code fence titles render correctly with Expressive Code.
import { visit } from 'unist-util-visit';

export function remarkNormalizeMeta() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (!node.meta) return;
      node.meta = node.meta
        .replace(/(\w+):"([^"]*)"/g, '$1="$2"')
        .replace(/(\w+):'([^']*)'/g, "$1='$2'");
    });
  };
}
