import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1 } from '@typed/lambda'
import { UuidEnv } from '@typed/uuid'
import { Channel } from './Channel'
import { HookEnvironment } from './HookEnvironment'

export interface HooksManager {
  readonly uuidEnv: UuidEnv

  readonly setParent: (
    child: HookEnvironment,
    parent: HookEnvironment,
  ) => Effect<Pure<void>, void, any>
  readonly setChild: (
    parent: HookEnvironment,
    child: HookEnvironment,
  ) => Effect<Pure<void>, void, any>
  readonly removeNode: (node: HookEnvironment) => Effect<Pure<void>, void, any>

  readonly updateChannel: <A>(
    channel: Channel<A>,
    initial: A,
    node: HookEnvironment,
  ) => Effect<Pure<any>, Arity1<A, Effect<Pure<void>, A, any>>, any>
  readonly consumeChannel: <A>(
    channel: Channel<A>,
    node: HookEnvironment,
  ) => Effect<Pure<A>, A, any>

  readonly hasBeenUpdated: (environment: HookEnvironment) => boolean
  readonly setUpdated: (
    environment: HookEnvironment,
    updated: boolean,
  ) => Effect<Pure<void>, void, any>
}
