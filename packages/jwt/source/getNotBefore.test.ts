import { describe, given, it } from '@typed/test'
import { getNotBefore } from './getNotBefore'
import { sign } from './sign'

export const test = describe(`getNotBefore`, [
  given(`a JWT with nbf claims`, [
    it(`returns a Date`, async ({ equal }) => {
      const nbf = Date.now() + 1000 // ms
      const claims = { nbf: nbf / 1000 } // sec
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      equal(new Date(nbf), getNotBefore(jwt))
    }),
  ]),
])
