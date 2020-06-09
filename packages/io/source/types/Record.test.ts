import { runEffects } from '@typed/effects'
import { Left, Right } from '@typed/either'
import { Just, Nothing } from '@typed/maybe'
import { describe, given, it } from '@typed/test'
import { catchDecodeFailure } from '../decoder'
import * as t from './'

export const test = describe(`record`, [
  given(`a record of Types`, [
    it(`returns a Type that can validate that record`, ({ equal, ok }) => {
      const type = t.record(
        {
          a: t.String,
          b: t.Boolean,
          c: t.record({
            d: t.Boolean,
          }),
        },
        'Test',
        'Test',
      )
      type Type = t.TypeOf<typeof type>

      function* run() {
        const a = yield* catchDecodeFailure(type.decode(null))

        equal(
          a,
          Left.of({
            expected: 'Test',
            actual: 'null',
            key: Nothing,
            errors: [],
          }),
        )

        const b = yield* catchDecodeFailure(type.decode({}))

        equal(
          b,
          Left.of({
            expected: 'Test',
            actual: '{}',
            key: Nothing,
            errors: [
              {
                expected: 'string',
                actual: 'undefined',
                key: Just.of('a'),
                errors: [],
              },
              {
                expected: 'boolean',
                actual: 'undefined',
                key: Just.of('b'),

                errors: [],
              },
              {
                expected: '{"d": boolean}',
                actual: 'undefined',
                key: Just.of('c'),
                errors: [],
              },
            ],
          }),
        )

        const value: Type = { a: 'hello', b: true, c: { d: false } }
        const c = yield* catchDecodeFailure(type.decode(value))

        equal(c, Right.of(value))

        const d = yield* catchDecodeFailure(type.decode({ a: 'hello', b: true, c: { d: {} } }))

        equal(
          d,
          Left.of({
            expected: 'Test',
            actual: `{"a": "hello", "b": true, "c": {"d": {}}}`,
            key: Nothing,
            errors: [
              {
                expected: '{"d": boolean}',
                actual: '{"d": {}}',
                key: Just.of('c'),
                errors: [
                  {
                    expected: 'boolean',
                    actual: '{}',
                    key: Just.of('d'),
                    errors: [],
                  },
                ],
              },
            ],
          }),
        )
      }

      runEffects(run())
    }),
  ]),
])
