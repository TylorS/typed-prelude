import { withEnv } from '@typed/env'
import { Maybe } from '@typed/maybe'
import { StorageEnv } from './types'

export const getItem = (key: string) =>
  withEnv<StorageEnv, Maybe<string>>(({ storage }) => Maybe.of(storage.getItem(key)))
