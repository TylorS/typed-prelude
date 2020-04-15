import { createVirtualTimer, VirtualTimer } from '@typed/timer'
import { UuidEnv } from '@typed/uuid'
import { createHookEnvironment } from './createHookEnvironment'
import { createHooksManagerEnv } from './createHooksManagerEnv'
import { HookEnv, HooksManagerEnv } from './types'

export function createTestHookEnvironment(
  uuidEnv: UuidEnv,
): { readonly timer: VirtualTimer } & HooksManagerEnv & HookEnv {
  const timer = createVirtualTimer()
  const hooksManagerEnv = createHooksManagerEnv(uuidEnv)
  const hookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)

  return {
    timer,
    hookEnvironment,
    ...hooksManagerEnv,
  }
}
