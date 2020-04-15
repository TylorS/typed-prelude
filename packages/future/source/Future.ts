import { Disposable } from '@typed/disposable'
import { Either, Left, Right } from '@typed/either'
import { Env, Pure, Resume } from '@typed/env'
import { Arity1, pipe } from '@typed/lambda'

// Futures should only ever contain 1 value
export type Future<E, A, B> = Env<E, Either<A, B>>
export type PureFuture<A, B> = Pure<Either<A, B>>

export namespace Future {
  export const of = <A, B>(value: B): PureFuture<A, B> => Pure.of(Either.of(value))

  export const create = <E, A, B>(
    fn: (
      reject: Arity1<A, Disposable>,
      resolve: Arity1<B, Disposable>,
      environment: E,
    ) => Disposable,
  ): Future<E, A, B> => (e: E) =>
    Resume.create((cb) => {
      const ifNotResolved = createIfNotResolved()

      return fn(ifNotResolved<A>(pipe(Left.of, cb)), ifNotResolved<B>(pipe(Right.of, cb)), e)
    })

  export const fromPromise = <A>(promise: () => PromiseLike<A>): PureFuture<Error, A> =>
    create<unknown, Error, A>((reject, resolve) => {
      const disposable = Disposable.lazy()

      promise().then(
        (a) => disposable.addDisposable(resolve(a)),
        (e) => disposable.addDisposable(reject(e)),
      )

      return disposable
    })
}

function createIfNotResolved() {
  let resolved = false

  return <A>(fn: (value: A) => Disposable) => {
    return (value: A) => {
      if (!resolved) {
        resolved = true

        return fn(value)
      }

      return Disposable.None
    }
  }
}
