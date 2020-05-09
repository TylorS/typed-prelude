import { isEmpty } from '@typed/objects'
import { UpdateDataList } from '../domain'
import { getNodeOrThrow } from './getNodeOrThrow'

export const updateDataList: UpdateDataList<{}> = function* updateDataList(
  vNode,
  { removed, updated },
) {
  if (isEmpty(removed) && isEmpty(updated)) {
    return vNode
  }

  const node = yield* getNodeOrThrow(vNode)

  for (const [key] of removed) {
    delete node.dataset[key]
  }

  for (const [key, value] of updated) {
    node.dataset[key] = value
  }

  return vNode
}
