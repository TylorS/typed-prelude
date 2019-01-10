import { Node } from 'typescript'

export function getPosition(node: Node): [number, number] {
  const start = node.getStart()
  const width = node.getWidth()

  return [start, start + width]
}

export function getFullPosition(node: Node): [number, number] {
  const start = node.getFullStart()
  const width = node.getFullWidth()

  return [start, start + width]
}
