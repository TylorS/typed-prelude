import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import { ItemsEffect } from '../AsyncStorage'

export function getAllValues<A>(store: IDBObjectStore): ItemsEffect<A> {
  return Future.create<unknown, Error, readonly A[]>((reject, resolve) => {
    const request = store.getAll()

    request.onerror = ev => reject(new Error((ev.target as any).errorCode))
    request.onsuccess = () => resolve(request.result)

    return Disposable.None
  })
}
