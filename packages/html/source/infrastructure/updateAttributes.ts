import { UpdateAttributes } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'

export const updateAttributes: UpdateAttributes<PatchFailure> = function* updateAttributes(
  vNode,
  { removed, updated },
) {
  const node = yield* getNodeOrThrow(vNode)

  for (const [key] of removed) {
    node.removeAttribute(key)
  }

  for (const [key, value] of updated) {
    node.setAttribute(key, value ?? '')
  }

  return vNode
}
