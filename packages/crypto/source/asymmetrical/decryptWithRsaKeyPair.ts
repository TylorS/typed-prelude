import { CryptoEffects, RSA_PARAMS } from '../common'
import { decrypt } from '../effects'

export function* decryptWithRsaKeyPair(
  keyPair: CryptoKeyPair,
  encrypted: ArrayBuffer,
): CryptoEffects<unknown, ArrayBuffer> {
  return yield* decrypt({ name: RSA_PARAMS.name }, keyPair.privateKey, encrypted)
}
