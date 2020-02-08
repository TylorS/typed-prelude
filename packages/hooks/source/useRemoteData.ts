import { Failure, Loading, NoData, RemoteData, Success } from '@typed/remote-data'
import { InitialState } from './HookEnvironment'
import { useMemo } from './useMemo'
import { useState } from './useState'

export function* useRemoteData<A, B>(initial: InitialState<RemoteData<A, B>> = NoData) {
  const [getRemoteData, update] = yield* useState<RemoteData<A, B>>(initial)
  const set = (remoteData: RemoteData<A, B>) => update(() => remoteData)
  const actions = yield* useMemo(
    () =>
      ({
        set,
        update,
        loading: () => set(Loading),
        clear: () => set(NoData),
        success: (value: B) => set(Success.of(value)),
        failure: (value: A) => set(Failure.of(value)),
      } as const),
    [],
  )

  return [getRemoteData, actions] as const
}
