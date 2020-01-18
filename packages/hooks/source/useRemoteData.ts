import { get, runEffects } from '@typed/effects'
import { Env, handle, Pure, runPure } from '@typed/env'
import { NoData, RemoteData } from '@typed/remote-data'
import { useEffect } from './useEffect'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useRemoteData<E, A, B>(env: Env<E, RemoteData<A, B>>) {
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
