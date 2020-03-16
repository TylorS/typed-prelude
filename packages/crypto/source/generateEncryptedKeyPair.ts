import { Effect } from '@typed/effects'
import { Either, fromRight, isLeft } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { exportedKeysToEncryptedKeyPair } from './exportedKeysToEncryptedKeyPair'
import { generateRsaExportedKeys } from './generateRsaExportedKeys'
import { EncryptedKeyPair } from './types'

/**
 * Using an AES CryptoKey, a non-extractable CryptoKeyPair is generated. Encrypted copies of the CryptoKeyPair
 * are also generated to allow persistence and sending over the internet.
 *
 * Ideally your supplied CryptoKey is non-extractable, never persisted, and generated with user-supplied
 * information in a way that the key can be derived again and again. The generated CryptoKeyPair should then
 * be used to encrypt/decrypt all application data. The encrypted views of the CryptoKeyPair can safely be
 * persisted or sent over the internet. Furthermore, if the user chooses to change their passsword
 * one must only re-encrypt the generated CryptoKeyPair with the new AES CryptoKey.
 * @param aesKey {CryptoKey} - A symmetrical key that is allowed to encrypt/decrypt
 */
export function* generateEncryptedKeyPair(
  aesKey: CryptoKey,
): Effect<CryptoEnv, Either<Error, EncryptedKeyPair>> {
  const errorOrExportedKeys = yield* generateRsaExportedKeys()

  if (isLeft(errorOrExportedKeys)) {
    return errorOrExportedKeys
  }

  return yield* exportedKeysToEncryptedKeyPair(aesKey, fromRight(errorOrExportedKeys))
}
