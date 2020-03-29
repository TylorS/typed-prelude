import { CryptoEffects, ExportedKeyPair, HASH } from '../common'
import { importKey } from '../effects'

export function* importExportedKeyPair(
  keyPair: ExportedKeyPair,
): CryptoEffects<unknown, CryptoKeyPair> {
  const params = {
    name: 'RSA-OAEP',
    hash: HASH,
  }
  const publicKey = yield* importKey('raw', keyPair.publicKey, params, false, ['encrypt'])
  const privateKey = yield* importKey('raw', keyPair.privateKey, params, false, ['decrypt'])

  return {
    publicKey,
    privateKey,
  }
}
