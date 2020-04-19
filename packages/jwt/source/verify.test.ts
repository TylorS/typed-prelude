import { describe, given, it } from '@typed/test'
import { sign } from './sign'
import { verify } from './verify'
import { generateEcdsaKeyPair } from '@typed/crypto'
import { runEffects, Fail } from '@typed/effects'
import { createServerCrypto, CryptoFailure } from '@typed/crypto'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { createVirtualClock } from '@typed/timer'

export const test = describe(`verify`, [
  given(`a JWT and a Secret Key`, [
    it(`returns true when valid JWT`, ({ ok }, done) => {
      const now = Date.now()
      const exp = now + 1000 // ms
      const nbf = now - 1000 // ms
      const issuer = 'Test'
      const claims = { exp: exp / 1000, nbf: nbf / 1000, iss: issuer } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair)

          ok(yield* verify(jwt, keyPair, { issuer }))
          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), {
        crypto: createServerCrypto(),
        logger: createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: createVirtualClock() }),
        [CryptoFailure]: Fail,
      })
    }),
  ]),
])
