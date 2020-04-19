import { ECDSA_KEY_PARAMS, SIGN_AND_VERIFY } from '../common'
import { generateKey } from '../effects'

export function* generateEcdsaKeyPair() {
  return yield* generateKey(ECDSA_KEY_PARAMS, false, SIGN_AND_VERIFY)
}
