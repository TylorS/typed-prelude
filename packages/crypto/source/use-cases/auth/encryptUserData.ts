import { Computation, fail, TypeOf } from '@typed/effects'
import { HookEnv, HooksManagerEnv } from '@typed/hooks'
import { fromJust, isNothing } from '@typed/maybe'
import { encryptWithRsaKeyPair } from '../../asymmetrical'
import { CryptoFailure, EncryptionEnv } from '../../common'
import { useAuthChannel } from './AuthChannel'

export interface EncryptUserData
  extends Computation<[ArrayBuffer], EncryptionEnv & HookEnv & HooksManagerEnv, ArrayBuffer> {}

export function* encryptUserData(data: ArrayBuffer): TypeOf<EncryptUserData> {
  const { encryptedKeyPair } = yield* useAuthChannel()

  if (isNothing(encryptedKeyPair)) {
    return yield* fail(CryptoFailure, new Error(`Unable to retrieve encrypted key pair`))
  }

  return yield* encryptWithRsaKeyPair(fromJust(encryptedKeyPair), data)
}
