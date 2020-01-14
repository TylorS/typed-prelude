import { Disposable } from '@typed/disposable'
import { Future } from '@typed/future'

export function openDatabase(
  name: string,
  indexedDbFactory: IDBFactory,
): Future<number, Error, IDBDatabase> {
  return Future.create((reject, resolve) => {
    const request = indexedDbFactory.open(name)
    const disposable = Disposable.lazy()

    request.onerror = ev =>
      disposable.addDisposable(reject(new Error((ev.target as any).errorCode)))
    request.onsuccess = () => disposable.addDisposable(resolve(request.result))
    request.onupgradeneeded = () => request.result.createObjectStore(name)

    return disposable
  })
}
