import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import { ItemEffect } from '../AsyncStorage'

export function openDatabase(name: string, indexedDbFactory: IDBFactory): ItemEffect<IDBDatabase> {
  return Effect.fromEnv(
    Future.create<never, Error, IDBDatabase>((reject, resolve) => {
      const request = indexedDbFactory.open(name)
      const disposable = Disposable.lazy()

      request.onerror = ev =>
        disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
      request.onsuccess = () => disposable.addDisposable(resolve(request.result))
      request.onupgradeneeded = () => request.result.createObjectStore(name)

      return disposable
    }),
  )
}
