import { isEmpty } from '@typed/objects'
import { UpdateAriaAttributes } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'

const getAriaKey = (key: string) => `aria-${key}`

export const updateAriaAttributes: UpdateAriaAttributes<PatchFailure> = function* updateAriaAttributes(
  vNode,
  { removed, updated },
) {
  if (isEmpty(removed) && isEmpty(updated)) {
    return vNode
  }

  const node = yield* getNodeOrThrow(vNode)

  for (const [key] of removed) {
    node.removeAttribute(getAriaKey(key))
  }

  for (const [key, value] of updated) {
    node.setAttribute(getAriaKey(key), value)
  }

  return vNode
}
