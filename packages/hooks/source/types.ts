import { Effects, PureEffect, Effect } from '@typed/effects'
import { UuidEnv } from '@typed/uuid'
import { LazyDisposable } from '@typed/disposable'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Uuid } from '@typed/uuid'
import { Channel } from './Channel'

export interface HooksManagerEnv {
  readonly hooksManager: HooksManager
  readonly environments: WeakMap<object, HookEnvironment>
  readonly getEnvironmentByKey: (key: object) => HookEffects<unknown, HookEnvironment>
  readonly removeEnvironmentByKey: (key: object) => PureEffect<void>
}

export interface HookEnv {
  readonly hookEnvironment: HookEnvironment
}

export interface HookEffects<A, B> extends Effects<HookEnv & A, B> {}

export interface HooksManager extends UuidEnv {
  readonly setParent: (child: HookEnvironment, parent: HookEnvironment) => PureEffect<void>
  readonly setChild: (parent: HookEnvironment, child: HookEnvironment) => PureEffect<void>
  readonly removeNode: (node: HookEnvironment) => PureEffect<void>

  readonly updateChannel: <E, A>(
    channel: Channel<E, A>,
    node: HookEnvironment,
    initialState?: InitialState<E, A>,
  ) => HookEffects<E, Arity1<A, Effects<E, A>>>
  readonly consumeChannel: <E, A>(
    channel: Channel<E, A>,
    node: HookEnvironment,
  ) => HookEffects<E, A>

  readonly hasBeenUpdated: (environment: HookEnvironment) => boolean
  readonly setUpdated: (environment: HookEnvironment, updated: boolean) => PureEffect<void>
}

export interface HookEnvironment extends LazyDisposable {
  readonly id: Uuid

  readonly useRef: <E, A>(
    initialState?: InitialState<E, A | null | undefined | void>,
  ) => Effects<E, UseRef<A>>
  readonly useState: <E, A>(initialState: InitialState<E, A>) => Effects<E, UseState<A>>

  readonly useChannel: <E, A>(channel: Channel<E, A>) => HookEffects<E, A>
  readonly provideChannel: <E, A>(
    channel: Channel<E, A>,
    initialState?: InitialState<E, A>,
  ) => HookEffects<E, ProvideChannel<E, A>>

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

export type ProvideChannel<E, A> = readonly [
  IO<HookEffects<E, A>>,
  (updateFn: Arity1<A, A>) => HookEffects<E, A>,
]

export type UseRef<A> = readonly [Ref<A>, Arity1<A | undefined | void | null, void>]
export type Ref<A> = { current: Maybe<A> }
