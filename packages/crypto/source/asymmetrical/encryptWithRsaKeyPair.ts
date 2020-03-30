import { CryptoEffects, RSA_PARAMS } from '../common'
import { encrypt } from '../effects/subtle'

export function* encryptWithRsaKeyPair(
  keyPair: CryptoKeyPair,
  data: ArrayBuffer,
): CryptoEffects<unknown, ArrayBuffer> {
  return yield* encrypt({ name: RSA_PARAMS.name }, keyPair.publicKey, data)
}
