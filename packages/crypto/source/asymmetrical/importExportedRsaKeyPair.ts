import {
  arrayBufferToString,
  CryptoEffects,
  ExportedKeyPair,
  HASH,
  JsonWebKeyPair,
} from '../common'
import { importKey } from '../effects'

export function* importExportedKeyPair(
  keyPair: ExportedKeyPair,
): CryptoEffects<unknown, CryptoKeyPair> {
  const params = {
    name: 'RSA-OAEP',
    hash: HASH,
  }
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
