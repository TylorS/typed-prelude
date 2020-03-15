import { runEffects } from '@typed/effects'
import { fromLeft, fromRight, isLeft } from '@typed/either'
import { describe, given, it, Test, TYPED_TEST } from '@typed/test'
import { arrayBufferToString } from './arrayBufferToString'
import { createServerCrypto } from './createServerCrypto'
import { decryptWithAesKey } from './decryptWithAesKey'
import { deriveAesKey } from './deriveAesKey'
import { encryptWithAesKey } from './encryptWithAesKey'
import { stringToArrayBuffer } from './stringToArrayBuffer'

export const test = describe(`deriveAesKey`, [
  given(`a salt and password`, [
    it(`derives a symmetrical key`, ({ equal }, done) => {
      const salt = 'example@gmail.com'
      const password = 'example-password!'
      const data = 'some-dummy-data'
      const crypto = createServerCrypto()

      function* sut() {
        const errorOrAesKey = yield* deriveAesKey({ salt, password })

        if (isLeft(errorOrAesKey)) {
          return done(fromLeft(errorOrAesKey))
        }

        const key = fromRight(errorOrAesKey)
        const errorOrEncrypted = yield* encryptWithAesKey(key, stringToArrayBuffer(data))

        if (isLeft(errorOrEncrypted)) {
          return done(fromLeft(errorOrEncrypted))
        }

        const errorOrDecrypted = yield* decryptWithAesKey(key, ...fromRight(errorOrEncrypted))

        if (isLeft(errorOrDecrypted)) {
          return done(fromLeft(errorOrDecrypted))
        }

        try {
          equal(data, arrayBufferToString(fromRight(errorOrDecrypted)))

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), { crypto })
    }),

    it(`derives the same key`, ({ equal }, done) => {
      const salt = 'example@gmail.com'
      const password = 'example-password!'
      const data = 'some-dummy-data'
      const crypto = createServerCrypto()

      function* sut() {
        const errorOrAesKeyOne = yield* deriveAesKey({ salt, password })
        const errorOrAesKeyTwo = yield* deriveAesKey({ salt, password })

        if (isLeft(errorOrAesKeyOne)) {
          return done(fromLeft(errorOrAesKeyOne))
        }

        if (isLeft(errorOrAesKeyTwo)) {
          return done(fromLeft(errorOrAesKeyTwo))
        }

        const keyOne = fromRight(errorOrAesKeyOne)
        const keyTwo = fromRight(errorOrAesKeyTwo)
        const buffer = stringToArrayBuffer(data)

        const errorOrEncryptedOne = yield* encryptWithAesKey(keyOne, buffer)

        if (isLeft(errorOrEncryptedOne)) {
          return done(fromLeft(errorOrEncryptedOne))
        }

        const errorOrDecrypted = yield* decryptWithAesKey(keyTwo, ...fromRight(errorOrEncryptedOne))

        if (isLeft(errorOrDecrypted)) {
          return done(fromLeft(errorOrDecrypted))
        }

        const decrypted = arrayBufferToString(fromRight(errorOrDecrypted))

        try {
          equal(data, decrypted)

          done()
        } catch (error) {
          done(error)
        }
      }

      runEffects(sut(), { crypto })
    }),
  ]),
])
