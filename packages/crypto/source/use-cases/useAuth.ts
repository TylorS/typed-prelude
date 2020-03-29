import { Computation, Effects, get, runEffects, TypeOf } from '@typed/effects'
import { HookEnv, InitialState, useEffect } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { Subscription } from '@typed/subscription'
import { EncryptedKeyPair, EncryptionEnv } from '../common'
import { AuthEvent, AuthInfo, provideAuthChannel } from './AuthChannel'

export interface UseAuth
  extends Computation<
    [InitialState<EncryptionEnv, AuthInfo>],
    EncryptionEnv & HookEnv,
    {
      readonly availableSalts: ReadonlyArray<string>
      readonly encryptedKeyPair: Maybe<EncryptedKeyPair>
    }
  > {}

// Meant to be used near the top of your application
export function* useAuth(initial?: InitialState<EncryptionEnv, AuthInfo>): TypeOf<UseAuth> {
  const [getAuthInfo, updateAuthInfo] = yield* provideAuthChannel(initial)
  const { encryptedKeyPair, authEvents, availableSalts } = yield* getAuthInfo()

  yield* useEffect(listenForEvents, [authEvents, updateAuthInfo, yield* get()])

  return { availableSalts, encryptedKeyPair } as const
}

function listenForEvents(
  subscription: Subscription<AuthEvent, AuthEvent>,
  updateAuthInfo: (updateFn: Arity1<AuthInfo, AuthInfo>) => Effects<EncryptionEnv, AuthInfo>,
  env: EncryptionEnv,
) {
  function* processEvent(event: AuthEvent) {
    if (event[0] === 'auth.signOut') {
      return yield* updateAuthInfo(info => ({
        ...info,
        aesKey: Nothing,
        encryptedKeyPair: Nothing,
      }))
    }

    return yield* updateAuthInfo(info => ({
      ...info,
      aesKey: Just.of(event[1]),
      encryptedKeyPair: Just.of(event[2]),
    }))
  }

  return subscription.subscribe(authEvent => runEffects(processEvent(authEvent), env))
}
