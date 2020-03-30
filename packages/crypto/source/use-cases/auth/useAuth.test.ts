import { createIndexedDb } from '@typed/asyncstorage'
import { createServerIndexedDbFactory } from '@typed/asyncstorage'
import { Fail, runEffects, runWith, TimerEnv, TypeOf } from '@typed/effects'
import { createHookEnvironment, createHooksManager, HookEffects } from '@typed/hooks'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { isJust, isNothing } from '@typed/maybe'
import { describe, given, it, Test, TYPED_TEST } from '@typed/test'
import { createVirtualTimer } from '../../../../timer/source'
import { NodeGenerator } from '../../../../uuid/source'
import {
  AesEncryptedData,
  AesKeyStorage,
  createServerCrypto,
  CryptoFailure,
  EncryptionEnv,
} from '../../common'
import { orCryptoFailure } from './helpers'
import { signIn } from './signIn'
import { signOut } from './signOut'
import { signUp } from './signUp'
import { useAuth } from './useAuth'

const useAuthTests = describe(`useAuth`, [
  describe(`signUp`, [
    given(`salt, password, and iterations`, [
      it(`generates new keys for the user`, ({ equal, ok }, done) => {
        const salt = 'test@example.com'
        const password = 'test'
        const iterations = 10 // Use WAAAAAAYYY more in production
        const hookEnvironment = createHookEnvironment(createHooksManager(new NodeGenerator()))
        const timer = createVirtualTimer()
        const i = 100

        function* test() {
          const a = yield* useAuth()

          timer.progressTimeBy(i) // Wait for useEffect to start

          equal([], a.availableSalts)
          ok(isNothing(a.encryptedKeyPair))

          yield* signUp({ salt, password, iterations })

          const { availableSalts, encryptedKeyPair } = yield* useAuth()

          equal([salt], availableSalts)
          ok(isJust(encryptedKeyPair))
        }

        function* setup() {
          try {
            const aesEncryptedKeyStorage = yield* orCryptoFailure(
              createIndexedDb<AesEncryptedData>('test'),
            )

            const AesEnv = {
              aesEncryptedKeyStorage,
              aesStorageKeys: {
                publicKey: 'publicKey',
                privateKey: 'privateKey',
              },
            } as const

            yield* runWith(test(), AesEnv)

            done()
          } catch (error) {
            done(error)
          }
        }

        runEffects(setup(), {
          timer,
          hookEnvironment,
          crypto: createServerCrypto(),
          [CryptoFailure]: Fail,
          indexedDbFactory: createServerIndexedDbFactory(),
          logger: createConsoleLogger({ logLevel: LogLevel.OFF, clock: timer }),
        })
      }),
    ]),
  ]),

  describe(`signOut`, [
    given(`salt, password, and iterations`, [
      it(`removes keys from the AuthChannel`, ({ equal, ok }, done) => {
        const salt = 'test@example.com'
        const password = 'test'
        const iterations = 10 // Use WAAAAAAYYY more in production
        const hookEnvironment = createHookEnvironment(createHooksManager(new NodeGenerator()))
        const timer = createVirtualTimer()
        const i = 100

        function* testSigningUp(): HookEffects<EncryptionEnv & TimerEnv, void> {
          const a = yield* useAuth()

          timer.progressTimeBy(i)

          equal([], a.availableSalts)
          ok(isNothing(a.encryptedKeyPair))

          yield* signUp({ salt, password, iterations })

          const { availableSalts, encryptedKeyPair } = yield* useAuth()

          equal([salt], availableSalts)
          ok(isJust(encryptedKeyPair))
        }

        function* testSigningOut(): HookEffects<EncryptionEnv & TimerEnv, void> {
          yield* signOut()

          const { availableSalts, encryptedKeyPair } = yield* useAuth()

          equal([salt], availableSalts)
          ok(isNothing(encryptedKeyPair))
        }

        function* setup() {
          try {
            const aesEncryptedKeyStorage = yield* orCryptoFailure(
              createIndexedDb<AesEncryptedData>('test'),
            )

            const AesEnv: AesKeyStorage = {
              aesEncryptedKeyStorage,
              aesStorageKeys: {
                publicKey: 'publicKey',
                privateKey: 'privateKey',
              },
            }

            yield* runWith(testSigningUp(), AesEnv)
            yield* hookEnvironment.resetId()
            yield* runWith(testSigningOut(), AesEnv)

            done()
          } catch (error) {
            done(error)
          }
        }

        type T = TypeOf<typeof setup>

        runEffects(setup(), {
          timer,
          hookEnvironment,
          crypto: createServerCrypto(),
          [CryptoFailure]: Fail,
          indexedDbFactory: createServerIndexedDbFactory(),
          logger: createConsoleLogger({ logLevel: LogLevel.OFF, clock: timer }),
        })
      }),
    ]),
  ]),

  describe(`signIn`, [
    it(`derives the encryption keys`, ({ equal, ok }, done) => {
      const salt = 'test@example.com'
      const password = 'test'
      const iterations = 10 // Use WAAAAAAYYY more in production
      const hookEnvironment = createHookEnvironment(createHooksManager(new NodeGenerator()))
      const timer = createVirtualTimer()
      const i = 100

      function* testSigningUp(): HookEffects<EncryptionEnv & TimerEnv, void> {
        const a = yield* useAuth()

        timer.progressTimeBy(i)

        equal([], a.availableSalts)
        ok(isNothing(a.encryptedKeyPair))

        yield* signUp({ salt, password, iterations })

        const { availableSalts, encryptedKeyPair } = yield* useAuth()

        equal([salt], availableSalts)
        ok(isJust(encryptedKeyPair))
      }

      function* testSigningOut(): HookEffects<EncryptionEnv & TimerEnv, void> {
        yield* signOut()

        const { availableSalts, encryptedKeyPair } = yield* useAuth()

        equal([salt], availableSalts)
        ok(isNothing(encryptedKeyPair))
      }

      function* testSigningIn() {
        yield* signIn({ salt, password, iterations })

        const { availableSalts, encryptedKeyPair } = yield* useAuth()

        equal([salt], availableSalts)
        ok(isJust(encryptedKeyPair))
      }

      function* setup() {
        try {
          const aesEncryptedKeyStorage = yield* orCryptoFailure(
            createIndexedDb<AesEncryptedData>('test'),
          )

          const AesEnv: AesKeyStorage = {
            aesEncryptedKeyStorage,
            aesStorageKeys: {
              publicKey: 'publicKey',
              privateKey: 'privateKey',
            },
          }

          yield* runWith(testSigningUp(), AesEnv)
          yield* hookEnvironment.resetId()
          yield* runWith(testSigningOut(), AesEnv)
          yield* hookEnvironment.resetId()
          yield* runWith(testSigningIn(), AesEnv)

          done()
        } catch (error) {
          done(error)
        }
      }

      type T = TypeOf<typeof setup>

      runEffects(setup(), {
        timer,
        hookEnvironment,
        crypto: createServerCrypto(),
        [CryptoFailure]: Fail,
        indexedDbFactory: createServerIndexedDbFactory(),
        logger: createConsoleLogger({ logLevel: LogLevel.OFF, clock: timer }),
      })
    }),
  ]),
])

export const test: Test = {
  ...useAuthTests,
  [TYPED_TEST]: { ...useAuthTests[TYPED_TEST], timeout: 5000 },
}
