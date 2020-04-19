import { createServerCrypto, CryptoFailure, generateEcdsaKeyPair } from '@typed/crypto'
import { Fail, runEffects } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { describe, given, it } from '@typed/test'
import { createVirtualClock } from '@typed/timer'
import { getNotBefore } from './getNotBefore'
import { sign } from './sign'

export const test = describe(`getNotBefore`, [
  given(`a JWT with nbf claims`, [
    it(`returns a Date`, ({ equal }, done) => {
      const nbf = Date.now() + 1000 // ms
      const claims = { nbf: nbf / 1000 } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair.privateKey)

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
