import { Effect } from '@typed/effects'
import { Env, withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Remove an item in Storage
 * @param key :: string
 * @returns :: Env StorageEnv void
 */
export const removeItem = (key: string): Effect<Env<StorageEnv, void>, void, void> =>
  Effect.fromEnv(
    withEnv<StorageEnv, void>(({ storage }) => storage.removeItem(key)),
  )
