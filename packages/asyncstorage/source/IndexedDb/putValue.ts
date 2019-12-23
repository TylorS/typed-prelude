import { Disposable } from '@typed/disposable'
import { Future } from '@typed/future'
import { ItemEffect } from '../AsyncStorage'

export function putValue<A>(key: string, value: A, store: IDBObjectStore): ItemEffect<A> {
  return Future.create((reject, resolve) => {
    const request = store.put(value, key)

    let disposable: Disposable = Disposable.None
    request.onerror = ev => (disposable = reject(new Error((ev.target as any).errorCode)))
    request.onsuccess = () => (disposable = resolve(value))

    return Disposable.lazy(() => disposable)
  })
}
