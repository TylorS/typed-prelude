import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { Env } from '@typed/env'
import { Arity1 } from '@typed/lambda'

// Futures should only ever contain 1 value
export type Future<E, A, B> = Env<E, Either<A, B>>

export namespace Future {
  export const of = <A, B>(value: B): Future<never, A, B> => Env.of(Either.of(value))

  export const create = <E, A, B>(
    fn: (
      reject: Arity1<A, Disposable>,
      resolve: Arity1<B, Disposable>,
      environment: E,
    ) => Disposable,
  ): Future<E, A, B> =>
    Env.create((cb, environment) => {
      let resolved = false
      const ifNotResolved = <A>(fn: (value: A) => Disposable) => {
        return (value: A) => {
          if (!resolved) {
            resolved = true

            return fn(value)
          }

          return Disposable.None
        }
      }

      return fn(
        ifNotResolved<A>(a => cb(Either.left(a))),
        ifNotResolved<B>(b => cb(Either.of(b))),
        environment,
      )
    })
}
