import {
  CryptoEffects,
  ExportedKeyPair,
  stringToArrayBuffer,
  ECDSA_KEY_PARAMS,
  SIGN_AND_VERIFY,
} from '../common'
import { exportKeyPair } from '../effects/exportKeyPair'
import { generateKey } from '../effects/subtle'

/**
 * Generates an exported key pair. WARNING :: be very careful about what you do with this KeyPair. We highly
 * recommend encrypting them with another CryptoKey that never leaves memory and can be derived by user-supplied info.
 */
export function* generateEcdsaExportedKeys(): CryptoEffects<unknown, ExportedKeyPair> {
  // Generate a one-off extractable RSA key pair to allow exporting for encryption
  const exportableKey = yield* generateKey(ECDSA_KEY_PARAMS, true, SIGN_AND_VERIFY)
  const jsonWebKeyPair = yield* exportKeyPair(exportableKey)

  return {
    privateKey: stringToArrayBuffer(JSON.stringify(jsonWebKeyPair.privateKey)),
    publicKey: stringToArrayBuffer(JSON.stringify(jsonWebKeyPair.publicKey)),
  }
}
