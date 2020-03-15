import { Effect, op, resumeNow } from '@typed/effects'
import { StorageEnv } from './types'

/**
 * Remove an item in Storage
 * @param key :: string
 * @returns :: Env StorageEnv void
 */
export const removeItem = (key: string): Effect<StorageEnv, void> =>
  op<StorageEnv, void>(({ storage }) => resumeNow(storage.removeItem(key)))
