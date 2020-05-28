import { combine } from '@typed/effects'
import { fromLeft, fromRight, isLeft, isRight, Right } from '@typed/either'
import { Just } from '@typed/maybe'
import { keysOf, mapToList } from '@typed/objects'
import { toString } from '@typed/strings'
import { DecodeError, TypeOf } from '../Decoder'
import * as G from '../guard'
import { catchDecodeFailure, decodeFailure, Decoder } from './Decoder'
import { refinement } from './refinement'

export const Record = Decoder.fromGuard(G.Record, 'Record<PropertyKey, unknown>')

export const record = <A extends Readonly<Record<PropertyKey, Decoder>>>(
  decoders: A,
  expected: string = getDefaultRecordExpected(decoders),
): Decoder<{ readonly [K in keyof A]: TypeOf<A[K]> }> => {
  const keys = keysOf(decoders)

  return refinement(
    Record,
    function* (r) {
      const decoded = yield* combine(
        ...keys.map((k) => catchDecodeFailure(decoders[k].decode(r), () => k)),
      )

      if (decoded.every(isRight)) {
        return decoded
          .map((d) => fromRight(d as Right<any>))
          .reduce((acc, x) => ({ ...acc, ...x }), {})
      }

      const errors = decoded.filter(isLeft).map(fromLeft)

      return yield* decodeFailure(decodeRecordError(errors, expected, toString(r)))
    },
    expected,
  )
}

function getDefaultRecordExpected<A extends Readonly<Record<PropertyKey, Decoder>>>(
  decoders: A,
): string {
  return `{\n  ${mapToList((key, value) => `"${key.toString()}": ${value.expected}`, decoders).join(
    `,\n  `,
  )}\n}`
}

function decodeRecordError(
  errors: ReadonlyArray<readonly [DecodeError, keyof any]>,
  expected: string,
  value: string,
): DecodeError {
  return DecodeError.create(`ReadonlyArray<${expected}>`, value, {
    errors: errors.map(([e, key]): DecodeError => ({ ...e, key: Just.of(key.toString()) })),
  })
}
