import { Fail, runEffects } from '@typed/effects'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { describe, given, it } from '@typed/test'
import { createVirtualClock } from '../../../timer/source'
import { CryptoFailure, stringToArrayBuffer } from '../common'
import { generateEncryptedEcdsaKeyPair } from './generateEncryptedEcdsaKeyPair'
import { signWithEcdsaKeyPair } from './signWithEcdsaKeyPair'
import { verifyWithEcdsaKeyPair } from './verifyWithEcdsaKeyPair'
import { deriveAesKey } from '../symmetrical'

export const test = describe(`verifyWithEcdsaKeyPair`, [
  given(`Data, Signature, and KeyPair`, [
    it(`verifies the signature`, ({ ok }, done) => {
      const secret = 'supersecret'

      function* test() {
        try {
          const aesKey = yield* deriveAesKey({ salt: 'test', password: 'secret' })
          const keyPair = yield* generateEncryptedEcdsaKeyPair(aesKey)
          const data = stringToArrayBuffer(secret)
          const signature = yield* signWithEcdsaKeyPair(data, keyPair.privateKey)

          ok(yield* verifyWithEcdsaKeyPair(data, signature, keyPair.publicKey))

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(test(), {
        crypto,
        logger: createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: createVirtualClock() }),
        [CryptoFailure]: Fail,
      })
    }),
  ]),
])
