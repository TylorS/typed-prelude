import { LazyDisposable } from '@typed/disposable'
import { Effect, Effects } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Uuid } from '@typed/uuid'
import { Channel } from './Channel'

export type HookEnv<E> = { readonly hookEnvironment: HookEnvironment<E> }

export interface HookEnvironment<E> extends LazyDisposable {
  readonly id: Uuid

  readonly useRef: <A>(
    initialState?: InitialState<A | null | undefined | void>,
  ) => Effects<never, UseRef<A>>

  readonly useState: <A>(initialState: InitialState<A>) => Effects<never, UseState<A>>
  readonly useChannel: <A>(
    channel: Channel<E, A>,
    initialState?: InitialState<A>,
  ) => Effects<E, UseState<A>>

  readonly resetId: () => Effects<never, void>
  readonly updated: boolean // true when useState has been updated
  readonly clearUpdated: () => Effects<never, void>
}

export type InitialState<A> = () => Effects<never, A>

export namespace InitialState {
  export const of = <A>(value: A): InitialState<A> => () => Effect.fromEnv(Pure.of(value))
}

export type UseState<A> = readonly [
  IO<Effects<never, A>>,
  (updateFn: Arity1<A, A>) => Effects<never, A>,
]

export type UseRef<A> = readonly [Ref<A>, Arity1<A | undefined | void | null, void>]
export type Ref<A> = { current: Maybe<A> }
