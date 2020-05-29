import { combine, map } from '@typed/effects'
import { fromLeft, fromRight, isLeft, isRight, Right } from '@typed/either'
import { Just } from '@typed/maybe'
import { hasOwnProperty, keysOf, mapToList } from '@typed/objects'
import { toString } from '@typed/strings'
import { catchDecodeFailure, DecodeError, decodeFailure, Decoder, TypeOf } from './Decoder'
import { Record } from './Record'
import { refinement } from './refinement'

export const partial = <A extends Readonly<Record<PropertyKey, Decoder>>>(
  decoders: A,
  expected: string = getDefaultPartialExpected(decoders),
): Decoder<{ readonly [K in keyof A]?: TypeOf<A[K]> }> => {
  const keys = keysOf(decoders)

  return refinement(
    Record,
    function* (r) {
      const decoded = yield* combine(
        ...keys
          .filter((k) => hasOwnProperty(k, r))
          .map((k) =>
            catchDecodeFailure(
              map((a) => [a, k] as const, decoders[k].decode(r[k])),
              () => k,
            ),
          ),
      )

      if (decoded.every(isRight)) {
        return decoded
          .map((d) => fromRight(d as Right<any>))
          .reduce((acc, [v, k]) => ({ ...acc, [k]: v }), {})
      }

      const errors = decoded.filter(isLeft).map(fromLeft)

      return yield* decodeFailure(decodePartialError(errors, expected, toString(r)))
    },
    expected,
  )
}

function getDefaultPartialExpected<A extends Readonly<Record<PropertyKey, Decoder>>>(
  decoders: A,
): string {
  return `{\n  ${mapToList(
    (key, value) => `"${key.toString()}"?: ${value.expected}`,
    decoders,
  ).join(`,\n  `)}\n}`
}

function decodePartialError(
  errors: ReadonlyArray<readonly [DecodeError, keyof any]>,
  expected: string,
  value: string,
): DecodeError {
  return DecodeError.create(expected, value, {
    errors: errors.map(([e, key]) => ({ ...e, key: Just.of(toString(key)) })),
  })
}
