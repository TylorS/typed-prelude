import { CryptoEffects, EncryptedKeyPair, ECDSA_KEY_PARAMS } from '../common'
import { exportedKeysToEncryptedKeyPair } from '../effects/exportedKeysToEncryptedKeyPair'
import { generateEcdsaExportedKeys } from './generateEcdsaExportedKeys'

/**
 * Generate encrypted RSA-PSS key pair for signing and verifying
 */
export function* generateEncryptedEcdsaKeyPair(
  aesKey: CryptoKey,
): CryptoEffects<unknown, EncryptedKeyPair> {
  const exportedKeys = yield* generateEcdsaExportedKeys()

  return yield* exportedKeysToEncryptedKeyPair(aesKey, ECDSA_KEY_PARAMS, exportedKeys)
}
