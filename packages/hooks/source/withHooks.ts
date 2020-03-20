import { combine } from '@typed/effects'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(fn: (...args: A) => HookEffects<E, B>) {
  return function* withHooks(...args: A): HookEffects<E, B> {
    const hookEnvironment = yield* getHookEnv()
    const value: B = yield* fn(...args)

    yield* combine(hookEnvironment.clearUpdated(), hookEnvironment.resetId())

    return value
  }
}
