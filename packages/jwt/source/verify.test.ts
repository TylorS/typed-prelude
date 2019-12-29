import { describe, given, it } from '@typed/test'
import { sign } from './sign'
import { verify } from './verify'

export const test = describe(`verify`, [
  given(`a JWT and a Secret Key`, [
    it(`returns true when valid JWT`, async ({ ok }) => {
      const now = Date.now()
      const exp = now + 1000 // ms
      const nbf = now - 1000 // ms
      const issuer = 'Test'
      const claims = { exp: exp / 1000, nbf: nbf / 1000, iss: issuer } // sec
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      ok(await verify(jwt, secret, { issuer }))
    }),
  ]),
])
