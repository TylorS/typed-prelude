import { Fail, runEffects } from '@typed/effects'
import { isLeft } from '@typed/either'
import { describe, given, it } from '@typed/test'
import { decode, DecodeFailure } from '../Decoder'
import { TypeOf } from '../Type'
import { Boolean } from './Boolean'
import { record } from './Record'
import { String } from './String'

export const test = describe(`record`, [
  given(`a record of types`, [
    it(`returns a valid record of the contained types`, ({ ok, notOk, equal }, done) => {
      const type = record({ a: String, b: Boolean }, 'A')

      const a = { a: '' }
      const b = { b: true }
      const ab = { ...a, ...b }

      function* test() {
        try {
          notOk(type.is(a))
          notOk(type.is(b))
          ok(type.is(ab))

          equal(ab, yield* decode(type, ab))

          ok(isLeft(yield* type.decode({ a: false, b: '' })))
          ok(isLeft(yield* type.decode(null)))

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
