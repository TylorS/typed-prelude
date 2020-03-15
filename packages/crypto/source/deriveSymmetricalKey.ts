import { Effect } from '@typed/effects'
import { Either, fromRight, isLeft } from '@typed/either'
import { CryptoEnv } from './CryptoEnv'
import { deriveSalt } from './deriveSalt'
import { deriveKey, importKey } from './effects'
import { stringToArrayBuffer } from './stringToArrayBuffer'

const DEFAULT_ITERATIONS = 2000
const HASH = 'SHA-512'
const EXTRACTABLE = false

export interface SymmetricalKeyOptions {
  readonly password: string
  readonly salt: string

  readonly iterations?: number
  readonly extractable?: boolean
  readonly hash?: string
}

/**
 * Derives a Symmetrical CryptoKey from your password and a salt (e.g. email)
 */
export function* deriveSymmetricalKey(
  options: SymmetricalKeyOptions,
): Effect<CryptoEnv, Either<Error, CryptoKey>> {
  const {
    salt,
    password,
    iterations = DEFAULT_ITERATIONS,
    extractable = EXTRACTABLE,
    hash = HASH,
  } = options
  const params: Pbkdf2Params = {
    name: 'PBKDF2',
    hash,
    iterations,
    salt: yield* deriveSalt(salt),
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
    { name: 'AES-GCM', hash },
    extractable,
    ['encrypt', 'decrypt'],
  )
}
