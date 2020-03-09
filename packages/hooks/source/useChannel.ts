import { combine, Effects } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { Channel, ChannelValue } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseState } from './HookEnvironment'
import { useMemo } from './useMemo'

export function* useChannel<E, A>(
  channel: Channel<E, A>,
  initial?: InitialState<A>,
): HookEffects<E, UseState<A>> {
  const { useChannel } = yield* getHookEnv()

  return yield* useChannel(channel, initial)
}

export function* useMapChannel<E, A, B>(
  fn: Arity1<A, Effects<E, B>>,
  channel: Channel<E, A>,
): HookEffects<E, B> {
  const [getValue] = yield* useChannel(channel)
  const value = yield* getValue()

  return yield* useMemo(fn, [value])
}

export function* useCombineChannels<E, A extends ReadonlyArray<Channel<E, any>>>(
  ...channels: A
): HookEffects<E, { readonly [K in keyof A]: ChannelValue<A[K]> }> {
  return (yield* combine(...channels.map(c => useMapChannel(x => x[0], c)))) as {
    readonly [K in keyof A]: ChannelValue<A[K]>
  }
}

export function* useReduceChannel<E, A, B>(
  reducer: Arity2<A, B, A>,
  channel: Channel<E, A>,
): HookEffects<E, readonly [IO<Effects<never, A>>, Arity1<B, Effects<E, A>>]> {
  const [getState, updateState] = yield* useChannel(channel)
  const deps = [reducer, updateState] as const
  const dispatch = yield* useMemo<E, typeof deps, Arity1<B, Effects<E, A>>>(createDispatch, deps)

  return [getState, dispatch] as const
}

function createDispatch<E, A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => Effects<E, A>,
) {
  return (event: B): Effects<never, A> => updateState(state => reducer(state, event))
}
