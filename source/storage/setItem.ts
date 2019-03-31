import { Env, withEnv } from '@typed/env'
import { curry } from '@typed/lambda'
import { StorageEnv } from './types'

export const setItem: {
  (key: string, value: string): Env<StorageEnv, string>
  (key: string): (value: string) => Env<StorageEnv, string>
} = curry((key: string, value: string) =>
  withEnv<StorageEnv, string>(({ storage }) => (storage.setItem(key, value), value)),
)
