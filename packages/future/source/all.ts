import { Disposable, disposeAll } from '@typed/disposable'
import { handle } from '@typed/env'
import { fork } from './fork'
import { Future } from './Future'

export const all = <E, A, B>(futures: ReadonlyArray<Future<E, A, B>>) =>
  Future.create<E, A, readonly B[]>((reject, resolve, environment) => {
    const hasValues = Array(futures.length).fill(false)
    const values: B[] = Array(futures.length)
    const disposables: Disposable[] = []
    const disposable: Disposable = disposeAll(disposables)
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

    disposables.push(
      ...futures.map((f, i) => fork(left, (b: B) => right(b, i), handle(environment, f))),
    )

    return disposable
  })
