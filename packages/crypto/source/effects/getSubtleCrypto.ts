import { Effects, get } from '@typed/effects'
import { CryptoEnv } from '../common'

export function* getSubtleCrypto(): Effects<CryptoEnv, SubtleCrypto> {
  const { crypto } = yield* get<CryptoEnv>()

  return crypto.subtle
}
