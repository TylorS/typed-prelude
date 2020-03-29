import {
  Channel,
  createChannel,
  HookEnv,
  InitialState,
  provideChannel,
  ProvideChannel,
  useChannel,
} from '@typed/hooks'
import { Maybe, Nothing } from '@typed/maybe'
import { createSubscription, Subscription } from '@typed/subscription'
import { EncryptedKeyPair, EncryptionEffects, EncryptionEnv } from '../common'
import { getAvailableSalts } from './helpers'

export type AuthInfo = {
  readonly availableSalts: ReadonlyArray<string> // List of saved salts. Can be used to make more streamlined sign in experience.
  readonly aesKey: Maybe<CryptoKey> // AES Key, derived from the user's password + salt
  readonly encryptedKeyPair: Maybe<EncryptedKeyPair> // RSA keys in decrypted form, but non-extractable, that can be used to encrypt/decrypt data
  readonly authEvents: Subscription<AuthEvent> // Subscription to share with anyone interested in auth events
}

export type AuthEvent =
  | readonly ['auth.signUp', CryptoKey, EncryptedKeyPair]
  | readonly ['auth.changePassword', CryptoKey, EncryptedKeyPair]
  | readonly ['auth.signIn', CryptoKey, EncryptedKeyPair]
  | readonly ['auth.signOut']

export const AuthChannel: Channel<EncryptionEnv, AuthInfo> = createChannel(function*() {
  const availableSalts = yield* getAvailableSalts()

  return {
    availableSalts,
    aesKey: Nothing,
    encryptedKeyPair: Nothing,
    authEvents: createSubscription<AuthEvent>(),
  }
})

export const useAuthChannel = () => useChannel(AuthChannel)
export const provideAuthChannel = (
  initial?: InitialState<EncryptionEnv, AuthInfo>,
): EncryptionEffects<HookEnv, ProvideChannel<EncryptionEnv, AuthInfo>> =>
  provideChannel(AuthChannel, initial)

export function* sendAuthEvent(event: AuthEvent) {
  const { authEvents } = yield* useAuthChannel()

  return authEvents.publish(event)
}
