import { describe, given, it } from '@typed/test'
import { getClaims } from './getClaims'
import { sign } from './sign'

export const test = describe(`getClaims`, [
  given(`a JWT`, [
    it(`returns the claims`, async ({ equal }) => {
      const claims = { test: 1 }
      const secret = 'superdupersecret'
      const jwt = await sign(claims, secret)

      equal(claims, getClaims(jwt))
    }),
  ]),
])
