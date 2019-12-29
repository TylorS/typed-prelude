import { describe, given, it } from '@typed/test'
import { isActive } from './isActive'
import { sign } from './sign'

export const test = describe(`isActive`, [
  given(`a JWT`, [
    it(`returns true when JWT is active`, async ({ ok }) => {
      const now = Date.now()
      const exp = now + 1000 // ms
      const nbf = now - 1000 // ms
      const claims = { exp: exp / 1000, nbf: nbf / 1000 } // sec
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      ok(isActive(jwt))
    }),

    it(`returns false when JWT is not active yet`, async ({ notOk }) => {
      const now = Date.now()
      const exp = now + 2000 // ms
      const nbf = now + 1000 // ms
      const claims = { exp: exp / 1000, nbf: nbf / 1000 } // sec
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      notOk(isActive(jwt))
    }),

    it(`returns false when JWT is expired`, async ({ notOk }) => {
      const now = Date.now()
      const exp = now // ms
      const nbf = now - 1000 // ms
      const claims = { exp: exp / 1000, nbf: nbf / 1000 } // sec
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      notOk(isActive(jwt))
    }),
  ]),
])
