import { Sink, Stream } from '@most/types'
import { Channel, ChannelEffects, createChannel, HookEnv, useChannelValue } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { create } from 'most-subject'

/**
 * A convenient way to communicate between components. I'll be using them for domain and application events.
 */
export interface StreamChannel<E, A, B> extends Channel<E, readonly [Sink<A>, Stream<B>]> {}

export function createStreamChannel<A>(): StreamChannel<unknown, A, A>
export function createStreamChannel<A, B>(
  fn: Arity1<Stream<A>, Stream<B>>,
): StreamChannel<unknown, A, B>

/**
 * Create a basic StreamChannel backed by most-subject.
 */
export function createStreamChannel<A, B>(
  fn?: Arity1<Stream<A>, Stream<B>>,
): StreamChannel<unknown, A, B> {
  return createChannel(function* () {
    return fn ? create(fn) : create()
  })
}

/**
 * Get the Stream<B> out of a StreamChannel<A, B>
 */
export function* useStreamChannel<A, B>(
  channel: StreamChannel<unknown, A, B>,
): ChannelEffects<HookEnv, Stream<B>> {
  const [, stream] = yield* useChannelValue(channel)

  return stream
}

/**
 * Get the Sink<A> out of a StreamChannel<A, B>
 */
export function* useStreamChannelSink<A, B>(
  channel: StreamChannel<unknown, A, B>,
): ChannelEffects<HookEnv, Sink<A>> {
  const [sink] = yield* useChannelValue(channel)

  return sink
}
