import { Effect, Effects } from '@typed/effects'
import { withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Remove an item in Storage
 * @param key :: string
 * @returns :: Env StorageEnv void
 */
export const removeItem = (key: string): Effects<StorageEnv, void> =>
  Effect.fromEnv(
    withEnv<StorageEnv, void>(({ storage }) => storage.removeItem(key)),
  )
