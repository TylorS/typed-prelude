import { Effect, Effects } from '@typed/effects'
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
  (key: string, value: string): Effects<StorageEnv, string>
  (key: string): (value: string) => Effects<StorageEnv, string>
} = curry((key: string, value: string) =>
  Effect.fromEnv(
    withEnv<StorageEnv, string>(({ storage }) => (storage.setItem(key, value), value)),
  ),
)
