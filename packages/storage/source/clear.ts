import { Effect, op, resumeNow } from '@typed/effects'
import { StorageEnv } from './types'

/**
 * Clear storage
 */
export const clear = (): Effect<StorageEnv, void> => op(({ storage }) => resumeNow(storage.clear()))
