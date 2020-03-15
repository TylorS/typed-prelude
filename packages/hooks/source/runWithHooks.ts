import { Effect, runWith } from '@typed/effects'
import { HookEffect } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'

// Run nested environments with their own hookEnvironment
export function* runWithHooks<E, A>(
  effect: HookEffect<E, A>,
  hookEnvironment: HookEnvironment,
): Effect<E, A> {
  return yield* runWith(effect, { hookEnvironment })
}
