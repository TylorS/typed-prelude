import { PureEffect } from '@typed/effects'
import { Arity1, IO } from '@typed/lambda'
import {
  Failure,
  Loading,
  NoData,
  RefreshingFailure,
  RefreshingSuccess,
  RemoteData,
  Success,
} from '@typed/remote-data'
import { HookEffects, InitialState } from './types'
import { useMemo } from './useMemo'
import { useState } from './useState'

export type RemoteDataActions<A, B> = {
  readonly set: (remoteData: RemoteData<A, B>) => PureEffect<RemoteData<A, B>>
  readonly update: (
    updateFn: Arity1<RemoteData<A, B>, RemoteData<A, B>>,
  ) => PureEffect<RemoteData<A, B>>
  readonly loading: () => PureEffect<RemoteData<A, B>>
  readonly clear: () => PureEffect<RemoteData<A, B>>
  readonly success: (value: B, refreshing: boolean) => PureEffect<RemoteData<A, B>>
  readonly failure: (value: A, refreshing: boolean) => PureEffect<RemoteData<A, B>>
}

export function* useRemoteData<E, A, B>(
  initial: InitialState<E, RemoteData<A, B>> = InitialState.of(NoData) as InitialState<
    E,
    RemoteData<A, B>
  >,
): HookEffects<E, readonly [IO<PureEffect<RemoteData<A, B>>>, RemoteDataActions<A, B>]> {
  const [getRemoteData, update] = yield* useState<E, RemoteData<A, B>>(initial)
  const set = (remoteData: RemoteData<A, B>) => update(() => remoteData)
  const actions = yield* useMemo(
    () =>
      ({
        set,
        update,
        loading: () => set(Loading),
        clear: () => set(NoData),
        success: (value: B, refreshing: boolean) =>
          set(refreshing ? RefreshingSuccess.of(value) : Success.of(value)),
        failure: (value: A, refreshing: boolean) =>
          set(refreshing ? RefreshingFailure.of(value) : Failure.of(value)),
      } as const),
    [],
  )

  return [getRemoteData, actions] as const
}
