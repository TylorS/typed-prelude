import { runEffect } from '@typed/effects'
import { handle } from '@typed/env'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(fn: (...args: A) => HookEffects<E, B>) {
  return function* withHooks(...args: A): HookEffects<E, B> {
    const hookEnvironment = yield* getHookEnv()
    let value: B | void

    do {
      yield* hookEnvironment.clearUpdated()
      yield* hookEnvironment.resetId()

      value = (yield handle({ hookEnvironment }, runEffect(fn(...args)))) as B
    } while (hookEnvironment.updated)

    return value!
  }
}
