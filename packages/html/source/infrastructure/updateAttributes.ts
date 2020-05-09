import { isEmpty } from '@typed/objects'
import { UpdateAttributes } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'

const NAMESPACE_URIS: any = {
  xlink: 'http://www.w3.org/1999/xlink',
}

export const updateAttributes: UpdateAttributes<PatchFailure> = function* updateAttributes(
  vNode,
  { removed, updated },
) {
  if (isEmpty(removed) && isEmpty(updated)) {
    return vNode
  }

  const node = yield* getNodeOrThrow(vNode)

  for (const [key] of removed) {
    node.removeAttribute(key)
  }

  for (const [key, value] of updated) {
    const attributeParts = key.split(':')

    if (attributeParts.length > 1 && NAMESPACE_URIS.hasOwnProperty(attributeParts[0])) {
      node.setAttributeNS(NAMESPACE_URIS[attributeParts[0]], key, value)
    } else {
      node.setAttribute(key, value)
    }
  }

  return vNode
}
