import { describe, given, it } from '@typed/test'
import { get } from '../factories'
import { runEffects } from './runEffects'
import { runWith } from './runWith'

export const test = describe(`runWith`, [
  given(`Effects<E, A> -> E`, [
    it(`returns Effects<never, A>`, ({ equal }) => {
      type E = { e: number }
      const expected: E = { e: 1 }

      function* sut() {
        return equal(expected, yield* runWith(get<E>(), expected))
      }

      runEffects(sut(), {})
    }),
  ]),
])
