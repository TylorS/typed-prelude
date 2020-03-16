import { ENCRYPT_AND_DECRYPT, RSA_PARAMS } from './constants'
import { generateKey } from './effects'

export function* generateRsaKeyPair() {
  return yield* generateKey(RSA_PARAMS, false, ENCRYPT_AND_DECRYPT)
}
