import { Disposable } from '@typed/disposable'
import { Either, Left, Right } from '@typed/either'
import { op, resumeLater, resumeNow } from 'fx-ts'
import { Effect } from './Effect'

export interface Future<E, A, B> extends Effect<E, Either<A, B>> {}

export namespace Future {
  export const of = <A, B>(value: B): Future<unknown, A, B> => op(_ => resumeNow(Right.of(value)))

  export const failure = <A, B>(value: A): Future<unknown, A, B> =>
    op(_ => resumeNow(Left.of(value)))

  export const create = <E, A, B>(
    f: (reject: (value: A) => void, resolve: (value: B) => void, env: E) => Disposable,
  ): Future<E, A, B> => op(e => resumeLater(cb => createIfNotResolved(f, e, cb).dispose))
}

function createIfNotResolved<E, A, B>(
  f: (reject: (value: A) => void, resolve: (value: B) => void, env: E) => Disposable,
  e: E,
  cb: (either: Either<A, B>) => void,
) {
  let resolved = false
  const ifNotResolved = <A>(fn: (value: A) => void) => {
    return (value: A): void => {
      if (!resolved) {
        resolved = true

        return fn(value)
      }
    }
  }

  return f(
    ifNotResolved(a => cb(Left.of(a))),
    ifNotResolved(b => cb(Right.of(b))),
    e,
  )
}
