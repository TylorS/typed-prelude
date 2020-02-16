import { Arity1 } from '@typed/lambda'
import { Channel, ChannelValue } from './Channel'
import { getHookEnv } from './getHookEnv'
import { HookEffects } from './HookEffects'
import { useMemo } from './useMemo'

export function* useChannel<A>(channel: Channel<A>): HookEffects<never, A> {
  const { useChannel } = yield* getHookEnv()

  return yield* useChannel(channel)
}

export function* useMapChannel<A, B>(channel: Channel<A>, fn: Arity1<A, B>): HookEffects<never, B> {
  const value = yield* useChannel(channel)

  return yield* useMemo(fn, [value])
}

export function* useCombineChannels<A extends ReadonlyArray<Channel<any>>>(
  ...channels: A
): HookEffects<never, { readonly [K in keyof A]: ChannelValue<A[K]> }> {
  const combined: Array<ChannelValue<A[keyof A]>> = [] as any

  for (let i = 0; i < channels.length; ++i) {
    combined[i] = yield* useChannel(channels[i])
  }

  return (combined as any) as { readonly [K in keyof A]: ChannelValue<A[K]> }
}
