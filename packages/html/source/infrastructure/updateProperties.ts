import { UpdateProperties } from '../domain'

// TODO :: How can we improve these type casts?

export const updateProperties: UpdateProperties<{}> = function* updateAriaAttributes(
  vNode,
  { removed, updated },
) {
  const { node } = vNode

  for (const [key] of removed) {
    delete node[key as keyof typeof node]
  }

  for (const [key, value] of updated) {
    ;(node as any)[key] = value
  }

  return vNode
}
