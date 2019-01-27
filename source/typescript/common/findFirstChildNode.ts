import { curry } from '@typed/lambda'
import { Node } from 'typescript'

export const findFirstChildNode: {
  (predicate: (node: Node) => boolean, root: Node): Node | null
  (predicate: (node: Node) => boolean): (root: Node) => Node | null
} = curry(__findFirstNode)

function __findFirstNode(predicate: (node: Node) => boolean, root: Node): Node | null {
  const nodesToProcess: Node[] = Array.from(root.getChildren())

  while (nodesToProcess.length > 0) {
    const node = nodesToProcess.shift() as Node

    if (predicate(node)) {
      return node
    }

    for (const child of node.getChildren()) {
      nodesToProcess.push(child)
    }
  }

  return null
}
