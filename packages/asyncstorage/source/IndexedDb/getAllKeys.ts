import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import { ItemsEffect } from '../AsyncStorage'

export function getAllKeys(store: IDBObjectStore): ItemsEffect<string> {
  return Effect.fromEnv(
    Future.create<unknown, Error, readonly string[]>((reject, resolve) => {
      const request = store.getAllKeys()
      const disposable = Disposable.lazy()
      request.onerror = (ev) =>
        disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
      request.onsuccess = () =>
        disposable.addDisposable(resolve(request.result.map((x) => x.toString())))

      return disposable
    }),
  )
}
