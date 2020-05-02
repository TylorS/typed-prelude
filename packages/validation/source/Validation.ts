import { Either, Left, mapLeft, Right } from '@typed/either'

export type Validation<A, B> = Either<readonly A[], B>

export namespace Validation {
  export const of = <A, B>(value: B): Validation<A, B> => Right.of(value)
  export const error = <A, B>(error: A): Validation<A, B> => Left.of([error])

  export const fromEither = <A, B>(either: Either<A, B>): Validation<A, B> =>
    mapLeft((a) => [a], either)
}
