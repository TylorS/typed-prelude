import { Effects, runEffect } from '@typed/effects'
import { handle } from '@typed/env'
import { HookEffects } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'

// Run nested environments with their own hookEnvironment
export function* runWithHooks<E, A>(
  effect: HookEffects<E, A>,
  hookEnvironment: HookEnvironment<E>,
): Effects<E, A> {
  return yield handle({ hookEnvironment }, runEffect(effect))
}
