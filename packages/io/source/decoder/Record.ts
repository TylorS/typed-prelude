import { combine, Effect, map } from '@typed/effects'
import { fromLeft, fromRight, isLeft, isRight, Left, Right } from '@typed/either'
import { Just } from '@typed/maybe'
import { hasOwnProperty, keysOf, mapToList } from '@typed/objects'
import { toString } from '@typed/strings'
import * as G from '../guard'
import { catchDecodeFailure, DecodeError, decodeFailure, Decoder, TypeOf } from './Decoder'
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
        ...keys.map((k) =>
          hasOwnProperty(k, r)
            ? catchDecodeFailure(
                map((a) => [a, k] as const, decoders[k].decode(r[k])),
                () => k,
              )
            : Effect.of(
                Left.of([DecodeError.create(decoders[k].expected, 'undefined'), k] as const),
              ),
        ),
      )

      if (decoded.every(isRight)) {
        return decoded
          .map((either) => fromRight(either as Right<[any, keyof A]>))
          .reduce((acc, [x, k]) => ({ ...acc, [k]: x }), {})
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
  return DecodeError.create(expected, value, {
    errors: errors.map(([e, key]): DecodeError => ({ ...e, key: Just.of(key.toString()) })),
  })
}
