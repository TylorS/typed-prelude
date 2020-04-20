import { arrayBufferToString, CryptoEffects, ExportedKeyPair, JsonWebKeyPair } from '../common'
import { importKey } from '../effects/subtle'

export function* importExportedKeyPair(
  params:
    | RsaHashedImportParams
    | EcKeyImportParams
    | HmacImportParams
    | DhImportKeyParams
    | AesKeyAlgorithm,
  keyPair: ExportedKeyPair,
): CryptoEffects<unknown, CryptoKeyPair> {
  const jsonWebKeyPair: JsonWebKeyPair = {
    publicKey: JSON.parse(arrayBufferToString(keyPair.publicKey)),
    privateKey: JSON.parse(arrayBufferToString(keyPair.privateKey)),
  }
  const publicKey = yield* importKey('jwk', jsonWebKeyPair.publicKey, params, false, ['encrypt'])
  const privateKey = yield* importKey('jwk', jsonWebKeyPair.privateKey, params, false, ['decrypt'])

  return {
    publicKey,
    privateKey,
  }
}
