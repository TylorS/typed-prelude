import { combine } from '@typed/effects'
import { fromRight, isLeft } from '@typed/either'
import { decryptEncryptedKeys } from './decryptEncryptedKeys'
import { deriveAesKey, DeriveAesKeyOptions } from './deriveAesKey'
import { exportedKeysToEncryptedKeyPair } from './exportedKeysToEncryptedKeyPair'
import { AesEncryptedKeys } from './types'

export interface ChangePasswordOptions extends DeriveAesKeyOptions {
  readonly newPassword: string
  readonly encryptedKeys: AesEncryptedKeys
}

export function* changePassword(options: ChangePasswordOptions) {
  const errorOrKey = yield* deriveAesKey(options)

  if (isLeft(errorOrKey)) {
    return errorOrKey
  }

  const { encryptedKeys } = options
  const currentAesKey = fromRight(errorOrKey)
  const [errorOrDecrypted, errorOrNewAesKey] = yield* combine(
    decryptEncryptedKeys(currentAesKey, encryptedKeys),
    deriveAesKey({ ...options, password: options.newPassword }),
  )

  if (isLeft(errorOrDecrypted)) {
    return errorOrDecrypted
  }

  if (isLeft(errorOrNewAesKey)) {
    return errorOrNewAesKey
  }

  return yield* exportedKeysToEncryptedKeyPair(
    fromRight(errorOrNewAesKey),
    fromRight(errorOrDecrypted),
  )
}
