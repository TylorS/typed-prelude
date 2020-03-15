import { Effect } from '@typed/effects/source'
import { CryptoEnv } from './CryptoEnv'
import { getRandomValues } from './getRandomValues'
import { stringToArrayBuffer } from './stringToArrayBuffer'

export function* deriveSalt(sizeOrValue: string | number): Effect<CryptoEnv, Uint8Array> {
  const array =
    typeof sizeOrValue === 'string'
      ? new Uint8Array(stringToArrayBuffer(sizeOrValue))
      : new Uint8Array(sizeOrValue)
  const salt = yield* getRandomValues(array)

  return salt! as Uint8Array
}
