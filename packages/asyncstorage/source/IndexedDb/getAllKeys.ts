import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import { ItemsEffect } from '../AsyncStorage'

export function getAllKeys(store: IDBObjectStore): ItemsEffect<string> {
  return Future.create<unknown, Error, readonly string[]>((reject, resolve) => {
    const request = store.getAllKeys()
    request.onerror = ev => reject(new Error((ev.target as any).errorCode))
    request.onsuccess = () => resolve(request.result.map(x => x.toString()))

    return Disposable.None
  })
}
