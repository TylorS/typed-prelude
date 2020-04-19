import { CryptoEffects, ECDSA_PARAMS } from '../common'
import { verify } from '../effects'

export function* verifyWithEcdsaKeyPair(
  data: ArrayBuffer,
  signature: ArrayBuffer,
  publicKey: CryptoKey,
): CryptoEffects<unknown, boolean> {
  return yield* verify(ECDSA_PARAMS, publicKey, signature, data)
}
