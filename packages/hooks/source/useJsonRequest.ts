import { Disposable } from '@typed/disposable'
import {
  catchFailure,
  Effects,
  Fiber,
  FiberFailure,
  fork,
  Fork,
  get,
  Kill,
  kill,
  PureEffect,
  runWith,
} from '@typed/effects'
import { Left } from '@typed/either'
import { http, HttpEnv, HttpOptions } from '@typed/http'
import { DecodeError, DecodeFailure, Type } from '@typed/io'
import { validateHttpRequest } from '@typed/io'
import { fromJust, isNothing, map, unpack } from '@typed/maybe'
import * as RD from '@typed/remote-data'
import { RemoteData } from '@typed/remote-data'
import { first } from '@typed/tuple'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './types'
import { useMemo } from './useMemo'
import { useRef } from './useRef'
import { useRemoteData } from './useRemoteData'

const isLoadingOrRefreshing = (data: RemoteData<Error, unknown>): boolean =>
  RD.isLoading(data) || RD.isRefreshing(data)

const DEFAULT_FETCH_TYPE: NonNullable<UseHttpOptions<any, any>['fetchType']> = 'prefer-last'

export type UseHttp<A> = readonly [
  () => PureEffect<RD.RemoteData<Error, A>>, // Get Current value
  () => PureEffect<Fiber<RD.RemoteData<Error, A>>>, // Make Request
  () => PureEffect<RD.RemoteData<Error, A>>, // Clear, but return last value,
]

export function* useJsonRequest<A, B = A>(
  url: string,
  options: UseHttpOptions<A, B>,
): HookEffects<HttpEnv & FiberFailure & Fork & Kill, UseHttp<B>> {
  const [getRemoteData, { clear, set, loading, success, failure }] = yield* useRemoteData<
    unknown,
    Error,
    B
  >()
  const { getFiber, addFiber, killFiber } = yield* useFiberManager<RemoteData<Error, B>>()
  const makeRequest = yield* useMemo(
    (e, url, opts) => {
      return () => runWith(makeHttpRequest(), e)

      function* makeHttpRequest(): Effects<
        HttpEnv & Fork & FiberFailure & Kill,
        Fiber<RD.RemoteData<Error, B>>
      > {
        const currentFiber = getFiber()
        const remoteData = yield* getRemoteData()

        if (isNothing(currentFiber) || (yield* shouldMakeRequest(remoteData))) {
          const fiber = yield* startRequest()

          yield* updateAsLoadingOrRefreshing(remoteData)

          return fiber
        }

        return fromJust(currentFiber)
      }

      function* shouldMakeRequest(
        remoteData: RemoteData<Error, B>,
      ): Effects<FiberFailure & Kill, boolean> {
        const fetchType = opts.fetchType || DEFAULT_FETCH_TYPE

        if (fetchType === 'prefer-current' && isLoadingOrRefreshing(remoteData)) {
          return false
        }

        yield* killFiber()

        return true
      }

      function* startRequest(): Effects<
        HttpEnv & Fork & FiberFailure,
        Fiber<RemoteData<Error, B>>
      > {
        const fetchType = opts.fetchType || DEFAULT_FETCH_TYPE

        function* myEffect() {
          const effect = validateHttpRequest(options.type, http(url, opts))
          const response = yield* catchFailure(effect, DecodeFailure, (e) =>
            Left.of(new Error(toErrorMessage(e))),
          )
          const data = RD.RemoteData.fromEither(response)

          yield* set(data)

          return data
        }

        const fiber: Fiber<RemoteData<Error, B>> = yield* fork(myEffect())

        if (fetchType === 'prefer-last') {
          addFiber(fiber)
        }

        return fiber
      }

      function* updateAsLoadingOrRefreshing(remoteData: RemoteData<Error, B>) {
        if (RD.isLoading(remoteData)) {
          return
        }

        if (RD.hasNoData(remoteData)) {
          yield* loading()
        } else if (RD.isFailure(remoteData) || RD.isRefreshingFailure(remoteData)) {
          yield* failure(remoteData.value, true)
        } else {
          yield* success(remoteData.value, true)
        }
      }
    },
    [yield* get(), url, options] as const,
  )

  return [getRemoteData, makeRequest, clear] as const
}

export type UseHttpOptions<A, B> = HttpOptions & {
  readonly type: Type<A, B>
  readonly fetchType?: 'prefer-current' | 'prefer-last'
}

function* useFiberManager<A>() {
  const env = yield* getHookEnv()
  const [ref, setRef] = yield* useRef<unknown, readonly [Fiber<A>, Disposable]>()
  const addFiber = yield* useMemo(
    () => (fiber: Fiber<A>) => setRef([fiber, env.addDisposable(fiber)]),
    [],
  )
  const killFiber = yield* useMemo(
    () =>
      function* () {
        if (isNothing(ref.current)) {
          return
        }

        const [fiber, disposable] = fromJust(ref.current)

        setRef(null)
        fiber.dispose()
        disposable.dispose()

        return yield* kill(fiber)
      },
    [],
  )

  const getFiber = yield* useMemo((r) => () => map(first, r.current), [ref])

  return { getFiber, addFiber, killFiber } as const
}

// TODO: handle nested errors
function toErrorMessage({ key, expected, actual }: DecodeError): string {
  return unpack(
    (k) => `${k} :: Expected ${expected}, but received ${actual}`,
    () => `Expected ${expected}, but received ${actual}`,
    key,
  )
}
