import { curry } from '@typed/lambda'
import { Node } from 'typescript'
import { getChildNodes } from '../getChildNodes'

export const findFirstChildNode: {
  (predicate: (node: Node) => boolean, root: Node): Node | null
  (predicate: (node: Node) => boolean): (root: Node) => Node | null
} = curry(__findFirstNode)

function __findFirstNode(predicate: (node: Node) => boolean, root: Node): Node | null {
  const nodesToProcess: Node[] = getChildNodes(root)

  while (nodesToProcess.length > 0) {
    const node = nodesToProcess.shift() as Node

    if (predicate(node)) {
      return node
    }

    nodesToProcess.push(...getChildNodes(node))
  }

  return null
}
