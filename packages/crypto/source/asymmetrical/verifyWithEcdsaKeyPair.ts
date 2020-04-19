import { CryptoEffects, ECDSA_PARAMS } from '../common'
import { verify } from '../effects'

export function* verifyWithEcdsaKeyPair(
  data: ArrayBuffer,
  signature: ArrayBuffer,
  keyPair: CryptoKeyPair,
): CryptoEffects<unknown, boolean> {
  return yield* verify(ECDSA_PARAMS, keyPair.publicKey, signature, data)
}
