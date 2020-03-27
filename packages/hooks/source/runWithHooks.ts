import { Effects, runWith } from '@typed/effects'
import { HookEffects } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'

// Run nested environments with their own hookEnvironment
export function* runWithHooks<E, A>(
  effect: HookEffects<E, A>,
  hookEnvironment: HookEnvironment,
): Effects<E, A> {
  return yield* runWith(effect, { hookEnvironment }) as Effects<E, A>
}
