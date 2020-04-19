import { createServerCrypto, CryptoFailure, generateEcdsaKeyPair } from '@typed/crypto'
import { Fail, runEffects } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { describe, given, it } from '@typed/test'
import { createVirtualClock } from '@typed/timer'
import { isActive } from './isActive'
import { sign } from './sign'

export const test = describe(`isActive`, [
  given(`a JWT`, [
    it(`returns true when JWT is active`, ({ ok }, done) => {
      const now = Date.now()
      const exp = now + 1000 // ms
      const nbf = now - 1000 // ms
      const claims = { exp: exp / 1000, nbf: nbf / 1000 } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair.privateKey)

          ok(isActive(jwt))

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

    it(`returns false when JWT is not active yet`, ({ notOk }, done) => {
      const now = Date.now()
      const exp = now + 2000 // ms
      const nbf = now + 1000 // ms
      const claims = { exp: exp / 1000, nbf: nbf / 1000 } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair.privateKey)

          notOk(isActive(jwt))

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

    it(`returns false when JWT is expired`, ({ notOk }, done) => {
      const now = Date.now()
      const exp = now // ms
      const nbf = now - 1000 // ms
      const claims = { exp: exp / 1000, nbf: nbf / 1000 } // sec

      function* sut() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const jwt = yield* sign(claims, keyPair.privateKey)

          notOk(isActive(jwt))

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
