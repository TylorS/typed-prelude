import { Node } from 'typescript'

export function getChildNodes(node: Node): Node[] {
  return node.getChildren(node.getSourceFile()).slice()
}
