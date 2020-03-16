import { Effect } from '@typed/effects'
import { Either } from '@typed/either'
import { RSA_PARAMS } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { decrypt } from './effects'

export function* decryptWithRsaKeyPair(
  keyPair: CryptoKeyPair,
  encrypted: ArrayBuffer,
): Effect<CryptoEnv, Either<Error, ArrayBuffer>> {
  return yield* decrypt({ name: RSA_PARAMS.name }, keyPair.privateKey, encrypted)
}
