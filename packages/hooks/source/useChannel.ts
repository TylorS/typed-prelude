import { Effect, Effects } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { Channel } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, UseChannel } from './HookEnvironment'
import { useMemo, useMemoEffect } from './useMemo'

export function* useChannel<E, A>(
  channel: Channel<E, A>,
  initial?: InitialState<E, A>,
): HookEffects<E, UseChannel<E, A>> {
  const { useChannel } = yield* getHookEnv()

  return yield* useChannel<E, A>(channel, initial)
}

export function* useMapChannel<E, A, B>(
  fn: Arity1<A, Effects<E, B>>,
  channel: Channel<E, A>,
): HookEffects<E, B> {
  const [getValue] = yield* useChannel(channel)
  const value = yield* getValue()

  return yield* useMemoEffect(fn, [value])
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
  return (event: B): Effect<E, A> => updateState(state => reducer(state, event))
}
