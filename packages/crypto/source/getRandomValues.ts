import { Effect, get } from '@typed/effects'
import { CryptoEnv } from './CryptoEnv'

export function* getRandomValues<
  A extends
    | Int8Array
    | Int16Array
    | Int32Array
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array
    | DataView
>(input: A): Effect<CryptoEnv, A> {
  const { crypto } = yield* get<CryptoEnv>()

  return crypto.getRandomValues(input)
}
