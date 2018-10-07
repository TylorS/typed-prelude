import { curry } from 'source/lambda'
import { Effect } from '../effect'
import { Maybe } from '../maybe'

export interface StorageEffects {
  clear: Effect<void>
  getItem: (key: string) => Effect<Maybe<string>>
  key: (key: number) => Effect<Maybe<string>>
  removeItem: (key: string) => Effect<void>
  setItem: {
    (key: string, value: string): Effect<string>
    (key: string): (value: string) => Effect<string>
  }
}

export function wrapStorage(storage: Storage): StorageEffects {
  const clear = Effect.fromIO(() => storage.clear())
  const getItem = (key: string) => Effect.fromIO(() => Maybe.of(storage.getItem(key)))
  const key = (key: number) => Effect.fromIO(() => Maybe.of(storage.key(key)))
  const removeItem = (key: string) => Effect.fromIO(() => storage.removeItem(key))
  const setItem = curry((key: string, value: string) =>
    Effect.fromIO(() => (storage.setItem(key, value), value)),
  )

  return {
    clear,
    getItem,
    key,
    removeItem,
    setItem,
  }
}
