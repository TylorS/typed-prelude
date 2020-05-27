import { toString } from '@typed/common'
import { combine } from '@typed/effects'
import { Array } from './Array'
import { decodeFailure, Decoder, TypeOf } from './Decoder'
import { refinement } from './refinement'

export const tuple = <A extends ReadonlyArray<Decoder>>(
  decoders: A,
): Decoder<{ readonly [K in keyof A]: TypeOf<A[K]> }> =>
  refinement(
    Array,
    function* (list) {
      if (list.length !== decoders.length) {
        return yield* decodeFailure({
          message: `Expected ${`[${decoders
            .map((d) => d.expected)
            .join(`, `)}]`}, but got ${toString(list)}`,
        })
      }

      return yield* combine(...decoders.map((d, i) => d.decode(list[i])))
    },
    `[${decoders.map((d) => d.expected).join(`, `)}]`,
  )
