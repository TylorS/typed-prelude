import { PureEffect } from '@typed/effects'

// Basic functionality to keep track of what objects have been updated
export function createUpdateManager<A extends object>(
  getAllDescendants: (a: A) => Generator<A, any, any>,
): {
  readonly setUpdated: (node: A, hasBeenUpdated: boolean) => PureEffect<void>
  readonly hasBeenUpdated: (node: A) => boolean
} {
  // WeakSet is used to allow GC to automatically clean things up for us
  const updated = new WeakMap<A>()

  function* setUpdated(node: A, hasBeenUpdated: boolean): PureEffect<void> {
    updated.set(node, hasBeenUpdated)

    // If marking a parent as no longer needing to be update, mark all children as no longer needing updating.
    if (!hasBeenUpdated) {
      for (const child of getAllDescendants(node)) {
        updated.set(child, hasBeenUpdated)
      }
    }
  }

  function hasBeenUpdated(node: A): boolean {
    return updated.get(node) === true
  }

  return {
    setUpdated,
    hasBeenUpdated,
  } as const
}
