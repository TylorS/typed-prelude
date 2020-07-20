import { combine } from '@typed/effects'
import { fromLeft, fromRight, isLeft, isRight, Right } from '@typed/either'
import { Just } from '@typed/maybe'
import { toString } from '@typed/strings'
import * as G from '../guard'
import {
  catchDecodeFailure,
  DecodeEffect,
  DecodeError,
  decodeFailure,
  Decoder,
  InputOf,
  TypeOf,
} from './Decoder'
import { refinement } from './refinement'

export const Array: Decoder<unknown, ReadonlyArray<unknown>> = Decoder.fromGuard(
  G.Array,
  'ReadonlyArray<unknown>',
)

export const array = <A extends Decoder<any, any>>(
  decoder: A,
): Decoder<ReadonlyArray<InputOf<A>>, ReadonlyArray<TypeOf<A>>> =>
  refinement(
    Array,
    function* (input): DecodeEffect<ReadonlyArray<TypeOf<A>>> {
      if (input.length === 0) {
        return input as ReadonlyArray<TypeOf<A>>
      }

      const decoded = yield* combine(
        ...input.map((i, index) => catchDecodeFailure(decoder.decode(i), () => index)),
      )

      if (decoded.every(isRight)) {
        return decoded.map((d) => fromRight(d as Right<TypeOf<A>>))
      }

      const errors = decoded.filter(isLeft).map(fromLeft)

      return yield* decodeFailure(formatArrayErrors(errors, toString(input), decoder.expected))
    },
    `ReadonlyArray<${decoder.expected}>`,
  )

function formatArrayErrors(
  errors: ReadonlyArray<readonly [DecodeError, number]>,
  value: string,
  expected: string,
): DecodeError {
  return DecodeError.create(`ReadonlyArray<${expected}>`, value, {
    errors: errors.map(([e, key]): DecodeError => ({ ...e, key: Just.of(key.toString()) })),
  })
}
