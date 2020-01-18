import { Pure } from '@typed/env'

export function createTreeManager<A extends object>() {
  const parentToChildren = new WeakMap<A, Set<A>>()
  const childToParent = new WeakMap<A, A>()

  function getChildren(node: A) {
    return parentToChildren.get(node)
  }

  function getParent(node: A) {
    return childToParent.get(node)
  }

  function removeNodeFromParent(parent: A, node: A) {
    const children = parentToChildren.get(parent)

    if (children) {
      children.delete(node)
    }
  }

  function removeFromParent(node: A) {
    const parent = childToParent.get(node)

    if (parent) {
      removeNodeFromParent(parent, node)
    }

    childToParent.delete(node)
  }

  function* setParent(child: A, parent: A) {
    yield Pure.fromIO(() => removeFromParent(child))

    childToParent.set(child, parent)

    if (!parentToChildren.has(parent)) {
      parentToChildren.set(parent, new Set())
    }

    const children = parentToChildren.get(parent)!

    children.add(child)

    return
  }

  function* setChild(parent: A, child: A) {
    return yield* setParent(child, parent)
  }

  function* removeNode(node: A) {
    yield Pure.fromIO(() => removeFromParent(node))

    const children = getChildren(node)

    if (children) {
      children.forEach(removeNode)
    }

    parentToChildren.delete(node)
  }

  function* getAllDescendants(
    providers: WeakSet<A>,
    consumers: WeakSet<A>,
    node: A,
  ): Generator<A, void, any> {
    const children = getChildren(node)

    if (!children) {
      return
    }

    for (const child of children) {
      // Don't continue past provider boundaries
      if (!providers.has(child)) {
        // Update if is a consumer
        if (consumers.has(child)) {
          yield child
        }

        // Continue down the tree
        yield* getAllDescendants(providers, consumers, child)
      }
    }
  }

  return {
    setParent,
    setChild,
    removeNode,
    getParent,
    getChildren,
    getAllDescendants,
  } as const
}
