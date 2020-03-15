import { tryCatch } from '@typed/effects'
import { noOp } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { AsyncStorage } from './AsyncStorage'

// Lift synchronous storage into AsyncStorage
export function wrapStorage(storage: Storage): AsyncStorage<string> {
  return {
    getKeys: tryCatch(() => {
      const items: string[] = []

      for (let i = 0; i < storage.length; ++i) {
        const key = storage.key(i)

        if (key !== null) {
          items.push(key)
        }
      }
      return items
    }),

    getItems: tryCatch(() => {
      const items: string[] = []

      for (let i = 0; i < storage.length; ++i) {
        const key = storage.key(i)

        if (key !== null) {
          items.push(storage.getItem(key)!)
        }
      }

      return items
    }),

    getItem: tryCatch((key: string) => Maybe.of(storage.getItem(key))),

    setItem: tryCatch((key: string, value: string) => {
      storage.setItem(key, value)

      return value
    }),

    removeItem: tryCatch((key: string) => {
      const item = Maybe.of(storage.getItem(key))

      storage.removeItem(key)

      return item
    }),

    clear: tryCatch(() => {
      storage.clear()

      return true
    }),

    dispose: noOp,
  }
}
