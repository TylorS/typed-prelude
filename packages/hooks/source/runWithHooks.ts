import { Effects, runWith } from '@typed/effects'
import { HookEffects, HookEnvironment } from './types'

// Run nested environments with their own hookEnvironment
export function* runWithHooks<A, B>(
  effect: HookEffects<A, B>,
  hookEnvironment: HookEnvironment,
): Effects<A, B> {
  // Cleanup to ensure always starting from id=0
  yield* hookEnvironment.resetId()

  if (hookEnvironment.updated) {
    yield* hookEnvironment.clearUpdated()
  }

  const value = yield* runWith(effect, { hookEnvironment }) as Effects<A, B>

  return value
}
