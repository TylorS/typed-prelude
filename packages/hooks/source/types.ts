import { LazyDisposable } from '@typed/disposable'
import { Effect, Effects, PureEffect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Subscription } from '@typed/subscription'
import { Tuple } from '@typed/tuple'
import { UuidEnv } from '@typed/uuid'
import { Uuid } from '@typed/uuid'
import { Channel } from './Channel'

export const enum HookEnvironmentEventType {
  Created = 'created',
  Updated = 'updated',
  Removed = 'removed',
}

export type HookEnvironmentCreatedEvent = Tuple<
  HookEnvironmentEventType.Created,
  { readonly created: HookEnvironment; readonly parent: HookEnvironment }
>

export type HookEnvironmentUpdatedEvent = Tuple<
  HookEnvironmentEventType.Updated,
  { readonly hookEnvironment: HookEnvironment; readonly updated: boolean }
>

export type HookEnvironmentRemovedEvent = Tuple<HookEnvironmentEventType.Removed, HookEnvironment>

export type HookEnvironmentEvent =
  | HookEnvironmentCreatedEvent
  | HookEnvironmentUpdatedEvent
  | HookEnvironmentRemovedEvent

export interface HooksManagerEnv {
  readonly hooksManager: HooksManager
  readonly getEnvironmentByKey: (key: any) => HookEffects<unknown, HookEnvironment>
  readonly removeEnvironmentByKey: (key: any) => PureEffect<void>
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
export interface HooksManager extends UuidEnv, LazyDisposable {
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
  readonly getAllDescendants: (environment: HookEnvironment) => Iterable<HookEnvironment>
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
  readonly hookStates: ReadonlyMap<number, any>
}

export type InitialState<E, A> = () => Effects<E, A>

export namespace InitialState {
  export const of = <A>(value: A): InitialState<unknown, A> => () => Effect.of(value)
  export const fromIO = <A>(io: () => A): InitialState<unknown, A> => () =>
    Effect.fromEnv(Pure.fromIO(io))
}

export type UseState<A> = readonly [IO<PureEffect<A>>, (updateFn: Arity1<A, A>) => PureEffect<A>]

export type UseRef<A> = readonly [Ref<A>, SetRef<A>]
export type Ref<A> = { current: Maybe<A> }
export type SetRef<A> = Arity1<A | undefined | void | null, void>
