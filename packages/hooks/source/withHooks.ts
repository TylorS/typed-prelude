import { Effect, get, runEffect } from '@typed/effects'
import { Env, handle } from '@typed/env'
import { HookEnvironment } from './HookEnvironment'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(
  fn: (...args: A) => Effect<Env<HookEnvironment, any> | Env<E, any>, B, any>,
) {
  return function* withHooks(...args: A) {
    const hooksEnv = yield* get<HookEnvironment>()
    let value: B | void

    do {
      yield* hooksEnv.clearUpdated()
      yield* hooksEnv.resetId

      value = yield* Effect.fromEnv(handle(hooksEnv, runEffect(fn(...args))))
    } while (hooksEnv.updated)

    return value!
  }
}
