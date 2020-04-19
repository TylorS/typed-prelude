import { describe, given, it } from '@typed/test'
import { getNotBefore } from './getNotBefore'
import { sign } from './sign'
import { createServerCrypto, CryptoFailure, generateEcdsaKeyPair } from '@typed/crypto'
import { runEffects, Fail } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { createVirtualClock } from '@typed/timer'

export const test = describe(`getNotBefore`, [
  given(`a JWT with nbf claims`, [
    it(`returns a Date`, ({ equal }, done) => {
      const nbf = Date.now() + 1000 // ms
      const claims = { nbf: nbf / 1000 } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair)

          equal(new Date(nbf), getNotBefore(jwt))

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
