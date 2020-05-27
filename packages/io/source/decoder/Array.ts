import { combine } from '@typed/effects'
import { fromLeft, fromRight, isLeft, isRight, Right } from '@typed/either'
import { pipe } from '@typed/lambda'
import { second } from '../../../list/node_modules/@typed/tuple/esm'
import { sort } from '../../../timer/node_modules/@typed/list/esm'
import { ascend } from '../../../timer/node_modules/@typed/list/esm'
import * as G from '../guard'
import {
  catchDecodeFailure,
  DecodeEffect,
  DecodeError,
  decodeFailure,
  Decoder,
  TypeOf,
} from './Decoder'
import { refinement } from './refinement'

export const Array: Decoder<ReadonlyArray<unknown>> = Decoder.fromGuard(
  G.Array,
  'ReadonlyArray<unknown>',
)

export const array = <A extends Decoder>(decoder: A): Decoder<ReadonlyArray<TypeOf<A>>> =>
  refinement(Array, function* (input): DecodeEffect<ReadonlyArray<TypeOf<A>>> {
    if (input.length === 0) {
      return input as ReadonlyArray<TypeOf<A>>
    }

    const decoded = yield* combine(...input.map(pipe(decoder.decode, catchDecodeFailure)))

    if (decoded.every(isRight)) {
      return decoded.map((d) => fromRight(d as Right<TypeOf<A>>))
    }

    const errors = decoded.filter(isLeft).map((x, i) => [fromLeft(x), i] as const)

    return yield* decodeFailure(formatArrayErrors(errors, decoder.expected))
  })

function formatArrayErrors(
  errors: ReadonlyArray<readonly [DecodeError, number]>,
  expected: string,
): DecodeError {
  return {
    message: `Expected ReadonlyArray<${expected}>, but received errors at index${
      errors.length === 1 ? '' : 'es'
    } ${formatErrors(errors)}`,
  }
}

function formatErrors(errors: ReadonlyArray<readonly [DecodeError, number]>): string {
  const sorted = sort(ascend(second), errors)

  return sorted.map(([error, index]) => `${index} :: ${error.message}`).join(`, `)
}
