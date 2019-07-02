import { Env, withEnv } from '@typed/env'
import { StorageEnv } from './types'

/**
 * Remove an item in Storage
 * @param key :: string
 * @returns :: Env StorageEnv void
 */
export const removeItem = (key: string): Env<StorageEnv, void> =>
  withEnv<StorageEnv, void>(({ storage }) => storage.removeItem(key))
