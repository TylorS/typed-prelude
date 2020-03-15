import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import { noOp } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { AsyncStorage } from './AsyncStorage'

// Lift synchronous storage into AsyncStorage
export function wrapStorage(storage: Storage): AsyncStorage<string> {
  return {
    getKeys: () =>
      Effect.fromEnv(
        tryCatch(() => {
          const items: string[] = []

          for (let i = 0; i < storage.length; ++i) {
            const key = storage.key(i)

            if (key !== null) {
              items.push(key)
            }
          }

          return items
        }),
      ),
    getItems: () =>
      Effect.fromEnv(
        tryCatch((): readonly string[] => {
          const items: string[] = []

          for (let i = 0; i < storage.length; ++i) {
            const key = storage.key(i)

            if (key !== null) {
              items.push(storage.getItem(key)!)
            }
          }

          return items
        }),
      ),
    getItem: key => Effect.fromEnv(tryCatch(() => Maybe.of(storage.getItem(key)))),
    setItem: (key, value) => Effect.fromEnv(tryCatch(() => (storage.setItem(key, value), value))),
    removeItem: key =>
      Effect.fromEnv(
        tryCatch(() => {
          const item = Maybe.of(storage.getItem(key))

          storage.removeItem(key)

          return item
        }),
      ),
    clear: () => Effect.fromEnv(tryCatch(() => (storage.clear(), true))),
    dispose: noOp,
  }
}

function tryCatch<A>(fn: () => A): Future<unknown, Error, A> {
  return Future.create((reject, resolve) => {
    try {
      return resolve(fn())
    } catch (error) {
      return reject(error)
    }
  })
}
