import { Effect } from '@typed/effects/source'
import { chain, Either, fromRight, isLeft, map } from '@typed/either'
import { ENCRYPT_AND_DECRYPT, HASH } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { generateKey } from './effects'
import { encryptExportedKeyPair } from './encryptExportedKeyPair'
import { ExportedKeyPair, exportKeyPair } from './exportKeyPair'
import { importExportedKeyPair } from './importExportedKeyPair'

export interface EncryptedKey {
  readonly encrypted: ArrayBuffer
  readonly key: CryptoKey
}

export interface EncryptedKeyPair extends CryptoKeyPair {
  readonly encrypted: ExportedKeyPair
}

/**
 * Using a symmetric CryptoKey, a non-extractable CryptoKeyPair is generated in addition
 * as ArrayBuffer views of the encrypted key pair, signed with the supplied symmetric CryptoKeyPair.
 *
 * Ideally your supplied CryptoKey is non-extractable, never persisted, and generated with user-supplied
 * information in a way that the key can be derived again and again. The generated CryptoKeyPair should then
 * be used to encrypt/decrypt all application data. The encryped views of the CryptoKeyPair can safely be
 * persisted or sent over the internet. Furthermore, if the user chooses to change their passsword
 * one must only re-encrypt the generated CryptoKeyPair with the new CryptoKey.
 * @param symmetricKey {CryptoKey} - A symmetrical key that is allows to encrypt/decrypt
 */
export function* generateEncryptedKeyPair(
  symmetricKey: CryptoKey,
): Effect<CryptoEnv, Either<Error, EncryptedKeyPair>> {
  // Generate a one-off extractable RSA key pair
  const params: RsaHashedKeyGenParams = {
    name: 'RSA-OAEP',
    modulusLength: 2048, // can be 1024, 2048, or 4096
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: HASH,
  }
  // Generate a one-off extractable RSA key pair to allow exporting for encryption
  const errorOrKeyPair = yield* generateKey(params, true, ENCRYPT_AND_DECRYPT)

  if (isLeft(errorOrKeyPair)) {
    return errorOrKeyPair
  }

  const errorOrExportedKeys = yield* exportKeyPair(fromRight(errorOrKeyPair))

  if (isLeft(errorOrExportedKeys)) {
    return errorOrExportedKeys
  }

  const exportedKeys = fromRight(errorOrExportedKeys)
  const errorOrEncryptedKeys = yield* encryptExportedKeyPair(symmetricKey, exportedKeys)
  const errorOrNonExtractableKeyPair = yield* importExportedKeyPair(exportedKeys)

  return chain(
    encrypted =>
      map(nonExtractable => ({ ...nonExtractable, encrypted }), errorOrNonExtractableKeyPair),
    errorOrEncryptedKeys,
  )
}
