import { Effect, get } from '@typed/effects'
import { HookEnvironment } from './HookEnvironment'
import { runWithHooks } from './runWithHooks'
import { WithHookEnvs } from './WithHookEnvs'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B, C>(
  fn: (...args: A) => Effect<WithHookEnvs<E>, B, C>,
) {
  return function* withHooks(...args: A): Generator<WithHookEnvs<E>, B, HookEnvironment & B & C> {
    const hookEnv = yield* get<HookEnvironment>()
    let value: B | void

    do {
      yield* hookEnv.clearUpdated()
      yield* hookEnv.resetId

      value = yield* runWithHooks(fn(...args), hookEnv)
    } while (hookEnv.updated)

    return value!
  }
}
