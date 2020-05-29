import { sequence } from '@typed/effects'
import { fromRight, isLeft } from '@typed/either'
import { toString } from '@typed/strings'
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

const UnknownMap: Decoder<ReadonlyMap<unknown, unknown>> = Decoder.fromGuard(
  G.Map,
  `ReadonlyMap<unknown, unknown>`,
)

export { UnknownMap as Map }

export const map = <K extends Decoder, V extends Decoder>(
  key: K,
  value: V,
): Decoder<ReadonlyMap<TypeOf<K>, TypeOf<V>>> => {
  return refinement(
    UnknownMap,
    function* (map) {
      const entries = yield* sequence(function* (
        keyValuePair,
      ): DecodeEffect<readonly [TypeOf<K>, TypeOf<V>]> {
        const k = yield* catchDecodeFailure(key.decode(keyValuePair[0]))
        const v = yield* catchDecodeFailure(value.decode(keyValuePair[1]))

        if (isLeft(k) || isLeft(v)) {
          const expected = `ReadonlyMap<${key.expected}, ${value.expected}>`
          const actual = toString(map)

          return yield* decodeFailure(DecodeError.create(expected, actual))
        }

        return [fromRight(k), fromRight(v)] as const
      },
      Array.from(map))

      return new Map(entries)
    },
    `ReadonlyMap<${key.expected}, ${value.expected}>`,
  )
}
