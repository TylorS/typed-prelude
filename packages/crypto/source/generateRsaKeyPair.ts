import { ENCRYPT_AND_DECRYPT, HASH } from './constants'
import { generateKey } from './effects'

export function* generateRsaKeyPair() {
  const params: RsaHashedKeyGenParams = {
    name: 'RSA-OAEP',
    modulusLength: 2048, // can be 1024, 2048, or 4096
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: HASH,
  }
  return yield* generateKey(params, false, ENCRYPT_AND_DECRYPT)
}
