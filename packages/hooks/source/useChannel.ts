import { Effects } from '@typed/effects'
import { Arity1, Arity2, IO } from '@typed/lambda'
import { Channel } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { InitialState, ProvideChannel } from './HookEnvironment'
import { useMemo, useMemoEffect } from './useMemo'

export function* useChannel<E, A>(channel: Channel<E, A>): HookEffects<E, A> {
  const { useChannel } = yield* getHookEnv()

  return yield* useChannel(channel)
}

export function* provideChannel<E, A>(
  channel: Channel<E, A>,
  initial?: InitialState<E, A>,
): HookEffects<E, ProvideChannel<E, A>> {
  const { provideChannel } = yield* getHookEnv()

  return yield* provideChannel<E, A>(channel, initial)
}

export function* useMapChannel<E, A, B>(
  fn: Arity1<A, Effects<E, B>>,
  channel: Channel<E, A>,
): HookEffects<E, B> {
  const value = yield* useChannel(channel)

  return yield* useMemoEffect(fn, [value])
}

export function* useReduceChannel<E, A, B>(
  reducer: Arity2<A, B, A>,
  channel: Channel<E, A>,
): HookEffects<E, readonly [IO<Effects<E, A>>, Arity1<B, Effects<E, A>>]> {
  const [getState, updateState] = yield* provideChannel(channel)
  const deps = [reducer, updateState] as const
  const dispatch = yield* useMemo<E, typeof deps, Arity1<B, Effects<E, A>>>(createDispatch, deps)

  return [getState, dispatch] as const
}

function createDispatch<E, A, B>(
  reducer: Arity2<A, B, A>,
  updateState: (updateFn: Arity1<A, A>) => Effects<E, A>,
) {
  return (event: B): Effects<E, A> => updateState(state => reducer(state, event))
}
