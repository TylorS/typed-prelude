import { UpdateDataList } from '../domain'

export const updateDataList: UpdateDataList<{}> = function* updateAriaAttributes(
  vNode,
  { removed, updated },
) {
  const { node } = vNode

  for (const [key] of removed) {
    delete node.dataset[key]
  }

  for (const [key, value] of updated) {
    node.dataset[key] = value
  }

  return vNode
}
