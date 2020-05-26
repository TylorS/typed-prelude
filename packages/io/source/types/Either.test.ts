import { Fail, runEffects } from '@typed/effects'
import { Either, Left, Right } from '@typed/either'
import { describe, given, it } from '@typed/test'
import { decode, DecodeFailure } from '../Decoder'
import { Boolean } from './Boolean'
import { either } from './either'
import { String } from './String'

export const test = describe(`either`, [
  given(`a Left Type and a Right Type`, [
    describe(`is`, [
      given(`an Either<Left, Right>`, [
        it(`returns true`, ({ ok }) => {
          const eitherType = either(Boolean, String)

          ok(eitherType.is(Either.of('')))
          ok(eitherType.is(Either.of('Hello World')))
          ok(eitherType.is(Either.left(false)))
          ok(eitherType.is(Either.left(true)))
        }),
      ]),

      given(`anything else`, [
        it(`returns false`, ({ notOk }) => {
          const eitherType = either(Boolean, String)

          notOk(eitherType.is(Either.left('')))
          notOk(eitherType.is(Either.left('Hello World')))
          notOk(eitherType.is(Either.of(false)))
          notOk(eitherType.is(Either.of(true)))

          notOk(eitherType.is(1))
          notOk(eitherType.is(''))
          notOk(eitherType.is(true))
          notOk(eitherType.is({}))
          notOk(eitherType.is([]))
          notOk(eitherType.is(null))
        }),
      ]),
    ]),

    describe(`decode`, [
      given(`an Either<Left, Right>`, [
        it(`returns it as is`, ({ equal }) => {
          const l = Left.of(true)
          const r = Right.of('')
          const eitherType = either(Boolean, String)

          function* test() {
            equal(l, yield* decode(eitherType, l))
            equal(r, yield* decode(eitherType, r))
          }

          runEffects(test(), {
            [DecodeFailure]: Fail,
          })
        }),
      ]),

      given(`an Left Type value`, [
        it(`returns it wrapped in a Left`, ({ equal }) => {
          const l = true
          const eitherType = either(Boolean, String)

          function* test() {
            equal(Left.of(l), yield* decode(eitherType, l))
          }

          runEffects(test(), {
            [DecodeFailure]: Fail,
          })
        }),
      ]),

      given(`an Right Type value`, [
        it(`returns it wrapped in a Right`, ({ equal }) => {
          const r = 'Test'
          const eitherType = either(Boolean, String)

          function* test() {
            equal(Right.of(r), yield* decode(eitherType, r))
          }

          runEffects(test(), {
            [DecodeFailure]: Fail,
          })
        }),
      ]),
    ]),
  ]),
])
