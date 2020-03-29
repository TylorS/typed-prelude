import { Fail, runEffects } from '@typed/effects'
import { describe, given, it } from '@typed/test'
import {
  arrayBufferToString,
  createServerCrypto,
  CryptoFailure,
  stringToArrayBuffer,
} from '../common'
import { decryptWithAesKey } from './decryptWithAesKey'
import { deriveAesKey } from './deriveAesKey'
import { encryptWithAesKey } from './encryptWithAesKey'

export const test = describe(`deriveAesKey`, [
  given(`a salt and password`, [
    it(`derives a symmetrical key`, ({ equal }, done) => {
      const salt = 'example@gmail.com'
      const password = 'example-password!'
      const data = 'some-dummy-data'
      const crypto = createServerCrypto()

      function* sut() {
        try {
          const aesKey = yield* deriveAesKey({ salt, password })
          const encrypted = yield* encryptWithAesKey(aesKey, stringToArrayBuffer(data))
          const decrypted = yield* decryptWithAesKey(aesKey, ...encrypted)

          equal(data, arrayBufferToString(decrypted))

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), { crypto, [CryptoFailure]: Fail })
    }),

    it(`derives the same key`, ({ equal }, done) => {
      const salt = 'example@gmail.com'
      const password = 'example-password!'
      const data = 'some-dummy-data'
      const crypto = createServerCrypto()

      function* sut() {
        try {
          const keyOne = yield* deriveAesKey({ salt, password })
          const keyTwo = yield* deriveAesKey({ salt, password })
          const buffer = stringToArrayBuffer(data)
          const encryptedOne = yield* encryptWithAesKey(keyOne, buffer)
          const decrypted = arrayBufferToString(yield* decryptWithAesKey(keyTwo, ...encryptedOne))

          equal(data, decrypted)

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), { crypto, [CryptoFailure]: Fail })
    }),
  ]),
])
