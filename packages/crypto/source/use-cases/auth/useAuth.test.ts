import { createIndexedDb } from '@typed/asyncstorage'
import { createServerIndexedDbFactory } from '@typed/asyncstorage'
import { Fail, runEffects, runWith } from '@typed/effects'
import { createHookEnvironment, createHooksManager } from '@typed/hooks'
import { createConsoleLogger, LogLevel } from '@typed/logger'
import { isJust, isNothing } from '@typed/maybe'
import { describe, given, it, Test, TYPED_TEST } from '@typed/test'
import { createVirtualTimer } from '../../../../timer/source'
import { NodeGenerator } from '../../../../uuid/source'
import { AesEncryptedData, createServerCrypto, CryptoFailure } from '../../common'
import { orCryptoFailure } from './helpers'
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
            }

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
          logger: createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: timer }),
        })
      }),
    ]),
  ]),

  describe.only(`signOut`, [
    given(`salt, password, and iterations`, [
      it(`generates new keys for the user`, ({ equal, ok }, done) => {
        const salt = 'test@example.com'
        const password = 'test'
        const iterations = 10 // Use WAAAAAAYYY more in production
        const hookEnvironment = createHookEnvironment(createHooksManager(new NodeGenerator()))
        const timer = createVirtualTimer()
        const i = 100

        function* testSigningUp() {
          const a = yield* useAuth()

          timer.progressTimeBy(i)

          equal([], a.availableSalts)
          ok(isNothing(a.encryptedKeyPair))

          yield* signUp({ salt, password, iterations })

          const { availableSalts, encryptedKeyPair } = yield* useAuth()

          equal([salt], availableSalts)
          ok(isJust(encryptedKeyPair))
        }

        function* testSigningOut() {
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

            const AesEnv = {
              aesEncryptedKeyStorage,
              aesStorageKeys: {
                publicKey: 'publicKey',
                privateKey: 'privateKey',
              },
            }

            yield* runWith(testSigningUp(), AesEnv)
            yield* hookEnvironment.resetId()
            setTimeout(() => {
              timer.progressTimeBy(i)
            }, i)
            yield* runWith(testSigningOut(), AesEnv)

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
          logger: createConsoleLogger({ logLevel: LogLevel.DEBUG, clock: timer }),
        })
      }),
    ]),
  ]),
])

export const test: Test = {
  ...useAuthTests,
  [TYPED_TEST]: { ...useAuthTests[TYPED_TEST], timeout: 5000 },
}
