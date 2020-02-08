import { Effect } from '@typed/effects'
import { Env, withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Clear storage
 */
export const clear = (): Effect<Env<StorageEnv, void>, void, void> =>
  Effect.fromEnv(
    withEnv<StorageEnv, void>(({ storage }) => storage.clear()),
  )
