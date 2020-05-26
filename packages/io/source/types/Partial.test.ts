import { Fail, runEffects } from '@typed/effects'
import { isLeft, isRight } from '@typed/either'
import { describe, given, it } from '@typed/test'
import { decode, DecodeFailure } from '../Decoder'
import { TypeOf } from '../Type'
import { Boolean } from './Boolean'
import { partial } from './partial'
import { record } from './Record'
import { String } from './String'

export const test = describe(`partial`, [
  given(`a record of types`, [
    it(`returns a valid partial of that type`, ({ ok, equal }, done) => {
      const type = partial({ a: String, b: Boolean })

      const a = { a: '' }
      const b = { b: true }
      const ab = { ...a, ...b }

      function* test() {
        try {
          ok(type.is(a))
          ok(type.is(b))
          ok(type.is(ab))

          equal(a as TypeOf<typeof type>, yield* decode(type, a))
          equal(b as TypeOf<typeof type>, yield* decode(type, b))
          equal(ab as TypeOf<typeof type>, yield* decode(type, ab))
          equal({} as TypeOf<typeof type>, yield* decode(type, {}))

          ok(isLeft(yield* type.decode({ a: false })))
          ok(isLeft(yield* type.decode({ b: '' })))
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
