import { UpdateAttributes } from '../domain'

export const updateAttributes: UpdateAttributes<{}> = function* updateAriaAttributes(
  vNode,
  { removed, updated },
) {
  const { node } = vNode

  for (const [key] of removed) {
    node.removeAttribute(key)
  }

  for (const [key, value] of updated) {
    node.setAttribute(key, value ?? '')
  }

  return vNode
}
