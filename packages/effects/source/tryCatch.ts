import { Either, Left, Right } from '@typed/either'
import { co } from 'fx-ts'
import { PureEffect } from './Effect'

export function tryCatch<A extends readonly any[], B>(
  fn: (...args: A) => B,
): (...args: A) => PureEffect<Either<Error, B>> {
  return co(function*(...args: A) {
    try {
      return Right.of(fn(...args))
    } catch (error) {
      return Left.of(error)
    }
  })
}
