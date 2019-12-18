import { Pure } from '@typed/env/source'
import { Future } from '@typed/future/source'
import { Maybe } from '@typed/maybe/source'
import { AsyncStorage } from './AsyncStorage'

// Lift synchronous storage into AsyncStorage
export function wrapStorage(storage: Storage): AsyncStorage<string> {
  return {
    getItems: delay((): readonly string[] => {
      const items: string[] = []

      for (let i = 0; i < storage.length; ++i) {
        const key = storage.key(i)

        if (key !== null) {
          items.push(storage.getItem(key)!)
        }
      }

      return items
    }),
    getItem: key => delay(() => Maybe.of(storage.getItem(key))),
    setItem: (key, value) => delay(() => (storage.setItem(key, value), value)),
    removeItem: key =>
      delay(() => {
        const item = Maybe.of(storage.getItem(key))

        storage.removeItem(key)

        return item
      }),
    clear: Pure.fromIO(() => (storage.clear(), true)),
  }
}

function delay<A>(fn: () => A): Future<never, Error, A> {
  return Future.create((_, resolve) => resolve(fn()))
}
