import { arrayBufferToString, CryptoEffects, ExportedKeyPair, JsonWebKeyPair } from '../common'
import { importKey } from '../effects/subtle'
import { combine } from '@typed/effects'

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
  const [publicKey, privateKey] = yield* combine(
    importKey(
      'jwk',
      jsonWebKeyPair.publicKey,
      params,
      false,
      jsonWebKeyPair.publicKey.key_ops || [],
    ),
    importKey(
      'jwk',
      jsonWebKeyPair.privateKey,
      params,
      false,
      jsonWebKeyPair.privateKey.key_ops || [],
    ),
  )

  return {
    publicKey,
    privateKey,
  }
}
