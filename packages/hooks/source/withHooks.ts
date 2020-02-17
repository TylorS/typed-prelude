import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { runWithHooks } from './runWithHooks'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(fn: (...args: A) => HookEffects<E, B>) {
  return function* withHooks(...args: A): HookEffects<E, B> {
    const hookEnvironment = yield* getHookEnv<E>()
    let value: B | void

    do {
      yield* hookEnvironment.clearUpdated()
      yield* hookEnvironment.resetId()

      value = yield* runWithHooks(fn(...args), hookEnvironment)
    } while (hookEnvironment.updated)

    return value!
  }
}
