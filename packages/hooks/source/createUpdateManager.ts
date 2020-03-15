import { Effect, PureEffect } from '@typed/effects'

// Basic functionality to keep track of what objects have been updated
export function createUpdateManager<A extends object>(): {
  readonly setUpdated: (node: A, hasBeenUpdated: boolean) => PureEffect<void>
  readonly hasBeenUpdated: (node: A) => boolean
} {
  // WeakSet is used to allow GC to automatically clean things up for us
  const updated = new WeakSet<A>()

  function setUpdated(node: A, hasBeenUpdated: boolean) {
    return Effect.fromIO(() => {
      hasBeenUpdated ? updated.add(node) : updated.delete(node)
    })
  }

  function hasBeenUpdated(node: A) {
    return updated.has(node)
  }

  return {
    setUpdated,
    hasBeenUpdated,
  } as const
}
