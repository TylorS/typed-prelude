import { Computation, TypeOf } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { EncryptionEnv } from '../../common'
import { sendAuthEvent } from './AuthChannel'

export interface SignOut extends Computation<[], EncryptionEnv & HookEnv, void> {}

export function* signOut(): TypeOf<SignOut> {
  yield* sendAuthEvent(['auth.signOut'])
}
