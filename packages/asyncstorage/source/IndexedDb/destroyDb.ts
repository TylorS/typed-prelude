import { Disposable, withIsDisposed } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import { ItemEffect } from '../AsyncStorage'

export function destroyDb(name: string, indexedDbFactory: typeof indexedDB): ItemEffect<boolean> {
  return Effect.fromEnv(
    Future.create<unknown, Error, boolean>((reject, resolve) => {
      const disposable = Disposable.lazy()

      disposable.addDisposable(
        withIsDisposed(isDisposed => {
          const request = indexedDbFactory.deleteDatabase(name)
          request.onerror = () => {
            if (!isDisposed()) {
              disposable.addDisposable(
                reject(new Error(request.error?.message ?? `Failed to destroy db ${name}`)),
              )
            }
          }
          request.onsuccess = () => {
            if (isDisposed()) {
              disposable.addDisposable(resolve(true))
            }
          }
        }),
      )

      return disposable
    }),
  )
}
