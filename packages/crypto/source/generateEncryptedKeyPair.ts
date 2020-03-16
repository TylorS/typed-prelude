import { combine, Effect } from '@typed/effects'
import { chain, Either, fromRight, isLeft, map } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { encryptExportedKeyPair } from './encryptExportedKeyPair'
import { generateRsaExportedKeys } from './generateRsaExportedKeys'
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
 * @param aesKey {CryptoKey} - A symmetrical key that is allowed to encrypt/decrypt
 */
export function* generateEncryptedKeyPair(
  aesKey: CryptoKey,
): Effect<CryptoEnv, Either<Error, EncryptedKeyPair>> {
  const errorOrExportedKeys = yield* generateRsaExportedKeys()

  if (isLeft(errorOrExportedKeys)) {
    return errorOrExportedKeys
  }

  const exportedKeys = fromRight(errorOrExportedKeys)
  const [errorOrEncryptedKeys, errorOrNonExtractableKeyPair] = yield* combine(
    encryptExportedKeyPair(aesKey, exportedKeys),
    importExportedKeyPair(exportedKeys),
  )

  return chain(
    encrypted =>
      map(nonExtractable => ({ ...nonExtractable, encrypted }), errorOrNonExtractableKeyPair),
    errorOrEncryptedKeys,
  )
}
