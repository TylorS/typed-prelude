import { CryptoEffects } from '../common'
import { digest } from '../effects'

// Does not include 1 because it is not cryptographically safe
export type ShaHashSize = 256 | 348 | 512

export function* generateShaHash(
  size: ShaHashSize,
  data: ArrayBuffer,
): CryptoEffects<unknown, ArrayBuffer> {
  return yield* digest(
    {
      name: `SHA-${size}`,
    },
    data,
  )
}
