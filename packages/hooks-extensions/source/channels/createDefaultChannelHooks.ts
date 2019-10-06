import { HooksManager } from '@typed/hooks'
import { createProvideDomEnv, createUseDomEnv } from './DomEnvChannel'
import { createProvideHistoryEnv, createUseHistoryEnv } from './HistoryEnvChannel'
import { createProvideHooksManager, createUseHooksManager } from './HooksManagerChannel'
import { createProvideHttpEnv, createUseHttpEnv } from './HttpEnvChannel'
import { createProvideLogger, createUseLogger } from './LoggerChannel'
import { createProvideStorage } from './StorageChannel'
import { createProvideTimer, createUseTimer } from './TimerChannel'
import { createProvideUuidEnv, createUseUuid } from './UuidEnvChannel'

export function createDefaultChannelHooks(createHook: HooksManager['createHook']) {
  return {
    useDomEnv: createHook(createUseDomEnv),
    provideDomEnv: createHook(createProvideDomEnv),
    useHistoryEnv: createHook(createUseHistoryEnv),
    provideHistoryEnv: createHook(createProvideHistoryEnv),
    useHooksManager: createHook(createUseHooksManager),
    provideHooksManager: createHook(createProvideHooksManager),
    useHttpEnv: createHook(createUseHttpEnv),
    provideHttpEnv: createHook(createProvideHttpEnv),
    useLogger: createHook(createUseLogger),
    provideLogger: createHook(createProvideLogger),
    provideStorage: createHook(createProvideStorage),
    useTimer: createHook(createUseTimer),
    provideTimer: createHook(createProvideTimer),
    useUuid: createHook(createUseUuid),
    provideUuidEnv: createHook(createProvideUuidEnv),
  }
}
