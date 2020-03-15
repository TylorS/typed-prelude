import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import { ItemEffect } from '../AsyncStorage'

export function putValue<A>(key: string, value: A, store: IDBObjectStore): ItemEffect<A> {
  return Future.create<unknown, Error, A>((reject, resolve) => {
    const request = store.put(value, key)

    request.onerror = ev => reject(new Error((ev.target as any).errorCode))
    request.onsuccess = () => resolve(value)

    return Disposable.None
  })
}
