import { Either, fromLeft, fromRight, isLeft, isRight, Left } from '@typed/either'
import { Guard, TypeOf } from './Guard'
import { Record } from './Record'
import { refinement } from './refinement'

const UnknownEither: Guard<Either<unknown, unknown>> = refinement(
  Record,
  (e): e is Either<unknown, unknown> => isLeft(e as any) || isRight(e as any),
)

export { UnknownEither as Either }

export const either = <L extends Guard<never>, R extends Guard<never>>(
  left: L,
  right: R,
): Guard<Either<TypeOf<L>, TypeOf<R>>> =>
  refinement(UnknownEither, (e): e is Either<TypeOf<L>, TypeOf<R>> => {
    if (isLeft(e)) {
      return left.is(fromLeft(e as Left<any>))
    }

    return right.is(fromRight(e))
  })
