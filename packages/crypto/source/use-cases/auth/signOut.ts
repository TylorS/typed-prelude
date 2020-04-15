import { Computation, TypeOf } from '@typed/effects'
import { HookEnv, HooksManagerEnv } from '@typed/hooks'
import { debug } from '@typed/logger'
import { EncryptionEnv } from '../../common'
import { sendAuthEvent } from './AuthChannel'

export interface SignOut extends Computation<[], EncryptionEnv & HookEnv & HooksManagerEnv, void> {}

export function* signOut(): TypeOf<SignOut> {
  yield* debug(`Signing Out...`)

  yield* sendAuthEvent(['auth.signOut'])

  yield* debug(`Signed Out.`)
}
