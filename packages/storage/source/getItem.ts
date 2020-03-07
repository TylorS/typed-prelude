import { Effect } from '@typed/effects'
import { withEnv } from '@typed/env'
import { Maybe } from '@typed/maybe'
import { StorageEnv } from './types'

/**
 * Get an item in Storage
 * @param key :: string
 * @returns :: Env StorageEnv (Maybe string)
 */
export const getItem = (key: string): Effect<StorageEnv, Maybe<string>> =>
  Effect.fromEnv(
    withEnv<StorageEnv, Maybe<string>>(({ storage }) => Maybe.of(storage.getItem(key))),
  )
