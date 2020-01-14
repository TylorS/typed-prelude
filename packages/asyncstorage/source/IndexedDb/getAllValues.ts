import { Disposable } from '@typed/disposable'
import { Future } from '@typed/future'
import { ItemsEffect } from '../AsyncStorage'

export function getAllValues<A>(store: IDBObjectStore): ItemsEffect<A> {
  return Future.create<never, Error, readonly A[]>((reject, resolve) => {
    const request = store.getAll()
    const disposable = Disposable.lazy()

    request.onerror = ev =>
      disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
    request.onsuccess = () => disposable.addDisposable(resolve(request.result))

    return disposable
  })
}
