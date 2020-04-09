import { AesEncryptedData, AES_ALGORITHM, AES_IV_SIZE, CryptoEffects } from '../common'
import { getRandomValues } from '../effects/getRandomValues'
import { encrypt } from '../effects/subtle'

export function* encryptWithAesKey(
  aesKey: CryptoKey,
  data: ArrayBuffer,
): CryptoEffects<unknown, AesEncryptedData> {
  const iv = yield* getRandomValues(new Uint8Array(AES_IV_SIZE))
  const encryptedData = yield* encrypt(
    {
      name: AES_ALGORITHM,
      iv,
    },
    aesKey,
    data,
  )

  return [encryptedData, iv] as const
}
