import { Effects, get } from '@typed/effects'
import { HookEffects, HookEnv, runWithHooks, useMemo } from '@typed/hooks'
import { HookManagerEnv } from './HookManagerEnv'

export function* useIdManager<E, B>(
  id: keyof any,
  effect: HookEffects<E, B>,
): Effects<HookEnv & E & HookManagerEnv, B> {
  const { getEnvironmentByKey } = yield* get<HookEnv & E & HookManagerEnv>()
  const key = yield* useMemo((id) => ({ id }), [id])
  const hookEnvironment = yield* getEnvironmentByKey(key)

  return yield* runWithHooks(effect, hookEnvironment)
}
