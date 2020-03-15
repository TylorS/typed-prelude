import { LazyDisposable } from '@typed/disposable'
import { Effect, Effects, PureEffect } from '@typed/effects'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Uuid } from '@typed/uuid'
import { Channel } from './Channel'

export type HookEnv = { readonly hookEnvironment: HookEnvironment }

export interface HookEnvironment extends LazyDisposable {
  readonly id: Uuid

  readonly useRef: <A>(
    initialState?: InitialState<A | null | undefined | void>,
  ) => PureEffect<UseRef<A>>

  readonly useState: <A>(initialState: InitialState<A>) => PureEffect<UseState<A>>
  readonly useChannel: <E, A>(
    channel: Channel<E, A>,
    initialState?: InitialState<A>,
  ) => Effects<E, UseChannel<E, A>>

  readonly resetId: () => PureEffect<void>
  readonly updated: boolean // true when useState has been updated
  readonly clearUpdated: () => PureEffect<void>
}

export type InitialState<A> = () => PureEffect<A>

export namespace InitialState {
  export const of = <A>(value: A): InitialState<A> => () => Effect.of(value)
  export const fromIO = <A>(io: () => A): InitialState<A> => () => Effect.fromIO(io)
}

export type UseState<A> = readonly [IO<PureEffect<A>>, (updateFn: Arity1<A, A>) => PureEffect<A>]
export type UseChannel<E, A> = readonly [IO<Effect<E, A>>, (updateFn: Arity1<A, A>) => Effect<E, A>]

export type UseRef<A> = readonly [Ref<A>, Arity1<A | undefined | void | null, void>]
export type Ref<A> = { current: Maybe<A> }
