import { ENCRYPT_AND_DECRYPT, RSA_PARAMS } from '../common'
import { generateKey } from '../effects/subtle'

export function* generateRsaKeyPair() {
  return yield* generateKey(RSA_PARAMS, false, ENCRYPT_AND_DECRYPT)
}
