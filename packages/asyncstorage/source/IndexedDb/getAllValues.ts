import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import { ItemsEffect } from '../AsyncStorage'

export function getAllValues<A>(store: IDBObjectStore): ItemsEffect<A> {
  return Effect.fromEnv(
    Future.create<unknown, Error, readonly A[]>((reject, resolve) => {
      const request = store.getAll()
      const disposable = Disposable.lazy()

      request.onerror = ev =>
        disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
      request.onsuccess = () => disposable.addDisposable(resolve(request.result))

      return disposable
    }),
  )
}
