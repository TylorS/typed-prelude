import { combine } from '@typed/effects'
import { fromLeft, fromRight, isLeft, isRight, Right } from '@typed/either'
import { ascend, sort } from '@typed/list'
import { hasOwnProperty, keysOf, mapToList } from '@typed/objects'
import { second } from '@typed/tuple'
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
          .map((k) => catchDecodeFailure(decoders[k].decode(r), () => k)),
      )

      if (decoded.every(isRight)) {
        return decoded
          .map((d) => fromRight(d as Right<any>))
          .reduce((acc, x) => ({ ...acc, ...x }), {})
      }

      const errors = decoded.filter(isLeft).map(fromLeft)

      return yield* decodeFailure(decodePartialError(errors, expected))
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
): DecodeError {
  return {
    message: `Expected ${expected}, but received errors \n\n{\n  ${formatRecordErrors(errors)}\n}`,
  }
}

function formatRecordErrors(errors: ReadonlyArray<readonly [DecodeError, keyof any]>): string {
  const sorted = sort(ascend(second), errors)

  return sorted.map(([{ message }, key]) => `"${key.toString()}": ${message}`).join(`,\n  `)
}
