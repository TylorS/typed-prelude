import { Effect, Effects } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1 } from '@typed/lambda'
import { UuidEnv } from '@typed/uuid'
import { Channel } from './Channel'
import { HookEnvironment, InitialState } from './HookEnvironment'

export interface HooksManager<E> extends UuidEnv {
  readonly setParent: (
    child: HookEnvironment<E>,
    parent: HookEnvironment<E>,
  ) => Effects<never, void>
  readonly setChild: (parent: HookEnvironment<E>, child: HookEnvironment<E>) => Effects<never, void>
  readonly removeNode: (node: HookEnvironment<E>) => Effects<never, void>

  readonly updateChannel: <A>(
    channel: Channel<E, A>,
    node: HookEnvironment<E>,
    initialState?: InitialState<A>,
  ) => Effects<E, Arity1<A, Effects<E, A>>>
  readonly consumeChannel: <A>(channel: Channel<E, A>, node: HookEnvironment<E>) => Effects<E, A>

  readonly hasBeenUpdated: (environment: HookEnvironment<E>) => boolean
  readonly setUpdated: (
    environment: HookEnvironment<E>,
    updated: boolean,
  ) => Effect<Pure<void>, void, any>
}
