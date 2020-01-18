import { get, runEffects } from '@typed/effects'
import { Env, handle, Pure, runPure } from '@typed/env'
import { NoData, RemoteData } from '@typed/remote-data'
import { HookEnvironment } from './HookEnvironment'
import { useEffect } from './useEffect'
import { useMemo } from './useMemo'
import { useState } from './useState'
import { WithHookEnvs } from './WithHookEnvs'

export function* useRemoteData<E, A, B>(
  env: Env<E, RemoteData<A, B>>,
): Generator<WithHookEnvs<E>, RemoteData<A, B>, HookEnvironment & E> {
  const resources = yield* get<E>()
  const [getRemoteData, updateRemoteData] = yield* useState<RemoteData<A, B>>(NoData)
  const pure = yield* useMemo<[E, Env<E, RemoteData<A, B>>], Pure<RemoteData<A, B>>>(handle, [
    resources,
    env,
  ])

  yield* useEffect(
    pure =>
      runPure(
        (data: RemoteData<A, B>) =>
          runEffects(
            updateRemoteData(() => data),
            resources,
          ),
        pure,
      ),
    [pure],
  )

  return getRemoteData()
}
