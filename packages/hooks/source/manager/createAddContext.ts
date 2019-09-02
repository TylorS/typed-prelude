import { HooksContext } from '../types'
import { ManagerState } from './createManagerState'

export function createAddContext({ parentContexts, childContexts }: ManagerState) {
  return (parent: HooksContext | null, child: HooksContext) => {
    const currentParent = parentContexts.get(child)

    if (parent !== currentParent) {
      if (currentParent) {
        childContexts.get(currentParent)!.delete(child)
      }

      parentContexts.set(child, parent)
    }

    if (parent) {
      const children = childContexts.get(parent) || new Set<HooksContext>()

      children.add(child)
      childContexts.set(parent, children)
    }
  }
}
