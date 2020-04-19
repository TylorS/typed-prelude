import { CryptoEffects, ECDSA_PARAMS } from '../common'
import { sign } from '../effects'

export function* signWithEcdsaKeyPair(
  data: ArrayBuffer,
  keyPair: CryptoKeyPair,
): CryptoEffects<unknown, ArrayBuffer> {
  return yield* sign(ECDSA_PARAMS, keyPair.privateKey, data)
}
