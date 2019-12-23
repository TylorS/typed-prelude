import { Disposable } from '@typed/disposable'
import { Future } from '@typed/future'

export function openDatabase(
  name: string,
  indexedDbFactory: IDBFactory,
): Future<number, Error, IDBDatabase> {
  return Future.create((reject, resolve) => {
    const request = indexedDbFactory.open(name)

    let disposable = Disposable.None
    request.onerror = ev => (disposable = reject(new Error((ev.target as any).errorCode)))
    request.onsuccess = () => (disposable = resolve(request.result))
    request.onupgradeneeded = () => request.result.createObjectStore(name)

    return Disposable.lazy(() => disposable)
  })
}
