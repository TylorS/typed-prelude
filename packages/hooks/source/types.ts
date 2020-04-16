import { Disposable, LazyDisposable } from '@typed/disposable'
import { Effect, Effects, PureEffect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Tuple } from '@typed/tuple'
import { UuidEnv } from '@typed/uuid'
import { Uuid } from '@typed/uuid'
import { Subscription } from '../../subscription/source'
import { Channel } from './Channel'

export const enum HookEnvironmentEventType {
  Created = 'created',
  Updated = 'updated',
  Removed = 'removed',
}

export type HookEnvironmentEvent =
  | Tuple<
      HookEnvironmentEventType.Created,
      { readonly created: HookEnvironment; readonly parent: HookEnvironment }
    >
  | Tuple<
      HookEnvironmentEventType.Updated,
      { readonly hookEnvironment: HookEnvironment; readonly updated: boolean }
    >
  | Tuple<HookEnvironmentEventType.Removed, HookEnvironment>

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
export interface ChannelEffects<A, B> extends Effects<HooksManagerEnv & A, B> {}

/**
 * A HooksManager is an environment that manages a tree-based hierarchy
 * of HookEnvironments. By managing an internal hierarchy of HookEnvironments
 * through a subscription to HookEvents, a HooksManager is able to manage Channels
 * to provide state that is shared.
 */
export interface HooksManager extends UuidEnv, Disposable {
  /**
   * Listen to hook events
   */
  readonly hookEvents: Subscription<HookEnvironmentEvent>

  /**
   * Manage a shared state using Channels.
   */
  readonly useChannelState: <E, A, B = A>(
    options: UseChannelStateOptions<E, A, B>,
    node: HookEnvironment,
  ) => ChannelEffects<E, UseChannelState<E, A, B>>

  /**
   * Check to see if a hook environment has been updated
   */
  readonly hasBeenUpdated: (environment: HookEnvironment) => boolean
  readonly hasUpdatedParents: (environment: HookEnvironment) => boolean
}

export type UseChannelStateOptions<E, A, B = A> = {
  readonly channel: Channel<E, A>
  readonly initialState?: InitialState<E, A>
  readonly selector?: Arity1<A, B>
}

export type UseChannelState<E, A, B = A> = readonly [
  IO<ChannelEffects<E, B>>,
  (updateFn: Arity1<A, A>) => ChannelEffects<E, B>,
]

export interface HookEnvironment extends LazyDisposable {
  // Unique Id for HookEnvironment
  readonly id: Uuid

  // Resets internal id counter for useRef and useState states between invocations
  readonly resetId: () => PureEffect<void>

  // Used to keep internal state that does NOT mark the environment as having been updated
  readonly useRef: <E, A>(
    initialState?: InitialState<E, A | null | undefined | void>,
  ) => Effects<E, UseRef<A>>

  // Used to keep internal state
  readonly useState: <E, A>(initialState: InitialState<E, A>) => Effects<E, UseState<A>>

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

export type UseRef<A> = readonly [Ref<A>, Arity1<A | undefined | void | null, void>]
export type Ref<A> = { current: Maybe<A> }
