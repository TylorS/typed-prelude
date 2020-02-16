import { LazyDisposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Pure } from '@typed/env'
import { Arity1, IO } from '@typed/lambda'
import { Maybe } from '@typed/maybe'
import { Uuid } from '@typed/uuid'
import { Channel } from './Channel'

export type HookEnv = { readonly hookEnvironment: HookEnvironment }

export interface HookEnvironment extends LazyDisposable {
  readonly id: Uuid
  readonly useRef: <A>(
    initialState?: InitialState<A | null | undefined | void>,
  ) => Effect<Pure<UseRef<A>>, UseRef<A>, any>
  readonly useState: <A>(
    initialState: InitialState<A>,
  ) => Effect<Pure<UseState<A>>, UseState<A>, any>

  readonly useChannel: <A>(channel: Channel<A>) => Effect<Pure<A>, A, any>
  readonly provideChannel: <A>(
    channel: Channel<A>,
    initial: InitialState<A>,
  ) => Effect<Pure<any>, (value: A) => Effect<Pure<any>, A, any>, any>

  readonly resetId: () => Effect<Pure<any>, void, any>
  readonly updated: boolean // true when useState has been updated
  readonly clearUpdated: () => Effect<Pure<any>, void, any>
}

export type InitialState<A> = A | IO<A>

export type UseState<A> = readonly [
  IO<Effect<Pure<A>, A, A>>,
  (updateFn: Arity1<A, A>) => Effect<Pure<A>, A, any>,
]

export type UseRef<A> = readonly [Ref<A>, Arity1<A | undefined | void | null, void>]
export type Ref<A> = { current: Maybe<A> }
