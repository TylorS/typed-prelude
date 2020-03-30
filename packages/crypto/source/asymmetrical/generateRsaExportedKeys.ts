import {
  CryptoEffects,
  ENCRYPT_AND_DECRYPT,
  ExportedKeyPair,
  RSA_PARAMS,
  stringToArrayBuffer,
} from '../common'
import { exportKeyPair, generateKey } from '../effects'

/**
 * Generates an exported key pair. WARNING :: be very careful about what you do with this KeyPair. We highly
 * recommend encrypting them with another CryptoKey that never leaves memory and can be derived by user-supplied info.
 */
export function* generateRsaExportedKeys(): CryptoEffects<unknown, ExportedKeyPair> {
  // Generate a one-off extractable RSA key pair to allow exporting for encryption
  const exportableKey = yield* generateKey(RSA_PARAMS, true, ENCRYPT_AND_DECRYPT)
  const jsonWebKeyPair = yield* exportKeyPair(exportableKey)

  return {
    privateKey: stringToArrayBuffer(JSON.stringify(jsonWebKeyPair.privateKey)),
    publicKey: stringToArrayBuffer(JSON.stringify(jsonWebKeyPair.publicKey)),
  }
}
