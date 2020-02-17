import { Effects } from '@typed/effects'
import { Arity1, IO } from '@typed/lambda'
import { Failure, Loading, NoData, RemoteData, Success } from '@typed/remote-data'
import { HookEffects } from './HookEffects'
import { InitialState } from './HookEnvironment'
import { useMemo } from './useMemo'
import { useState } from './useState'

export type RemoteDataActions<A, B> = {
  readonly set: (remoteData: RemoteData<A, B>) => Effects<never, RemoteData<A, B>>
  readonly update: (
    updateFn: Arity1<RemoteData<A, B>, RemoteData<A, B>>,
  ) => Effects<never, RemoteData<A, B>>
  readonly loading: () => Effects<never, RemoteData<A, B>>
  readonly clear: () => Effects<never, RemoteData<A, B>>
  readonly success: (value: B) => Effects<never, RemoteData<A, B>>
  readonly failure: (value: A) => Effects<never, RemoteData<A, B>>
}

export function* useRemoteData<A, B>(
  initial: InitialState<RemoteData<A, B>> = InitialState.of(NoData),
): HookEffects<never, readonly [IO<Effects<never, RemoteData<A, B>>>, RemoteDataActions<A, B>]> {
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
