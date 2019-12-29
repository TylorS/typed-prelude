import { describe, given, it } from '@typed/test'
import { getExpiration } from './getExpiration'
import { sign } from './sign'

export const test = describe(`getExpiration`, [
  given(`a Jwt with claims.exp`, [
    it(`returns a Date marking when the token expires`, async ({ equal }) => {
      const exp = Date.now() + 1000 // ms
      const claims = { exp: exp / 1000 } // sec
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      equal(new Date(exp), getExpiration(jwt))
    }),
  ]),

  given(`a Jwt w/o claims.exp`, [
    it(`returns a past date`, async ({ ok }) => {
      const secret = 'superdupersecret'
      const jwt = await sign({}, secret)

      ok(getExpiration(jwt) < new Date())
    }),
  ]),
])
