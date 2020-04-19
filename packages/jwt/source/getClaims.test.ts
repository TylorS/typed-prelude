import { describe, given, it } from '@typed/test'
import { getClaims } from './getClaims'
import { sign } from './sign'
import { createServerCrypto, CryptoFailure, generateEcdsaKeyPair } from '@typed/crypto'
import { runEffects, Fail } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { createVirtualClock } from '@typed/timer'

export const test = describe(`getClaims`, [
  given(`a JWT`, [
    it(`returns the claims`, ({ equal }, done) => {
      const claims = { test: 1 }

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair)

          equal(claims, getClaims(jwt))

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
