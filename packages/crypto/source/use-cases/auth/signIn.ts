import { Computation, fail, TypeOf } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { fromJust, isNothing } from '@typed/maybe'
import { Tuple } from '@typed/tuple'
import { CryptoFailure, EncryptedKeyPair, EncryptionEnv } from '../../common'
import { deriveAesKey, DeriveAesKeyOptions } from '../../symmetrical'
import { sendAuthEvent } from './AuthChannel'
import { getSavedEncryptedKeyPair } from './helpers'

export type SignInOptions = DeriveAesKeyOptions & {}

export interface SignIn
  extends Computation<
    [SignInOptions],
    EncryptionEnv & HookEnv,
    Tuple<CryptoKey, EncryptedKeyPair>
  > {}

export function* signIn({ ...deriveAesKeyOptions }: SignInOptions): TypeOf<SignIn> {
  const aesKey = yield* deriveAesKey(deriveAesKeyOptions)
  const savedKeys = yield* getSavedEncryptedKeyPair(aesKey, deriveAesKeyOptions.salt.toString())

  if (isNothing(savedKeys)) {
    return yield* fail(CryptoFailure, new Error(`Unable to retrieve encrypted keys from storage`))
  }

  const encryptedKeyPair = fromJust(savedKeys)

  yield* sendAuthEvent(['auth.signIn', aesKey, encryptedKeyPair])

  return [aesKey, encryptedKeyPair] as const
}
