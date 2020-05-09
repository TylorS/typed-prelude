import { DomEnv } from '@typed/dom'
import { combine } from '@typed/effects'
import { AddElements } from '../domain'
import { createElement } from './createElement'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'

export const addElements: AddElements<DomEnv & PatchFailure> = function* (
  parentNode,
  vNodes,
  referenceNode,
) {
  yield* combine(...vNodes.map(createElement))

  for (const vNode of vNodes) {
    parentNode.insertBefore(yield* getNodeOrThrow(vNode), referenceNode ?? null)
  }
}
