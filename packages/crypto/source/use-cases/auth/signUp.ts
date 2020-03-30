import { Computation, TypeOf } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { debug } from '@typed/logger'
import { fromJust, isJust } from '@typed/maybe'
import { Tuple } from '@typed/tuple'
import { generateEncryptedRsaKeyPair } from '../../asymmetrical'
import { EncryptedKeyPair, EncryptionEnv } from '../../common'
import { deriveAesKey, DeriveAesKeyOptions } from '../../symmetrical'
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
  yield* debug(`Signing Up...`)

  const aesKey = yield* deriveAesKey(deriveAesKeyOptions)
  const keyPrefix = deriveAesKeyOptions.salt.toString()
  const savedKeys = yield* getSavedEncryptedKeyPair(aesKey, keyPrefix)

  // Sign in if we were able to decrypt saved keys
  if (isJust(savedKeys)) {
    yield* debug(`Signing Up: Found Saved Keys!`)

    const encryptedKeyPair = fromJust(savedKeys)

    yield* sendAuthEvent(['auth.signIn', aesKey, encryptedKeyPair])

    return [aesKey, encryptedKeyPair] as const
  }

  yield* debug(`Signing Up: Generating new RSA Public/Private Keys...`)

  const encryptedKeyPair = yield* generateEncryptedRsaKeyPair(aesKey)

  yield* saveEncryptedKeyPair(keyPrefix, encryptedKeyPair)
  yield* sendAuthEvent(['auth.signUp', aesKey, encryptedKeyPair])

  yield* debug(`Signed Up!`)

  return [aesKey, encryptedKeyPair] as const
}
