import { get } from '@typed/effects'
import { Arity1, Arity2, id, IO } from '@typed/lambda'
import { Channel } from './Channel'
import {
  ChannelEffects,
  HookEnv,
  InitialState,
  UseChannelState,
  UseChannelStateOptions,
} from './types'
import { useMemo } from './useMemo'

export function* useChannelState<E, A, B = A>(
  options: UseChannelStateOptions<E, A, B>,
): ChannelEffects<HookEnv & E, UseChannelState<E, A, B>> {
  const {
    hooksManager: { useChannelState },
    hookEnvironment,
  } = yield* get()

  return yield* useChannelState<E, A, B>(options, hookEnvironment)
}

/**
 * Used to consume and update the Channels value by a provider
 * higher up in the tree or in the case of no parents the provided
 * environment.
 */
export function* useChannel<E, A>(
  channel: Channel<E, A>,
): ChannelEffects<HookEnv & E, UseChannelState<E, A>> {
  return yield* useChannelState({ channel, selector: id })
}

/**
 * Used to provided the values of a Channel to itself and all consumers
 * lower in the tree, if any.
 */
export function* provideChannel<E, A>(
  channel: Channel<E, A>,
  initialState: InitialState<E, A> = channel.defaultValue,
): ChannelEffects<HookEnv & E, UseChannelState<E, A>> {
  return yield* useChannelState({ channel, initialState })
}

/**
 * Used to consume and map over the values in a channel. Will only be marked
 * as updated if the return value of the selector has changed.
 */
export function* useMapChannel<E, A, B>(
  fn: Arity1<A, B>,
  channel: Channel<E, A>,
): ChannelEffects<HookEnv & E, B> {
  const [getValue] = yield* useChannelState({ channel, selector: fn })

  return yield* getValue()
}

export const useChannelValue = <E, A>(channel: Channel<E, A>): ChannelEffects<HookEnv & E, A> =>
  useMapChannel(id, channel)

export function* useReduceChannel<E, A, B>(
  reducer: Arity2<A, B, A>,
  channel: Channel<E, A>,
): ChannelEffects<
  HookEnv & E,
  readonly [IO<ChannelEffects<E, A>>, Arity1<B, ChannelEffects<E, A>>]
> {
  const [getState, updateState] = yield* provideChannel(channel)
  const deps = [reducer, updateState] as const
  const dispatch = yield* useMemo<E, typeof deps, Arity1<B, ChannelEffects<E, A>>>(
    createDispatch,
    deps,
  )

  return [getState, dispatch] as const
}

function createDispatch<E, A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => ChannelEffects<E, A>,
) {
  return (event: B): ChannelEffects<E, A> => updateState((state) => reducer(state, event))
}
