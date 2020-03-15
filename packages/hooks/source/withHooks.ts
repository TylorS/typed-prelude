import { co, Computation, Env, use } from '@typed/effects'
import { getHookEnv } from './getHookEnv'
import { HookEnv } from './HookEnvironment'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(
  fn: (...args: A) => Computation<Env<E, any> | Env<HookEnv, any>, B, any>,
): (...args: A) => Computation<Env<E, any> | Env<HookEnv, any>, B, any> {
  return co(function* withHooks(...args: A) {
    const hookEnvironment = yield* getHookEnv()
    let value: B | void

    do {
      yield* hookEnvironment.clearUpdated()
      yield* hookEnvironment.resetId()

      value = yield* use(fn(...args), { hookEnvironment })
    } while (hookEnvironment.updated)

    return value!
  })
}
