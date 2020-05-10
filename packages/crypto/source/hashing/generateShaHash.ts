import { CryptoEffects } from '../common'
import { digest } from '../effects'

export type ShaHashSize = 1 | 256 | 348 | 512

/**
 * Generate a SHA Hash of a given size.
 * Note: SHA-1 is *NOT* cryptographically secure.
 */
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
