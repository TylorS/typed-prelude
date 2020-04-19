import { describe, given, it } from '@typed/test'
import { stringToArrayBuffer, createServerCrypto, CryptoFailure } from '../common'
import { signWithEcdsaKeyPair } from './signWithEcdsaKeyPair'
import { generateEcdsaKeyPair } from './generateEcdsaKeyPair'
import { verifyWithEcdsaKeyPair } from './verifyWithEcdsaKeyPair'
import { runEffects, Fail } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { createVirtualClock } from '../../../timer/source'

export const test = describe(`verifyWithPssKeyPair`, [
  given(`Data, Signature, and KeyPair`, [
    it(`verifies the signature`, ({ ok }, done) => {
      const secret = 'supersecret'

      function* test() {
        try {
          const keyPair = yield* generateEcdsaKeyPair()
          const data = stringToArrayBuffer(secret)
          const signature = yield* signWithEcdsaKeyPair(data, keyPair)

          ok(yield* verifyWithEcdsaKeyPair(data, signature, keyPair))

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(test(), {
        crypto: createServerCrypto(),
        logger: createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: createVirtualClock() }),
        [CryptoFailure]: Fail,
      })
    }),
  ]),
])
