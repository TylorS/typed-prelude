import { createServerCrypto, CryptoFailure, generateEcdsaKeyPair } from '@typed/crypto'
import { Fail, runEffects } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { describe, given, it } from '@typed/test'
import { createVirtualClock } from '@typed/timer'
import { getExpiration } from './getExpiration'
import { sign } from './sign'

export const test = describe(`getExpiration`, [
  given(`a Jwt with claims.exp`, [
    it(`returns a Date marking when the token expires`, ({ equal }, done) => {
      const exp = Date.now() + 1000 // ms
      const claims = { exp: exp / 1000 } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair)

          equal(new Date(exp), getExpiration(jwt))

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

  given(`a Jwt w/o claims.exp`, [
    it(`returns a past date`, ({ ok }, done) => {
      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign({}, keyPair)

          ok(getExpiration(jwt) < new Date())

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
