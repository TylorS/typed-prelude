import { combine, Computation, fail, TypeOf } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { fromJust, isNothing } from '@typed/maybe'
import { Tuple } from '@typed/tuple'
import { CryptoFailure, EncryptedKeyPair, EncryptionEnv } from '../common'
import { decryptEncryptedKeys, exportedKeysToEncryptedKeyPair } from '../effects'
import { deriveAesKey, DeriveAesKeyOptions } from '../symmetrical'
import { sendAuthEvent } from './AuthChannel'
import { getSavedEncryptedKeyPair } from './helpers'

export interface ChangePasswordOptions extends DeriveAesKeyOptions {
  readonly newPassword: string
}

export type ChangePassword = Computation<
  [ChangePasswordOptions],
  EncryptionEnv & HookEnv,
  Tuple<CryptoKey, EncryptedKeyPair>
>

export function* changePassword(options: ChangePasswordOptions): TypeOf<ChangePassword> {
  const aesKey = yield* deriveAesKey(options)
  const savedKeys = yield* getSavedEncryptedKeyPair(aesKey, options.salt.toString())

  if (isNothing(savedKeys)) {
    return yield* fail(CryptoFailure, new Error(`Unable to retrieve encrypted keys from storage`))
  }

  const encryptedKeyPair = yield* exportedKeysToEncryptedKeyPair(
    ...(yield* combine(
      deriveAesKey({ ...options, password: options.newPassword }),
      decryptEncryptedKeys(aesKey, fromJust(savedKeys).encrypted),
    )),
  )

  yield* sendAuthEvent(['auth.changePassword', aesKey, encryptedKeyPair])

  return [aesKey, encryptedKeyPair] as const
}
