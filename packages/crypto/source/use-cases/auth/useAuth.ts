import { Computation, Effects, get, runEffects, TimerEnv, TypeOf } from '@typed/effects'
import { HookEnv, InitialState, useDepChange, useEffect, useMemoEffect } from '@typed/hooks'
import { ArgsOf, Arity1 } from '@typed/lambda'
import { debug } from '@typed/logger'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { Subscription } from '@typed/subscription'
import { EncryptedKeyPair, EncryptionEnv } from '../../common'
import { AuthEvent, AuthInfo, provideAuthChannel } from './AuthChannel'
import { getAvailableSalts } from './helpers'

const empty: [] = []

export interface UseAuth
  extends Computation<
    [InitialState<EncryptionEnv, AuthInfo>],
    EncryptionEnv & HookEnv & TimerEnv,
    {
      readonly availableSalts: ReadonlyArray<string>
      readonly encryptedKeyPair: Maybe<EncryptedKeyPair>
    }
  > {}

// Meant to be used near the top of your application
export function* useAuth(initial?: InitialState<EncryptionEnv, AuthInfo>): TypeOf<UseAuth> {
  const availableSalts = yield* getAvailableSalts()
  const availableSaltsUpdated = yield* useDepChange(availableSalts, false)
  const [getAuthInfo, updateAuthInfo] = yield* provideAuthChannel(initial)
  const listenForEventsArgs = yield* useMemoEffect(function*() {
    const env = yield* get<EncryptionEnv>()
    const { authEvents } = yield* getAuthInfo()

    return [authEvents, updateAuthInfo, env] as ArgsOf<typeof listenForEvents>
  }, empty)

  yield* useEffect(listenForEvents, listenForEventsArgs)

  if (availableSaltsUpdated) {
    yield* updateAuthInfo(info => ({ ...info, availableSalts }))
  }

  const { encryptedKeyPair } = yield* getAuthInfo()

  return { availableSalts, encryptedKeyPair }
}

function listenForEvents(
  subscription: Subscription<AuthEvent, AuthEvent>,
  updateAuthInfo: (updateFn: Arity1<AuthInfo, AuthInfo>) => Effects<EncryptionEnv, AuthInfo>,
  env: EncryptionEnv,
) {
  function* processEvent(event: AuthEvent) {
    yield* debug(`Processing Auth Event: ${event}`)

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
