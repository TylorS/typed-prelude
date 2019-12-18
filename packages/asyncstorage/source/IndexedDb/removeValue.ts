import { Disposable } from '@typed/disposable'
import { Either, fromRight, isLeft } from '@typed/either'
import { chain } from '@typed/env'
import { Future } from '@typed/future'
import { Maybe, Nothing } from '@typed/maybe'
import { ItemEffect } from '../AsyncStorage'
import { getValue } from './getValue'

export function removeValue<A>(key: string, store: IDBObjectStore): ItemEffect<Maybe<A>> {
  return chain(
    (value: Either<Error, Maybe<A>>) =>
      Future.create((reject, resolve) => {
        const request = store.delete(key)

        let disposable = Disposable.None
        request.onerror = ev => (disposable = reject(new Error((ev.target as any).errorCode)))
        request.onsuccess = () => (disposable = resolve(isLeft(value) ? Nothing : fromRight(value)))

        return Disposable.lazy(() => disposable)
      }),
    getValue<A>(key, store),
  )
}
