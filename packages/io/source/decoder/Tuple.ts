import { combine } from '@typed/effects'
import { toString } from '@typed/strings'
import { Array } from './Array'
import { DecodeError, decodeFailure, Decoder, TypeOf } from './Decoder'
import { refinement } from './refinement'

export const tuple = <A extends ReadonlyArray<Decoder>>(
  decoders: A,
): Decoder<{ readonly [K in keyof A]: TypeOf<A[K]> }> => {
  const expected = `[${decoders.map((d) => d.expected).join(`, `)}]`

  return refinement(
    Array,
    function* (list) {
      if (list.length !== decoders.length) {
        return yield* decodeFailure(DecodeError.create(expected, `${toString(list)}`))
      }

      return yield* combine(...decoders.map((d, i) => d.decode(list[i])))
    },
    expected,
  )
}
