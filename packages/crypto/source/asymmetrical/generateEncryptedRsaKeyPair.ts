import { CryptoEffects, EncryptedKeyPair } from '../common'
import { exportedKeysToEncryptedKeyPair } from '../effects/exportedKeysToEncryptedKeyPair'
import { generateRsaExportedKeys } from './generateRsaExportedKeys'

/**
 * Using an AES CryptoKey, a non-extractable CryptoKeyPair is generated. Encrypted copies of the CryptoKeyPair
 * are also generated to allow persistence and sending over the internet.
 *
 * Ideally your supplied CryptoKey is non-extractable, never persisted, and generated with user-supplied
 * information in a way that the key can be derived again and again. The generated CryptoKeyPair should then
 * be used to encrypt/decrypt all application data. The encrypted views of the CryptoKeyPair can safely be
 * persisted or sent over the internet. Furthermore, if the user chooses to change their password
 * one must only re-encrypt the generated CryptoKeyPair with the new AES CryptoKey.
 * @param aesKey {CryptoKey} - A symmetrical key that is allowed to encrypt/decrypt
 */
export function* generateEncryptedRsaKeyPair(
  aesKey: CryptoKey,
): CryptoEffects<unknown, EncryptedKeyPair> {
  const exportedKeys = yield* generateRsaExportedKeys()

  return yield* exportedKeysToEncryptedKeyPair(aesKey, exportedKeys)
}
