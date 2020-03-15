import { Disposable } from '@typed/disposable'
import { co, Future } from '@typed/effects'
import { fromRight, isLeft } from '@typed/either'
import { Maybe, Nothing } from '@typed/maybe'
import { ItemEffect } from '../AsyncStorage'
import { getValue } from './getValue'

export const removeValue = co(function*<A>(key: string, store: IDBObjectStore) {
  const value = yield* getValue<A>(key, store)

  return yield* Future.create<unknown, Error, Maybe<A>>((reject, resolve) => {
    const request = store.delete(key)

    request.onerror = ev => reject(new Error((ev.target as any).errorCode))
    request.onsuccess = () => resolve(isLeft(value) ? Nothing : fromRight(value))

    return Disposable.None
  })
}) as <A>(key: string, store: IDBObjectStore) => ItemEffect<Maybe<A>>
