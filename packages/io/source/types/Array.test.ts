import { Fail, runEffects } from '@typed/effects'
import { isLeft, Right } from '@typed/either'
import { describe, given, it } from '@typed/test'
import { decode } from '../Decoder'
import { Array, array } from './Array'
import { Boolean } from './Boolean'
import { String } from './String'

export const ArrayTest = describe(`Array`, [
  describe(`decode`, [
    given(`an array`, [
      it(`it returns a Right of that array`, ({ equal }) => {
        const x = [1, 2, 3]
        const expected = Right.of(x)

        const actual = decode(Array, x)

        equal(x, actual)
      }),
    ]),

    given(`anything else`, [
      it(`returns a Left`, ({ ok }, done) => {
        function* test(value: unknown) {
          const actual = Array.decode(value)

          ok(isLeft(actual))
        }

        function* runTest() {
          try {
            yield* test(1)
            yield* test(true)
            yield* test({})
            yield* test(new Map())
            yield* test(new Set())
            done()
          } catch (error) {
            done(error)
          }
        }

        runEffects(runTest(), {
          [DecodeFailure]: Fail,
        })
      }),
    ]),
  ]),
])

export const arrayTest = describe(`array`, [
  describe(`given a Type`, [
    it(`returns a codec that expects an array containing all of the given Type`, ({
      equal,
      ok,
    }, done) => {
      const stringArray = array(String)
      const booleanArray = array(Boolean)

      function* test() {
        try {
          const s = ['hello']
          equal(s, yield* decode(stringArray, s))
          equal([], yield* decode(stringArray, []))

          ok(isLeft(yield* stringArray.decode(s[0])))
          ok(isLeft(yield* stringArray.decode(true)))
          ok(isLeft(yield* stringArray.decode({})))

          const b = [true, false]
          equal(b, yield* decode(booleanArray, b))
          equal([], yield* decode(booleanArray, []))

          ok(isLeft(yield* booleanArray.decode(b[0])))
          ok(isLeft(yield* booleanArray.decode(s)))
          ok(isLeft(yield* booleanArray.decode({})))

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(test(), {
        [DecodeFailure]: Fail,
      })
    }),
  ]),
])
