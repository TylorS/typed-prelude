import { isBrowser } from '@typed/common'
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
import { isGenerator, isPromiseLike } from '@typed/logic'
import { Maybe, Nothing } from '@typed/maybe'
import { VirtualTimer } from '@typed/timer'
import { uuid4, UuidEnv } from '@typed/uuid'
import { uuidEnv } from '../../common/uuidEnv'
import {
  DefaultTestModifier,
  OnlyTestModifier,
  SkipTestModifier,
  TestCase,
  TestConfig,
  TestResult,
  TodoTestModifier,
} from '../../domain/model'
import { updateModifier } from '../../domain/services'
import { AssertionError, getFirstLineNumber } from '../assertions'
import { TestEnv } from '../TestEnv'
import { itTestName } from './helpers'

export type TestFn =
  | (() => void)
  | ((done: DoneCallback) => void)
  | (() => PromiseLike<any>)
  | (() => Effects<ProvidedEnv, any>)

export type ProvidedEnv = TestEnv &
  VirtualTimerEnv &
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

export function it<A extends string>(
  does: A,
  testFn: TestFn,
): TestCase<TestEnv, TestConfig<A, number, typeof DefaultTestModifier.value>> {
  return {
    type: 'test',
    config: {
      id: uuid4(uuidEnv.randomUuidSeed()),
      name: itTestName(does),
      timeout: Nothing,
      modifier: DefaultTestModifier.value,
    },
    runTest: () => runTestFn(testFn),
  }
}

export namespace it {
  export const only = <A extends string>(does: A, testFn: TestFn) =>
    updateModifier(OnlyTestModifier.value, it(does, testFn))

  export const todo = <A extends string>(does: A, testFn: TestFn) =>
    updateModifier(TodoTestModifier.value, it(does, testFn))

  export const skip = <A extends string>(does: A, testFn: TestFn) =>
    updateModifier(SkipTestModifier.value, it(does, testFn))
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
          const isEffect = isGenerator(x)
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
      race(
        runWith(errorOnTimeout(), { timer: testEnv.timer }),
        runWith(progressTimeBy(0, handleAsyncTest), env),
      ),
    )

    const error = yield* join(fiber)

    if (error instanceof Error) {
      return {
        type: 'fail',
        message: error.message,
        line: maybeGetLineNumber(error),
        stack: Maybe.fromString(error.stack),
      } as const
    }

    return {
      type: 'pass',
    } as const
  } catch (error) {
    return {
      type: 'fail',
      message: error.message,
      line: maybeGetLineNumber(error),
      stack: Maybe.fromString(error.stack),
    } as const
  }
}

export function* progressTimeBy<A>(amount: number, eff: Effects<ProvidedEnv, A>) {
  const { timer } = yield* get<ProvidedEnv>()
  const fiber = yield* fork(eff)

  timer.progressTimeBy(amount)

  return yield* join(fiber)
}

function maybeGetLineNumber(error: Error): Maybe<number> {
  const line = AssertionError.is(error) ? error.line : getFirstLineNumber(error)

  return line === -1 ? Nothing : Maybe.of(line)
}
