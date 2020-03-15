import { Disposable } from '@typed/disposable'
import { provide } from '@typed/env'
import { fork } from './fork'
import { Future, PureFuture } from './Future'

export const all = <E, A, B>(futures: ReadonlyArray<Future<E, A, B>>) =>
  Future.create<E, A, readonly B[]>((reject, resolve, environment) => {
    const hasValues = Array(futures.length).fill(false)
    const values: B[] = Array(futures.length)
    const disposable = Disposable.lazy()

    function left(a: A) {
      disposable.dispose()

      return reject(a)
    }

    function right(b: B, index: number) {
      hasValues[index] = true
      values[index] = b

      if (hasValues.every(Boolean)) {
        return resolve(values)
      }

      return Disposable.None
    }

    futures.forEach((f, i) => {
      disposable.addDisposable(
        fork(left, (b: B) => right(b, i), provide(f, environment) as PureFuture<A, B>),
      )
    })

    return disposable
  })
