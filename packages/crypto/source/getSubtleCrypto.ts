import { Effect, get } from '@typed/effects'
import { CryptoEnv } from './CryptoEnv'

export function* getSubtleCrypto(): Effect<CryptoEnv, SubtleCrypto> {
  const { crypto } = yield* get<CryptoEnv>()

  return crypto.subtle
}
