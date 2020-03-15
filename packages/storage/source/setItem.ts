import { Effect, op, resumeNow } from '@typed/effects'
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
  op<StorageEnv, string>(({ storage }) => (storage.setItem(key, value), resumeNow(value))),
)
