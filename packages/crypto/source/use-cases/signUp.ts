import { Computation, TypeOf } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { fromJust, isJust } from '@typed/maybe'
import { Tuple } from '@typed/tuple'
import { generateEncryptedRsaKeyPair } from '../asymmetrical'
import { EncryptedKeyPair, EncryptionEnv } from '../common'
import { deriveAesKey, DeriveAesKeyOptions } from '../symmetrical'
import { sendAuthEvent } from './AuthChannel'
import { getSavedEncryptedKeyPair, saveEncryptedKeyPair } from './helpers'

export type SignUpOptions = DeriveAesKeyOptions & {}

export interface SignUp
  extends Computation<
    [SignUpOptions],
    EncryptionEnv & HookEnv,
    Tuple<CryptoKey, EncryptedKeyPair>
  > {}

export function* signUp({ ...deriveAesKeyOptions }: SignUpOptions): TypeOf<SignUp> {
  const aesKey = yield* deriveAesKey(deriveAesKeyOptions)
  const savedKeys = yield* getSavedEncryptedKeyPair(aesKey, deriveAesKeyOptions.salt.toString())

  // Sign in if we were able to decrypt saved keys
  if (isJust(savedKeys)) {
    const encryptedKeyPair = fromJust(savedKeys)

    yield* sendAuthEvent(['auth.signIn', aesKey, encryptedKeyPair])

    return [aesKey, encryptedKeyPair] as const
  }

  const encryptedKeyPair = yield* generateEncryptedRsaKeyPair(aesKey)

  yield* saveEncryptedKeyPair(encryptedKeyPair)
  yield* sendAuthEvent(['auth.signUp', aesKey, encryptedKeyPair])

  return [aesKey, encryptedKeyPair] as const
}
