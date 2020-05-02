import { UpdateAriaAttributes } from '../domain'

const getAriaKey = (key: string) => `aria-${key}`

export const updateAriaAttributes: UpdateAriaAttributes<{}> = function* updateAriaAttributes(
  vNode,
  { removed, updated },
) {
  const { node } = vNode

  for (const [key] of removed) {
    node.removeAttribute(getAriaKey(key))
  }

  for (const [key, value] of updated) {
    node.setAttribute(getAriaKey(key), value)
  }

  return vNode
}
