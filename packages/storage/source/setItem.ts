import { Effect } from '@typed/effects'
import { withEnv } from '@typed/env'
import { curry } from '@typed/lambda'
import { StorageEnv } from './types'

/**
 * Set an item in Storage
 * @param key :: string
 * @param value :: string
 * @returns :: Env StorageEnv string
 */
export const setItem: {
  (key: string, value: string): Effect<StorageEnv, string>
  (key: string): (value: string) => Effect<StorageEnv, string>
} = curry((key: string, value: string) =>
  Effect.fromEnv(
    withEnv<StorageEnv, string>(({ storage }) => (storage.setItem(key, value), value)),
  ),
)
