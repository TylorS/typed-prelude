import { Effect } from '@typed/effects'
import { Either, map } from '@typed/either'
import { AES_ALGORITHM, AES_IV_SIZE } from './constants'
import { CryptoEnv } from './CryptoEnv'
import { encrypt } from './effects'
import { getRandomValues } from './getRandomValues'
import { AesEncryptedData } from './types'

export function* encryptWithAesKey(
  aesKey: CryptoKey,
  data: ArrayBuffer,
): Effect<CryptoEnv, Either<Error, AesEncryptedData>> {
  const iv = yield* getRandomValues(new Uint8Array(AES_IV_SIZE))
  const errorOrEncryptedData = yield* encrypt(
    {
      name: AES_ALGORITHM,
      iv,
    },
    aesKey,
    data,
  )

  return map(encryptedData => [encryptedData, iv] as const, errorOrEncryptedData)
}
