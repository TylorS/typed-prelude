import { CryptoEffects, ECDSA_PARAMS } from '../common'
import { sign } from '../effects'

export function* signWithEcdsaKeyPair(
  data: ArrayBuffer,
  privateKey: CryptoKey,
): CryptoEffects<unknown, ArrayBuffer> {
  return yield* sign(ECDSA_PARAMS, privateKey, data)
}
