import { runWith, RunWith, Effects } from '@typed/effects'
import { HookEnvironment, HookEnv } from './types'

// Run nested environments with their own hookEnvironment
export function runWithHooks<E extends Effects>(
  effect: E,
  hookEnvironment: HookEnvironment,
): RunWith<E, HookEnv> {
  return runWith<E, HookEnv>(effect, { hookEnvironment })
}
