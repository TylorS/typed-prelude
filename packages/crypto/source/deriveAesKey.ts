import { Effect } from '@typed/effects'
import { Either, fromRight, isLeft } from '@typed/either'
import {
  AES_ALGORITHM,
  DEFAULT_ITERATIONS,
  ENCRYPT_AND_DECRYPT,
  EXTRACTABLE,
  HASH,
} from './constants'
import { CryptoEnv } from './CryptoEnv'
import { deriveSalt } from './deriveSalt'
import { deriveKey, importKey } from './effects'
import { stringToArrayBuffer } from './stringToArrayBuffer'

export interface DeriveAesKeyOptions {
  readonly password: string
  readonly salt: string | number
  readonly iterations?: number
}

/**
 * Derives a Symmetrical CryptoKey from your password and a salt (e.g. email)
 */
export function* deriveAesKey(
  options: DeriveAesKeyOptions,
): Effect<CryptoEnv, Either<Error, CryptoKey>> {
  const { salt, password, iterations = DEFAULT_ITERATIONS } = options
  const params: Pbkdf2Params = {
    name: 'PBKDF2',
    hash: HASH,
    iterations,
    salt: deriveSalt(salt),
  }
  const errorOrCryptoKey = yield* importKey('raw', stringToArrayBuffer(password), params, false, [
    'deriveKey',
  ])

  if (isLeft(errorOrCryptoKey)) {
    return errorOrCryptoKey
  }

  return yield* deriveKey(
    params,
    fromRight(errorOrCryptoKey),
    { name: AES_ALGORITHM, hash: HASH, length: 256 },
    EXTRACTABLE,
    ENCRYPT_AND_DECRYPT,
  )
}
