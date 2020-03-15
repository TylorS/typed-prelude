import { Effect, op, resumeNow } from '@typed/effects'
import { Maybe } from '@typed/maybe'
import { StorageEnv } from './types'

/**
 * Get an item in Storage
 * @param key :: string
 * @returns :: Env StorageEnv (Maybe string)
 */
export const getItem = (key: string): Effect<StorageEnv, Maybe<string>> =>
  op<StorageEnv, Maybe<string>>(({ storage }) => resumeNow(Maybe.of(storage.getItem(key))))
