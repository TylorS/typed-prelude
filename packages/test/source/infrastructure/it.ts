import { isBrowser, isFunction } from '@typed/common'
import { createServerCrypto, CryptoEnv } from '@typed/crypto'
import { Disposable } from '@typed/disposable'
import { createDomEnv, createServerDomEnv, DomEnv } from '@typed/dom'
import {
  delay,
  Effect,
  Effects,
  FiberFailure,
  fork,
  Fork,
  get,
  join,
  Join,
  race,
  runEffects,
  runWith,
} from '@typed/effects'
import { Left, Right } from '@typed/either'
import { Resume } from '@typed/env'
import { createTestHookEnvironment, HookEnv, HooksManagerEnv } from '@typed/hooks'
import { createHttpEnv, createServerHttpEnv, createTestHttpEnv, TestHttpEnv } from '@typed/http'
import { LoggerEnv } from '@typed/logger'
import { isIterable, isPromiseLike } from '@typed/logic'
import { Nothing } from '@typed/maybe'
import { VirtualTimer } from '@typed/timer'
import { uuid4, UuidEnv } from '@typed/uuid'
import { TestCase, TestConfig, TestModifier, TestName, TestResult } from '../domain/model'
import { updateModifier } from '../domain/services'
import { TestEnv } from './TestEnv'
import { uuidEnv } from './uuidEnv'

export type TestFn = (done: DoneCallback) => void | PromiseLike<any> | Effects<ProvidedEnv, any>

export type ProvidedEnv = VirtualTimerEnv &
  HooksManagerEnv &
  HookEnv &
  CryptoEnv &
  UuidEnv &
  DomEnv &
  TestHttpEnv &
  LoggerEnv &
  Fork &
  Join &
  FiberFailure

export type VirtualTimerEnv = {
  readonly timer: VirtualTimer
}

export type DoneCallback = (error?: Error) => void

const formatError = (error: Error) =>
  error.stack?.includes(error.message) ? error.stack : error.message + '\n' + error.stack

export function it<A extends string>(
  does: A,
  testFn: TestFn,
): TestCase<TestEnv, TestConfig<A, number, TestModifier.Default>> {
  return {
    type: 'test',
    config: {
      id: uuid4(uuidEnv.randomUuidSeed()),
      name: `it ${does}` as TestName<A>,
      timeout: Nothing,
      modifier: TestModifier.Default,
    },
    runTest: () => runTestFn(testFn),
  }
}

export namespace it {
  export const only = <A extends string>(does: A, testFn: TestFn) =>
    updateModifier(TestModifier.Only, it(does, testFn))

  export const todo = <A extends string>(does: A, testFn: TestFn) =>
    updateModifier(TestModifier.Todo, it(does, testFn))

  export const skip = <A extends string>(does: A, testFn: TestFn) =>
    updateModifier(TestModifier.Skip, it(does, testFn))
}

export function* runTestFn(testFn: TestFn): Effects<TestEnv, TestResult> {
  const testEnv = yield* get()

  const handleAsyncTest = Effect.withEnv(function* (e: ProvidedEnv) {
    const error: Error | void = yield (_) =>
      Resume.create<Error | void>((cb) => {
        try {
          const x = testFn(cb)
          const usingDone = testFn.length > 0
          const isPromise = isPromiseLike(x)
          const isEffect =
            isIterable(x) &&
            isFunction((x as Generator).return) &&
            isFunction((x as Generator).throw)
          const isAsync = isPromise || isEffect

          if (!isAsync && !usingDone) {
            return cb()
          }

          const disposable = Disposable.lazy()

          if (isPromise) {
            ;(x as PromiseLike<any>).then(
              () => disposable.addDisposable(cb()),
              (e: Error) => disposable.addDisposable(cb(e)),
            )
          }

          if (isEffect) {
            return runEffects(x as Effects<VirtualTimerEnv, any>, e, () => cb())
          }

          return disposable
        } catch (error) {
          return cb(error)
        }
      })

    return error
  })

  function* errorOnTimeout() {
    yield* delay(testEnv.timeout)

    return new Error(`Timed out after ${testEnv.timeout}ms`)
  }

  try {
    const testHookEnv = createTestHookEnvironment(uuidEnv)
    const domEnv = isBrowser ? createDomEnv() : createServerDomEnv()
    const httpEnv = isBrowser ? createHttpEnv() : createServerHttpEnv()
    const testHttpEnv = createTestHttpEnv(
      (url, options) =>
        new Promise((resolve) =>
          httpEnv.http(url, options, {
            success: (response) => {
              resolve(Right.of(response))

              return Disposable.None
            },
            failure: (error) => {
              resolve(Left.of(error))

              return Disposable.None
            },
          }),
        ),
    )
    const cryptoEnv = isBrowser ? { crypto } : { crypto: createServerCrypto() }

    const env: ProvidedEnv = {
      ...testEnv,
      ...uuidEnv,
      ...testHookEnv,
      ...domEnv,
      ...cryptoEnv,
      ...testHttpEnv,
    }

    const fiber = yield* fork(
      race(runWith(errorOnTimeout(), { timer: testEnv.timer }), runWith(handleAsyncTest, env)),
    )

    // Run any setup tasks
    // TODO(Feature): Should we allow configuring this value? For now it works well with @typed/hooks useEffect which runs and effect at time 0
    testHookEnv.timer.progressTimeBy(0)

    const error = yield* join(fiber)

    if (error) {
      return {
        type: 'fail',
        message: formatError(error),
      } as const
    }

    return {
      type: 'pass',
    } as const
  } catch (error) {
    return {
      type: 'fail',
      message: formatError(error),
    } as const
  }
}
