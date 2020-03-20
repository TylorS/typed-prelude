import { combine } from '@typed/effects'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(
  fn: (...args: A) => HookEffects<E, B>,
  loopOnUpdated: boolean = true,
) {
  return function* withHooks(...args: A): HookEffects<E, B> {
    const hookEnvironment = yield* getHookEnv()

    yield* combine(hookEnvironment.clearUpdated(), hookEnvironment.resetId())
    let value: B = yield* fn(...args)

    if (loopOnUpdated) {
      while (hookEnvironment.updated) {
        yield* combine(hookEnvironment.clearUpdated(), hookEnvironment.resetId())
        value = yield* fn(...args)
      }
    }

    return value
  }
}
