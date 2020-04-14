import { UuidEnv } from '@typed/uuid'
import { createHooksManagerEnv } from './createHooksManagerEnv'
import { createHookEnvironment } from './createHookEnvironment'
import { createVirtualTimer, VirtualTimer } from '@typed/timer'
import { HooksManagerEnv, HookEnv } from './types'

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
