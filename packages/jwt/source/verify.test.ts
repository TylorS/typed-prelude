import { generateEcdsaKeyPair } from '@typed/crypto'
import { createServerCrypto, CryptoFailure } from '@typed/crypto'
import { Fail, runEffects } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { describe, given, it } from '@typed/test'
import { createVirtualClock } from '@typed/timer'
import { sign } from './sign'
import { verify } from './verify'

export const test = describe(`verify`, [
  given(`a JWT and a Secret Key`, [
    // TODO: figure out why this is finicky
    it.skip(`returns true when valid JWT`, ({ ok }, done) => {
      const now = Date.now()
      const exp = now + 1000 // ms
      const nbf = now - 1000 // ms
      const issuer = 'Test'
      const claims = { exp: exp / 1000, nbf: nbf / 1000, iss: issuer } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair.privateKey)

          ok(yield* verify(jwt, keyPair.publicKey, { issuer }))
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
