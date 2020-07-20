import { Either, fromLeft, fromRight, isLeft, Left, Right } from '@typed/either'
import * as G from '../guard'
import { Decoder } from './Decoder'
import { refinement } from './refinement'

const UnknownEither: Decoder<unknown, Either<unknown, unknown>> = Decoder.fromGuard(
  G.Either,
  'Either<unknown, unknown>',
)

export const either = <A, B>(
  left: Decoder<any, A>,
  right: Decoder<any, B>,
): Decoder<unknown, Either<A, B>> =>
  refinement(
    UnknownEither,
    function* (either) {
      if (isLeft(either)) {
        return Left.of(yield* left.decode(fromLeft(either)))
      }

      return Right.of(yield* right.decode(fromRight(either)))
    },
    `Either<${left.expected}, ${right.expected}>`,
  )
