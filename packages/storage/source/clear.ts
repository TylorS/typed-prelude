import { Effect, Effects } from '@typed/effects'
import { withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Clear storage
 */
export const clear = (): Effects<StorageEnv, void> =>
  Effect.fromEnv(
    withEnv<StorageEnv, void>(({ storage }) => storage.clear()),
  )
