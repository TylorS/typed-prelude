import { Either, fromLeft, fromRight, isLeft, isRight, Left, Right } from '@typed/either'
import { Guard, TypeOf } from './Guard'
import { Record } from './Record'
import { refinement } from './refinement'

export const either = <L extends Guard<never>, R extends Guard<never>>(
  left: L,
  right: R,
): Guard<Either<TypeOf<L>, TypeOf<R>>> =>
  refinement(Record, (e): e is Either<TypeOf<L>, TypeOf<R>> => {
    if (isLeft(e as any)) {
      return left.is(fromLeft(e as Left<any>))
    }

    if (isRight(e as any)) {
      return right.is(fromRight(e as Right<any>))
    }

    return false
  })
