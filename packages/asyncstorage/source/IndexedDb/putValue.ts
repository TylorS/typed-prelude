import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import { ItemEffect } from '../AsyncStorage'

export function putValue<A>(key: string, value: A, store: IDBObjectStore): ItemEffect<A> {
  return Effect.fromEnv(
    Future.create<unknown, Error, A>((reject, resolve) => {
      const request = store.put(value, key)
      const disposable = Disposable.lazy()

      request.onerror = (ev) =>
        disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
      request.onsuccess = () => disposable.addDisposable(resolve(value))

      return disposable
    }),
  )
}
