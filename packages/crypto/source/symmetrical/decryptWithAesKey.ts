import { AES_ALGORITHM, CryptoEffects } from '../common'
import { decrypt } from '../effects/subtle'

export function* decryptWithAesKey(
  aesKey: CryptoKey,
  data: ArrayBuffer,
  iv: Uint8Array,
): CryptoEffects<unknown, ArrayBuffer> {
  return yield* decrypt(
    {
      name: AES_ALGORITHM,
      iv,
    },
    aesKey,
    data,
  )
}
