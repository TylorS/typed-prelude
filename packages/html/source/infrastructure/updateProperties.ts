import { isEmpty } from '@typed/objects'
import { UpdateProperties } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'
import { PatchFailure } from './PatchFailure'

const ID_KEY = 'id'
const CLASS_NAME_KEY = 'className'

export const updateProperties: UpdateProperties<PatchFailure> = function* updateProperties(
  vNode,
  { removed, updated },
) {
  if (isEmpty(removed) && isEmpty(updated)) {
    return vNode
  }

  const node = yield* getNodeOrThrow(vNode)

  for (const [key] of removed) {
    delete node[key as keyof typeof node]

    if (key === ID_KEY) {
      node.removeAttribute(ID_KEY)
    }

    if (key === CLASS_NAME_KEY) {
      node.removeAttribute('class')
    }
  }

  for (const [key, value] of updated) {
    node[key as keyof typeof node] = value
  }

  return vNode
}
