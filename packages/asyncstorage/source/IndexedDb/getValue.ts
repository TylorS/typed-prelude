import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import { Maybe } from '@typed/maybe'
import { ItemEffect } from '../AsyncStorage'

export function getValue<A>(key: string, store: IDBObjectStore): ItemEffect<Maybe<A>> {
  return Future.create<unknown, Error, Maybe<A>>((reject, resolve) => {
    const request = store.get(key)

    request.onerror = ev => reject(new Error((ev.target as any).errorCode))
    request.onsuccess = () => resolve(Maybe.of(request.result))

    return Disposable.None
  })
}
