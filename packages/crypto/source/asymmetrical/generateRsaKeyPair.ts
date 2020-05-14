import { CryptoEffects, ENCRYPT_AND_DECRYPT, RSA_PARAMS } from '../common'
import { generateKey } from '../effects/subtle'

export function* generateRsaKeyPair(): CryptoEffects<unknown, CryptoKeyPair> {
  return yield* generateKey(RSA_PARAMS, false, ENCRYPT_AND_DECRYPT)
}
