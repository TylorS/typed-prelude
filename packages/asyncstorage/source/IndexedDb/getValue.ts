import { Disposable } from '@typed/disposable'
import { Future } from '@typed/future'
import { Maybe } from '@typed/maybe'
import { ItemEffect } from '../AsyncStorage'

export function getValue<A>(key: string, store: IDBObjectStore): ItemEffect<Maybe<A>> {
  return Future.create((reject, resolve) => {
    const request = store.get(key)
    const disposable = Disposable.lazy()

    request.onerror = ev =>
      disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
    request.onsuccess = () => disposable.addDisposable(resolve(Maybe.of(request.result)))

    return disposable
  })
}
