import { co, Effect, PureEffect } from '@typed/effects'

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
    yield* Effect.fromIO(() => removeFromParent(child))

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
    yield* Effect.fromIO(() => removeFromParent(node))

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
    setParent: co(setParent),
    setChild: co(setChild),
    removeNode: co(removeNode),
    getParent,
    getChildren,
    getAllDescendants,
  } as const
}

type TreeManager<A extends object> = {
  readonly setParent: (child: A, parent: A) => PureEffect<void>
  readonly setChild: (parent: A, child: A) => PureEffect<void>
  readonly removeNode: (node: A) => PureEffect<void>
  readonly getParent: (node: A) => A | undefined
  readonly getChildren: (node: A) => Set<A> | undefined
  readonly getAllDescendants: (
    providers: WeakSet<A>,
    consumers: WeakSet<A>,
    node: A,
  ) => Generator<A, void, any>
}
