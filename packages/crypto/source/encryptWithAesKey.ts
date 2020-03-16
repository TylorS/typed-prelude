import { Effect } from '@typed/effects'
import { Either, map } from '@typed/either'
import { AES_ALGORITHM, AES_IV_SIZE } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { encrypt } from './effects'
import { getRandomValues } from './getRandomValues'
import { EncryptedData } from './types'

export function* encryptWithAesKey(
  aesKey: CryptoKey,
  data: ArrayBuffer,
): Effect<CryptoEnv, Either<Error, EncryptedData>> {
  const iv = yield* getRandomValues(new Uint8Array(AES_IV_SIZE))
  const errorOrEncryptedData = yield* encrypt(
    {
      name: AES_ALGORITHM,
      // Always generate a new iv every time your encrypt!
      // Recommended to use 12 bytes length
      iv,
    },
    aesKey,
    data,
  )

  return map(encryptedData => [encryptedData, iv] as const, errorOrEncryptedData)
}
