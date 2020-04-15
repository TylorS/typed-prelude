import { Computation, fail, TypeOf } from '@typed/effects'
import { HookEnv, HooksManagerEnv } from '@typed/hooks'
import { debug, error } from '@typed/logger'
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
    EncryptionEnv & HookEnv & HooksManagerEnv,
    Tuple<CryptoKey, EncryptedKeyPair>
  > {}

export function* signIn({ ...deriveAesKeyOptions }: SignInOptions): TypeOf<SignIn> {
  yield* debug(`Signing In...`)

  const aesKey = yield* deriveAesKey(deriveAesKeyOptions)
  const savedKeys = yield* getSavedEncryptedKeyPair(aesKey, deriveAesKeyOptions.salt.toString())

  if (isNothing(savedKeys)) {
    const message = `Unable to retrieve encrypted keys from storage`

    yield* error(`Signing In: ${message}`)

    return yield* fail(CryptoFailure, new Error(message))
  }

  const encryptedKeyPair = fromJust(savedKeys)

  yield* sendAuthEvent(['auth.signIn', aesKey, encryptedKeyPair])

  yield* debug(`Signing In: Success`)

  return [aesKey, encryptedKeyPair] as const
}
