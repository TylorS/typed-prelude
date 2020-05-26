import { Fail, runEffects } from '@typed/effects'
import { isLeft } from '@typed/either'
import { describe, given, it } from '@typed/test'
import { decode, DecodeFailure } from '../Decoder'
import { Boolean } from './Boolean'
import { intersection } from './intersection'
import { record } from './Record'
import { String } from './String'

export const test = describe(`intersection`, [
  given(`a list of types to intersect`, [
    it(`returns a valid intersection of those types`, ({ notOk, ok, equal }, done) => {
      const a = record({ a: String }, 'a')
      const b = record({ b: Boolean }, 'b')
      const c = intersection([a, b], 'c')

      const valid = { a: '', b: true }

      function* test() {
        try {
          notOk(c.is({ a: '' }))
          notOk(c.is({ b: true }))
          ok(c.is(valid))

          equal(valid, yield* decode(c, valid))

          ok(isLeft(yield* c.decode({ a: '' })))
          ok(isLeft(yield* c.decode({ b: '' })))

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
