import { AES_ALGORITHM } from './constants'
import { decrypt } from './effects'

export function* decryptWithAesKey(aesKey: CryptoKey, data: ArrayBuffer, iv: Uint8Array) {
  return yield* decrypt(
    {
      name: AES_ALGORITHM,
      iv,
    },
    aesKey,
    data,
  )
}
