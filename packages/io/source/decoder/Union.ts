import { toString } from '@typed/common'
import { fromRight, isRight } from '@typed/either'
import { catchDecodeFailure, decodeFailure, Decoder, TypeOf } from './Decoder'

export const union = <A extends ReadonlyArray<Decoder>>(
  decoders: A,
  expected: string = decoders.map((d) => d.expected).join(' | '),
): Decoder<TypeOf<A[number]>> => ({
  expected,
  *decode(i) {
    for (const { decode } of decoders) {
      const either = yield* catchDecodeFailure(decode(i))

      if (isRight(either)) {
        return fromRight(either)
      }
    }

    return yield* decodeFailure({ message: `Expected ${expected}, but got ${toString(i)}` })
  },
})
