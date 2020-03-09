import { Effects } from '@typed/effects'
import { Arity1 } from '@typed/lambda'
import { UuidEnv } from '@typed/uuid'
import { Channel } from './Channel'
import { HookEnvironment, InitialState } from './HookEnvironment'

export interface HooksManager extends UuidEnv {
  readonly setParent: (child: HookEnvironment, parent: HookEnvironment) => Effects<never, void>
  readonly setChild: (parent: HookEnvironment, child: HookEnvironment) => Effects<never, void>
  readonly removeNode: (node: HookEnvironment) => Effects<never, void>

  readonly updateChannel: <E, A>(
    channel: Channel<E, A>,
    node: HookEnvironment,
    initialState?: InitialState<A>,
  ) => Effects<E, Arity1<A, Effects<E, A>>>
  readonly consumeChannel: <E, A>(channel: Channel<E, A>, node: HookEnvironment) => Effects<E, A>

  readonly hasBeenUpdated: (environment: HookEnvironment) => boolean
  readonly setUpdated: (environment: HookEnvironment, updated: boolean) => Effects<never, void>
}
