import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { RSA_PARAMS } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { encrypt } from './effects'

export function* encryptWithRsaKeyPair(
  keyPair: CryptoKeyPair,
  data: ArrayBuffer,
): Effect<CryptoEnv, Either<Error, ArrayBuffer>> {
  return yield* encrypt({ name: RSA_PARAMS.name }, keyPair.publicKey, data)
}
