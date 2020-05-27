import { toString } from '@typed/common'
import { sequence } from '@typed/effects'
import { fromRight, isLeft } from '@typed/either'
import * as G from '../guard'
import { catchDecodeFailure, DecodeEffect, decodeFailure, Decoder, TypeOf } from './Decoder'
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
          return yield* decodeFailure({
            message: `Expected ReadonlyMap<${key.expected}, ${value.expected}>, but got ${toString(
              map,
            )}`,
          })
        }

        return [fromRight(k), fromRight(v)] as const
      },
      Array.from(map))

      return new Map(entries)
    },
    `ReadonlyMap<${key.expected}, ${value.expected}>`,
  )
}
