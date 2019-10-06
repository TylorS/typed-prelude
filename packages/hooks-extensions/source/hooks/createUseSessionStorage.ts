import { withCreateHook } from '@typed/hooks'
import { createProvideStorage } from '../channels'
import { createUseDomEnv } from '../channels/DomEnvChannel'
import { createUseStorage } from './createUseStorage'

export const createUseSessionStorage = withCreateHook(
  createHook =>
    [
      createHook(createProvideStorage),
      createHook(createUseDomEnv),
      createHook(createUseStorage),
    ] as const,
  ([provideStorage, useDomEnv, useStorage], scope?: string) => {
    provideStorage(useDomEnv().sessionStorage)

    return useStorage(scope)
  },
)
