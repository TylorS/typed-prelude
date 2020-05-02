import { DomEnv } from '@typed/dom'
import { combine } from '@typed/effects'
import { AddElements } from '../domain'
import { createElement } from './createElement'

export const addElements: AddElements<DomEnv> = function* (parentNode, vNodes, referenceNode) {
  const nodes = yield* combine(...vNodes.map(createElement))

  for (const node of nodes) {
    parentNode.insertBefore(node, referenceNode ?? null)
  }
}
