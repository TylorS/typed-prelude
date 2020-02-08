import { get } from '@typed/effects'
import { HookEffects } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'
import { runWithHooks } from './runWithHooks'

// Helps to manage resetting the HooksEnvironment between function invocations
export function withHooks<A extends readonly any[], E, B>(fn: (...args: A) => HookEffects<E, B>) {
  return function* withHooks(...args: A): HookEffects<E, B> {
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
