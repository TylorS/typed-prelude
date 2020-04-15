import { combine, PureEffect } from '@typed/effects'

// Keeps track of parent-to-child and child-to-parent relationships for usage with Channels.
export function createTreeManager<A extends object>(): TreeManager<A> {
  // WeakMap is used to allow GC to automatically clean things up for us
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
    removeFromParent(child)

    childToParent.set(child, parent)

    if (!parentToChildren.has(parent)) {
      parentToChildren.set(parent, new Set())
    }

    const children = parentToChildren.get(parent)!

    children.add(child)

    return
  }

  function* removeNode(node: A): PureEffect<void> {
    removeFromParent(node)

    const children = getChildren(node)

    if (children) {
      yield* combine(...Array.from(children).map(removeNode))
    }

    parentToChildren.delete(node)
  }

  function* getAllDescendants(
    providers: WeakSet<A>,
    consumers: WeakMap<A, any>,
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

  function* getAllAncestors(node: A) {
    let parent = childToParent.get(node)

    while (parent) {
      yield parent

      parent = childToParent.get(parent)
    }
  }

  return {
    setParent,
    removeNode,
    getParent,
    getChildren,
    getAllDescendants,
    getAllAncestors,
  } as const
}

type TreeManager<A extends object> = {
  readonly setParent: (child: A, parent: A) => PureEffect<void>
  readonly removeNode: (node: A) => PureEffect<void>
  readonly getParent: (node: A) => A | undefined
  readonly getChildren: (node: A) => Set<A> | undefined
  readonly getAllDescendants: (
    providers: WeakSet<A>,
    consumers: WeakMap<A, any>,
    node: A,
  ) => Generator<A, void, any>
  readonly getAllAncestors: (node: A) => Generator<A, void, any>
}
