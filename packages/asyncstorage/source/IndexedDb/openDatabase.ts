import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import { ItemEffect } from '../AsyncStorage'

export function openDatabase(name: string, indexedDbFactory: IDBFactory): ItemEffect<IDBDatabase> {
  return Future.create<unknown, Error, IDBDatabase>((reject, resolve) => {
    const request = indexedDbFactory.open(name)

    request.onerror = ev => reject(new Error((ev.target as any).errorCode))
    request.onsuccess = () => resolve(request.result)
    request.onupgradeneeded = () => request.result.createObjectStore(name)

    return Disposable.None
  })
}
