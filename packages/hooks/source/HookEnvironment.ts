import { LazyDisposable } from '@typed/disposable'
import { Effect, Effects, PureEffect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Uuid } from '@typed/uuid'
import { Channel } from './Channel'

export type HookEnv = { readonly hookEnvironment: HookEnvironment }

export interface HookEnvironment extends LazyDisposable {
  readonly id: Uuid

  readonly useRef: <E, A>(
    initialState?: InitialState<E, A | null | undefined | void>,
  ) => Effects<E, UseRef<A>>
  readonly useState: <E, A>(initialState: InitialState<E, A>) => Effects<E, UseState<A>>
  readonly useChannel: <E, A>(
    channel: Channel<E, A>,
    initialState?: InitialState<E, A>,
  ) => Effects<E, UseChannel<E, A>>

  readonly resetId: () => PureEffect<void>
  readonly updated: boolean // true when useState has been updated
  readonly clearUpdated: () => PureEffect<void>
}

export type InitialState<E, A> = () => Effects<E, A>

export namespace InitialState {
  export const of = <A>(value: A): InitialState<unknown, A> => () => Effect.of(value)
  export const fromIO = <A>(io: () => A): InitialState<unknown, A> => () =>
    Effect.fromEnv(Pure.fromIO(io))
}

export type UseState<A> = readonly [IO<PureEffect<A>>, (updateFn: Arity1<A, A>) => PureEffect<A>]

export type UseChannel<E, A> = readonly [
  IO<Effects<E, A>>,
  (updateFn: Arity1<A, A>) => Effects<E, A>,
]

export type UseRef<A> = readonly [Ref<A>, Arity1<A | undefined | void | null, void>]
export type Ref<A> = { current: Maybe<A> }
