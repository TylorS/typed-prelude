import { Effects, get } from '@typed/effects'
import { CryptoEnv } from '../common'

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
>(input: A): Effects<CryptoEnv, A> {
  const { crypto } = yield* get<CryptoEnv>()

  return crypto.getRandomValues(input)
}
