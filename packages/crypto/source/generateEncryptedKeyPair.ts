import { Effect } from '@typed/effects/source'
import { chain, Either, fromRight, isLeft, map } from '@typed/either'
import { ENCRYPT_AND_DECRYPT, RSA_PARAMS } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { generateKey } from './effects'
import { encryptExportedKeyPair } from './encryptExportedKeyPair'
import { exportKeyPair } from './exportKeyPair'
import { importExportedKeyPair } from './importExportedKeyPair'
import { EncryptedKeyPair } from './types'

/**
 * Using an AES CryptoKey, a non-extractable CryptoKeyPair is generated. In addition
 * two ArrayBuffer views of the encrypted key pair signed with the supplied symmetric CryptoKey.
 *
 * Ideally your supplied CryptoKey is non-extractable, never persisted, and generated with user-supplied
 * information in a way that the key can be derived again and again. The generated CryptoKeyPair should then
 * be used to encrypt/decrypt all application data. The encrypted views of the CryptoKeyPair can safely be
 * persisted or sent over the internet. Furthermore, if the user chooses to change their passsword
 * one must only re-encrypt the generated CryptoKeyPair with the new AES CryptoKey.
 * @param aesKey {CryptoKey} - A symmetrical key that is allows to encrypt/decrypt
 */
export function* generateEncryptedKeyPair(
  aesKey: CryptoKey,
): Effect<CryptoEnv, Either<Error, EncryptedKeyPair>> {
  // Generate a one-off extractable RSA key pair to allow exporting for encryption
  const errorOrKeyPair = yield* generateKey(RSA_PARAMS, true, ENCRYPT_AND_DECRYPT)

  if (isLeft(errorOrKeyPair)) {
    return errorOrKeyPair
  }

  const errorOrExportedKeys = yield* exportKeyPair(fromRight(errorOrKeyPair))

  if (isLeft(errorOrExportedKeys)) {
    return errorOrExportedKeys
  }

  const exportedKeys = fromRight(errorOrExportedKeys)
  const errorOrEncryptedKeys = yield* encryptExportedKeyPair(aesKey, exportedKeys)
  const errorOrNonExtractableKeyPair = yield* importExportedKeyPair(exportedKeys)

  return chain(
    encrypted =>
      map(nonExtractable => ({ ...nonExtractable, encrypted }), errorOrNonExtractableKeyPair),
    errorOrEncryptedKeys,
  )
}
