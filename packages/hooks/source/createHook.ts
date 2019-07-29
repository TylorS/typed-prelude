import { findOrCreateHookContext, getCurrentContext } from './manager'
import { CreateHook } from './types'

export function createHook<A extends readonly any[], B>(create: CreateHook<A, B>) {
  return function hook(...args: A): B {
    const context = getCurrentContext()

    if (!context) {
      throw new Error(`Cannot use hooks outside of a hooks context.`)
    }

    const { hooks, nextId } = context

    const id = nextId()
    let hook = hooks.get(id)

    if (!hook) {
      hook = create(findOrCreateHookContext(context), ...args)
      hooks.set(id, hook)
    }

    return hook.update(...args)
  }
}
