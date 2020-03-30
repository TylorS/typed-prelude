import {
  AES_ALGORITHM,
  CryptoEffects,
  DEFAULT_ITERATIONS,
  deriveSalt,
  ENCRYPT_AND_DECRYPT,
  EXTRACTABLE,
  HASH,
  stringToArrayBuffer,
} from '../common'
import { deriveKey, importKey } from '../effects/subtle'

export interface DeriveAesKeyOptions {
  readonly password: string
  readonly salt: string | number
  readonly iterations?: number
}

/**
 * Derives a Symmetrical CryptoKey from your password and a salt (e.g. email)
 */
export function* deriveAesKey(options: DeriveAesKeyOptions): CryptoEffects<unknown, CryptoKey> {
  const { salt, password, iterations = DEFAULT_ITERATIONS } = options
  const params: Pbkdf2Params = {
    name: 'PBKDF2',
    hash: HASH,
    iterations,
    salt: deriveSalt(salt),
  }
  const cryptoKey = yield* importKey('raw', stringToArrayBuffer(password), params, false, [
    'deriveKey',
  ])

  return yield* deriveKey(
    params,
    cryptoKey,
    { name: AES_ALGORITHM, hash: HASH, length: 256 },
    EXTRACTABLE,
    ENCRYPT_AND_DECRYPT,
  )
}
